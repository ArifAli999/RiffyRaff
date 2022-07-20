import React from 'react'
import { motion, AnimatePresence, useAnimation } from "framer-motion"

function ThankYou() {
    return (
        <AnimatePresence>
            <motion.div
                layout
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.8 }}
                className='bg-pink-500 p-6'
            >
                <p>Thank you</p>
            </motion.div>
        </AnimatePresence>
    )
}

export default ThankYou