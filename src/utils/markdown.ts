import MarkdownIt from "markdown-it";

const md = new MarkdownIt({ html: false, linkify: true });

export function paragraphSplit(text: string | null | undefined): string {
  if (text == null) return "";
  return md.render(text).trim();
}
