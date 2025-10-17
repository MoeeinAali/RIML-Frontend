'use client'

import {Fragment, useEffect} from "react";
import {usePublications} from "@/lib/_api/get-publications";
import {useInView} from "react-intersection-observer";
import {PublicationCard} from "@/ui/components/publication-card/publication-card.component";

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
                <p>خطا در برقراری ارتباط با سرور</p>
                <div className={"text-center mt-3"}>
                    <button
                        className={"font-semibold"}
                        onClick={() => refetch()}
                    >
                        تلاش مجدد
                    </button>
                </div>
            </>
        )
    }

    return (
        <>
            <ul>
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
                <div ref={ref}>
                    <p>loading...</p>
                </div>
            }
        </>
    )

}