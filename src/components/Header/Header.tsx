import "./Header.css";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";

type HeaderProps = {
    color_top: string,
    color_bottom: string
}

const Header = (hp: HeaderProps) => {
    const { scrollYProgress } = useScroll();
    const color = useTransform(
        scrollYProgress,
        [0, 1],
        [hp.color_top, hp.color_bottom]
    );

    return (
        <>
            <header className="header">
                <ul>
                    <Link className="header_link" data-i18n="home" to="http://federicoguigou.pro">
                        <motion.li
                            style={{ color }}
                        >Inicio</motion.li>
                    </Link>
                    <Link className="header_link" to="http://federicoguigou.pro/#/portfolio">
                        <motion.li
                            style={{ color }}
                        >Portfolio</motion.li>
                    </Link>
                </ul>
            </header>
        </>
    );
}

export default Header;