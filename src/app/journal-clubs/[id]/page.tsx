import {API_URL} from "@/lib/configs/global";
import {JournalClub} from "@/lib/types/journal-club.type";
import {getJournalClub} from "@/lib/_api/get-journalClub";

export async function generateStaticParams() {
    try {
        const clubs = await getJournalClub({params: {page: 1}});

        return clubs.data.map((item) => ({
            id: item.id
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

    const {title, date, time, attendance_type, image, research_fields} = await getJournalClubDetail(id);
    return (
        <section>
            <h1 className={"text-4xl font-bold text-neutral-700 mb-2"}>{title}</h1>
            <hr/>

        </section>
    )
}
