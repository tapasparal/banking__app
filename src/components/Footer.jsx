// import React from "react";
// import { Link } from "react-router-dom";
// import {
//     FaFacebookF,
//     FaTwitter,
//     FaYoutube,
//     FaInstagram,
//     FaGlobe,
// } from "react-icons/fa";

// export default function Footer() {
//     return (
//         <footer className="bg-blue-900 text-white pt-10 pb-6 px-6">

//             <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

//                 {/* Column 1 - About */}
//                 <div>
//                     <h3 className="font-bold text-lg mb-4">ABOUT US</h3>
//                     <p className="text-sm leading-6 text-gray-300">
//                         Murshidabad District Central Co-Operative Bank Ltd. provides
//                         transparent and trusted banking services to the people of the district.
//                     </p>

//                     {/* Social Icons */}
//                     <div className="flex gap-4 mt-4 text-xl">
//                         <a
//                             href="https://facebook.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="hover:text-gray-200"
//                         >
//                             <FaFacebookF />
//                         </a>

//                         <a
//                             href="https://twitter.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="hover:text-gray-200"
//                         >
//                             <FaTwitter />
//                         </a>

//                         <a
//                             href="https://instagram.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="hover:text-gray-200"
//                         >
//                             <FaInstagram />
//                         </a>

//                         <a
//                             href="https://youtube.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="hover:text-gray-200"
//                         >
//                             <FaYoutube />
//                         </a>
//                     </div>
//                 </div>

//                 {/* Column 2 - Internal Links */}
//                 <div>
//                     <h3 className="font-bold text-lg mb-4">QUICK LINKS</h3>
//                     <ul className="space-y-2 text-gray-300 text-sm">
//                         <li><Link to="/" className="hover:text-white">Home</Link></li>
//                         <li><Link to="/about" className="hover:text-white">About Us</Link></li>
//                         <li><Link to="/services" className="hover:text-white">Services</Link></li>
//                         <li><Link to="/product" className="hover:text-white">Products</Link></li>
//                         <li><Link to="/downloads" className="hover:text-white">Downloads</Link></li>
//                         <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
//                     </ul>
//                 </div>

//                 {/* Column 3 - External / Important Links */}
//                 <div>
//                     <h3 className="font-bold text-lg mb-4">IMPORTANT LINKS</h3>
//                     <ul className="space-y-2 text-gray-300 text-sm">

//                         <li>
//                             <a
//                                 href="https://www.rbi.org.in/"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="hover:text-white"
//                             >
//                                 Reserve Bank of India (RBI)
//                             </a>
//                         </li>

//                         <li>
//                             <a
//                                 href="https://www.nabard.org/"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="hover:text-white"
//                             >
//                                 NABARD
//                             </a>
//                         </li>

//                         <li>
//                             <a
//                                 href="https://coopwb.in/"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="hover:text-white"
//                             >
//                                 Cooperative WB
//                             </a>
//                         </li>

//                         <li>
//                             <a
//                                 href="https://uidai.gov.in/"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="hover:text-white"
//                             >
//                                 UIDAI (Aadhaar)
//                             </a>
//                         </li>

//                              <li>
//                             <a
//                                 href="https://www.rupay.co.in/"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="hover:text-white"
//                             >
//                                 RuPay
//                             </a>
//                         </li>

//                         <li>
//                             <a
//                                 href="https://india.gov.in/"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="hover:text-white"
//                             >
//                                 National Portal of India
//                             </a>
//                         </li>

//                     </ul>
//                 </div>

//                 {/* Column 4 - Contact */}
//                 <div>
//                     <h3 className="font-bold text-lg mb-4">CONTACT</h3>
//                     <ul className="space-y-2 text-gray-300 text-sm">
//                         <li>Head Office</li>
//                         <li>Murshidabad, West Bengal</li>
//                         <li>Email: info@mdccb.in</li>
//                         <li>Phone: +91 7605-071-507</li>
//                     </ul>

//                     {/* Official Website */}
//                     <a
//                         href="https://mdccb.in"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="mt-4 inline-flex items-center gap-2 text-gray-200 hover:text-white text-sm"
//                     >
//                         <FaGlobe /> Visit Official Website
//                     </a>
//                 </div>

//             </div>

//             {/* Bottom Bar */}
//             <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-300">
//                 © {new Date().getFullYear()} Murshidabad District Central Co-Operative Bank Ltd.
//                 All Rights Reserved.
//             </div>

//         </footer>
//     );
// }


import React from "react";
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaInstagram,
    FaLinkedinIn,
    FaGlobe,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-blue-950 text-white pt-12 pb-6 px-6">

            {/* Main Grid */}
            <div className="
                max-w-7xl mx-auto 
                grid grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-4 
                gap-12
                text-center md:text-left
            ">

                {/* Column 1 */}
                <div>
                    <h3 className="font-bold text-xl mb-4 text-blue-300">ABOUT US</h3>
                    <p className="text-sm leading-6 text-gray-300">
                        Murshidabad District Central Co-Operative Bank Ltd. provides
                        transparent and trusted banking services to the people of the district.
                    </p>

                    {/* Social Icons */}
                    <div className="flex justify-center md:justify-start gap-4 mt-5 text-2xl">
                        <a href="https://facebook.com" className="hover:text-blue-400 hover:scale-110 transition">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" className="hover:text-blue-400 hover:scale-110 transition">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" className="hover:text-blue-400 hover:scale-110 transition">
                            <FaInstagram />
                        </a>
                        <a href="https://youtube.com" className="hover:text-blue-400 hover:scale-110 transition">
                            <FaYoutube />
                        </a>
                        <a href="https://linkedin.com" className="hover:text-blue-400 hover:scale-110 transition">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                {/* Column 2 - Quick Links */}
                <div>
                    <h3 className="font-bold text-xl mb-4 text-blue-300">QUICK LINKS</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">

                        <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                        <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
                        <li><Link to="/branch-locator" className="hover:text-white transition">Branch Locator</Link></li>
                        <li><Link to="/roi" className="hover:text-white transition">Rate of Interest</Link></li>
                        <li><Link to="/news" className="hover:text-white transition">News & Events</Link></li>

                        <li>
                            <a href="https://www.webcsc.org/" className="hover:text-white">
                                Recruitment
                            </a>
                            <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full">NEW</span>
                        </li>
                    </ul>
                </div>

                {/* Column 3 - External Links */}
                <div>
                    <h3 className="font-bold text-xl mb-4 text-blue-300">EXTERNAL LINKS</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><a href="https://rbi.org.in" className="hover:text-white">RBI</a></li>
                        <li><a href="https://nabard.org" className="hover:text-white">NABARD</a></li>
                        <li><a href="https://npci.org.in" className="hover:text-white">NPCI</a></li>
                        <li><a href="https://sebi.gov.in" className="hover:text-white">SEBI</a></li>
                        <li><a href="https://idrbt.ac.in" className="hover:text-white">IDRBT</a></li>
                        <li><a href="https://nafscob.org" className="hover:text-white">NAFSCOB</a></li>
                    </ul>
                </div>

                {/* Column 4 - More Links */}
                <div>
                    <h3 className="font-bold text-xl mb-4 text-blue-300">MORE LINKS</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><a href="https://wbscb.com" className="hover:text-white">WBSCB</a></li>
                        <li><a href="https://niva.rbi.org.in" className="hover:text-white">NIVARAN</a></li>
                        <li><a href="https://rupay.co.in" className="hover:text-white">RuPay</a></li>
                        <li><a href="https://india.gov.in" className="hover:text-white">National Portal of India</a></li>
                        <li><a href="https://uidai.gov.in" className="hover:text-white">UIDAI (Aadhaar)</a></li>
                    </ul>

                    {/* Official Website */}
                    <a
                        href="https://mdccb.in"
                        className="mt-4 inline-flex items-center justify-center md:justify-start gap-2 text-blue-300 hover:text-white text-sm transition"
                    >
                        <FaGlobe /> Visit Official Website
                    </a>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="mt-10 border-t border-blue-800 pt-4 text-center text-sm text-gray-300">
                © {new Date().getFullYear()} MDCCB | All Rights Reserved.
            </div>

        </footer>
    );
}

