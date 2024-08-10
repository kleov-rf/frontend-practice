'use client'
import { useEffect, useLayoutEffect, useState } from 'react'
import {
  company_overview,
  employee_welcoming,
  focused_excellence,
  global_team,
  passionate_growth,
  shared_passion,
} from './about-texts'
import TitleDescriptionPair from './TitleDescriptionPair'
import Image from 'next/image'

export default function MainContent() {
  const [height, setHeight] = useState(window.innerHeight)

  useLayoutEffect(() => {
    const handleResize = () => setHeight(window.innerHeight)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <main className="bg-white flex flex-col items-center">
      <header className="h-20 w-full font-semibold">
        <nav className="h-full flex gap-12 px-10 items-center justify-start">
          <span className="text-orange-600">About</span>
          <span>Jobs</span>
          <span>Apprenticeships</span>
        </nav>
      </header>
      <section className="flex flex-col items-center gap-32 w-full px-28">
        <Image
          className="w-full object-cover"
          style={{ height: height - 80 * 2 }}
          src={'/background.jpg'}
          height={400}
          width={400}
          alt="Ableton background"
        />
        <TitleDescriptionPair
          title={company_overview.title}
          description={company_overview.description}
        />
        <TitleDescriptionPair
          title={shared_passion.title}
          description={shared_passion.description}
        />
        <TitleDescriptionPair
          title={global_team.title}
          description={global_team.description}
        />
        <TitleDescriptionPair
          title={focused_excellence.title}
          description={focused_excellence.description}
        />
        <TitleDescriptionPair
          title={passionate_growth.title}
          description={passionate_growth.description}
        />
        <TitleDescriptionPair
          title={employee_welcoming.title}
          description={employee_welcoming.description}
        />
      </section>
      <span>
        We're really proud of the work we've done so far. But there's so much
        more to come. If you'd like to be a part of it, please join us.
      </span>
    </main>
  )
}
