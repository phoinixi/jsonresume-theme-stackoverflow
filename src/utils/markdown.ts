import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

export function paragraphSplit(text: string | null | undefined): string {
  if (text == null) return "";
  return md.render(text).trim();
}
