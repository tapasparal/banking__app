export default function DeafFundNotice() {
    return (
        <div className="w-full bg-white py-6">

            {/* Header */}
            <div className="w-full bg-blue-700 text-white py-3 px-6 shadow-md">
                <h2 className="text-lg sm:text-xl font-bold tracking-wide">
                    Notice Board
                </h2>
            </div>

            {/* Notice Box */}
            <div className="px-6 py-4">
                <div
                    onClick={() => window.open("/pdfs/DEAF_FUND_2025.pdf", "_blank")}
                    className="cursor-pointer border border-blue-300 bg-white
                     rounded-xl p-5 flex items-center justify-between
                     shadow-sm hover:shadow-xl transition-all duration-300"
                >
                    {/* Left Content */}
                    <div className="flex items-center gap-4">
                        {/* Animated Dot */}
                        <div className="h-4 w-4 bg-blue-600 rounded-full animate-pulse"></div>

                        <div>
                            <p className="text-lg sm:text-xl font-semibold text-blue-700">
                                DEAF FUND DETAILS
                            </p>
                            <p className="text-sm text-black/60">Click to open PDF</p>
                        </div>
                    </div>

                    {/* Badge */}
                    <span className="text-xs font-bold bg-blue-700 text-white px-3 py-1 rounded-full shadow">
                        NEW
                    </span>
                </div>
            </div>
        </div>
    );
}
