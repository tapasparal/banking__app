// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // instantly jump to top when route changes
        window.scrollTo(0, 0);

        // optionally smooth:
        // window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
}
