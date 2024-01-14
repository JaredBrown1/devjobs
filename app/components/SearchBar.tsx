"use client";

import { useState } from "react";

const SearchBar = ({ onSearch }: any) => {
	const [titleCompany, setTitleCompany] = useState("");
	const [location, setLocation] = useState("");
	const [fullTime, setFullTime] = useState(false);

	const handleSearch = () => {
		onSearch({ titleCompany, location, fullTime });
	};

	return (
		<div className="bg-white rounded-md w-[1110px]">
			<input
				type="text"
				value={titleCompany}
				onChange={(e) => setTitleCompany(e.target.value)}
				placeholder="Filter by title, companies, expertise..."
				className="h-[80px] w-[463px] border-r-[#6E8098] border-r-2 border-opacity-20 rounded-l-md"
			/>
			<input
				type="text"
				value={location}
				onChange={(e) => setLocation(e.target.value)}
				placeholder="Filter by location..."
				className="h-[80px] w-[300px] border-r-[#6E8098] border-r-2 border-opacity-20"
			/>
			{/* create a checkbox input fielt that says Full Time Only */}
			<input
				type="checkbox"
				name="Full time"
				checked={fullTime}
				onChange={(e) => setFullTime(e.target.checked)}
			></input>
			<label htmlFor="full_time">Full Time Only</label>
			<button
				className="bg-[#5964E0] text-white w-[141px] h-[48px] rounded-md hover:bg-[#939bf4]"
				onClick={handleSearch}
			>
				Search
			</button>
		</div>
	);
};
export default SearchBar;
