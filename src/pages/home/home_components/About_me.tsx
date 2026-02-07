import { forwardRef } from "react";
import * as  motion from "motion/react-client"

type link_data = {
    link: string;
    svg_path: string;
    view_box: string;
    fill?: string;
}

const social_links_data: link_data[] = [
    {
        link: "https://www.linkedin.com/in/federico-guigou/",
        svg_path: "M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9,V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7,C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6,c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z",
        view_box: "-143 145 512 512",
        fill: "color"
    },
    {
        link: "https://github.com/federicoded",
        svg_path: "M7.976.264A7.977 7.977 0 0 0 0 8.24c0 3.522 2.3 6.507 5.431 7.584.392.05.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.05 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.88-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.72-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.98 7.98 0 0 0 16 8.24C15.951 3.836 12.38.264 7.976.264",
        view_box: "0 0 16 16",
        fill: "color"
    },
    {
        link: "mailto:federicoguigous@gmail.com",
        svg_path: "M28 5.947c-.018-1.431.037-2.865-.03-4.294C27.79.338 26.415-.13 25.262 0H2C.205-.032-.106 1.813 0 3.18V22c-.038 1.75 1.76 2.117 3.106 2H26c1.795.032 2.106-1.813 2-3.18zM24 19c-.066 1.2-1.351.988-2.18 1H5c-1.2-.066-.988-1.351-1-2.18v-7.15l9.182 5.118c1.27.6 2.302-.47 3.375-.97L24 10.67zm0-12.857-10 5.574L4 6.143C4.006 5.324 3.813 4.06 5 4h18c1.227.046.977 1.317 1 2.143",
        view_box: "0 -2 28 28",
        fill: "#040505"
    },
]

const About_me = forwardRef<HTMLDivElement>((_, about_me_ref) => {

    const AML_Variants = {
        initial: { scale: 1 },
        hover: { scale: 1.4 },
    };

    const background_Variants = {
        initial: { scale: 0 },
        hover: { scale: 5 },
        
    };

    return (
        <>
            <div className="about_me" ref={about_me_ref}>
                <img className="profile_pic" alt="Foto de Federico Guigou" src="./Home/profile_pic.png" width="50%"></img>
                <ul className="links">
                    {
                        social_links_data.map((ld, index) => (
                            <motion.a href={ld.link} target="_blank"
                                className="about_me_link"
                                variants={AML_Variants}
                                initial="initial" //nombre de la variant
                                whileHover="hover"
                                whileTap={{ scale: 1.1 }}

                            >
                                <li>
                                    <motion.div
                                        className="backg_div"
                                        variants={background_Variants}
                                    />
                                    <svg
                                        fill="#000000"
                                        className="logo"
                                        xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve"
                                        viewBox={ld.view_box} >
                                        <path d={ld.svg_path} fill-rule="evenodd" />
                                    </svg>
                                </li>
                            </motion.a>
                        ))
                    }

                </ul>
            </div>
        </>
    )
});

export default About_me;