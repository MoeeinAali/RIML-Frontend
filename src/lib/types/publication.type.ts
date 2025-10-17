import {PublicationBadge} from "@/lib/types/publication-badge.type";
import {Publisher} from "@/lib/types/publisher.type";

export type Publication = {
    id: number;
    title: string;
    authors: string;
    publisher: Publisher;
    publication_badges: PublicationBadge[];
}