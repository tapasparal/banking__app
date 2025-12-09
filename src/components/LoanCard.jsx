export default function LoanCard({ title, rate, icon }) {
    return (
        <div className="bg-white border border-gray-200 shadow-md rounded-xl p-6 
                        flex flex-col items-center text-center
                        hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

            <img src={icon} alt="" className="w-20 h-20 mb-4" />

            <h2 className="text-lg font-semibold text-black mb-2">
                {title}
            </h2>

            {/* Rate (Optional – some loans don't show rate) */}
            {rate && (
                <>
                    <p className="text-blue-600 text-2xl font-bold">{rate}%</p>
                    <p className="text-gray-500 text-sm mt-1">
                        Rate of interest:<br />*starting from
                    </p>
                </>
            )}

            <button className="mt-auto bg-blue-600 text-white px-6 py-2 rounded-lg 
                               font-semibold hover:bg-blue-700 transition">
                APPLY NOW
            </button>
        </div>
    );
}
