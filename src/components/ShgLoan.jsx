import { useNavigate } from "react-router-dom";

export default function ShgLoan() {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-gray-100 text-gray-800">

            {/* Header Section */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
                <img
                    src="/images/shg.png"
                    alt="Personal Loan"
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 text-center">
                    <h1 className="text-white text-3xl md:text-4xl font-bold tracking-wide">
                        SHG LOAN
                    </h1>

                    <p className="text-blue-300 text-3xl md:text-4xl font-bold mt-2">
                        2.0 %
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
                            About Shg Loan
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                            An SHG Loan is a type of loan provided to Self Help Groups, usually women’s groups, formed to promote savings and financial independence at the grassroots level.
                            These loans are commonly offered by Cooperative Banks, Rural Banks, Commercial Banks, and Microfinance institutions.
                        </p>
                    </div>

                    {/* Eligibility Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4">
                            Eligibility
                        </h2>

                        <ul className="space-y-4">
                            {[
                                "Women should form the group",
                                "Must be a member of the Society/Bank.",
                                "Membership minimum 5 and maximum 20.",
                                "Uninterrupted savings for 6 months or more by all the members.",
                                "Monthly savings of member of a group will be minimum of Rs. 50 and maximum Rs. 500"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-blue-600 text-xl">✔</span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
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
                                "Small businesses (tailoring, shop, food processing)",
                                "Agriculture and allied activities",
                                "Livestock (goatery, poultry, dairy)",
                                "Household emergencies",
                                "Education or health needs (depending on bank rules)"
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
                            Limit of Loan
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                            Will be fixed as per circular of the Bank (Minimum 50,000.00 & Maximum 10,00,000.00)
                        </p>
                    </div>

                    {/* Interest Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4">
                            Rate of interest:
                        </h2>

                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Such rate as may be Notified from time to time
                        </p>
                    </div>

                    {/* Repayment Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4">
                            Repayment period:
                        </h2>

                        <p className="mt-4 text-gray-700 leading-relaxed">
                            In case of Term loan, group should repay the loan amount in 24 monthly Instalments
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
