import Link from 'next/link'
import Logo from './logo.svg'
import TwitterLogo from './twitter.svg'
import DiscordLogo from './discord.svg'
import TelegramLogo from './telegram.svg'
import { Footer } from './footer'

export function Layout({ children }) {
  return (
    <div className="app">
      <div className="header">
        <div className="navbar-left">
          <Link href="/"><Logo className="zodiac-logo" width="100%" height="100%" /></Link>
        </div>
        <div className="navbar-right">
          <span><Link href="/community">Community</Link></span>
          <span><Link href="/media">Media</Link></span>
          <span><Link href="/faq">FAQ</Link></span>
          <span className="nav-icon">
            <a href="https://mobile.twitter.com/zodiacprotocol" target="_blank" rel="noopener noreferrer">
              <TwitterLogo />
            </a>
          </span>
          <span className="nav-icon">
            <a href="https://t.me/Zodiac_Protocol_Announcements" target="_blank" rel="noopener noreferrer">
              <TelegramLogo />
            </a>
          </span>
          <span className="nav-icon"><DiscordLogo /></span>
          <button className="btn">Launch App</button>
        </div>
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  )
}