import { RenderEventSubscriber } from '../interfaces/RenderEventSubscriber';
import { RenderContext } from '../interfaces/RenderContext';

export class SummaryCollector implements RenderEventSubscriber {
  private counts = {
    Section: 0,
    Paragraph: 0,
    List: 0,
  };

  update(context: RenderContext): void {
    this.counts[context.type]++;
  }

  printSummary() {
    console.log(`[Summary] Rendered ${this.counts.Section} sections, ${this.counts.Paragraph} paragraphs, ${this.counts.List} lists`);
  }
}
