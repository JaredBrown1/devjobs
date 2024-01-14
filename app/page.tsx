"use client";

import { useState } from "react";

import JobList from "./components/JobList";
import SearchBar from "./components/SearchBar";

import Data from "./data.json";

export default function Home() {
	const [data, setData] = useState(Data);

	const handleSearch = ({ titleCompany, location, fullTime }: any) => {
		const filteredData = Data.filter(
			(job) =>
				(job.position.toLowerCase().includes(titleCompany.toLowerCase()) ||
					job.company.toLowerCase().includes(titleCompany.toLowerCase())) &&
				job.location.toLowerCase().includes(location.toLowerCase()) &&
				(!fullTime || job.contract === "Full Time")
		);
		setData(filteredData);
	};

	return (
		<main className=" flex flex-col items-center min-h-screen">
			<div className="mt-[-30px]">
				<SearchBar onSearch={handleSearch} />
			</div>
			<div>
				<JobList params={data} />
			</div>
		</main>
	);
}
