'use client'

import {Fragment, useEffect} from "react";
import {usePublications} from "@/lib/_api/get-publications";
import {useInView} from "react-intersection-observer";
import {PublicationCard} from "@/ui/components/publication-card/publication-card.component";
import {SkeletonData} from "@/lib/mock/mock-data";

export const PublicationsList = () => {
    const {ref, inView} = useInView({})

    const {
        data: publications,
        error,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
        refetch
    } = usePublications({
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
            <ul className={"flex flex-col gap-8 list-none"}>
                {
                    publications?.pages.map((page, index) => (
                        <Fragment key={`publication-page-${publications.pageParams?.[index] ?? index}`}>
                            {
                                page.data.map((item) => (
                                    <PublicationCard key={`publication-${item.id}`} publication={item}/>
                                ))
                            }
                        </Fragment>
                    ))
                }
            </ul>

            {
                (isFetchingNextPage || hasNextPage || isLoading) &&
                <ul ref={ref} className={"flex flex-col gap-8 list-none"}>
                    {SkeletonData.publications.map((skeletonPublication) =>
                        <PublicationCard isSkeleton={true} key={`publication-skeleton-${skeletonPublication.id}`}
                                         publication={skeletonPublication}/>
                    )}
                </ul>
            }
        </>
    )

}