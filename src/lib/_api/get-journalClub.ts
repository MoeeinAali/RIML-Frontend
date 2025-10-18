import {httpService} from "@/lib/services/http/http.service";
import {useInfiniteQuery} from "@tanstack/react-query";
import {JournalClubList} from "@/ui/components/journal-clubs-list/journal-club-list.interface";

type GetJournalClubOptions = {
    params: {
        page: number;
    }
}

export const getJournalClub = ({params}: GetJournalClubOptions): Promise<JournalClubList> => {
    const {page} = params;
    const url = `/club/journal-clubs/?page=${page}`;
    return httpService.get(url)
}

export const useJournalClubs = ({params}: GetJournalClubOptions) => {
    const {
        data,
        error,
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
        refetch
    } = useInfiniteQuery<JournalClubList>({
        queryKey: ["journalClubs", params.page],
        queryFn: ({pageParam}) => getJournalClub({params: {...params, page: pageParam as number}}),
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