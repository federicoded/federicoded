import "./home.css";
import { useRef } from "react";
import Header from "../../components/Header/Header";
import Advertising from "./home_components/Advertising";
import Welcome from "./home_components/Welcome";
import About_me from "./home_components/About_me";
import Introduction from "./home_components/Introduction";
import Footer from "./home_components/Footer";
//import Birds from "./home_components/Birds";


const Home = () => {
    const about_me_ref = useRef<HTMLHeadingElement | null>(null); //a que tipo de elemento apunta la ref entre < >. También puede ser useRef(null)
    const scrollToAboutMe = () => {
        about_me_ref.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <>
            <Header
                color_top="#FFFFFF"
                color_bottom="#0a1116"
            />
            <div className="page home_page">

                <main>
                    <Advertising />
                    <Welcome onClick_Scroll={scrollToAboutMe} />
                    <About_me ref={about_me_ref} />
                    <Introduction />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Home;