import JobList from "./components/JobList";

export default function Home() {
	return (
		<main className=" flex flex-col items-center min-h-screen">
			<div>
				<JobList />
			</div>
			{/* <SearchBar /> */}
		</main>
	);
}
