import Link from 'next/link'
import TwitterLogo from './twitter.svg'
import DiscordLogo from './discord.svg'
import TelegramLogo from './telegram.svg'

const LOGO = <svg className="zodiac-logo" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path d="M 85 15
          L 15 85" style={{ strokeOpacity: 0.8 }} />
  <path d="M 15 15
          L 85 15" />
  <path d="M 15 85
          L 85 85" />
</svg>


export function Footer() {
  return (
    <footer className="footer">
      About Us
      Twitter
      Telegram
      Discord
      Media
    </footer>
  )
}

export function Layout({ children }) {
  return (
    <div className="app">
      <div className="header">
        <div className="navbar-left">
          <Link href="/">{LOGO}</Link>
        </div>
        <div className="navbar-right">
          <span><Link href="/community">Community</Link></span>
          <span><Link href="/media">Media</Link></span>
          <span><Link href="/faq">FAQ</Link></span>
          <span className="nav-icon"><TwitterLogo /></span>
          <span className="nav-icon"><TelegramLogo /></span>
          <span className="nav-icon"><DiscordLogo /></span>
          <button className="btn">Launch App</button>
        </div>
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  )
}