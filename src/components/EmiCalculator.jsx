// import { useState } from "react";

// export default function EmiCalculator() {
//     const [amount, setAmount] = useState("");
//     const [rate, setRate] = useState("");
//     const [months, setMonths] = useState("");
//     const [details, setDetails] = useState(null);

//     const calculateEMI = () => {
//         if (!amount || !rate || !months) return;

//         let P = Number(amount);
//         let r = Number(rate) / 12 / 100;
//         let n = Number(months);

//         let emiCalc =
//             (P * r * Math.pow(1 + r, n)) /
//             (Math.pow(1 + r, n) - 1);

//         let totalPayment = emiCalc * n;
//         let totalInterest = totalPayment - P;

//         setDetails({
//             emi: emiCalc.toFixed(2),
//             principal: P.toFixed(2),
//             interest: totalInterest.toFixed(2),
//             totalPayment: totalPayment.toFixed(2)
//         });
//     };

//     return (
//         <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 
//                         flex justify-center items-center px-4 py-10">

//             <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8
//                             animate-[fadeIn_0.7s_ease]">

//                 {/* LEFT SIDE — CALCULATOR */}
//                 <div className="bg-white p-8 rounded-3xl shadow-xl border border-blue-100
//                                 backdrop-blur-xl hover:shadow-2xl transition-all duration-300">

//                     <div className="text-center mb-8">
//                         <h1 className="text-3xl font-extrabold text-blue-800">
//                             EMI Calculator
//                         </h1>
//                         <p className="text-gray-600 text-sm mt-1">
//                             Calculate your monthly installment instantly
//                         </p>
//                     </div>

//                     <div className="space-y-6">
//                         <div>
//                             <label className="text-sm font-semibold text-gray-700">
//                                 Loan Amount
//                             </label>
//                             <input
//                                 type="number"
//                                 value={amount}
//                                 onChange={(e) => setAmount(e.target.value)}
//                                 className="w-full mt-1 p-3 rounded-xl border border-blue-200 
//                                            focus:ring-2 focus:ring-blue-600 outline-none transition"
//                                 placeholder="Enter loan amount"
//                             />
//                         </div>

//                         <div>
//                             <label className="text-sm font-semibold text-gray-700">
//                                 Interest Rate (%)
//                             </label>
//                             <input
//                                 type="number"
//                                 value={rate}
//                                 onChange={(e) => setRate(e.target.value)}
//                                 className="w-full mt-1 p-3 rounded-xl border border-blue-200 
//                                            focus:ring-2 focus:ring-blue-600 outline-none transition"
//                                 placeholder="Enter annual interest rate"
//                             />
//                         </div>

//                         <div>
//                             <label className="text-sm font-semibold text-gray-700">
//                                 Loan Duration (Months)
//                             </label>
//                             <input
//                                 type="number"
//                                 value={months}
//                                 onChange={(e) => setMonths(e.target.value)}
//                                 className="w-full mt-1 p-3 rounded-xl border border-blue-200 
//                                            focus:ring-2 focus:ring-blue-600 outline-none transition"
//                                 placeholder="Enter tenure in months"
//                             />
//                         </div>
//                     </div>

//                     <button
//                         onClick={calculateEMI}
//                         className="mt-8 w-full py-3 bg-blue-700 text-white rounded-xl 
//                                    text-lg font-semibold shadow-md hover:bg-black 
//                                    transition-all duration-300"
//                     >
//                         Calculate EMI
//                     </button>
//                 </div>

//                 {/* RIGHT SIDE — RESULT TABLE */}
//                 {details && (
//                     <div className="bg-white p-8 rounded-3xl shadow-xl border border-blue-100
//                                     backdrop-blur-xl animate-[slideUp_0.6s_ease] 
//                                     hover:shadow-2xl transition-all duration-300">

//                         <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
//                             EMI Summary
//                         </h2>

//                         <table className="w-full text-sm text-gray-700 border-collapse">
//                             <thead>
//                                 <tr className="bg-blue-100 text-left">
//                                     <th className="p-3 font-semibold">Label</th>
//                                     <th className="p-3 font-semibold">Amount (₹)</th>
//                                 </tr>
//                             </thead>

//                             <tbody>
//                                 <tr className="border-b hover:bg-blue-50 transition">
//                                     <td className="p-3 font-semibold">Monthly EMI</td>
//                                     <td className="p-3">₹ {details.emi}</td>
//                                 </tr>

//                                 <tr className="border-b hover:bg-blue-50 transition">
//                                     <td className="p-3 font-semibold">Principal Amount</td>
//                                     <td className="p-3">₹ {details.principal}</td>
//                                 </tr>

//                                 <tr className="border-b hover:bg-blue-50 transition">
//                                     <td className="p-3 font-semibold">Total Interest</td>
//                                     <td className="p-3">₹ {details.interest}</td>
//                                 </tr>

//                                 <tr className="hover:bg-blue-50 transition">
//                                     <td className="p-3 font-semibold">Total Payment</td>
//                                     <td className="p-3 font-bold text-blue-800">
//                                         ₹ {details.totalPayment}
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }


import { useState } from "react";

export default function EmiCalculator() {
    const [amount, setAmount] = useState("");
    const [rate, setRate] = useState("");
    const [months, setMonths] = useState("");
    const [emi, setEmi] = useState(null);
    const [details, setDetails] = useState(null);

    const calculateEMI = () => {
        if (!amount || !rate || !months) return;

        let P = Number(amount);
        let r = Number(rate) / 12 / 100;
        let n = Number(months);

        let emiCalc = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

        let totalPayment = emiCalc * n;
        let totalInterest = totalPayment - P;

        setEmi(emiCalc.toFixed(2));
        setDetails({
            emi: emiCalc.toFixed(2),
            principal: P.toFixed(2),
            interest: totalInterest.toFixed(2),
            totalPayment: totalPayment.toFixed(2)
        });
    };

    const clearAll = () => {
        setAmount("");
        setRate("");
        setMonths("");
        setDetails(null);
        setEmi(null);
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100
                        flex flex-col md:flex-row justify-center items-start gap-10 px-6 py-12">

            {/* LEFT: EMI CALCULATOR */}
            <div className="w-full md:w-[45%] bg-white shadow-2xl rounded-3xl p-8 border border-blue-100
                            backdrop-blur-xl animate-[fadeIn_0.7s_ease]">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-blue-800 tracking-wide">EMI Calculator</h1>
                    <p className="text-gray-600 text-sm mt-1">Calculate accurate monthly installments instantly</p>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="text-sm font-semibold text-gray-700">Loan Amount</label>
                        <input type="number" value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full mt-1 p-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-600 outline-none"
                            placeholder="Enter loan amount" />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-gray-700">Interest Rate (%)</label>
                        <input type="number" value={rate}
                            onChange={(e) => setRate(e.target.value)}
                            className="w-full mt-1 p-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-600 outline-none"
                            placeholder="Enter annual interest rate" />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-gray-700">Number of EMIs</label>
                        <input type="number" value={months}
                            onChange={(e) => setMonths(e.target.value)}
                            className="w-full mt-1 p-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-600 outline-none"
                            placeholder="Enter number of EMIs" />
                    </div>
                </div>

                <button onClick={calculateEMI}
                    className="mt-8 w-full py-3 bg-blue-700 text-white rounded-xl text-lg font-semibold shadow-md hover:bg-black transition-all duration-300">
                    Calculate EMI
                </button>

                <button onClick={clearAll}
                    className="mt-4 w-full py-3 bg-blue-600 text-white rounded-xl text-lg font-semibold shadow-md hover:bg-blue-900 transition-all duration-300">
                    Clear
                </button>
            </div>

            {/* RIGHT: RESULT TABLE */}
            {details && (
                <div className="w-full md:w-[45%] bg-white shadow-2xl rounded-3xl p-8 border border-blue-200
                                animate-[slideUp_0.6s_ease]">

                    <h2 className="text-xl font-bold text-blue-800 mb-4 text-center">Calculation Summary</h2>

                    <table className="w-full text-sm text-gray-700 border-collapse">
                        <thead>
                            <tr className="text-left bg-blue-100">
                                <th className="p-2">Label</th>
                                <th className="p-2">Amount (₹)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-2 font-semibold">Monthly EMI</td>
                                <td className="p-2">₹ {details.emi}</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-2 font-semibold">Principal Amount</td>
                                <td className="p-2">₹ {details.principal}</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-2 font-semibold">Total Interest</td>
                                <td className="p-2">₹ {details.interest}</td>
                            </tr>
                            <tr>
                                <td className="p-2 font-semibold">Total Payment</td>
                                <td className="p-2 font-bold text-blue-800">₹ {details.totalPayment}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

