import { CourseSummary } from "@/types/course-summary.interface";
import React from "react";
import CourseCard from "./CourseCard";
import { API_URL } from "@/configs/public";

type CourseCardListProps = {
	courses: CourseSummary[];
};

const CourseCardList: React.FC<CourseCardListProps> = async ({ courses }) => {
	const getNewestCourses = async (
		count: number
	): Promise<CourseSummary[]> => {
		await new Promise((resolve: any) => setTimeout(resolve, 5000));
		const res = await fetch(`${API_URL}/courses/newest/${count}`, {
			cache: "no-store",
			next: { revalidate: 24 * 60 * 60 },
		});
		return res.json();
	};

	const newestCoursesData = await getNewestCourses(4);

	return (
		<div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
			{newestCoursesData.map((course: any) => (
				<CourseCard key={`course-${course.slug}`} {...course} />
			))}
		</div>
	);
};

export default CourseCardList;
