// [...slug] in Next.js is used for catch-all routes, allowing a dynamic route to capture multiple path segments
// localhost:3000/blog/2020/1/2...........  (we can use multiple routes by using slug)

import { useRouter } from "next/router";

function BlogPostsPage() {
	const router = useRouter();

	console.log(router.query);

	return (
		<div>
			<h1>The Blog Posts</h1>
		</div>
        
	);
}

export default BlogPostsPage;