import {Publication} from "@/lib/types/publication.type";

export interface PublicationCardProps {
    publication: Publication;
    isSkeleton?: boolean;
}