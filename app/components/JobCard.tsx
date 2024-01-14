import Image from "next/image";
import Link from "next/link";

interface JobCardProps {
	params: {
		id: string;
		logo: string;
		postedAt: string;
		contract: string;
		company: string;
		location: string;
		position: string;
	};
}

const JobCard = ({ params }: JobCardProps) => {
	if (!params) {
		return null; // or return a loading spinner, or some fallback UI
	}

	return (
		<Link href={`${params.id}`}>
			<div className="w-[350px] h-[228px] bg-white rounded-md m-[15px] mt-12 pl-6 pt-2">
				<div className="mt-[-20px]">
					<Image
						src={params.logo}
						alt="Picture of the author"
						width={50}
						height={50}
						className="rounded-2xl"
					/>
				</div>
				<div>
					<div className="">
						<div className="flex pt-[24px]">
							<p className="text-[#6E8098]">{params.postedAt}</p>
							<span className="pl-2 pr-2 text-[#5964e0] text-xl">•</span>
							<p className="text-[#6E8098]">{params.contract}</p>
						</div>

						<h1 className="pt-[12px] font-bold text-xl hover:text-[#6E8098]">
							{params.position}
						</h1>

						<p className="pt-[12px] text-[#6E8098]">{params.company}</p>
					</div>
				</div>
				<div className="pt-6 text-[#5964e0] font-bold">{params.location}</div>
			</div>
		</Link>
	);
};
export default JobCard;
