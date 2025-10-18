import {ResearchField} from "@/lib/types/research-field.type";

export type JournalClub = {
    id: number;
    title: string;
    date: string;
    time: string;
    attendance_type: 'in_person' | 'online' | 'hybrid'
    research_fields: Omit<ResearchField, 'markdown'>[];
    image: string | null;
    markdown: string | null;
}