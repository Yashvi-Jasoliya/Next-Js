import { useRouter } from "next/router";

function ClientProjectsPage() {
	const router = useRouter();

    // provides query
	console.log(router.query);

	function loadProjectHandler() {
		// load data...
		router.push({
			pathname: "/clients/[id]/[clientprojectid]",
			query: { id: "abc", clientprojectid: "project1" },
		});
	}

	return (
		<div>
			<h1>The Projects of a Given Client</h1>
			<button onClick={loadProjectHandler}>Load Project A</button>
		</div>
	);
}

export default ClientProjectsPage;
