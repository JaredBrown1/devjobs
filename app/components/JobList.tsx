"use client";

import { useState } from "react";

import JobCard from "./JobCard";

import Data from "../data.json";

const JobList = ({ params }: any) => {
	return (
		<div className="w-[1150px] flex flex-wrap justify-center pt-[40px]">
			{params.map((job: any) => (
				<JobCard key={job.id} params={job} />
			))}
		</div>
	);
};
export default JobList;
