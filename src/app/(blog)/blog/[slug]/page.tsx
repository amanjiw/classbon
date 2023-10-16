import React from "react";

const BlogDetails = ({ params }: { params: { slug: string } }) => {
	return <div>{params.slug}</div>;
};

export default BlogDetails;
