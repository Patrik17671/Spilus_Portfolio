import {useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

export const titleAnimation = {
    hidden: {y: -200, opacity:0},
    show: {
        y: 0,
        opacity: 1,
        transition: {duration: 0.70, ease: "easeOut"},
    }
}
export const fadeAnimation = {
    hidden:{opacity: 0},
    show:{
        opacity:1,
        transition: {ease: "easeOut", duration: 1.5},
    }
}

export const pageAnimation =  {
    hidden: {
        opacity:0,
        y: 0
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.85,
            when: "beforeChildren",
            staggerChildren: 0.25,
        }
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: 0.5,
        }
    }
}
export const popInAnimation = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5
        }
    }
};
export const fadeInRightAnimation = {
    hidden: {x: 200, opacity:0},
    show:{
        x: 0,
        opacity: 1,
        transition:{duration: 0.5, ease: "easeOut"},
    }
};

export const useScroll = () => {
    const controls = useAnimation();
    const [element, view] = useInView({threshold: 0.3 });
    if (view){
        controls.start("show");
    }else {
        controls.start("hidden");
    }
    return [element, controls];
};
export const useScroll1 = () => {
    const controls1 = useAnimation();
    const [element1, view1] = useInView({threshold: 0.3 });
    if (view1){
        controls1.start("show");
    }else {
        controls1.start("hidden");
    }
    return [element1, controls1];
};