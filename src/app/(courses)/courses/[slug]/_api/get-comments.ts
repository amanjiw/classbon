import { readData } from "@/core/http-service/http-service";
import { CourseCommentList } from "../_types/course-comment-interface";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

type GetCommentsOptions = {
	params: {
		slug: string;
		page: number;
	};
};

const getComments = ({
	params,
}: GetCommentsOptions): Promise<CourseCommentList> => {
	const { page, slug } = params;
	const url = `/courses/${slug}/comments?page=${page}`;

	return readData(url);
};

export const useCourseComments = ({ params }: GetCommentsOptions) => {
	const {
		data,
		error,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
		refetch,
        isFetching
	} = useInfiniteQuery({
		queryKey: ["courseComments", params.slug],
		queryFn: ({ pageParam }) =>
			getComments({ params: { ...params, page: pageParam } }),
		getNextPageParam: (lastPage) => lastPage.nextPage,
		initialPageParam: 1,
		staleTime: 5 * 60 * 60 * 1000,
		gcTime: 6 * 60 * 60 * 1000,
	});

	return {
		data,
		error,
		refetch,
		isFetchingNextPage,
		hasNextPage,
		fetchNextPage,
        isFetching
	};
};
