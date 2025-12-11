
import { useNavigate } from "react-router-dom";

export default function KccLoan() {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-gray-100 text-gray-800">

            {/* Header Section */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
                <img
                    src="/images/kcc.jpg"
                    alt="Personal Loan"
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 text-center">
                    <h1 className="text-white text-3xl md:text-4xl font-bold tracking-wide">
                        KCC LOAN
                    </h1>

                    <p className="text-blue-300 text-3xl md:text-4xl font-bold mt-2">
                        4.0 %
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
                            About Kcc Loan
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                            If you are doing agricultural activities & want to avail financial support, we are here at your door to assist you with a variety of agricultural loan product in a hassle free manner. In this sector we are also providing finance for floriculture, picsiculture, horticulture, animal husbandary, sericulture or any other government sponsored scheme. You can get loan for purchasing machineries like tractor, powertiller etc. to support agriculture.
                            As a member of our affiliated PACS or a direct member of the Bank you may approach to the Bank for loan in a lucrative rate of interest as fixed by the Bank.
                        </p>
                    </div>

                    {/* Eligibility Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3">
                            Eligibility
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Co-operative Society ,member of PACS, Nominal member of the Bank.
                        </p>
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

                        {/* List */}
                        <ul className="space-y-4">
                            {[
                                "Cultivation of crop.",
                                "Minor irrigation",
                                "Farm mechanization",
                                "Floriculture",
                                "Animal husbandry",
                                "Pisciculture/sericulture/Horticulture/Plantation/Social Foresty/Agri Hub etc.",
                                "Any Govt. sponsored scheme."
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


                    {/* Interest Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3">
                            Rate of interest:
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                            As may be decided by the Bank from time to time. For crop loan the lending rate Bank to Society is 5% and Society to Farmers is 7% in other cases bank may decide the rate of interest from time to time.
                        </p>
                    </div>

                    {/* Repayment Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4">
                            Repayment Period
                        </h2>

                        <ul className="space-y-4 text-justify">
                            {[
                                "The loan shall be repayable within 7 years with maximum one year grace period from the date of 1st drawal as per fixation of NABARD/ WBSC Bank from time to time.",
                                "For crop loan it is fixed for 1 year subject to following the crop loan rule framed by the State Govt.",
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