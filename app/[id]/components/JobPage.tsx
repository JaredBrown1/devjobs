import JobPageHeader from "./JobPageHeader";
import JobPageDescription from "./JobPageDescription";
import JobPageFooter from "./JobPageFooter";

interface JobPageProps {
	params: {
		postedAt: string;
		contract: string;
		position: string;
		location: string;
		description: string;
		company: string;
		website: string;
		apply: string;
		logo: string;
		requirements: {
			content: string;
			items: [];
		};
		role: {
			content: string;
			items: [];
		};
	};
}

const JobPage = ({ params }: JobPageProps) => {
	if (!params) {
		return null; // or return a loading spinner, or some fallback UI
	}

	return (
		<div className="flex flex-col justify-center items-center">
			<JobPageHeader params={params} />
			<JobPageDescription params={params} />
			<JobPageFooter params={params} />
		</div>
	);
};
export default JobPage;
