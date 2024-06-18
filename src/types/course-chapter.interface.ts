import { CourseLecture } from "./course-lecture.interface";

export interface CourseChapter {
	id: number;
	title: string;
	duration: string;
	numOfLectures: number;
	lectures: CourseLecture[];
}
