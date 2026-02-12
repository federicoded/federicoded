import { useEffect, useState } from "react";

export const useAspectRatio = () => {
    const getRatio = () => {
        if (typeof window === "undefined") return 1;
        return (window.innerWidth / window.innerHeight);
    };

    const [ratio, setRatio] = useState<number>(getRatio());

    useEffect(() => {
        const update = () => setRatio(getRatio());
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    return ratio;
};
