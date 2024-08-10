import Footer from './ui/footer/Footer'
import TopBarMenu from './ui/topbarmenu/TopBarMenu'
import { Josefin_Sans } from 'next/font/google'
import MainContent from './ui/main_content/MainContent'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })

export default function AbletonPage() {
  return (
    <div
      className={`${josefinSans.className} min-h-svh w-full flex flex-col items-center bg-zinc-100`}
    >
      <div className="flex flex-col h-full max-w-screen-2xl">
        <TopBarMenu />
        <MainContent />
        <Footer />
      </div>
    </div>
  )
}
