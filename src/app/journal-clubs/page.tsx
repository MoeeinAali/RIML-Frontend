import {JournalClubList} from "@/ui/components/journal-clubs-list/journal-club-list.component";

export default function JournalClubPage() {
    return (
        <>
            <h1 className={"text-4xl font-bold text-neutral-700 mb-2"}>Journal Clubs</h1>
            <hr/>
            <br/>
            <br/>
            <JournalClubList/>
        </>
    );
}
