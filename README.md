Design Patterns Homework 8 — Observer Pattern in Document Renderer
Overview
This project extends a document generation system by implementing a reactive rendering layer based on the Observer pattern. It enables tracking the rendering process of individual document elements (Paragraph, List, Section) and reacting to rendering events in a flexible, extensible manner.

Key Components
RenderEventPublisher (Subject)
A static class that maintains a list of subscribers.

Responsible for notifying all subscribers when a document element finishes rendering.

Interface:

ts
Copy
Edit
export class RenderEventPublisher {
static subscribe(subscriber: RenderEventSubscriber): void;
static unsubscribe(subscriber: RenderEventSubscriber): void;
static notify(context: RenderContext): void;
}
RenderEventSubscriber (Observer Interface)
Defines the contract for subscribers interested in render events.

Must implement the method:

ts
Copy
Edit
update(context: RenderContext): void;
RenderContext (Event Data)
Provides detailed information about the rendering event.

Fields include:

ts
Copy
Edit
export interface RenderContext {
type: 'Section' | 'Paragraph' | 'List';
content: string;
level?: number; // For Section header level
items?: string[]; // For List items
renderTime?: number; // Duration of rendering in ms
}
Subscribers
RenderLoggerSubscriber: Logs each rendered element with details, e.g.
[Log] Rendered Paragraph (44 chars)

SummaryCollector: Collects counts of each element type and logs a summary at the end, e.g.
[Summary] Rendered 4 sections, 3 paragraphs, 2 lists

PerformanceSubscriber: Measures total rendering time and logs the result, e.g.
[Performance] Total render time: 5ms

How It Works
Each document element calls RenderEventPublisher.notify(context) after rendering.

All subscribed observers receive the RenderContext object.

Observers react accordingly (log, collect stats, measure performance).

After full document generation, summary and performance subscribers print their reports.

Running the Project
Prerequisites
Node.js and npm installed.

Install dependencies:

bash
Copy
Edit
npm install
Compile and Run
bash
Copy
Edit
npx ts-node src/main.ts [format] [output_file]
format — Renderer type (markdown, html, etc.)

output_file — Optional output file path. If omitted, output prints to console.

Example:

bash
Copy
Edit
npx ts-node src/main.ts markdown output.md
Expected console output during rendering:

scss
Copy
Edit
[Log] Rendered Paragraph (44 chars)
[Log] Rendered Paragraph (53 chars)
[Log] Rendered List (3 items)
[Log] Rendered Section ("Composite", level 2)
...
[Summary] Rendered 4 sections, 3 paragraphs, 2 lists
[Performance] Total render time: 5ms
