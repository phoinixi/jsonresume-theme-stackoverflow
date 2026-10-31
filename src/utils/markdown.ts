/**
 * Lightweight text formatter supporting:
 * - **bold** → <strong>
 * - *italic* → <em>
 * - [text](url) → <a href="url">
 * - Auto-linking bare URLs
 * - Paragraphs (double newline)
 * - Bullet lists (lines starting with "- " or "* ") → <ul><li>
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

const LIST_ITEM = /^[-*]\s+(.*)$/;

// A block is a paragraph, a bullet list, or text lines and lists alternating.
function formatBlock(block: string): string {
  const html: string[] = [];
  let lines: string[] = [];
  let items: string[] = [];

  const flushLines = () => {
    if (lines.length) html.push(`<p style="margin:0">${formatInline(lines.join("\n"))}</p>`);
    lines = [];
  };
  const flushItems = () => {
    if (items.length) html.push(`<ul>${items.map((item) => `<li>${formatInline(item)}</li>`).join("")}</ul>`);
    items = [];
  };

  for (const line of block.split("\n")) {
    const item = line.trim().match(LIST_ITEM);
    if (item) {
      flushLines();
      items.push(item[1]);
    } else {
      flushItems();
      lines.push(line);
    }
  }
  flushLines();
  flushItems();
  return html.join("\n");
}

export function paragraphSplit(text: string | null | undefined): string {
  if (text == null) return "";

  const escaped = escapeHtml(text);
  const paragraphs = escaped.split(/\n\n+/).filter((p) => p.trim());

  if (paragraphs.length <= 1) {
    return formatBlock(escaped.trim());
  }

  return paragraphs.map((p) => formatBlock(p.trim())).join("\n");
}
