"use client"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import { motion } from "framer-motion"

const financialFeatures = [
  "We directly deposit a Cashback reward to your Stock Saving account. you’ve earned for every purchase",
  "AI dynamically adjusts savings amounts based on real-time cash flow. Automatically allocates funds into Rainy Budget, Stock Investment, and Future Fund.",
  "AI analyzes transaction history and identifies spending patterns.",
  "Helps to uncover unnecessary subscription fees.",
  "AI automates bill payments including interest payments on existing loans or credit card balance.",
  "Provides real-time nudges to prevent impulsive spending.",
  "AI creates a personalized Debt Payoff plan using Avalanche or Snowball methods.",
  "Dynamically adjusts debt repayment amounts based on cash flow availability.",
  "Suggests ways to lower interest rates, including balance transfers or refinancing options.",
  "Helps users pay off debt faster without sacrificing essential expenses.",
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.1, boxShadow: "0px 12px 25px rgba(0, 0, 0, 0.15)" },
}

interface FeatureDiscoveryProps {
  onFeatureDiscoverySuccess: (selectedFeatures: string[]) => void // Define prop type for callback
}


export const FeatureDiscovery: React.FC<FeatureDiscoveryProps> = ({
  onFeatureDiscoverySuccess,
}) => {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  const handleSelectFeature = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      // If the feature is already selected, deselect it
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feature))
    } else {
      // If less than 3 features are selected, allow selection
      if (selectedFeatures.length < 3) {
        setSelectedFeatures([...selectedFeatures, feature])
      }
    }
  }

  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#submitForm")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    if (selectedFeatures.length == 3) {
      onFeatureDiscoverySuccess(selectedFeatures)
      scrollToNextSection()
    }
  }, [selectedFeatures])

  return (
    <section id='featureDiscovery' className='py-24 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='section-heading text-center mb-12'>
          <h2 className='section-title text-4xl font-extrabold leading-tight'>
            Discover Features Tailored for You
          </h2>
          <p className='section-description mt-4 text-xl leading-relaxed'>
            Explore how we can enhance your financial health. Select the 3
            features that resonate with you the most.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-8 mt-10 lg:grid-cols-3'>
          {financialFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className='p-6 border border-white/20 rounded-3xl shadow-lg bg-white/90 transition-transform duration-300 ease-out'
              variants={cardVariants}
              initial='hidden'
              whileInView='visible'
              whileHover='hover'
            >
              <p className='text-lg text-black/80 font-semibold leading-relaxed mb-4'>
                {feature}
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{
                  scale: 0.9,
                  rotate: 10, // Fun spin effect on tap
                  transition: { type: "spring", stiffness: 500, damping: 10 },
                }}
                animate={{
                  scale: selectedFeatures.includes(feature) ? 1.1 : 1,
                  backgroundColor: selectedFeatures.includes(feature)
                    ? "#4CAF50"
                    : "#007BFF",
                  transition: { duration: 0.2 },
                }}
                className={twMerge(
                  "btn btn-secondary px-5 py-3 rounded-full shadow-lg focus:ring-2 focus:ring-blue-300",
                  selectedFeatures.includes(feature)
                    ? "bg-blue-400 text-white cursor-not-allowed opacity-60"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                )}
                onClick={() => handleSelectFeature(feature)}
                disabled={
                  selectedFeatures.includes(feature) &&
                  selectedFeatures.length >= 3
                }
              >
                {selectedFeatures.includes(feature) ? "Selected" : "Select"}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
