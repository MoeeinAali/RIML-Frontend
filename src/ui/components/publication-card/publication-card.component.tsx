import {FC} from "react";
import {PublicationCardProps} from "@/ui/components/publication-card/publication-card.interface";
import Link from "next/link";
import Image from "next/image";


export const PublicationCard: FC<PublicationCardProps> = ({publication, isSkeleton = false}) => {
    const {publication_badges, authors, publisher, title} = publication
    return (
        <li className={`border-neutral-300 border-b pb-5 md:px-4 lg:px-8 xl:px-12 2xl:px-14 ${isSkeleton ? "skeleton" : ""}`}>
            <div className="flex flex-col md:flex-row items-center gap-4 justify-between w-full">
                <Image
                    src={publication.publisher.logo}
                    alt={``}
                    width="128" height="128" className="w-32 h-32 object-cover"
                />

                <div>
                    <h2 className="text-xltext-neutral-700 font-semibold">
                        {title}
                    </h2>
                    <p className="text-sm font-light text-neutral-600 mt-1">
                        {authors}
                    </p>
                    <p className="mt-1 font-bold text-2xl text-gray-600 italic">{publication.publisher.name} - {publication.publisher.year}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-1">
                        {
                            publication_badges.map((badge) =>
                                <Link key={`badge-${badge.id}`}
                                      href={badge.link}
                                      target="_blank"
                                      className="font-bold p-1.5 text-primary border border-primary/30 rounded-sm hover:shadow-lg hover:bg-primary/5 transition-colors text-xs uppercase">
                                    {badge.label}
                                </Link>)
                        }
                    </div>
                </div>
            </div>
        </li>
    );
};
