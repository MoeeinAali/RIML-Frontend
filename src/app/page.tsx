import {MarkdownRenderer} from "@/ui/markdown/markdown-renderer.component";
import {API_URL, CURRENT_URL} from "@/lib/configs/global";
import Image from "next/image";
import Link from "next/link";
import {ResearchField} from "@/lib/types/research-field.type";

async function getHomeMarkdown() {
    const res = await fetch(`${CURRENT_URL}/home.md`, {
        cache: "no-cache", // TODO: remove this
    })
    return res.text();
}

export async function getResearchFields() {
    const res = await fetch(`${API_URL}/club/research-fields/`, {
        next: {
            revalidate: 3600
        }
    })
    const data: Omit<ResearchField, "markdown">[] = await res.json()
    return data.map((item) => item.name);
}

export default async function Home() {
    const markdown = await getHomeMarkdown();
    const researchFields = await getResearchFields();
    return (

        <>
            <Link target={"_blank"} href={"https://en.sharif.ir/"}>
                <Image src={"/images/sharif.svg"} alt={"Sharif Logo"} height={200} width={200}/>
            </Link>

            <br/>

            <MarkdownRenderer markdown={markdown}/>

            <br/>

            <h2 className={"text-3xl mt-4 font-black text-neutral-700"}>Our Research Fields</h2>
            <ul className={"mt-4 ml-6 list-disc space-y-2 text-neutral-700"}>
                {
                    researchFields.map((researchField) => <li key={researchField}><Link
                        className={"text-primary hover:underline font-semibold"}
                        href={`/fields/${researchField}`}>{researchField}</Link></li>)
                }
            </ul>
        </>
    );
}
