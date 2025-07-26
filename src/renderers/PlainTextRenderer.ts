import { BaseRenderer } from "./BaseRenderer";

export class PlainTextRenderer extends BaseRenderer {
  renderHeader(level: number, text: string): string {
    const underlineChar = level === 1 ? "=" : "-";
    const underline = underlineChar.repeat(text.length);
    return `${text}\n${underline}\n\n`;
  }

  renderParagraph(text: string): string {
    return `${text}\n\n`;
  }

  renderList(items: string[]): string {
    return items.map(item => `* ${item}`).join("\n") + "\n\n";
  }
}
