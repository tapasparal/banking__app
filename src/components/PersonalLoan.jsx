// import { useNavigate } from "react-router-dom";

// export default function PersonalLoan() {
//     const navigate = useNavigate();

//     return (
//         <div className="w-full bg-gray-50 text-gray-800">

//             {/* Header Section */}
//             <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
//                 <img
//                     src="/images/Vehicle1.jpg"
//                     alt="Personal Loan"
//                     className="w-full h-full object-cover"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 text-center">
//                     <h1 className="text-white text-3xl md:text-4xl font-bold tracking-wide">
//                         PERSONAL LOAN
//                     </h1>
//                     <p className="text-pink-400 text-3xl md:text-4xl font-bold mt-2">
//                         13.50 %
//                     </p>
//                     <p className="text-gray-200 text-sm">#starting from</p>

//                     <button
//                         onClick={() => navigate("/emi-calculator")}
//                         className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-xl shadow hover:bg-pink-700 transition"
//                     >
//                         EMI CALCULATOR
//                     </button>
//                 </div>
//             </div>

//             {/* About Section */}
//             <div className="max-w-6xl mx-auto px-6 py-10">
//                 <h2 className="text-2xl font-semibold text-gray-900">
//                     About Personal Loan
//                 </h2>

//                 <p className="mt-4 text-gray-700 leading-relaxed">
//                     Any salaried person except employee of Private concern with certain
//                     terms and conditions.
//                 </p>
//             </div>

//             {/* Purpose Section */}
//             <div className="max-w-6xl mx-auto px-6 py-10 bg-white rounded-xl shadow">
//                 <h2 className="text-2xl font-semibold text-gray-900 mb-4">Purpose</h2>

//                 <ul className="space-y-3 text-gray-700">
//                     <li className="flex items-start gap-2">
//                         <span className="text-blue-600 text-xl">✔</span>
//                         For repairing of own house.
//                     </li>
//                     <li className="flex items-start gap-2">
//                         <span className="text-blue-600 text-xl">✔</span>
//                         For Higher Education.
//                     </li>
//                     <li className="flex items-start gap-2">
//                         <span className="text-blue-600 text-xl">✔</span>
//                         For Marriage of Dependent Son, Daughter & Sister.
//                     </li>
//                     <li className="flex items-start gap-2">
//                         <span className="text-blue-600 text-xl">✔</span>
//                         For Specialized Medical treatment & purchase of Consumer’s durable products.
//                     </li>
//                 </ul>
//             </div>

//             {/* Eligibility Section */}
//             <div className="max-w-6xl mx-auto px-6 py-10">
//                 <h2 className="text-2xl font-semibold text-gray-900">Eligibility</h2>

//                 <p className="mt-4 text-gray-700 leading-relaxed">
//                     Any salaried, self-employed or professional Public and Private companies,
//                     Government sector employees including Public Sector is eligible for a
//                     personal loan.
//                 </p>
//             </div>

//             {/* Maximum Loan Section */}
//             <div className="max-w-6xl mx-auto px-6 py-10 bg-white rounded-xl shadow mb-10">
//                 <h2 className="text-2xl font-semibold text-gray-900">
//                     Maximum amount of Loan
//                 </h2>
//                 <p className="mt-4 text-gray-700 leading-relaxed">
//                     Maximum quantum of loan 10.00 Lac
//                 </p>
//             </div>
//         </div>
//     );
// }


import { useNavigate } from "react-router-dom";

export default function PersonalLoan() {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-gray-100 text-gray-800">

            {/* Header Section */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
                <img
                    src="/images/personal1.jpg"
                    alt="Personal Loan"
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 text-center">
                    <h1 className="text-white text-3xl md:text-4xl font-bold tracking-wide">
                        PERSONAL LOAN
                    </h1>

                    <p className="text-blue-300 text-3xl md:text-4xl font-bold mt-2">
                        13.50 %
                    </p>
                    <p className="text-gray-200 text-sm">#starting from</p>

                    <button
                        onClick={() => navigate("/emi-calculator")}
                        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
                    >
                        EMI CALCULATOR
                    </button>
                </div>
            </div>

            {/* Main Container */}
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* LEFT COLUMN — About + Eligibility */}
                <div className="col-span-2 space-y-8">

                    {/* About Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3">
                            About Personal Loan
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Any salaried person except employee of Private concern
                            with certain terms and conditions.
                        </p>
                    </div>

                    {/* Eligibility Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3">
                            Eligibility
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Any salaried, self-employed or professional Public and
                            Private companies, Government sector employees including
                            Public Sector is eligible for a personal loan.
                        </p>
                    </div>
                </div>

                {/* RIGHT COLUMN — Purpose */}
                <div className="space-y-8">

                    {/* Purpose Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4">
                            Purpose
                        </h2>

                        <ul className="space-y-4">
                            {[
                                "For repairing of own house.",
                                "For Higher Education.",
                                "For Marriage of Dependent Son, Daughter & Sister.",
                                "For Specialized Medical treatment & purchase of Consumer’s durable products.",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-blue-600 text-xl">✔</span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Max Loan Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3">
                            Maximum Loan Amount
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Maximum quantum of loan 10.00 Lac
                        </p>
                    </div>

                    {/* Repayment Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4">
                            Repayment Period
                        </h2>

                        <ul className="space-y-4">
                            {[
                                "Maximum period would be 10 years for salary linked employee with some terms & conditions.",
                                "Maximum period would be 5 years in case of without salary linked employee with some terms and conditions",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-blue-600 text-xl">✔</span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

