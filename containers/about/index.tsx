'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useSelectedLayoutSegment } from 'next/navigation'
import { PersonalInformationCard } from '@/components/about'

export default function Aboutpage({children}: { children: ReactNode}) {

  const segment =  useSelectedLayoutSegment()
  const isRootLayout = segment === null

  console.log(segment)

  return (
    <motion.section
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-gray-600 body-font overflow-hidden"
    >
    <div className="container px-5 py-16 mx-auto">
      <div className="w-full mx-auto flex flex-col md:flex-row gap-12">
        <div className="lg:w-1/2 w-full lg:py-6 mb-6 lg:mb-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">About me</h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Aspiring Fullstack developer</h1>
          <div className="flex mb-4">
            <Link href='/about/personal-information' className={isRootLayout || segment === 'personal-information' ? "flex-grow text-main border-b-2 border-main py-2 text-lg px-1" : "flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"}>Personal Info.</Link>
            <Link href={'/about/goal'} className={ segment === 'goal' ? "flex-grow text-main border-b-2 border-main py-2 text-lg px-1" : "flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"}>Goal</Link>
            <Link href={'/about/languages'} className={ segment === 'languages' ? "flex-grow text-main border-b-2 border-main py-2 text-lg px-1" : "flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"}>Languages</Link>
          </div>
          {children}
          {isRootLayout && (
            <PersonalInformationCard />
          )}
        </div>
        <Image
          className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" 
          alt="hero" 
          src="/assets/profile-image-square.webp"
          width={400}
          height={400}
        />
      </div>
    </div>
  </motion.section>
  )
}
