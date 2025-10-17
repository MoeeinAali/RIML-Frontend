import {httpService} from "@/lib/services/http/http.service";
import {useInfiniteQuery} from "@tanstack/react-query";
import {PublicationList} from "@/ui/components/publication-list/publications-list.interface";

type GetPublicationsOptions = {
    params: {
        page: number;
    }
}

const getPublications = ({params}: GetPublicationsOptions): Promise<PublicationList> => {
    const {page} = params;
    const url = `/papers/publications/?page=${page}`;
    return httpService.get(url)
}

export const usePublications = ({params}: GetPublicationsOptions) => {
    const {
        data,
        error,
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
        refetch
    } = useInfiniteQuery<PublicationList>({
        queryKey: ["publications"],
        queryFn: ({pageParam}) => getPublications({params: {...params, page: pageParam as number}}),
        getNextPageParam: (lastPage) => lastPage.nextPage,
        initialPageParam: 1,
    })

    return {
        data,
        error,
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
        refetch
    }
}