"use client"

import { CallToAction } from "@/sections/CallToAction";
import { FeatureDiscovery } from "@/sections/FeatureDiscovery";
import { FinancialSituation } from "@/sections/FinancialSituation";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Header2 } from "@/sections/Header2";
import { Hero } from "@/sections/Hero";
import { Hero2 } from "@/sections/Hero2";
import {} from "@/components/SavingAllocator"
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";
import { useState } from "react";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { auth } from "../firebase"; // Firebase auth setup
import { LogoTicker2 } from "@/sections/LogoTicker2";
import emailjs from "emailjs-com";

const db = getFirestore()

export default function Home() {
  const [selectedStage, setSelectedStage] = useState("")
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  const sendEmail = async (displayName: string) => {
    try {
      await emailjs.send(
        "service_55wqo59",
        "template_51wfb0j",
        {
          to_name: displayName,
        },
        "7_pe9rOfPWz4mUYIP"
      )
      console.log("SUCCESS! sending an email")
    } catch(error) {
      console.error("Error saving user data: ", error)
    }
  }

  const saveUserData = async (
    userID: string,
    email: string,
    displayName: string
  ) => {
    if (!userID) return

    try {
      // Store the selected stage and features in Firestore
      const userRef = doc(db, "users", userID)
      await setDoc(userRef, {
        selectedStage,
        selectedFeatures,
        userID,
        email,
        displayName
      })
      console.log("User data saved successfully!")
      sendEmail(displayName)
    } catch (error) {
      console.error("Error saving user data: ", error)
    }
  }

  const onFinancialSituationSuccess = (stage: string) => {
    setSelectedStage(stage)
  }

  const onFeatureDiscoverySuccess = (features: string[]) => {
    setSelectedFeatures(features)
  }

  const handleSignInSuccess = (
    userID: string,
    email: string,
    displayName: string
  ) => {
    saveUserData(userID, email, displayName)
  }
  return (
    <>
      <Header2 />
      <Hero2 />
      {/* <Hero /> */}
      {/* <LogoTicker /> */}
      <LogoTicker2 />
      {/* <ProductShowcase /> */}
      <FinancialSituation onFinancialSituationSuccess={onFinancialSituationSuccess} />
      <FeatureDiscovery onFeatureDiscoverySuccess={onFeatureDiscoverySuccess}/>
      <Demo />
      {/* <Pricing />
      <Testimonials /> */}
      <CallToAction onCallToActionSuccess={handleSignInSuccess} />
      <Footer />
    </>
  )
}
