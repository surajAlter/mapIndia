import React, { useState } from "react";

const Ladakh = () => {
	const districts = ["Leh", "Kargil"];

	const districtInfo = {
		Leh: `The district and administrative center known for its Buddhist monasteries, rugged mountains, and high-altitude landscapes.`,
		Kargil: `A historic district famed for its dramatic mountain scenery, strategic significance, and cultural heritage.`,
	};

	const [selectedDistrict, setSelectedDistrict] = useState("Leh");

	return (
		<div className="flex flex-col md:flex-row px-4 sm:px-10 md:px-20 py-10 text-[#333] gap-10">
			{/* Left Sidebar */}
			<div className="md:w-1/4 w-full bg-gray-100 rounded-lg shadow-md p-4 h-fit sticky top-10">
				<h2 className="text-xl font-bold mb-4 text-[#2E3A59]">
					Districts
				</h2>
				<ul className="space-y-2">
					{districts.map((district) => (
						<li
							key={district}
							className={`cursor-pointer px-3 py-2 rounded-md ${
								selectedDistrict === district
									? "bg-amber-600 text-white font-semibold"
									: "hover:bg-amber-100"
							}`}
							onClick={() => setSelectedDistrict(district)}
						>
							{district}
						</li>
					))}
				</ul>
			</div>

			{/* Center Content */}
			<div className="md:w-2/4 w-full space-y-10">
				{/* State Image */}
				<div className="w-full h-64 sm:h-96">
					<img
						src={require("../../assets/State/Ladakh/Ladakh.jpg")}
						alt="Ladakh"
						className="w-full h-full object-contain rounded-lg shadow-md"
					/>
				</div>
				{/* State Info */}
				<section>
					<h1 className="text-4xl font-bold text-[#2E3A59] mb-4">
						Ladakh
					</h1>
					<p className="text-lg leading-7">
						Ladakh, located in the northernmost region, is
						celebrated for its stark high-altitude desert
						landscapes, ancient Buddhist culture, and adventure
						opportunities.
					</p>
				</section>
				{/* Quick Facts */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Quick Facts
					</h2>
					<ul className="list-disc list-inside space-y-1">
						<li>
							<strong>Capital:</strong> Leh
						</li>
						<li>
							<strong>Area:</strong> 59,146 sq km
						</li>
						<li>
							<strong>Population:</strong> ~274,000
						</li>
						<li>
							<strong>Official Languages:</strong> Ladakhi, Urdu,
							English
						</li>
					</ul>
				</section>
				{/* Tourism */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Tourism
					</h2>
					<p className="text-lg leading-7 mb-2">
						From ancient monasteries and breathtaking mountain
						passes to thrilling adventure treks, Ladakh offers a
						unique travel experience.
					</p>
					<ul className="list-disc list-inside space-y-1">
						<li>Pangong Lake</li>
						<li>Nubra Valley</li>
						<li>Magnetic Hill</li>
					</ul>
				</section>
				{/* Geography & Climate */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Geography & Climate
					</h2>
					<p className="text-lg leading-7">
						Characterized by rugged terrain and sparse vegetation,
						Ladakh's arid climate offers cold winters and mild
						summers with a brief monsoon period.
					</p>
				</section>
				{/* Transport */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Transport
					</h2>
					<div className="grid md:grid-cols-2 gap-4">
						<div>
							<h3 className="font-semibold text-lg">Air</h3>
							<ul className="list-disc list-inside">
								<li>Leh Airport</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold text-lg">Road</h3>
							<ul className="list-disc list-inside">
								<li>National Highways & mountain roads</li>
							</ul>
						</div>
					</div>
				</section>
				{/* Government */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Government
					</h2>
					<ul className="list-disc list-inside">
						<li>Administered as a Union Territory</li>
						<li>Divided into two districts</li>
					</ul>
				</section>
			</div>

			{/* Right Sidebar: District Info */}
			<div className="md:w-1/4 w-full bg-white rounded-lg shadow-md p-6 h-fit sticky top-10">
				<h2 className="text-2xl font-bold mb-4 text-[#2E3A59] border-b pb-2">
					{selectedDistrict} District
				</h2>
				<p className="text-lg leading-relaxed text-gray-700">
					{districtInfo[selectedDistrict]}
				</p>
				<div className="mt-6">
					<h3 className="text-lg font-semibold mb-2">Key Features</h3>
					<ul className="list-disc list-inside space-y-1 text-gray-600">
						{selectedDistrict === "Leh" && (
							<>
								<li>Ancient Monasteries</li>
								<li>Scenic Mountain Views</li>
								<li>Cultural Heritage</li>
							</>
						)}
						{selectedDistrict === "Kargil" && (
							<>
								<li>Historic Sites</li>
								<li>Rugged Landscapes</li>
								<li>Cultural Traditions</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Ladakh;
