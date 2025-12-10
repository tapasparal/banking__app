export default function InterestRateSection() {
    const products = [
        {
            title: "SAVINGS ACCOUNT",
            rate: "3.50%",
            icon: "🏦",
        },
        {
            title: "MIS",
            rate: "5.90%",
            icon: "💰",
        },
        {
            title: "FD - NORMAL",
            rate: "6.00%",
            icon: "🚗",
        },
        {
            title: "FD - SENIOR CITIZEN",
            rate: "6.60%",
            icon: "💳",
        },
    ];

    return (
        <div className="w-full py-10 bg-white">
            <h2 className="text-center text-3xl font-bold text-blue-700 mb-10">
                Interest Rates
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-16">
                {products.map((item, index) => (
                    <div
                        key={index}
                        className="border border-blue-200 rounded-xl bg-white p-6 
                       shadow-sm hover:shadow-xl transition-all duration-300
                       flex flex-col items-center text-center"
                    >
                        <div className="text-5xl mb-4">
                            {item.icon}
                        </div>

                        <p className="text-4xl font-extrabold text-black mb-2">
                            {item.rate}
                        </p>

                        <p className="text-blue-700 font-semibold tracking-wide text-sm">
                            {item.title}
                        </p>

                        <div className="mt-4 h-1 w-16 bg-blue-500 rounded-full"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
