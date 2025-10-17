import {Publication} from "@/lib/types/publication.type";

export interface PublicationList {
    data: Publication[];
    nextPage: number;
}