import {API_URL} from "@/lib/configs/global";
import {getResearchFields} from "@/app/page";
import {ResearchField} from "@/lib/types/research-field.type";
import Image from "next/image";
import {MarkdownRenderer} from "@/ui/markdown/markdown-renderer.component";

export async function generateStaticParams() {
    try {
        const slugs = await getResearchFields();

        return slugs.map((slug) => ({
            slug: slug
        }));
    } catch {
        return [];
    }

}

async function getResearchFieldDetail(slug: string): Promise<ResearchField> {
    const response = await fetch(`${API_URL}/club/research-fields/${slug}/`);
    return await response.json();
}

export default async function FieldDetailPage(
    {params}: {
        params: Promise<{ slug: string }>
    }) {
    const {slug} = await params;
    const {name, image, markdown} = await getResearchFieldDetail(slug);
    return (
        <section>
            <h1 className={"text-4xl font-bold text-neutral-700 mb-2"}>{name}</h1>
            <hr/>
            {image && (<Image className={"my-4"} src={image} alt={name} width={800} height={200}/>)}
            <MarkdownRenderer markdown={markdown}/>
        </section>
    )
}
