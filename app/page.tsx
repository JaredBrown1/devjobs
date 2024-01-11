import JobList from "./components/JobList";
import SearchBar from "./components/SearchBar";

export default function Home() {
	return (
		<main className=" flex flex-col items-center min-h-screen">
			<div className="mt-[-30px]">
				<SearchBar />
			</div>
			<div>
				<JobList />
			</div>
		</main>
	);
}
