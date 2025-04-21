import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import PunjabMap from "../../assets/State/Punjab/PunjabDistrict.svg";

const districts = [
	"Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Bathinda",
	"Mohali", "Firozpur", "Hoshiarpur", "Kapurthala", "Moga",
	"Pathankot", "Rupnagar", "Sangrur", "Fazilka", "Barnala", "Faridkot",
];

const districtInfo = {
	Amritsar: `Spiritual capital housing the Golden Temple...`,
	Ludhiana: `Industrial powerhouse known as 'Manchester of India'...`,
	Jalandhar: `Sports equipment manufacturing hub...`,
	Patiala: `City of royalty with Qila Mubarak complex...`,
	Bathinda: `Energy hub with thermal plants and oil refinery...`,
	Mohali: `IT and technology hub adjacent to Chandigarh...`,
	Firozpur: `Border district with important military presence...`,
	Hoshiarpur: `Agricultural district famous for wood craftsmanship...`,
	Kapurthala: `'Paris of Punjab' with French-inspired architecture...`,
	Moga: `Agricultural heartland with major dairy cooperatives...`,
	Pathankot: `Gateway to Himachal Pradesh and Jammu...`,
	Rupnagar: `Ancient site of Indus Valley civilization...`,
	Sangrur: `Agricultural research hub...`,
	Fazilka: `Border town with unique 'Gabria' festival...`,
	Barnala: `Textile manufacturing center...`,
	Faridkot: `Historical principality with architectural landmarks...`,
};

const Punjab = () => {
	const [selectedDistrict, setSelectedDistrict] = useState("Amritsar");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="flex flex-col md:flex-row min-h-screen bg-[#f9fafb] text-[#333]">
			{/* Mobile menu button */}
			<div className="md:hidden bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-20">
				<h1 className="text-xl font-bold text-orange-600">Punjab</h1>
				<button onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* Sidebar */}
			<aside
				className={`md:w-1/4 w-full bg-white border-r px-4 py-6 shadow-sm z-10 transition-all duration-300 ${
					isMenuOpen ? "block" : "hidden"
				} md:block`}
			>
				<h2 className="text-2xl font-bold mb-4 text-[#2E3A59]">Districts</h2>
				<ul className="space-y-2">
					{districts.map((district) => (
						<li
							key={district}
							className={`cursor-pointer px-3 py-2 rounded-md transition-all duration-300 ${
								selectedDistrict === district
									? "bg-orange-600 text-white font-semibold"
									: "hover:bg-orange-100"
							}`}
							onClick={() => {
								setSelectedDistrict(district);
								setIsMenuOpen(false); // close menu on selection (mobile)
							}}
						>
							{district}
						</li>
					))}
				</ul>
			</aside>

			{/* Main Content */}
			<main className="flex-1 px-6 py-10 space-y-10">
				{/* Image */}
				<div className="w-full h-64 sm:h-96">
					<img
						src={PunjabMap}
						alt="Punjab District Map"
						className="w-full h-full object-cover rounded-lg shadow-md"
					/>
				</div>

				{/* Info Section */}
				<section>
					<h1 className="text-4xl font-bold text-[#2E3A59] mb-4">Punjab</h1>
					<p className="text-lg leading-7">
						The vibrant heart of North India, Punjab is a land of fertile
						fields, spiritual grandeur, and cultural richness...
					</p>
				</section>

				{/* District Info */}
				<section className="mt-10 border-t pt-6">
					<h2 className="text-3xl font-semibold text-orange-600 mb-2">
						{selectedDistrict} District
					</h2>
					<p className="text-lg text-gray-700">
						{districtInfo[selectedDistrict]}
					</p>

					<div className="mt-6">
						<h3 className="text-lg font-semibold mb-2">Key Features</h3>
						<ul className="list-disc list-inside space-y-1 text-gray-600">
							{selectedDistrict === "Amritsar" && (
								<>
									<li>Golden Temple Complex</li>
									<li>Jallianwala Bagh</li>
									<li>Handicraft Markets</li>
								</>
							)}
							{selectedDistrict === "Ludhiana" && (
								<>
									<li>Cycle Industry Cluster</li>
									<li>Punjab Agricultural University</li>
									<li>Rakh Bagh Park</li>
								</>
							)}
						</ul>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Punjab;
