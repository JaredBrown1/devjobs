import Image from "next/image";

interface JobCardProps {
	params: {
		logo: string;
		postedAt: string;
		contract: string;
		company: string;
		location: string;
	};
}

const JobCard = ({ params }: JobCardProps) => {
	if (!params) {
		return null; // or return a loading spinner, or some fallback UI
	}

	return (
		<div className="w-[350px] h-[228px] bg-white rounded-md m-[30px]">
			<div>
				<Image
					src={params.logo}
					alt="Picture of the author"
					width={20}
					height={20}
				/>
			</div>
			<div>
				<div>
					<p>{params.postedAt}</p>
					<p>{params.contract}</p>
					<p>{params.company}</p>
				</div>
			</div>
			<div>{params.location}</div>
		</div>
	);
};
export default JobCard;
