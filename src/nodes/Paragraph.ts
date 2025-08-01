import { DocNode } from "../interfaces/DocNode";
import { DocRenderer } from "../interfaces/DocRenderer";
import { RenderEventPublisher } from "../RenderEventPublisher";

export class Paragraph implements DocNode {
  constructor(private text: string, private renderer: DocRenderer) {}

  render(): string {
    const start = Date.now();
    const output = this.renderer.renderParagraph(this.text);
    const end = Date.now();

    RenderEventPublisher.notify({
      type: "Paragraph",
      content: this.text,
      renderTime: end - start,
    });

    return output;
  }
}
