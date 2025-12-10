import { useNavigate } from "react-router-dom";

export default function CashCreditLoan() {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-gray-50 text-gray-900">
            {/* Header */}
            <div className="relative w-full h-60 md:h-80 lg:h-96 overflow-hidden">
                <img
                    src="/images/CASH1.jpg"
                    alt="Cash Credit Loan"
                    className="w-full h-full object-cover opacity-60 scale-105 hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide drop-shadow-lg">
                        Cash Credit Loan
                    </h1>
                </div>
            </div>

            {/* Rate + EMI */}
            <div className="max-w-6xl mx-auto mt-8 p-6 md:p-8 bg-white rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <h2 className="text-3xl font-bold text-blue-900 tracking-wide">CASH CREDIT</h2>
                    <div className="text-center">
                        <p className="text-5xl font-extrabold text-blue-700">11.25%</p>
                        <p className="text-gray-600 font-medium mt-1">Rate of Interest</p>
                    </div>
                    <button
                        onClick={() => navigate("/emi-calculator")}
                        className="px-6 py-3 bg-blue-700 text-white rounded-xl shadow-md hover:bg-blue-800 hover:shadow-lg transition-all duration-300"
                    >
                        EMI CALCULATOR
                    </button>
                </div>
            </div>

            {/* About Section */}
            <div className="max-w-6xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-md border border-blue-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-3xl font-bold text-blue-900 mb-4">About Cash Credit Loan</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                    The main object of this loan is to provide working capital loan to Individual Customers,
                    Primary Engineers, Labour, Weavers, Agriculture/Marketing/Consumers Co-operative
                    Societies.
                </p>
            </div>

            {/* Eligibility Section */}
            <div className="max-w-6xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-md border border-blue-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-3xl font-bold text-blue-900 mb-6">Eligibility</h3>
                <ul className="space-y-4 text-gray-700 text-lg">
                    <li className="flex items-start gap-2"><span className="text-blue-700 text-xl">✔</span> All societies should be duly registered by the competent authority.</li>
                    <li className="flex items-start gap-2"><span className="text-blue-700 text-xl">✔</span> Loanee must have S/B A/C at least 6 months old with MDCCB.</li>
                    <li className="flex items-start gap-2"><span className="text-blue-700 text-xl">✔</span> Self‑employed/businessman must submit last three years’ income tax return.</li>
                </ul>
            </div>

            {/* Quantum of Loan */}
            <div className="max-w-6xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-md border border-blue-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Quantum of Loan</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                    Up to 40,00,000/- only for Members Society of the Bank.<br />
                    10,00,000/- (ten lakh) in case of Individual Customers.
                </p>
            </div>

            {/* Documentation */}
            <div className="max-w-6xl mx-auto mt-10 mb-16 p-8 bg-white rounded-2xl shadow-md border border-blue-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-3xl font-bold text-blue-900 mb-6">Documentations</h3>
                <ul className="space-y-4 text-gray-700 text-lg">
                    <li className="flex gap-2"><span className="text-blue-700 text-xl">✔</span> Loan application in prescribed format.</li>
                    <li className="flex gap-2"><span className="text-blue-700 text-xl">✔</span> KYC documents of applicant/office bearers.</li>
                    <li className="flex gap-2"><span className="text-blue-700 text-xl">✔</span> Registered Power of Attorney.</li>
                    <li className="flex gap-2"><span className="text-blue-700 text-xl">✔</span> Hypothecation of goods (if necessary).</li>
                    <li className="flex gap-2"><span className="text-blue-700 text-xl">✔</span> Demand Promissory Note.</li>
                    <li className="flex gap-2"><span className="text-blue-700 text-xl">✔</span> Letter of Acceptance.</li>
                    <li className="flex gap-2"><span className="text-blue-700 text-xl">✔</span> Letter of Continuity.</li>
                </ul>
            </div>
        </div>
    );
}
