import {motion, useTransform} from "framer-motion";
import { useTime } from "framer-motion"

function Logo() {
    const time = useTime()
    const x = useTransform(
        time,
        [0, 4000, 8000, 1200], // For every 4 seconds...
        [0, 100, 0, 100], // ...rotate 360deg
        { clamp: false }
    )
    return(

        <div>
            <motion.h1 style={{x}}>
                ХУЙ
            </motion.h1>
        </div>
    )
}

export default Logo;