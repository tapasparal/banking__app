// import { useNavigate } from "react-router-dom";

// export default function VehicleLoan() {
//     const navigate = useNavigate();

//     return (
//         <div className="w-full bg-gray-50 text-gray-800">
//             {/* Header Section */}
//             <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
//                 <img
//                     src="/images/Vehicle1.jpg"
//                     alt="Vehicle Loan"
//                     className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black/40"></div>

//                 <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-28 text-white">
//                     <p className="text-sm md:text-base uppercase tracking-wide mb-2">Home / Loan Product / Vehicle Loan</p>
//                     <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Vehicle Loan</h1>

//                     <div className="mt-6 flex items-center gap-6">
//                         <div>
//                             <p className="text-4xl font-semibold text-pink-400">9.5%</p>
//                             <p className="text-sm opacity-80">#starting from</p>
//                         </div>

//                         <button
//                             onClick={() => navigate("/emi-calculator")}
//                             className="px-6 py-3 bg-pink-500 hover:bg-pink-600 transition rounded-lg font-semibold shadow-lg"
//                         >
//                             EMI CALCULATOR
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* About Section */}
//             <div className="max-w-6xl mx-auto px-6 py-12">
//                 <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">About Vehicle Loan</h2>
//                 <p className="leading-relaxed text-gray-700 text-lg">
//                     To fulfil your dream to become an owner of a dwelling house, we have a commitment to extend our hand as far as possible. In this regard we are providing loan for construction of dwelling house or purchase of ready built house/flat etc.
//                 </p>
//             </div>

//             {/* Loan Details Grid */}
//             <div className="w-full bg-white py-10">
//                 <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
//                     <div>
//                         <h3 className="text-xl font-semibold text-blue-900 mb-2">Maximum amount of Loan</h3>
//                         <p className="text-gray-700">
//                             On-Road Cost of the vehicle minus margin money subject to maximum of Rs.10,00,000/- Only.
//                         </p>
//                     </div>

//                     <div>
//                         <h3 className="text-xl font-semibold text-blue-900 mb-2">Repayment</h3>
//                         <p className="text-gray-700">
//                             Maximum 36 Months for two wheelers and 60 months for others.
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Margin & Eligibility */}
//             <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
//                 <div>
//                     <h3 className="text-xl font-semibold text-blue-900 mb-2">Margin Money</h3>
//                     <p className="text-gray-700">25% margin or own contribution on On-road price of the vehicle.</p>
//                 </div>

//                 <div>
//                     <h3 className="text-xl font-semibold text-blue-900 mb-2">Eligibility</h3>
//                     <p className="text-gray-700 leading-relaxed">
//                         Any salaried, self-employed or professional Public and Private companies, Government sector employees including Public Sector is eligible for a personal loan.
//                     </p>
//                     <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-2">
//                         <li>The applicant must be a permanent resident of Murshidabad District, or he/she must have a salary account min. of 6 months old in any bank branch of Murshidabad District.</li>
//                         <li>Annual income of the applicant must NOT be less than Rs.2,50,000/- Only.</li>
//                         <li>Age group: 18 to 55 years with valid Driving License.</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }


import { useNavigate } from "react-router-dom";

export default function VehicleLoan() {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-white text-gray-800">
            {/* Header Section */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
                <img
                    src="/images/Vehicle1.jpg"
                    alt="Vehicle Loan"
                    className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-28 text-white">
                    <p className="text-sm md:text-base uppercase tracking-wide mb-2 opacity-80">
                        Home / Loan Product / Vehicle Loan
                    </p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg">
                        Vehicle Loan
                    </h1>

                    <div className="mt-6 flex items-center gap-6">
                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg">
                            <p className="text-4xl font-extrabold text-blue-300">9.5%</p>
                            <p className="text-sm opacity-90">#starting from</p>
                        </div>

                        <button
                            onClick={() => navigate("/emi-calculator")}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-semibold shadow-xl hover:shadow-blue-300/50 duration-300"
                        >
                            EMI CALCULATOR
                        </button>
                    </div>
                </div>
            </div>

            {/* About */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
                    About Vehicle Loan
                </h2>
                <p className="leading-relaxed text-gray-700 text-lg">
                    To fulfil your dream to become an owner of a vehicle, we provide hassle-free and flexible loan facilities for purchasing your desired two-wheeler or four-wheeler.
                </p>
            </div>

            {/* Card Section */}
            <div className="max-w-6xl mx-auto px-6 pb-12 grid gap-8 md:grid-cols-2">
                {/* Card 1 */}
                <div className="p-6 bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                        Maximum Amount of Loan
                    </h3>
                    <p className="text-gray-700">
                        On-Road Cost of the vehicle minus margin money subject to maximum of Rs.10,00,000/- Only.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="p-6 bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Repayment</h3>
                    <p className="text-gray-700">
                        Maximum 36 Months for two wheelers and 60 months for others.
                    </p>
                </div>
            </div>

            {/* Long Section */}
            <div className="max-w-6xl mx-auto px-6 pb-16 grid gap-8 md:grid-cols-2">
                {/* Margin */}
                <div className="p-6 bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Margin Money</h3>
                    <p className="text-gray-700">25% margin on On-road price of the vehicle.</p>
                </div>

                {/* Eligibility */}
                <div className="p-6 bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Eligibility</h3>
                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                        <li>Applicant must be a permanent resident of Murshidabad District or must have a 6-month salary account in any bank branch within Murshidabad District.</li>
                        <li>Annual income must not be less than Rs.2,50,000/- Only.</li>
                        <li>Age: 18 to 55 years with a valid Driving License.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
