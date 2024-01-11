import JobPage from "./components/JobPage";

import data from "../data.json";

type ParamsType = {
	id: number;
};

const JobDescription = ({ params }: { params: ParamsType }) => {
	const { id } = params;
	const jobData = data.find((job) => job.id === id);

	return (
		<div>
			<JobPage params={jobData} />
		</div>
	);
};
export default JobDescription;
