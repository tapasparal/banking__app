
import { useNavigate } from "react-router-dom";

export default function WorkOrderLoan() {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-gray-100 text-gray-800">

            {/* Header Section */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
                <img
                    src="/images/work1.jpg"
                    alt="Work Order Loan"
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4 text-center">
                    <h1 className="text-white text-3xl md:text-4xl font-bold tracking-wide">
                        WORK ORDER LOAN
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
                            About work order Loan
                        </h2>
                        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                            Only Government (State/Central) or Semi Govt./Body Corporate Work Order published and circulated in popular newspaper or floated in website of the concerned office.
                        </p>
                    </div>

                    {/* Eligibility Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3">
                            Eligibility
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "INDIVIDUAL/INDIVIDUALS/ PROPRIETORSHIP",
                                "PARTNERSHIP BUSINESS",
                                "COMPANY",
                                "OTHER COOPERATIVE SOCIETIES",
                                "TRUST REGISTERED UNDER INDIAN TRUST ACT",
                                "SOCIETY REGISTERED UNDER SOCIETIES REGISTRATION ACT",
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
                            👉 Work Order Loan helps contractors complete their assigned project smoothly by providing necessary working capital and covering all early- and mid-stage expenses until the project payment is received.
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
                            60% Value of Work Order (i.e. in nature of construction, renovation, etc.) subject to Maximum of Rs.1,00,00,000/- (Rupees One Crore Only) and 70% value of Supply Order of Finished Goods/Products having specific unit price of the Supply Order subject to Maximum of Rs.1,00,00,000/- (Rupees One Crore Only).
                        </p>
                    </div>
                    {/* Documentation Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4">
                            Documentations
                        </h2>

                        <ul className="space-y-4 text-justify overflow-hidden">
                            {[
                                "Loan application in prescribed format: duly filled up by a single person’s handwriting in blue or black ink. Not to use any white ink for correction or rectification in the application.",
                                "A self-attested photocopy of the Work-order/Supply Order.",
                                "Consent by the work/supply order issuing authority that the payment must be routed through Murshidabad District Central Cooperative Bank Ltd., exclusively.",
                                "KYC documents of Applicant/Office Bearers of the BOD/partners of the firm/trustees.",
                                "Loan Agreement",
                                "Irrevocable power of attorney by the applicant/Office Bearers of the BOD/partners of the firm/trustees",
                                "Letter of continuity",
                                "Demand promissory note with revenue stamp.",
                                "Collateral security papers as mention in the security for mortgaging"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-blue-600 text-xl">✔</span>
                                    <span className="text-gray-700 leading-relaxed text-justify">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
}