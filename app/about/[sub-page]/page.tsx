'use client'
import { GoalsCard, LanguagesCard, PersonalInformationCard } from '@/components/about';
import { usePathname } from 'next/navigation'

export default function AboutSubpage() {
  const pathname = usePathname();
  return (
    <>
      {pathname === '/about/personal-information' && <PersonalInformationCard />}
      {pathname === '/about/goal' && <GoalsCard />}
      {pathname === '/about/languages' && <LanguagesCard />}
    </>
  )
}
