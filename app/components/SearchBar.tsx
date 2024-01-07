const SearchBar = () => {
	return (
		<div className="bg-white rounded-md w-[1110px]">
			<input
				type="text"
				placeholder="Filter by title, companies, expertise..."
				className="h-[80px] w-[463px] border-r-[#6E8098] border-r-2 border-opacity-20 rounded-l-md"
			/>
			<input
				type="text"
				placeholder="Filter by location..."
				className="h-[80px] w-[300px] border-r-[#6E8098] border-r-2 border-opacity-20"
			/>
			{/* create a checkbox input fielt that says Full Time Only */}
			<input type="checkbox" name="Full time"></input>
			<label htmlFor="full_time">Full Time Only</label>
		</div>
	);
};
export default SearchBar;
