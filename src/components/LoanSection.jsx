import LoanCard from "./LoanCard";

export default function LoanSection() {
    const loans = [
        { title: "HOME LOAN", rate: "8.25", icon: "/images/loan1.jpg", path: "/home_loan" },
        { title: "VEHICLE LOAN", rate: "9.5", icon: "/images/loan2.jpg", path: "/vehicle_loan" },
        { title: "CASH CREDIT LOAN", rate: "11.25", icon: "/images/loan3.jpg", path: "/cash_credit_loan" },
        { title: "PERSONAL LOAN", rate: "13.50", icon: "/images/loan4.jpg", path: "/personal_loan" },
        { title: "ECCS LOAN", rate: "11.25", icon: "/images/loan5.jpg", path: "/eccs_loan" },
        { title: "SHG LOAN", rate: "2.00", icon: "/images/loan6.jpg", path: "/shg_loan" },
        { title: "KCC LOAN", rate: "4.00", icon: "/images/loan7.jpg" },
        { title: "WORK ORDER LOAN", rate: "11.25", icon: "/images/loan8.jpg" },
        { title: "TERM LOAN", rate: "Flexi", icon: "/images/loan9.jpg" },
        { title: "LOAN AGAINST NSC/KVP/LIC", rate: "11.00", icon: "/images/loan10.jpg" },
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
                        path={loan.path}
                    />
                ))}

            </div>
        </section>
    );
}
