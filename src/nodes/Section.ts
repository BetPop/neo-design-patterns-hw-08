import { DocNode } from "../interfaces/DocNode";
import { DocRenderer } from "../interfaces/DocRenderer";

export class Section implements DocNode {
  private children: DocNode[] = [];

  constructor(
    private title: string,
    private renderer: DocRenderer,
    children: DocNode[] = [],
    private level: number = 1
  ) {
    this.children = children;
  }

  add(child: DocNode): void {
    this.children.push(child);
  }

  render(): string {
    let result = this.renderer.renderHeader(this.level, this.title);

    for (const child of this.children) {
      result += child.render();
    }

    return result;
  }
}
