'use client'

import {Fragment, useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {useJournalClubs} from "@/lib/_api/get-journalClub";
import {JournalClubCard} from "@/ui/components/journal-club-card/journal-club-card.component";
import {SkeletonData} from "@/lib/mock/mock-data";

export const JournalClubList = () => {
    const {ref, inView} = useInView({})

    const {
        data: journals,
        error,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
        refetch
    } = useJournalClubs({
        params: {
            page: 1
        }
    });

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage().then();
        }
    }, [inView, fetchNextPage, hasNextPage]);

    if (error) {
        return (
            <>
                <p>Error!</p>
                <div className={"text-center mt-3"}>
                    <button
                        className={"font-semibold border-primary text-primary"}
                        onClick={() => refetch()}
                    >
                        ReFetch
                    </button>
                </div>
            </>
        )
    }

    return (
        <>
            <ul className={"flex flex-col gap-8"}>
                {
                    journals?.pages.map((page, index) => (
                        <Fragment key={`journal-club-page-${journals.pageParams?.[index] ?? index}`}>
                            {
                                page.data.map((item) => (
                                    <JournalClubCard key={`journal-club-${item.id}`} journalClub={item}/>
                                ))
                            }
                        </Fragment>
                    ))
                }
            </ul>

            {
                (isFetchingNextPage || hasNextPage || isLoading) &&
                <ul ref={ref} className={"flex flex-col gap-8"}>
                    {
                        SkeletonData.journals.map((item, index) => (
                            <JournalClubCard key={`journal-club-skeleton-${item.id}`} isSkeleton={true}
                                             journalClub={item}/>
                        ))
                    }
                </ul>
            }
        </>
    )

}