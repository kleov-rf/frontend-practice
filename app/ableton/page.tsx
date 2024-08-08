import Footer from './ui/footer/Footer'
import TopBarMenu from './ui/topbarmenu/TopBarMenu'
import { Josefin_Sans } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })

export default function AbletonPage() {
  return (
    <div
      className={`${josefinSans.className} min-h-svh flex flex-col justify-between`}
    >
      <TopBarMenu />
      <Footer />
    </div>
  )
}
