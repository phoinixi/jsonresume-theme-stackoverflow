/**
 * Lightweight text formatter supporting:
 * - **bold** → <strong>
 * - *italic* → <em>
 * - [text](url) → <a href="url">
 * - Auto-linking bare URLs
 * - Paragraphs (double newline)
 *
 * No full markdown parser needed. HTML in input is escaped for security.
 */

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatInline(text: string): string {
  return (
    text
      // [text](url)
      .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      // **bold**
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      // *italic* (but not inside URLs/tags)
      .replace(/(?<![\/\w])\*(.+?)\*(?!\*)/g, "<em>$1</em>")
      // bare URLs (not already in href)
      .replace(/(?<!href="|">)(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>')
  );
}

export function paragraphSplit(text: string | null | undefined): string {
  if (text == null) return "";

  const escaped = escapeHtml(text);
  const paragraphs = escaped.split(/\n\n+/).filter((p) => p.trim());

  if (paragraphs.length <= 1) {
    return `<p style="margin:0">${formatInline(escaped.trim())}</p>`;
  }

  return paragraphs.map((p) => `<p style="margin:0">${formatInline(p.trim())}</p>`).join("\n");
}
