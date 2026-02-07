
const Introduction = () => {
    return (
        <>
            <div className='introduction' id="introduction">
                <h1 data-i18n="hi_im_fede">Hola, soy Fede.</h1>
                <p data-i18n="hi_description">
                    Soy Analista y Diseñador de Software, impulsado a desarrollar productos de gran utilidad que enriquezcan la experiencia del usuario.
                </p>
                <p>
                    <span className="subtext">Este sitio es mi carta de presentación y laboratorio, donde pruebo herramientas y recursos nuevos.</span>
                </p>
                <ul>
                    <li><a className="enlace" data-i18n="my_work">Mira mi trabajo</a></li>
                    <li><a target="_blank" data-i18n="my_resume">Accede a mi CV</a></li>
                </ul>
            </div>
        </>
    )
}

export default Introduction;