import React from 'react'
import moment from 'moment'
import { calculateAge } from '@/utils/formatter'

export default function PersonalInformationCard() {
  const yearsOld = calculateAge('1999-10-16')
  return (
    <>
      <p className="leading-relaxed mb-4">
      My name is Jay Cabasag, and I am a software engineer with a passion for building innovative and user-friendly applications. I graduated with a Bachelor&apos;s degree in Computer Science in August 2022 and have been working as a Junior React Engineer at a corporate company ever since.
      </p>
      <div className="flex border-t border-gray-200 py-2">
        <span className="text-gray-500">Fullname</span>
        <span className="ml-auto text-gray-900">Jay A. Cabasag</span>
      </div>
      <div className="flex border-t border-gray-200 py-2">
        <span className="text-gray-500">Age</span>
        <span className="ml-auto text-gray-900">{yearsOld}</span>
      </div>
      <div className="flex border-t border-b mb-6 border-gray-200 py-2">
        <span className="text-gray-500">Interests</span>
        <span className="ml-auto text-gray-900">Programming Games, and Anime</span>
      </div>
    </>
  )
}
