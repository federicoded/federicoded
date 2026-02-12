import * as  motion from "motion/react-client"

const Introduction = () => {
    return (
        <>
            <div className='introduction' id="introduction">
                <h1 data-i18n="hi_im_fede">Hola, soy Fede.</h1>
                <p data-i18n="hi_description">
                    Soy un diseñador impulsado a desarrollar productos de gran utilidad que enriquezcan la experiencia del usuario.
                </p>
                <p>
                    Este sitio es mi carta de presentación y laboratorio, donde pruebo herramientas y recursos nuevos.
                </p>
                <ul>
                    <motion.li
                        initial={{
                            scale: 1,
                            fontWeight: "550",
                        }}
                        whileHover={{
                            scale: 1.15,
                            fontWeight: "600",
                            backgroundColor: "#b9abbfb6"
                        }}
                        whileTap={{
                            scale: 0.9
                        }}
                    ><a className="enlace" data-i18n="my_work">Mira mi trabajo</a></motion.li>
                    <motion.li
                        initial={{
                            scale: 1,
                            fontWeight: "550",
                        }}
                        whileHover={{
                            scale: 1.15,
                            fontWeight: "600",
                            backgroundColor: "#b9abbfb6"
                        }}
                        whileTap={{
                            scale: 0.9
                        }}
                    >
                        <a target="_blank" data-i18n="my_resume">Accede a mi CV</a>
                    </motion.li>
                </ul>
            </div>
        </>
    )
}

export default Introduction;