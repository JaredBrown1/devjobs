import Image from "next/image";
import Link from "next/link";

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
			<div className="w-[730px] h-[140px] flex bg-white rounded-md">
				<div className="w-[140px]">
					<Image
						src={params.logo}
						alt="company logo"
						width={140}
						height={140}
					/>
				</div>
				<div className="flex justify-between w-[590px] p-12">
					<div>
						<h1 className="text-2xl font-bold">{params.company}</h1>
						<p>{params.company}.com</p>
					</div>
					<div>
						<Link href={params.website}>
							<button className="bg-[#5964E0] text-[#5964E0] bg-opacity-[0.2] w-[147px] h-[48px] rounded-md font-bold">
								Company Site
							</button>
						</Link>
					</div>
				</div>
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
