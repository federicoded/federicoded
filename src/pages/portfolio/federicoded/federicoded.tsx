import "./federicoded.css";
import Header from "../../../components/Header/Header";

import Common_Section from "../../../components/Common_Section/Common_Section";
import Mini_Section from "../../../components/Mini_Section/Mini_Section";
import Slider from "../../../components/Slider/Slider";
import * as motion from "motion/react-client";
import { useState } from "react";
import { useAspectRatio } from "../../../hooks/useAspectRatio";


type Track_item = {
    id: string,
    alt: string,
    link?: string,
    svg: React.ReactNode,
}

const track_items: Track_item[] = [
 
    {
        id: "TypeScript",
        alt: "TypeScript Logo",
        link: "https://www.typescriptlang.org/",
        svg:
            <>
                <svg xmlns="http://www.w3.org/2000/svg" className="track_logo" viewBox="0 0 32 32">
                    <rect width="28" height="28" x="2" y="2" rx="1.312" fill="#3178c6" />
                    <path fill="#fff" d="M18.245 23.759v3.068a6.5 6.5 0 0 0 1.764.575 11.6 11.6 0 0 0 2.146.192 10 10 0 0 0 2.088-.211 5.1 5.1 0 0 0 1.735-.7 3.54 3.54 0 0 0 1.181-1.266 4.47 4.47 0 0 0 .186-3.394 3.4 3.4 0 0 0-.717-1.117 5.2 5.2 0 0 0-1.123-.877 12 12 0 0 0-1.477-.734q-.6-.249-1.08-.484a5.5 5.5 0 0 1-.813-.479 2.1 2.1 0 0 1-.516-.518 1.1 1.1 0 0 1-.181-.618 1.04 1.04 0 0 1 .162-.571 1.4 1.4 0 0 1 .459-.436 2.4 2.4 0 0 1 .726-.283 4.2 4.2 0 0 1 .956-.1 6 6 0 0 1 .808.058 6 6 0 0 1 .856.177 6 6 0 0 1 .836.3 4.7 4.7 0 0 1 .751.422V13.9a7.5 7.5 0 0 0-1.525-.4 12.4 12.4 0 0 0-1.9-.129 8.8 8.8 0 0 0-2.064.235 5.2 5.2 0 0 0-1.716.733 3.66 3.66 0 0 0-1.171 1.271 3.73 3.73 0 0 0-.431 1.845 3.6 3.6 0 0 0 .789 2.34 6 6 0 0 0 2.395 1.639q.63.26 1.175.509a6.5 6.5 0 0 1 .942.517 2.5 2.5 0 0 1 .626.585 1.2 1.2 0 0 1 .23.719 1.1 1.1 0 0 1-.144.552 1.3 1.3 0 0 1-.435.441 2.4 2.4 0 0 1-.726.292 4.4 4.4 0 0 1-1.018.105 5.8 5.8 0 0 1-1.969-.35 5.9 5.9 0 0 1-1.805-1.045m-5.154-7.638h4v-2.527H5.938v2.527H9.92v11.254h3.171Z" />
                </svg>
            </>,
    },
    {
        id: "HTML5",
        alt: "HTML Logo",
        svg:
            <>
                <svg xmlns="http://www.w3.org/2000/svg" className="track_logo" preserveAspectRatio="xMidYMid" viewBox="-52.5 0 361 361">
                    <path fill="#e44d26" d="m255.555 70.766-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766z" /><path fill="#f16529" d="m128 337.95 84.417-23.403 19.86-222.49H128z" /><path fill="#ebebeb" d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604z" /><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0M92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88zM193.21 0h16.235v32.508h22.824v16.05h-39.06z" /><path fill="#fff" d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89z" />
                </svg>
            </>,
    },
    {
        id: "CSS3",
        alt: "CSS Logo",
        svg:
            <>
                <svg xmlns="http://www.w3.org/2000/svg" className="track_logo" preserveAspectRatio="xMidYMid" viewBox="-52.5 0 361 361">
                    <path fill="#264de4" d="M127.844 360.088 23.662 331.166.445 70.766h255.11l-23.241 260.36z" /><path fill="#2965f1" d="m212.417 314.547 19.86-222.49H128V337.95z" />
                    <path fill="#ebebeb" d="m53.669 188.636 2.862 31.937H128v-31.937zM47.917 123.995l2.903 31.937H128v-31.937zM128 271.58l-.14.037-35.568-9.604-2.274-25.471h-32.06l4.474 50.146 65.421 18.16.147-.04z" /><path d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484zM106.901 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V34.46h22.505v-2.813H106.9zM153.319 0H192v14.066h-22.505v2.813H192v32.352h-38.681V34.46h22.505v-2.813H153.32z" />
                    <path fill="#fff" d="m202.127 188.636 5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08z" />
                </svg>
            </>,
    },

    {
        id: "React",
        alt: "React Logo",
        link: "https://react.dev/",
        svg:
            <>
                <svg xmlns="http://www.w3.org/2000/svg" className="track_logo" preserveAspectRatio="xMidYMid" viewBox="0 -14 256 256">
                    <path fill="#00d8ff" d="M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848 156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165 168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923 168 168 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.76-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382 382 0 0 0 7.859-13.026 347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815 329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627 310 310 0 0 1 10.89-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695 359 359 0 0 1 11.036 20.54 330 330 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a161 161 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86" />
                </svg>
            </>,
    },
    {
        id: "Vite",
        alt: "Vite Logo",
        link: "https://vite.dev/",
        svg:
            <>
                <svg xmlns="http://www.w3.org/2000/svg" className="track_logo" fill="none" viewBox="0 0 32 32">
                    <path fill="url(#vite_a)" d="m29.884 6.146-13.142 23.5a.714.714 0 0 1-1.244.005L2.096 6.148a.714.714 0 0 1 .746-1.057l13.156 2.352a.7.7 0 0 0 .253 0l12.881-2.348a.714.714 0 0 1 .752 1.05z" />
                    <path fill="url(#vite_b)" d="M22.264 2.007 12.54 3.912a.36.36 0 0 0-.288.33l-.598 10.104a.357.357 0 0 0 .437.369l2.707-.625a.357.357 0 0 1 .43.42l-.804 3.939a.357.357 0 0 0 .454.413l1.672-.508a.357.357 0 0 1 .454.414l-1.279 6.187c-.08.387.435.598.65.267l.143-.222 7.925-15.815a.357.357 0 0 0-.387-.51l-2.787.537a.357.357 0 0 1-.41-.45l1.818-6.306a.357.357 0 0 0-.412-.45" />
                    <defs>
                        <linearGradient id="vite_a" x1="6" x2="235" y1="33" y2="344" gradientTransform="translate(1.34 1.894)scale(.07142)" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#41d1ff" />
                            <stop offset="1" stopColor="#bd34fe" />
                        </linearGradient>
                        <linearGradient id="vite_b" x1="194.651" x2="236.076" y1="8.818" y2="292.989" gradientTransform="translate(1.34 1.894)scale(.07142)" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#ffea83" /><stop offset=".083" stopColor="#ffdd35" />
                            <stop offset="1" stopColor="#ffa800" /></linearGradient>
                    </defs>
                </svg>
            </>,
    },
    {
        id: "Git",
        alt: "Git Logo",
        link: "https://git-scm.com/",
        svg:
            <>
                <svg xmlns="http://www.w3.org/2000/svg" className="track_logo" fill="none" viewBox="0 0 32 32">
                    <path fill="#ee513b" d="M2.585 17.413a2 2 0 0 1 0-2.826L14.587 2.585c.78-.78 2.046-.78 2.826 0l12.002 12.002c.78.78.78 2.046 0 2.826L17.413 29.415c-.78.78-2.046.78-2.826 0z" /><path fill="#fff" d="m12.149 5.062-1.215 1.215 3.139 3.139A2.126 2.126 0 0 0 15.25 12.3v7.679a2.126 2.126 0 1 0 1.718.097v-7.765l3 3a2.125 2.125 0 1 0 1.283-1.147l-3.221-3.223q.093-.3.095-.63a2.125 2.125 0 0 0-2.755-2.03z" />
                </svg>
            </>,
    },
    {
        id: "GitHub",
        alt: "GitHub Logo",
        link: "https://github.com/federicoded",
        svg:
            <>
                <svg xmlns="http://www.w3.org/2000/svg" className="track_logo" viewBox="0 0 20 20">
                    <path fill="#000" fillRule="evenodd" d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.4 9.4 0 0 0 10 4.958a9.4 9.4 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0" />
                </svg>
            </>,
    },
    {
        id: "InkScape",
        alt: "InkScape Logo",
        link: "https://inkscape.app/",
        svg:
            <>
                <svg xmlns="http://www.w3.org/2000/svg" className="track_logo" viewBox="0 0 32 32">
                    <path d="M25.431 25.209c-1.263 1.135.142 2.284 1.388 1.552.277-.281-.008-1.27-1.387-1.552zM7.296 27.041c.98.849 2.496-.211 2.949-1.395-.95-1.262-4.507.046-2.949 1.395m18.655-2.987c0 .562 4.141.931 4.141-.132a2.313 2.313 0 0 0-4.135.118zM13.233 2.216 2.161 13.545c-3.74 4.632 2.547 4.094 5.241 5.427.967.988-3.705 1.718-2.738 2.707.966.988 5.846 1.904 6.814 2.892.966.988-1.979 2.037-1.012 3.024.966.99 3.203.052 3.621 2.334.297 1.63 4.029.7 5.853-.635.967-.988-1.849-.896-.882-1.884 2.403-2.458 4.642-.892 5.465-3.357.406-1.217-3.539-1.876-2.571-2.864 2.782-1.625 12.395-2.682 7.833-7.243L18.311 2.216c-.659-.629-1.554-1.016-2.539-1.016s-1.88.387-2.54 1.017zm4.408.796 4.38 4.449a1.296 1.296 0 0 1 .174 1.491l.003-.007-2.174-1.739-.427 2.576-1.818-.959-2.909 1.837-.963-3.874-1.563 2.704H9.953c-.975 0-1.088-1.237-.204-2.122 1.546-1.668 3.32-3.369 4.285-4.355.466-.453 1.102-.732 1.804-.732s1.338.279 1.804.733zm-7.057 16.576c.296.184 4.771 1.093 5.865 1.275.379.08.11.47-.412.734-1.178.314-6.894-2.008-5.452-2.008z" />
                </svg>
            </>,
    },
];

const method_pics = [
    {
        pic: "/Portfolio/federicoded/method/slide01.png",
        alt: "Process picture",
    },
    {
        pic: "/Portfolio/federicoded/method/slide02.png",
        alt: "Process picture",
    },
    {
        pic: "/Portfolio/federicoded/method/slide03.png",
        alt: "Process picture",
    },
    {
        pic: "/Portfolio/federicoded/method/slide04.png",
        alt: "Process picture",
    },
    {
        pic: "/Portfolio/federicoded/method/slide05.png",
        alt: "Process picture",
    },
]



const Federicoded = () => {

    const [paused, setPaused] = useState(false);
    const ratio = useAspectRatio();
    let track_limit = "-40%";
    if(ratio <= 0.5){
        track_limit = "-250%";
    }else if(ratio <= 0.7528){
        track_limit = "-170%";
    }else if(ratio <= 1){
        track_limit = "-120%";
    }else if(ratio <= 1.31){
        track_limit = "-60%";
    }

    return (
        <>
            <Header
                color_top="#FFFFFF"
                color_bottom="#FFFFFF"
            />
            <div className="page_container">
                <div className="header_back"></div>

                <div className="page federicoded_page">
                    <Mini_Section
                        content={
                            <>
                                <h1 className="main_title">
                                    Porfolio Web <span> - Federico Guigou</span>
                                </h1>
                                <p className="main_intro">
                                    La creación de este mismo sitio web representó un desafío conceptual y técnico para lograr un equilibrio entre estética, rendimiento y usabilidad.
                                    Este proyecto partió de la necesidad de tener un lugar donde presentar mis habilidades de desarrollo y diseño, a través de una experiencia interactiva, en un medio profesional.
                                </p>
                            </>
                        }
                    />
                    <div className="separation"></div>
                    <Common_Section
                        class_n="box_shadow method_box"
                        bigger_side="right"
                        left={
                            <>
                                <h2 data-i18n="method" className="method_title">Metolodogía</h2>
                                <p className="method_text" data-i18n="method_text">
                                    Este sitio lo construí basándome en los principios de <b>Lean UX</b>, priorizando la agilidad en los ciclos de diseño y centrándome en el usuario final, recibiendo recomendacines de colegas, profesores y otros profesionales.
                                </p>
                                <p className="method_text">
                                    Aplicar este enfoque, combinando bocetos en papel, prototipos rápidos y ajustes iterativos, me permitió mantener la flexibilidad, mejorar sobre la marcha y construir una interfaz clara, coherente e intuitiva.
                                </p>
                            </>
                        }
                        right={
                            <>
                                <div className="illustration_side">
                                    <Slider
                                        slide_pics={method_pics}
                                    />
                                </div>


                            </>
                        }
                    />
                    <div className="separation"></div>
                    <Mini_Section
                        content={
                            <>
                                <h2 className="main_title">
                                    Tecnologías y Herramientas
                                </h2>
                                <div className="track_container">
                                    <motion.div
                                        className="track"
                                        drag="x"
                                        onDragStart={() => setPaused(true)}
                                        onDragEnd={() => setPaused(false)}
                                        animate={!paused ? { x: ["10%", track_limit] } : {}}
                                        transition={{
                                            duration: 10,
                                            repeat: Infinity,
                                            ease: "linear",
                                            repeatType: "reverse"
                                        }}
                                    >
                                        {track_items.map((item, idx) => (
                                            <motion.div
                                                title={item.id}
                                                initial={{ scale: 1 }}
                                                whileHover={{ scale: 1.2 }}
                                                key={idx} >
                                                <a href={item.link} target="_blanc">
                                                    {item.svg}
                                                </a>

                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                            </>
                        }
                    />
                    <div className="separation"></div>
                    <div className="desing_challenges box_shadow">
                        <div className="desing_challenges_title">
                            <h2>Desafíos de diseño:</h2>
                        </div>
                        <Common_Section
                            left={
                                <>
                                    <h3 className="challenge_title">Diseñar una experiencia visual narrativa </h3>
                                    <p className="challenge_text" data-i18n="visual_xp_text">
                                        Mi objetivo fue presentar la información en el sitio a través de una experiencia que se sintiera como un momento en el camino, como algo que el visitante ve “de paso".
                                    </p>
                                    <p className="challenge_text" data-i18n="visual_xp_solution">
                                        El sitio parte de una ilustración que simula una publicidad de ruta, acompañado de nubes y otros elementos que refuerzan esta ambientación, creando una escena que remite al tránsito por un paisaje abierto.
                                        Las demás secciones mantienen los colores y elementos gráficos que sutilmente dan continuidad a la narrativa.
                                    </p>
                                </>
                            }
                            right={
                                <>
                                    <img src="/Portfolio/federicoded/pic1.gif" alt="home screenshot"></img>

                                </>
                            }
                        />
                        <div className="mini_separation"></div>
                        <Common_Section
                            bigger_side="left"
                            left={
                                <>
                                    <div className="illustration_side">
                                        <Slider
                                            slide_pics={method_pics}
                                        />
                                    </div>

                                </>
                            }
                            right={
                                <>
                                    <h3 className="challenge_title">Crear un diseño simple y funcional, pero con valor agregado</h3>
                                    <p className="challenge_text" data-i18n="visual_xp_text">
                                        Quería evitar sobrecargar el sitio, sin caer en una estética vacía. El desafío fue encontrar el equilibrio entre la simplicidad visual y la capacidad de transmitir profesionalismo, calidez y una experiencia agradable para quien lo visita.
                                    </p>
                                    <p className="challenge_text" data-i18n="visual_xp_solution">
                                        Reduje la estructura del sitio a las secciones mínimas necesarias, usé letras grandes y una tipografía legible para destacar lo esencial.
                                        Este enfoque me permitió crear una experiencia visual armónica y centrada, sin distracciones, pero con personalidad.
                                    </p>
                                </>
                            }
                        />
                        <div className="mini_separation"></div>
                        <Common_Section
                            left={
                                <>
                                    <h3 className="challenge_title">Diseño responsive</h3>
                                    <p className="challenge_text" data-i18n="visual_xp_text">
                                        El sitio debía adaptarse a diferentes tamaños de pantalla, siendo capaz de transmitir una experiencia igual o similar tanto en una computadora de escritorio como en un smartphone.
                                    </p>
                                    <p className="challenge_text" data-i18n="visual_xp_solution">
                                        La disposición de los elementos cambia de acuerdo al espacio disponible.
                                        Reduje algunos detalles en la versión mobile sin perder la identidad del diseño, manteniendo una experiencia fluida y coherente en todos los dispositivos.
                                    </p>
                                </>
                            }
                            right={
                                <>

                                    <img src="/Portfolio/federicoded/mobile_screen.png" alt="home screenshot" className="screenshot"></img>
                                </>
                            }
                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Federicoded;