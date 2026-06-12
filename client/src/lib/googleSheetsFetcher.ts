/**
 * Fetches and parses CSV data from Google Sheets
 * Handles CSV parsing with proper quote and escape handling
 */

export interface ProjectData {
  imageUrl: string;
  projectTitle: string;
  capacityDetails: string;
  clientName: string;
}

/**
 * Parse CSV string into array of objects
 * Handles quoted fields and commas within quotes
 */
function parseCSV(csvText: string): Record<string, string>[] {
  const lines = csvText.trim().split('\n');
  if (lines.length < 2) return [];

  const headers = parseCSVLine(lines[0]);
  const data: Record<string, string>[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length > 0 && values.some(v => v.trim())) {
      const row: Record<string, string> = {};
      headers.forEach((header, index) => {
        row[header.toLowerCase().trim()] = values[index] || '';
      });
      data.push(row);
    }
  }

  return data;
}

/**
 * Parse a single CSV line, handling quoted fields
 */
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        current += '"';
        i++; // Skip next quote
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === ',' && !insideQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result;
}

/**
 * Convert Google Drive sharing link to direct image URL
 * Uses Google's thumbnail API which doesn't require authentication
 * Handles both /file/d/ and /uc?id= formats
 */
function convertGoogleDriveLink(url: string): string {
  if (!url) return '';
  
  // Already a direct image URL or thumbnail
  if (url.includes('lh3.googleusercontent.com') || url.includes('export?format=') || url.includes('thumbnail')) {
    return url;
  }
  
  // Extract file ID from Google Drive link
  let fileId = '';
  
  // Format: https://drive.google.com/file/d/{FILE_ID}/view?usp=drive_link
  const fileMatch = url.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
  if (fileMatch) {
    fileId = fileMatch[1];
  }
  
  // Format: https://drive.google.com/uc?id={FILE_ID}
  const ucMatch = url.match(/[?&]id=([a-zA-Z0-9-_]+)/);
  if (ucMatch) {
    fileId = ucMatch[1];
  }
  
  // If we found a file ID, use the thumbnail API which is publicly accessible
  // This endpoint returns the file preview/thumbnail without requiring authentication
  if (fileId) {
    // Try thumbnail first (works for most files)
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`;
  }
  
  return url;
}

/**
 * Fetch project data from Google Sheets CSV
 */
export async function fetchProjectsFromGoogleSheet(
  csvUrl: string
): Promise<ProjectData[]> {
  try {
    const response = await fetch(csvUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch Google Sheet: ${response.statusText}`);
    }

    const csvText = await response.text();
    const rows = parseCSV(csvText);

    // Map CSV rows to ProjectData interface
    const projects: ProjectData[] = rows
      .filter(row => row.imageurl && row.projecttitle) // Filter out empty rows
      .map(row => ({
        imageUrl: convertGoogleDriveLink(row.imageurl || ''),
        projectTitle: row.projecttitle || '',
        capacityDetails: row.capacitydetails || '',
        clientName: row.clientname || '',
      }));

    return projects;
  } catch (error) {
    console.error('Error fetching projects from Google Sheet:', error);
    throw error;
  }
}
