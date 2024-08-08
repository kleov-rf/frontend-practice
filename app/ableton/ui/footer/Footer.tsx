import Image from 'next/image'
import Link from 'next/link'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export default function Footer() {
  return (
    <footer className="flex flex-col gap-16 px-32 py-20 bg-white text-lg border-t-2 border-black">
      <span className="text-6xl font-semibold">Ableton</span>
      <section className="flex flex-col font-light gap-16">
        <div className="flex justify-between">
          <article className="flex flex-col w-3/12 gap-2">
            <Link href={'/#'}>
              Register Live or Push
              <ChevronRightIcon fontSize="small" className="text-zinc-500" />
            </Link>
            <Link href={'/#'}>
              About Ableton
              <ChevronRightIcon fontSize="small" className="text-zinc-500" />
            </Link>
            <Link href={'/#'}>
              Jobs
              <ChevronRightIcon fontSize="small" className="text-zinc-500" />
            </Link>
          </article>
          <article className="flex flex-col w-3/12 gap-2">
            <span className="font-semibold">Education</span>
            <Link href={'/#'}>
              Offers for students and teachers
              <ChevronRightIcon fontSize="small" className="text-zinc-500" />
            </Link>
            <Link href={'/#'}>
              Offers for institutions
              <ChevronRightIcon fontSize="small" className="text-zinc-500" />
            </Link>
            <Link href={'/#'}>
              Push 1 trade-in initiative
              <ChevronRightIcon fontSize="small" className="text-zinc-500" />
            </Link>
          </article>
          <article className="flex flex-col w-4/12 gap-2">
            <span className="font-semibold">Sign up to our newsletter</span>
            <p>
              Enter your email address to stay up to date with the latest
              offers, tutorials, downloads and more.
            </p>
            <form>
              <input
                type="text"
                className="w-9/12 bg-zinc-100 placeholder:text-zinc-600 px-5 pb-1.5 pt-2"
                placeholder="Email Address"
              />
              <button
                type="submit"
                className="w-3/12 text-white bg-indigo-700 hover:bg-indigo-800 font-semibold px-5 pb-1.5 pt-2"
              >
                Sign up
              </button>
            </form>
          </article>
        </div>
        <div className="flex justify-between">
          <article className="flex flex-col w-3/12 gap-2">
            <span className="font-semibold">Community</span>
            <Link href={'/#'}>
              Find Ableton User Groups
              <ChevronRightIcon fontSize="small" className="text-zinc-500" />
            </Link>
            <Link href={'/#'}>
              Find Certified Training
              <ChevronRightIcon fontSize="small" className="text-zinc-500" />
            </Link>
            <Link href={'/#'}>
              Become a Certified Trainer
              <ChevronRightIcon fontSize="small" className="text-zinc-500" />
            </Link>
          </article>
          <article className="flex flex-col w-3/12 gap-2">
            <span className="font-semibold">Distributors</span>
            <Link href={'/#'}>
              Find Distributors
              <ChevronRightIcon fontSize="small" className="text-zinc-500" />
            </Link>
            <Link href={'/#'}>
              Try Push in-store
              <ChevronRightIcon fontSize="small" className="text-zinc-500" />
            </Link>
          </article>
          <article className="flex flex-col w-4/12 gap-2">
            <span className="font-semibold">Language and Location</span>
            <div className="flex gap-2 text-sm font-normal">
              <select
                name="language"
                id="language_select"
                className="w-3/12 bg-zinc-100 p-2"
              >
                <option selected>English</option>
                <option>Spanish</option>
              </select>
              <select
                name="location"
                id="location_select"
                className="w-6/12 bg-zinc-100 p-2"
              >
                <option selected>United States</option>
                <option>Spain</option>
              </select>
            </div>
          </article>
        </div>
      </section>
      <section className="flex items-center justify-between text-sm">
        <nav className="flex gap-4">
          <Link href={'/#'}>Archive</Link>
          <Link href={'/#'}>Contact Us</Link>
          <Link href={'/#'}>Press Resources</Link>
          <Link href={'/#'}>Legal Info</Link>
          <Link href={'/#'}>Privacy Policy</Link>
          <Link href={'/#'}>Cookie Settings</Link>
          <Link href={'/#'}>Imprint</Link>
        </nav>
        <div className="flex items-center gap-4">
          <span>Made in Berlin</span>
          <Image
            src={'/ableton.svg'}
            width={45}
            height={0}
            alt="Ableton logo"
          />
        </div>
      </section>
    </footer>
  )
}
