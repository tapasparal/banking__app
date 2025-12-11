
import { useNavigate } from "react-router-dom";

export default function TermLoan() {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-gray-100 text-gray-800">

            {/* Header Section */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
                <img
                    src="/images/term001.jpg"
                    alt="Term Loan"
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 text-center">
                    <h1 className="text-white text-3xl md:text-4xl font-bold tracking-wide">
                        TERM LOAN
                    </h1>

                    <p className="text-blue-300 text-3xl md:text-4xl font-bold mt-2">
                        Flexi %
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
                            About Term Loan
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                            A Term Loan is a type of loan provided by banks or financial institutions for a fixed period (term) with a fixed or variable interest rate. Borrowers repay the loan in regular installments (EMIs) over the chosen duration.
                        </p>
                    </div>

                    {/* Eligibility Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3">
                            Eligibility
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Loanee must have S/B a/c at least 6 months old with MDCCB.",
                                "In case non salary earners (self- employed/ businessman) last three years income tax return filed by the applicant and in case of LIC Agents etc. Form 16A showing the commission/ interest received by the applicant during the year is to be obtained. An acceptable valid document to justify the stated income has to be submitted by the applicant",
                                "Project/ Scheme must be certified either by the government approved architect/ civil engineer or by a competent authority like NABARD, DIC etc. as the case may be. The project is to be located within the district of Murshidabad.",
                                "Farmer applicant/s must have own agricultural land and business to support his/ their income statement.",
                            ].map((item, i) => (
                                <li
                                    key={i}
                                    className="flex gap-3 items-start bg-blue-50/40 px-3 py-2 rounded-xl 
                           shadow-sm hover:bg-blue-100/70 transition-all flex-wrap"
                                >
                                    <span className="text-blue-600 text-lg mt-1">✔</span>

                                    <span className="text-gray-700 break-words leading-relaxed text-justify overflow-hidden">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* RIGHT COLUMN — Purpose */}
                <div className="space-y-8">

                    {/* Purpose Card */}
                    {/* <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4">
                            Purpose
                        </h2>

                        <ul className="space-y-4 text-justify overflow-hidden">
                            {[
                                "Cultivation of crop.",
                                "Minor irrigation",
                                "Farm mechanization",
                                "Floriculture",
                                "Animal husbandry",
                                "Pisciculture/sericulture/Horticulture/Plantation/Social Foresty/Agri Hub etc.",
                                "Any Govt. sponsored scheme."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-blue-600 text-xl">✔</span>
                                    <span className="text-gray-700 leading-relaxed text-justify">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div> */}
                    <div className="w-full bg-white shadow-lg rounded-2xl p-6 md:p-8 border border-blue-100
                hover:shadow-2xl transition-all duration-300">

                        {/* Heading */}
                        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-3 mb-6">
                            <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
                            Purpose
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                            👉 Self-employment Scheme for local youth.
                            👉 Any Industrial Unit
                            👉 Any Service Unit
                        </p>

                    </div>


                    {/* Interest Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3">
                            Rate of interest:
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                            Such rate as may be Notified from time to time by the Bank.
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3">
                            Quantum of Loan
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                            Maximum amount of Term Loan in case of MSME at the initial stage should not be more than Rs. 2 lac per borrower. However, higher amount of loan up to Rs.5 lac may be considered depending upon the financial integrity and past transaction of the borrower.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3">
                            REPAYMENT
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                            Not more than 84 EMI
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3">
                            Moratorium Period
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                            Maximum 6 month (if applicable)
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}