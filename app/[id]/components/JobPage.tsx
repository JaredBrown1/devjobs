import Image from "next/image";

interface JobPageProps {
	params: {
		postedAt: string;
		contract: string;
		position: string;
		location: string;
		description: string;
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
		<div>
			<div className="w-[730px] h-[140px] ">
				<div>
					<Image
						src={params.logo}
						alt="company logo"
						width={140}
						height={140}
					/>
				</div>
				<div></div>
			</div>
			<div>
				<div>
					<div>
						<p>{params.postedAt}</p>
						<p>{params.contract}</p>
					</div>
					<div>
						<h1>{params.position}</h1>
					</div>
					<div>
						<h1>{params.location}</h1>
					</div>
					<p>{params.description}</p>
				</div>
				<div>
					<h1>Requirements</h1>
					<p>{params.requirements.content}</p>
					{params.requirements.items.map((item) => (
						<p key={item}>{item}</p>
					))}
				</div>
				<div>
					<h1>What you will do</h1>
					<p>{params.role.content}</p>
					{params.role.items.map((item) => (
						<p key={item}>{item}</p>
					))}
				</div>
			</div>
			<div>Footer</div>
		</div>
	);
};
export default JobPage;