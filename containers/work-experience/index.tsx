"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { WorkExperienceCard } from '@/components/work-experience'

export default function WorkExperiencepage() {
  return (
    <motion.section
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="text-gray-600 body-font overflow-hidden"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <WorkExperienceCard
            workedAt='Metromart Philippines Inc.'
            workedSince='September 2022 - Present'
            workTitle='Junior React Engineer'
            description='As a Junior React Developer, I specialize in creating modern and responsive web apps using Next.js, MUI, and TypeScript. 
            With my knowledge of React, I design interactive UIs for a seamless user experience. 
            I use Next.js to optimize apps for quick loading and Material-UI for visually stunning designs. With TypeScript, my code is reliable, scalable, and easy to maintain.'
            buttonLabel='Explore more'
          />
          <WorkExperienceCard
            workedAt='Taguig City University - BSIS'
            workedSince='April 2022 - August 2022'
            workTitle='Fullstack Developer'
            description=' As a fullstack developer, I use React JS, Node JS, MySQL, and React Native to build dynamic web and mobile apps tailored to businesses across industries.
            I excel in designing intuitive interfaces, efficient server-side architectures, and integrating APIs and third-party tools for seamless cross-platform functionality.'
            buttonLabel='Explore more'
          />
          <WorkExperienceCard
            workedAt='Freelancer'
            workedSince='Since 2022 - present'
            workTitle='Fullstack developer'
            description='I use Node.js, Next.js, MUI, Tailwind CSS, MySQL, Firebase, 
            and React Native to create responsive web and mobile apps. 
            Node.js and Next.js render server-side, while MUI and Tailwind CSS make attractive UIs. MySQL stores data, 
            and Firebase provides real-time DB services. React Native builds fast, efficient cross-platform mobile apps. 
            I build scalable, dynamic, high-performing apps that meet clients&apos; needs.'
            buttonLabel='Explore more'
          />
        </div>
      </div>
    </motion.section>
  )
}
