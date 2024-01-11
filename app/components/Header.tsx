import Image from "next/image";
import SearchBar from "./SearchBar";

const Header = () => {
	return (
		<div className="flex flex-col justify-between bg-header-pattern bg-no-repeat h-[160px] w-full pt-[44px]">
			<div className="flex justify-between">
				<div className="pl-[165px]">
					<Image
						src="/assets/desktop/logo.svg"
						width={115}
						height={32}
						alt="logo"
					/>
				</div>

				<div className="flex flex-row pr-[188px]">
					<span className="p-1 pr-3">
						<Image
							src="assets/desktop/icon-sun.svg"
							height={24}
							width={20}
							alt="sun"
						/>
					</span>
					<div>
						<label className="relative inline-flex items-center cursor-pointer">
							<input type="checkbox" value="" className="sr-only peer" />
							<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
						</label>
					</div>
					<span className="p-1 pl-3">
						<Image
							src="assets/desktop/icon-moon.svg"
							height={24}
							width={15}
							alt="sun"
						/>
					</span>
				</div>
			</div>
		</div>
	);
};
export default Header;
