import CourseAside from "@/app/(blog)/blog/[slug]/_components/CourseAside";
import Progress from "@/app/_components/progress/Progress";
import Rating from "@/app/_components/rating/Rating";
import Tabs from "@/app/_components/tabs/Tabs";
import { API_URL } from "@/configs/public";
import { CourseDetails } from "@/types/course-details.interface";
import { Tab } from "@/types/tab.type";
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

	const course = await getCourse(slug);
	console.log(course);

	const tabs: Tab[] = [
		{ label: "مشخصات دوره", content: course.description },
		{ label: "دیدگاه ها و پرسش", content: "course comments" },
		{ label: "سوالات متداول", content: " accordion components" },
	];

	return (
		<div className=" container grid grid-cols-10 grid-rows-[1fr 1fr] gap-10 py-10 ">
			<div className="bg-primary pointer-events-none absolute right-0 aspect-square w-1/2 rounded-full opacity-10 blur-3xl"></div>{" "}
			<div className="col-span-10 xl:col-span-7">
				<h1 className="text-center xl:text-right text-2xl lg:text-3xl xl:text-4xl font-black leading-10 ">
					{course.title}
				</h1>
				<h2 className="mt-4 text-center xl:text-right text-lg leading-9">
					{course.subTitle}
				</h2>
				<div className="mt-5">VPC</div>
			</div>
			<div className="col-span-10 xl:col-span-3 ">
				<CourseAside {...course} />
			</div>
			<div className="col-span-10 xl:col-span-6 ">
				<Tabs tabs={tabs} />
			</div>
			<div className="col-span-10 xl:col-span-4 bg-warning"></div>
		</div>
	);
};

export default CourseDetails;
