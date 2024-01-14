import Image from "next/image";
import Link from "next/link";

interface JobPageHeaderProps {
	params: {
		company: string;
		website: string;
		logo: string;
	};
}

const JobPageHeader = ({ params }: JobPageHeaderProps) => {
	return (
		<div className="w-[730px] h-[140px] flex bg-white rounded-md mt-[-50px]">
			<div className="w-[140px]">
				<Image src={params.logo} alt="company logo" width={140} height={140} />
			</div>
			<div className="flex justify-between w-[590px] p-12">
				<div>
					<h1 className="text-2xl font-bold">{params.company}</h1>
					<p>{params.company}.com</p>
				</div>
				<div>
					<Link href={params.website}>
						<button className="bg-[#5964E0] text-[#5964E0] bg-opacity-[0.2] w-[147px] h-[48px] rounded-md font-bold hover:bg-opacity-[0.3512]">
							Company Site
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default JobPageHeader;
