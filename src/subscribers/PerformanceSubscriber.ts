import { RenderEventSubscriber } from '../interfaces/RenderEventSubscriber';
import { RenderContext } from '../interfaces/RenderContext';

export class PerformanceSubscriber implements RenderEventSubscriber {
  private totalTime = 0;

  update(context: RenderContext): void {
    if (context.renderTime) {
      this.totalTime += context.renderTime;
    }
  }

  printPerformance() {
    console.log(`[Performance] Total render time: ${this.totalTime}ms`);
  }
}
