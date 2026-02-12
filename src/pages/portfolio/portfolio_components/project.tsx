
import { Link } from "react-router-dom";
import { motion } from "motion/react";

type ProjectProps = {
    destination: string;
    title: string;
    illustration : React.ReactElement;
    tasks: string[];
}

const Project = (pp: ProjectProps) => {
    return (
        <>
            <Link to={pp.destination} className="project_link">
                <motion.li className="project"
                whileHover={{
                    scale:1.05
                }}>
                    <ul className="project_base">
                        <li className="project_illustration box_shadow">
                            {pp.illustration}
                        </li>
                        <li className="project_description">
                            <h3 className="project_title"> {pp.title}</h3>
                            <ul className="description_items">
                                {
                                    pp.tasks.map((item, index)=> (<> <li key={index}>{item}</li> </>))
                                }
                            </ul>
                        </li>
                    </ul>
                </motion.li>
            </Link>
        </>
    )
}
export default Project;