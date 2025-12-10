import { useNavigate } from "react-router-dom";

export default function EccsLoan() {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-gray-100 text-gray-800">

            {/* Header Section */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
                <img
                    src="/images/eccs.jpg"
                    alt="Personal Loan"
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 text-center">
                    <h1 className="text-white text-3xl md:text-4xl font-bold tracking-wide">
                        ECCS LOAN
                    </h1>

                    <p className="text-blue-300 text-3xl md:text-4xl font-bold mt-2">
                        11.25 %
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
                            About Eccs Loan
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                            An ECCS Loan is a type of loan offered by an Employees’ Credit Cooperative Society to its members.
                            These societies are formed by employees within an organisation (government office, PSU, private company, bank, etc.) to help each other financially.
                            Only members of the society can take this loan.
                        </p>
                    </div>

                    {/* Eligibility Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4">
                            Eligibility
                        </h2>

                        <ul className="space-y-4">
                            {[
                                "ECCS must be formed by the Staff/Employees of Govt./Govt. undertaking Organization along with Co-operative Institution, local self-Govt. Institution/Statutory Bodies etc",
                                "The ECCS must be affiliated by the Bank with up-to-date Audit Report.",
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
                                "House Building or House Repairing",
                                "Purchase of Land & Building.",
                                "Expenses of Higher Education/Medical Expenses/Marriage Expenses",
                                "Liquidation of Small debt/Consumption expenses",
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
                        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                            In case of Home Loan the maximum amount of loan will be 80% of the project cost with some terms and conditions and other cases Bank may decide the loan amount on the basis of its Rules and Regulations.
                        </p>
                    </div>

                    {/* Interest Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4">
                            INTEREST
                        </h2>

                        <p className="mt-4 text-gray-700 leading-relaxed">
                            The interested may be decided by the Bank from time to time
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
