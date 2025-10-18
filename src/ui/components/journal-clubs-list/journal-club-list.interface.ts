import {JournalClub} from "@/lib/types/journal-club.type";

export interface JournalClubList {
    data: JournalClub[];
    nextPage: number;
}