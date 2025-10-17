'use client'

import {Fragment, useEffect} from "react";
import {usePublications} from "@/lib/_api/get-publications";
import {useInView} from "react-intersection-observer";

export const Publications = () => {
    const {ref, inView} = useInView({})

    const {
        data: comments,
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
            {
                comments?.pages.map((page, index) => (
                    <Fragment key={`comment-page-${comments.pageParams?.[index] ?? index}`}>
                        {
                            page.data.map((item) => (
                                <p key={`comment-${item.id}`}>{JSON.stringify(item)}</p>
                            ))
                        }
                    </Fragment>
                ))
            }
            {
                (isFetchingNextPage || hasNextPage || isLoading) &&
                <div ref={ref}>
                    {/*<TextPlaceholder count={1}/>*/}
                    <p>loading...</p>
                </div>
            }
        </>
    )

}