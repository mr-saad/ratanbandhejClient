"use client"

import { Quagera } from "@/components/logoFont"
import { motion } from "framer-motion"

export default function HeaderText() {
  return (
    <div className="z-[2] px-5 text-white md:px-20">
      <div className="overflow-hidden">
        <motion.h1
          initial={{
            x: -50,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ ease: "easeOut", delay: 0.4, duration: 0.3 }}
          className={"pb-4 text-7xl font-extrabold " + Quagera.className}
        >
          Ratan Bandhej
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
            ease: "easeOut",
          }}
          className="text-2xl"
        >
          One Place For All Your Bandhani Needs.
        </motion.p>
      </div>
    </div>
  )
}
