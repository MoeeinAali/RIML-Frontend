import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {JournalClubCardProps} from "@/ui/components/journal-club-card/journal-club-card.interface";
import MdiLightChevronRight from "@/ui/icons/MdiLightChevronRight";
import MdiLightClock from "@/ui/icons/MdiLightClock";
import MdiLightAccount from "@/ui/icons/MdiLightAccount";
import MdiLightCalendar from "@/ui/icons/MdiLightCalendar";

export const attendanceLabels = {
    in_person: {label: "In-person"},
    online: {label: "Online"},
    hybrid: {label: "Hybrid"},
};

export const JournalClubCard: FC<JournalClubCardProps> = ({journalClub}) => {
    const {id, title, date, time, attendance_type, research_fields, image} = journalClub;

    return (
        <li className="border-neutral-200 border-b pb-6 md:px-4 lg:px-8 xl:px-12 2xl:px-14">
            <div className="flex flex-col md:flex-row items-center gap-6 justify-between w-full">
                <div className="w-40 md:w-44 lg:w-48 shrink-0">
                    <div
                        className="relative aspect-square overflow-hidden rounded-lg ring-1 ring-neutral-200">
                        <Image
                            src={image || "/images/logo-squere.svg"}
                            alt={title}
                            width={200}
                            height={200}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                <div className="flex-1 min-w-0 text-left">
                    <Link
                        href={`/journal-clubs/${id}/`}
                    >
                        <h2 className="text-xl font-semibold text-primary">{title}</h2>
                    </Link>

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
                        <div className="mt-4 flex flex-wrap gap-2">
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

                <div className="md:self-center">
                    <Link
                        href={`/journal-clubs/${id}/`}
                        className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-md px-4 py-2 text-sm font-medium"
                    >
                        Details
                        <MdiLightChevronRight className={"text-2xl"}/>
                    </Link>
                </div>
            </div>
        </li>
    );
};
