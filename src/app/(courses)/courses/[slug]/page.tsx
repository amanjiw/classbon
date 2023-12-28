import { API_URL } from "@/configs/public";
import { CourseDetails } from "@/types/course-details.interface";
import React from "react";

export const getStaticParams = async () => {
	const slugs = await fetch(`${API_URL}/courses/slugs`).then((res) => {
		res.json();
	});

	return (slugs as unknown as string[]).map((slug) => {
		slug: slug;
	});
};

const getCourse = async (slug: string): Promise<CourseDetails> => {
	const res = await fetch(`${API_URL}/courses/${slug}`);
	return res.json();
};

const CourseDetails = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params;

	const courseData = await getCourse(slug);
	console.log(courseData);

	return <div> Course Details Page </div>;
};

export default CourseDetails;
