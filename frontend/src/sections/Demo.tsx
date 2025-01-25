"use client"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import { motion } from "framer-motion"
import SavingsAllocator from "@/components/SavingAllocator"

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
            Demo
          </h2>
        </div>
        <SavingsAllocator />
      </div>
    </section>
  )
}
