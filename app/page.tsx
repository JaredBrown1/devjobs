import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobList from "./components/JobList";

export default function Home() {
	return (
		<main className="bg-gray-200 flex flex-col items-center min-h-screen">
			<Header />
			<div className="pt-20">
				<JobList />
			</div>
			{/* <SearchBar /> */}
		</main>
	);
}
