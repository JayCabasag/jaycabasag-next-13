"use client"

import { WorksCard } from '@/components/works'
import { motion } from 'framer-motion'

export default function Workspage() {
  return (
    <motion.section
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4 }} 
      className="text-gray-600 body-font"
    >
    <WorksCard
      title='My works'
      description='Works showcases : Down below are list of works that I worked on using different stacks I learned since I started my journey as a developer.'
      buttonText='My Journey'
      programmingLanguages={['Next JS 13', 'Next JS 12', 'React JS', 'Node JS', 'MUI', 'Tailwind CSS', 'Framer motion']}
    />
    <WorksCard
      title='Techno Library'
      description='Techno library is an online library managament system,'
      buttonText='View project'
      programmingLanguages={['Next JS 12', 'MUI', 'Firebase', 'React Native']}
      hasRepo
      repo='https://github.com/JayCabasag/techno-library'
    />
    <WorksCard
      title='Univtraze Web Api'
      description='Univtraze is composed of several technologies, but the one I worked on is its Web Api, Develop mobile App and Web application'
      buttonText='View project'
      programmingLanguages={['Firebase', 'React Native', 'Node JS', 'MySQL']}
      hasRepo
      repo='https://github.com/JayCabasag/univtraze_app_webapi'
    />
    <WorksCard
      title='Univtraze Web App'
      description='Univtraze is composed of several technologies, but the one I worked on is its Web Api, Develop mobile App and Web application'
      buttonText='View project'
      programmingLanguages={['Next JS 12', 'Tailwind CSS', 'Firebase', 'React Native', 'Node JS']}
      hasRepo
      repo='https://github.com/JayCabasag/univtraze_webclient'
    />
    <WorksCard
      title='CS Alumni Connect  Web App'
      description='This is the Web application, a social media app that I first develop for production using react js'
      buttonText='View project'
      programmingLanguages={['React JS', 'Tailwind CSS', 'Firebase']}
      hasRepo
      repo='https://github.com/JayCabasag/csalumniconnect_user'
    />
  </motion.section>
  )
}
