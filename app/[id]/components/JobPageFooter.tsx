import Link from "next/link";

interface JobPageProps {
	params: {
		position: string;
		company: string;
		apply: string;
	};
}

const JobPageFooter = ({ params }: JobPageProps) => {
	return (
		<div className="w-full h-[96px] bg-white mt-[80px]">
			<div className="flex justify-between items-center w-[730px] mx-auto pt-5">
				<div>
					<h1 className="font-bold text-[20px]">{params.position}</h1>
					<p>{params.company}</p>
				</div>
				<div>
					<Link href={params.apply}>
						<button className="bg-[#5964E0] text-white w-[141px] h-[48px] rounded-md">
							Apply Now
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default JobPageFooter;
