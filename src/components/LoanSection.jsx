import LoanCard from "./LoanCard";

export default function LoanSection() {
    const loans = [
        { title: "HOME LOAN", rate: "8.25", icon: "/images/loan1.jpg" },
        { title: "VEHICLE LOAN", rate: "9.5", icon: "/images/loan2.jpg" },
        { title: "CASH CREDIT LOAN", rate: "11.25", icon: "/images/loan3.jpg" },
        { title: "PERSONAL LOAN", rate: "13.50", icon: "/images/loan4.jpg" },
        { title: "ECCS LOAN", rate: "11.25", icon: "/images/loan5.jpg" },
        { title: "SHG LOAN", rate: "2.00", icon: "/icons/shg.png" },
        { title: "KCC LOAN", rate: "4.00", icon: "/icons/kcc.png" },
        { title: "WORK ORDER LOAN", rate: "11.25", icon: "/icons/workorder.png" },
        { title: "TERM LOAN", rate: "Flexy", icon: "/icons/term.png" },
        { title: "LOAN AGAINST NSC/KVP/LIC", rate: "11.00", icon: "/icons/nsc.png" },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 
                            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {loans.map((loan, i) => (
                    <LoanCard
                        key={i}
                        title={loan.title}
                        rate={loan.rate}
                        icon={loan.icon}
                    />
                ))}

            </div>
        </section>
    );
}
