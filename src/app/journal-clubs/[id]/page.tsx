import {API_URL} from "@/lib/configs/global";
import {JournalClub} from "@/lib/types/journal-club.type";
import {getJournalClub} from "@/lib/_api/get-journalClub";
import Image from "next/image";
import Link from "next/link";
import MdiLightCalendar from "@/ui/icons/MdiLightCalendar";
import MdiLightClock from "@/ui/icons/MdiLightClock";
import MdiLightAccount from "@/ui/icons/MdiLightAccount";
import {attendanceLabels} from "@/ui/components/journal-club-card/journal-club-card.component";
import {MarkdownRenderer} from "@/ui/markdown/markdown-renderer.component";

export async function generateStaticParams() {
    try {
        const clubs = await getJournalClub({params: {page: 1}});
        return clubs.data.map((item) => ({
            id: `${item.id}`
        }));
    } catch {
        return [];
    }

}

async function getJournalClubDetail(id: number): Promise<JournalClub> {
    const response = await fetch(`${API_URL}/club/journal-clubs/${id}/`);
    return await response.json();
}

export default async function JournalClubDetailPage(
    {params}: {
        params: Promise<{ id: number }>
    }) {
    const {id} = await params;

    const {title, date, time, attendance_type, image, markdown, research_fields} = await getJournalClubDetail(id);
    return (
        <section>
            <h1 className={"text-4xl font-bold text-neutral-700 mb-2"}>{title}</h1>
            <hr/>
            <div className="flex-1 min-w-0 text-left">
                <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-neutral-600">
                        <span
                            className="inline-flex items-center gap-1.5 bg-primary/10 text-primary rounded-full px-2.5 py-1 text-xs font-medium">
                             <MdiLightCalendar className={"text-xl"}/>
                            {date}
                         </span>

                    <span
                        className="inline-flex items-center gap-1.5 bg-primary/10 text-primary rounded-full px-2.5 py-1 text-xs font-medium">
                          <MdiLightClock className={"text-xl"}/>
                        {time}
                        </span>

                    <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary`}
                    >
                          <MdiLightAccount className={"text-xl"}/>
                        {attendanceLabels[attendance_type].label}
            </span>
                </div>

                {research_fields?.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                        {research_fields.map((field) => (
                            <Link
                                href={`/fields/${field.name}`}
                                key={field.name}
                                className="text-xs text-primary border border-primary/30 rounded-full px-2 py-0.5 hover:bg-primary/5"
                            >
                                {field.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {
                image && (
                    <>
                        <br/>
                        <Image
                            src={image}
                            alt={title}
                            width={300}
                            height={300}
                            className="object-cover"
                        />
                    </>
                )
            }
            {markdown && <MarkdownRenderer markdown={markdown}/>}

        </section>
    )
}
