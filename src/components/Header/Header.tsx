import "./Header.css";

const Header = () => {
    return (
        <>
            <header className="header">
                <ul>
                    <li className="header_link"><a data-i18n="home">Inicio</a></li>
                    <li className="header_link"><a>Portfolio</a></li>
                </ul>
            </header>
        </>
    );
}

export default Header;