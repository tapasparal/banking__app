// import { useNavigate } from "react-router-dom";
// import Home from "../pages/Home";
// export default function HomeLoan() {
//     const navigate = useNavigate();
//     return (
//         <div className="w-full bg-white text-gray-900">

//             {/* ---------- HERO SECTION ---------- */}
//             <div
//                 className="w-full bg-cover bg-center py-24 px-6"
//                 style={{
//                     backgroundImage:
//                         "url('/images/HOUSE1.jpg')",
//                 }}
//             >
//                 <div className="max-w-5xl mx-auto bg-white/80 shadow-xl p-10 rounded-2xl backdrop-blur">
//                     <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
//                         Home Loan
//                     </h1>

//                     <p className="text-3xl font-semibold text-blue-700 mt-4">
//                         8.25% <span className="text-sm text-gray-600">starting from</span>
//                     </p>

//                     <button onClick={() => navigate("/emi-calculator")} className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
//                         EMI Calculator
//                     </button>
//                 </div>
//             </div>

//             {/* ---------- ABOUT SECTION ---------- */}
//             <section className="max-w-5xl mx-auto px-6 py-16">
//                 <h2 className="text-3xl font-bold text-blue-900 mb-4">
//                     About Home Loan
//                 </h2>

//                 <p className="text-gray-700 leading-relaxed text-lg">
//                     To fulfil your dream of becoming the owner of a dwelling house, we
//                     provide home loans for construction or purchase of ready-built
//                     house/flat. Achieve all your aspirations with the right support,
//                     exactly when you need it.
//                 </p>
//             </section>

//             {/* ---------- FEATURES GRID ---------- */}
//             <section className="bg-blue-50 py-14 px-6">
//                 <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

//                     <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
//                         <h3 className="text-xl font-bold text-blue-900 mb-3">
//                             Maximum Loan Amount
//                         </h3>
//                         <p className="text-gray-700">
//                             Up to 30 Lac or 80% of project cost as per bank rules.
//                         </p>
//                     </div>

//                     <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
//                         <h3 className="text-xl font-bold text-blue-900 mb-3">
//                             Processing Fee
//                         </h3>
//                         <p className="text-gray-700">
//                             Processing fees decided by the bank authority from time to time.
//                         </p>
//                     </div>

//                     <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
//                         <h3 className="text-xl font-bold text-blue-900 mb-3">
//                             Purpose
//                         </h3>
//                         <p className="text-gray-700">
//                             Construction or purchase of ready-built house / flat.
//                         </p>
//                     </div>

//                     <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
//                         <h3 className="text-xl font-bold text-blue-900 mb-3">
//                             Repayment Period
//                         </h3>
//                         <p className="text-gray-700">
//                             Up to 20 years. Not beyond 60 years for salaried & 70 years for professionals/businessmen.
//                         </p>
//                     </div>

//                 </div>
//             </section>

//             {/* ---------- ELIGIBILITY SECTION ---------- */}
//             <section className="max-w-5xl mx-auto px-6 py-16">
//                 <h2 className="text-3xl font-bold text-blue-900 mb-6">Eligibility</h2>

//                 <div className="space-y-8">

//                     <div>
//                         <h3 className="text-xl font-bold text-blue-800 mb-2">
//                             General Eligibility
//                         </h3>
//                         <p className="text-gray-700">
//                             Salaried, self-employed & professionals in private/public sector can apply.
//                         </p>
//                     </div>

//                     <div>
//                         <h3 className="text-xl font-bold text-blue-800 mb-2">
//                             Permanent Employee
//                         </h3>
//                         <p className="text-gray-700">
//                             State/Central Govt employees, Govt aided schools, colleges &
//                             statutory bodies can become eligible.
//                         </p>
//                     </div>

//                     <div>
//                         <h3 className="text-xl font-bold text-blue-800 mb-2">
//                             Businessman
//                         </h3>
//                         <p className="text-gray-700">
//                             Max age 50 years. Repayment period must ensure age does not exceed 60 years.
//                         </p>
//                     </div>

//                     <div>
//                         <h3 className="text-xl font-bold text-blue-800 mb-2">
//                             Credit Rating
//                         </h3>
//                         <p className="text-gray-700">
//                             Applicant must meet the bank-specified credit score.
//                         </p>
//                     </div>

//                 </div>
//             </section>

//         </div>
//     );
// }


import { useNavigate } from "react-router-dom";

export default function HomeLoan() {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-white text-gray-900">

            {/* ================= HERO SECTION ================= */}
            <div
                className="w-full bg-cover bg-center py-20 sm:py-24 px-4 sm:px-6"
                style={{
                    backgroundImage: "url('/images/HOUSE1.jpg')"
                }}
            >
                <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md shadow-lg p-6 sm:p-10 rounded-2xl text-center sm:text-center">

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                        Home Loan
                    </h1>

                    <p className="text-2xl sm:text-3xl font-semibold text-blue-700 mt-4">
                        8.25%
                        <span className="text-sm text-gray-700 ml-2">
                            starting from
                        </span>
                    </p>

                    <button
                        onClick={() => navigate("/emi-calculator")}
                        className="mt-6 px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl shadow hover:bg-blue-800 transition"
                    >
                        EMI Calculator
                    </button>
                </div>
            </div>

            {/* ================= ABOUT SECTION ================= */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
                    About Home Loan
                </h2>

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    To fulfil your dream of becoming the owner of a dwelling house, we
                    provide home loans for construction or purchase of ready-built
                    house/flat. Achieve all your aspirations with the right support,
                    exactly when you need it.
                </p>
            </section>

            {/* ================= FEATURES GRID ================= */}
            <section className="bg-blue-50 py-12 sm:py-14 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6 md:gap-10">

                    {/* Feature Card */}
                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3">
                            Maximum Loan Amount
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base">
                            Up to 30 Lac or 80% of project cost as per bank rules.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3">
                            Processing Fee
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base">
                            Processing fees decided by the bank authority from time to time.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3">
                            Purpose
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base">
                            Construction or purchase of ready-built house / flat.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3">
                            Repayment Period
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base">
                            Up to 20 years.
                            Not beyond 60 years for salaried & 70 years for professionals/businessmen.
                        </p>
                    </div>

                </div>
            </section>

            {/* ================= ELIGIBILITY SECTION ================= */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">
                    Eligibility
                </h2>

                <div className="space-y-8">

                    <div>
                        <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2">
                            General Eligibility
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base">
                            Salaried, self-employed & professionals in private/public sector can apply.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2">
                            Permanent Employee
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base">
                            State/Central Govt employees, Govt aided schools, colleges & statutory bodies can become eligible.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2">
                            Businessman
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base">
                            Max age 50 years. Repayment period must ensure age does not exceed 60 years.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2">
                            Credit Rating
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base">
                            Applicant must meet the bank-specified credit score.
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
}
