import {remark} from "remark";
import html from "remark-html";

export async function MarkdownRenderer({markdown}: { markdown: string }) {
    const processed = await remark()
        .use(html, {sanitize: false})
        .process(markdown);

    const contentHtml = processed.toString();

    return (
        <div
            className="prose prose-zinc max-w-none markdown-content"
            dangerouslySetInnerHTML={{__html: contentHtml}}
        />
    );
}
