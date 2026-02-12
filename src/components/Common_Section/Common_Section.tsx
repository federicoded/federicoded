import "./common_section.css";

type CommonSectionProps = {
    left: React.ReactNode;
    right: React.ReactNode;
    class_n?:string;
    bigger_side?: "left" | "right";
};

const Common_Section = ({ left, right, bigger_side, class_n}: CommonSectionProps) => {
    return (
        <div className={"common_section "+class_n}>
            <div className={bigger_side=="left" ? "left_side bigger_side" : "left_side smaller_side" }>
                {left}
            </div>
            <div className={bigger_side=="right" ? "right_side bigger_side" : "right_side smaller_side" }>
                {right}
            </div>
        </div>
    );
};

export default Common_Section;