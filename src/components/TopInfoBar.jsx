// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function TopInfoBar() {
//     return (
//         <div className="w-full">
//             <div className="bg-blue-900 text-white text-sm py-2 px-4 flex items-center justify-between">
//                 <p className="font-medium">
//                     WELCOME TO MURSHIDABAD DISTRICT CENTRAL CO-OPERATIVE BANK LTD.
//                 </p>

//                 <div className="flex items-center gap-6 text-sm font-semibold">
//                     <Link to="/lmwf" className="hover:underline">LMWF CALCULATOR</Link>
//                     <Link to="/shg-login" className="hover:underline">SHG LOGIN</Link>
//                     <Link to="/locations" className="hover:underline">VIEW LOCATIONS</Link>
//                     <a href="tel:+917605071507" className="hover:underline">+91 7605-071-507</a>
//                     <Link to="/login" className="hover:underline">LOGIN</Link>
//                 </div>
//             </div>
//         </div>
//     )
// }


// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function TopInfoBar() {
//     return (
//         <div className="w-full bg-blue-900 text-white text-sm">
//             <div className="max-w-7xl mx-auto py-2 px-4 flex flex-col md:flex-row items-center md:justify-between gap-2">

//                 {/* Welcome Text */}
//                 <p className="font-medium text-center md:text-left text-xs sm:text-sm">
//                     WELCOME TO MURSHIDABAD DISTRICT CENTRAL CO-OPERATIVE BANK LTD.
//                 </p>

//                 {/* Links Section */}
//                 <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold">
//                     <Link to="/lmwf" className="no-underline hover:no-underline">LMWF CALCULATOR</Link>
//                     <Link to="/shg-login" className="no-underline hover:no-underline">SHG LOGIN</Link>
//                     <Link to="/locations" className="no-underline hover:no-underline">VIEW LOCATIONS</Link>
//                     <a href="tel:+917605071507" className="no-underline hover:no-underline">+91 7605-071-507</a>
//                     <Link to="/login" className="no-underline hover:no-underline">LOGIN</Link>
//                 </div>

//             </div>
//         </div>
//     )
// }




import React from 'react'
import { Link } from 'react-router-dom'

export default function TopInfoBar() {
    return (
        <div className="w-full bg-blue-900 text-white text-sm">
            <div className="max-w-7xl mx-auto py-2 px-4 flex flex-col md:flex-row 
                            items-center md:justify-between gap-2">

                {/* Desktop Welcome Text */}
                <p className="hidden md:block font-medium text-left text-sm tracking-wide">
                    WELCOME TO MURSHIDABAD DISTRICT CENTRAL CO-OPERATIVE BANK LTD.
                </p>

                {/* MOBILE COMPACT LINK BAR */}
                <div className="
                    flex md:hidden w-full overflow-x-auto no-scrollbar 
                    gap-3 py-1
                ">
                    {[
                        { name: "LMWF CALCULATOR", to: "/lmwf" },
                        { name: "SHG LOGIN", to: "/shg-login" },
                        { name: "+91 7605-071-507", to: "tel:+917605071507", tel: true },
                        { name: "LOGIN", to: "/login" }
                    ].map((item, i) => (
                        item.tel ? (
                            <a
                                key={i}
                                href={item.to}
                                className="
                                    whitespace-nowrap px-3 py-1 rounded-full 
                                    bg-white text-blue-900 font-semibold text-xs
                                    shadow-sm border border-blue-200
                                    transition-all duration-300
                                    hover:bg-blue-100 hover:text-blue-900
                                    active:scale-95
                                "
                            >
                                {item.name}
                            </a>
                        ) : (
                            <Link
                                key={i}
                                to={item.to}
                                className="
                                    whitespace-nowrap px-3 py-1 rounded-full 
                                    bg-white text-blue-900 font-semibold text-xs
                                    shadow-sm border border-blue-200
                                    transition-all duration-300
                                    hover:bg-blue-100 hover:text-blue-900
                                    active:scale-95
                                "
                            >
                                {item.name}
                            </Link>
                        )
                    ))}
                </div>

                {/* DESKTOP LINKS */}
                <div className="hidden md:flex flex-wrap justify-end items-center 
                                gap-6 text-sm font-semibold">
                    <Link to="/lmwf" className="hover:text-blue-300">LMWF CALCULATOR</Link>
                    <Link to="/shg-login" className="hover:text-blue-300">SHG LOGIN</Link>
                    <Link to="/locations" className="hover:text-blue-300">VIEW LOCATIONS</Link>
                    <a href="tel:+917605071507" className="hover:text-blue-300">
                        +91 7605-071-507
                    </a>
                    <Link to="/login" className="hover:text-blue-300">LOGIN</Link>
                </div>

            </div>
        </div>
    )
}
