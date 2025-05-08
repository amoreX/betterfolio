import { motion } from "framer-motion"
export default function Navbar() {
    return (
        <motion.div className="w-full bg-[#e6ddcc] h-fit p-4 rounded-md col-span-4 flex justify-between" >
            <div>Nihal Rahman</div>
            <div className="flex gap-2">
                <span>About</span>
                <span>Work</span>
                <span>Contact</span>
            </div>
        </motion.div>
    )
}