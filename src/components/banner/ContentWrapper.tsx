"use client"

import Container from "../Container"
import { motion } from "framer-motion"

export default function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container className="h-[calc(100dvh-80px)] flex flex-col justify-center">
      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          exit={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {children}
        </motion.div>
      </Container>
    </>
  )
}
