import JobCard from "./JobCard";

import data from "../data.json";

const JobList = () => {
	return (
		<div className="w-[1150px] flex flex-wrap justify-center pt-[40px]">
			{data.map((job) => (
				<JobCard key={job.id} params={job} />
			))}
		</div>
	);
};
export default JobList;
