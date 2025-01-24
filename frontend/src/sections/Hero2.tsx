"use client"
import ArrowIcon from "@/assets/arrow-right.svg"
import cogImage from "@/assets/cog.png"
import cylinderImage from "@/assets/cylinder.png"
import noodleImage from "@/assets/noodle.png"
import financialGrowth from "@/assets/growth.png"
import { Rocket, ShieldCheck, Target } from "lucide-react"
import Image from "next/image"
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion"
import { useRef } from "react"

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, when: "beforeChildren", staggerChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export const Hero2 = () => {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])
  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#financialSituation")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <section
      ref={heroRef}
      className='pt-8 pb-20 md:pt-5 md:pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#7AAEF5,#EFF6FF_100%)] overflow-x-clip'
    >
      <div className='container'>
        <motion.div
          className='md:flex items-center'
          initial='hidden' // This ensures immediate visibility
          animate='visible' // Trigger the animation immediately on load
          variants={sectionVariants}
        >
          <div className='md:w-[600px]'>
            <motion.h1
              className='text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6'
              variants={itemVariants}
            >
              SaveBoost: AI-Powered Savings to Build Your Financial Health
            </motion.h1>
            <motion.p
              className='text-lg text-[#010D3E] tracking-tight mt-6'
              variants={itemVariants}
            >
              Your savings account is divided into 3 smart funds, designed to
              help you reach your goals effortlessly:
            </motion.p>
            <motion.ul
              className='list-disc list-inside text-lg text-[#010D3E] mt-4 space-y-2'
              variants={itemVariants}
            >
              <motion.li
                variants={itemVariants}
                className='flex items-center space-x-2'
              >
                <Rocket className='h-6 w-6 text-blue-600 inline-block mr-2' />
                <span>
                  <strong>Rainy Day Fund:</strong> Save for unexpected events
                  with a target of 3 months expenses.
                </span>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className='flex items-center space-x-2'
              >
                <ShieldCheck className='h-6 w-6 text-blue-600 inline-block mr-2' />
                <span>
                  <strong>Stock Fund:</strong> Invest up to $500 in what you
                  love. Build a portfolio you are proud of!
                </span>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className='flex items-center space-x-2'
              >
                <Target className='h-6 w-6 text-blue-600 inline-block mr-2' />
                <span>
                  <strong>Future Fund:</strong> Dreaming of a car, travel, or a
                  new home? Let make it happen!
                </span>
              </motion.li>
            </motion.ul>
            <div className='flex gap-1 items-center mt-[30px]'>
              <button className='btn btn-primary' onClick={scrollToNextSection}>
                Sign Up Today
              </button>
              {/* <button className='btn btn-text gap-1'>
                <span>Learn more</span>
                <ArrowIcon className='h-5 w-5' />
              </button> */}
            </div>
          </div>
          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
            <motion.img
              src={financialGrowth.src}
              alt='cog image'
              className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:-left-0'
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            {/* <motion.img
              src={cylinderImage.src}
              width={220}
              height={220}
              alt='Cylinder Image'
              className='hidden md:block -top-8 -left-32 md:absolute'
              style={{
                translateY: translateY,
              }}
            /> */}
            {/* <motion.img
              src={noodleImage.src}
              width={220}
              className='hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]'
              alt='Noodle Image'
              style={{
                translateY: translateY,
              }}
            /> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
