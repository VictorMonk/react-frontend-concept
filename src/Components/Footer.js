import React from "react";
import Navigation from "./Navigation";

const Footer = () => {
    return (
    <footer className="fixed-bottom">
        <div className="flex items-center justify-between bg-gray-200 py-4 px-8">
            <div ClassName="flex items-center"><Navigation variant="footer" /></div>
            <div ClassName="flex items-centerb">
                <div>Logo</div>
                <div>Copyright</div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;