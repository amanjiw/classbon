"use client";

import { useParams } from "next/navigation";
import { useCourseComments } from "../../_api/get-comments";
import { Comment } from "@/app/_components/comment/Comment";
import { TextPlaceholder } from "@/app/_components/placeholders/text/TextPlaceholder";

const CourseComments = () => {
	const { slug } = useParams();
	const { data: comments, isLoading } = useCourseComments({
		params: { page: 1, slug: slug as string },
	});

	console.log(comments, "CP");

	return (
		<>
			{comments?.data.map((comment) => (
				<Comment
					className=""
					key={`comment-${comment.id}`}
					variant="info"
					{...comment}
				></Comment>
			))}

			{isLoading && <TextPlaceholder />}
		</>
	);
};

export default CourseComments;
