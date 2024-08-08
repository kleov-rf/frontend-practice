import Link from 'next/link'
import Image from 'next/image'
import AddIcon from '@mui/icons-material/Add'

export default function TopBarMenu() {
  return (
    <header className="flex items-center justify-between h-20 w-svw bg-white px-8 font-medium text-lg border-b-2 border-black">
      <section className="flex items-center gap-10">
        <Image src="/ableton.svg" width={70} height={0} alt="Ableton logo" />
        <nav className="flex items-center gap-10 pt-1.5">
          <Link href={'/#'}>Live</Link>
          <Link href={'/#'}>Push</Link>
          <Link href={'/#'}>Link</Link>
          <Link href={'/#'}>Shop</Link>
          <Link href={'/#'}>Packs</Link>
          <Link href={'/#'}>Help</Link>
          <Link href={'/#'} className="flex items-center gap-1 text-orange-600">
            More
            <AddIcon className="pb-0.5" />
          </Link>
        </nav>
      </section>
      <section className="flex items-center gap-8 text-base">
        <Link href={'/#'} className="text-xl text-indigo-700">
          Try Live for free
        </Link>
        <Link href={'/#'}>Account</Link>
        <Link href={'/#'}>Log out</Link>
      </section>
    </header>
  )
}
