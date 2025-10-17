import {remark} from "remark";
import html from "remark-html";

async function MarkdownRenderer(markdown: string) {
    const processed = await remark().use(html).process(markdown);
    const contentHtml = processed.toString();

    return (
        <div
            className="prose prose-zinc max-w-none markdown-content"
            dangerouslySetInnerHTML={{__html: contentHtml}}
        />
    );
}