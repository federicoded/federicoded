import "./Mini_Section.css";

type CommonSectionProps = {
    content: React.ReactNode;
};

const Mini_Section = ({ content }: CommonSectionProps) => {
    return (
        <div className="mini_section">
            {content}

        </div>
    );
};

export default Mini_Section;