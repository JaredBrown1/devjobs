import JobPageHeader from "./JobPageHeader";

interface JobPageProps {
	params: {
		postedAt: string;
		contract: string;
		position: string;
		location: string;
		description: string;
		company: string;
		website: string;
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
			<div className="w-[730px] h-[1257px] flex bg-white rounded-md flex-col mt-10 p-[48px]">
				<div className="flex justify-between">
					<div>
						{" "}
						<div className="flex">
							<p>{params.postedAt}</p>
							<p>{params.contract}</p>
						</div>
						<div>
							<h1 className="font-bold text-[28px]">{params.position}</h1>
						</div>
						<div>
							<h1>{params.location}</h1>
						</div>
					</div>
					<div>
						<button className="bg-[#5964E0] text-white w-[141px] h-[48px] rounded-md">
							Apply Now
						</button>
					</div>
				</div>
				<div className="pt-11">
					<p>{params.description}</p>
				</div>
				<div className="pt-11">
					<h1>Requirements</h1>
					<p className="pt-6 pb-11">{params.requirements.content}</p>
					<ul className="list-disc">
						{params.requirements.items.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
				<div>
					<h1 className="pt-11">What you will do</h1>
					<p className="pt-11">{params.role.content}</p>
					<ul className="list-decimal pt-11">
						{params.role.items.map((item) => (
							<li className="" key={item}>
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
			<div>Footer</div>
		</div>
	);
};
export default JobPage;
