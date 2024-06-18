"use client";
import { Fragment, useEffect } from "react";

import { useParams } from "next/navigation";
import { useCourseComments } from "../../_api/get-comments";
import { Comment } from "@/app/_components/comment/Comment";
import { TextPlaceholder } from "@/app/_components/placeholders/text/TextPlaceholder";
import { useInView } from "react-intersection-observer";
import Button from "@/app/_components/button/Button";
import { IconRefresh } from "@/app/_components/icons/icons";
import { Alert } from "@/app/_components/alert";

const CourseComments = () => {
	const { slug } = useParams();
	const {
		data: comments,
		fetchNextPage,
		hasNextPage,
		isFetching,
		refetch,
		error,
	} = useCourseComments({
		params: { page: 1, slug: slug as string },
	});

	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView && hasNextPage) fetchNextPage();
	}, [inView, hasNextPage, fetchNextPage]);

	if (error) {
		return (
			<>
				<Alert variant="error" showIcon>
					خطا در برقراری ارتباط با سرور
				</Alert>
				<div className="text-center mt-3">
					<Button
						variant="neutral"
						className="font-semibold"
						isOutline={true}
						shape="wide"
						onClick={() => refetch()}
					>
						<IconRefresh />
						تلاش مجدد
					</Button>
				</div>
			</>
		);
	}

	return (
		<>
			{comments?.pages.map((currentPage) => (
				<Fragment key={`comment-page-${currentPage}`}>
					{currentPage?.data.map((comment) => (
						<Comment
							className=""
							key={`comment-${comment.id}`}
							variant="info"
							{...comment}
						></Comment>
					))}
				</Fragment>
			))}

			{(isFetching || hasNextPage) && (
				<div className="" ref={ref}>
					<TextPlaceholder />
				</div>
			)}
		</>
	);
};

export default CourseComments;
