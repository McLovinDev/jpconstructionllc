import { motion } from "framer-motion";
import {
    reverseDissolve,
    useInViewAnimation,
} from "../../animations/FramerMotion";
import type { RootObject } from "../../interfaces/dbData";
const inViewProps = useInViewAnimation(0.2); // Detecta el 30% de visibilidad

interface BlockTitleProps {
    data: RootObject;
}




const BlockTitle: React.FC<BlockTitleProps> = ({ data }) => {
    return (
        <motion.div
            className="md:pt-16 pt-6 relative"
            variants={reverseDissolve(2)}
            {...inViewProps}
            animate="show"

        >
            <div className="flex justify-center flex-col text-center">
                <h2
                    className="text-center md:text-[60px] text-[30px] font-bold text-primary-500 gradient-text"
                >
                    Need help with a project?
                </h2>
                <h2
                    className="md:text-[40px] text-[25px] mb-2 font-bold text-center text-secondary"
                >
                    {data.slogan[2]}
                </h2>
            </div>
        </motion.div>
    );
}

export default BlockTitle;

