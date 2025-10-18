import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {JournalClubCardProps} from "@/ui/components/journal-club-card/journal-club-card.interface";

export const JournalClubCard: FC<JournalClubCardProps> = ({journalClub}) => {
    const {id, title, date, time, attendance_type, research_fields, image} = journalClub;

    const attendanceLabels = {
        in_person: {label: "In-person", className: "bg-primary/10 text-primary"},
        online: {label: "Online", className: "bg-secondary/10 text-secondary"},
        hybrid: {label: "Hybrid", className: "bg-amber-100 text-amber-700"},
    };

    return (
        <li className="border-neutral-200 border-b pb-6 md:px-4 lg:px-8 xl:px-12 2xl:px-14">
            <div className="flex flex-col md:flex-row items-center gap-6 justify-between w-full">
                <div className="w-full md:w-40 lg:w-48 shrink-0">
                    <div
                        className="relative aspect-[16/9] md:aspect-square overflow-hidden rounded-lg ring-1 ring-neutral-200">
                        {image && (
                            <Image
                                src={image}
                                alt={title}
                                fill
                                sizes="(max-width: 768px) 100vw, 192px"
                                className="object-cover"
                            />
                        )}
                    </div>
                </div>

                <div className="flex-1 min-w-0 text-left">
                    <h2 className="text-xl font-semibold text-primary">{title}</h2>

                    <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-neutral-600">
                        <span
                            className="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary rounded-full px-2.5 py-1 text-xs font-medium">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-4 h-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                              >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"
                                />
                              </svg>
                            {date}
                         </span>

                        {/* Time Badge */}
                        <span
                            className="inline-flex items-center gap-1.5 bg-primary/10 text-primary rounded-full px-2.5 py-1 text-xs font-medium">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                          >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0z"
                            />
                          </svg>
                            {time}
                        </span>

                        {/* Attendance Badge */}
                        <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full ${attendanceLabels[attendance_type].className}`}
                        >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zm0 1.5c-2.45 0-4.5 1.57-4.5 3.5V19h9v-2.75c0-1.93-2.05-3.5-4.5-3.5z"
                />
              </svg>
                            {attendanceLabels[attendance_type].label}
            </span>
                    </div>

                    {/* Research Fields */}
                    {research_fields?.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {research_fields.map((field) => (
                                <span
                                    key={field.name}
                                    className="text-xs text-secondary border border-secondary/30 rounded-full px-2 py-0.5"
                                >
                  {field.name}
                </span>
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
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="currentColor"
                                d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364l-1.414-1.414z"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </li>
    );
};
