'use client'
import { useEffect, useState } from 'react'
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
import abletonBackground from '@/public/background.jpg'
import Link from 'next/link'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export default function MainContent() {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight)
    setHeight(window.innerHeight)
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
      <section className="flex flex-col items-center gap-32 w-full px-36 pb-36">
        <div
          className="w-full object-cover relative flex items-center justify-center bg-zinc-100 h-svh"
          style={{ height: height - 80 * 2 }}
        >
          <Image
            className="object-cover"
            alt="Ableton background image"
            fill
            placeholder="blur"
            sizes="100vw"
            quality={100}
            src={abletonBackground}
          />
          <span className="text-9xl font-semibold text-orange-600 z-10">
            Ableton
          </span>
        </div>
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
        <article className="w-full relative bg-indigo-200 flex">
          <Image
            className="w-6/12 object-cover"
            src={abletonBackground}
            quality={100}
            alt="Meetings photo"
          />
          <div className="w-6/12 flex flex-col items-center justify-center text-2xl font-semibold py-48 gap-8">
            <p className="w-8/12 flex flex-col gap-8">
              We are really proud of the work we have done so far. But there is
              so much more to come. If you would like to be a part of it, please
              join us.
              <Link className="text-blue-800" href={'/#'}>
                See latest jobs <ChevronRightIcon />
              </Link>
            </p>
          </div>
        </article>
      </section>
    </main>
  )
}
