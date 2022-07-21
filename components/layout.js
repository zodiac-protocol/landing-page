import Link from 'next/link'
import Logo from './logo.svg'
import TwitterLogo from './twitter.svg'
import DiscordLogo from './discord.svg'
import TelegramLogo from './telegram.svg'
import { Footer } from './footer'
import { SOCIAL_LINKS } from '../constants/links';

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
            <a href={SOCIAL_LINKS.TWITTER} target="_blank" rel="noopener noreferrer">
              <TwitterLogo />
            </a>
          </span>
          <span className="nav-icon">
            <a href={SOCIAL_LINKS.TELEGRAM} target="_blank" rel="noopener noreferrer">
              <TelegramLogo />
            </a>
          </span>
          <span className="nav-icon">
            <a href={SOCIAL_LINKS.DISCORD} target="_blank" rel="noopener noreferrer">
              <DiscordLogo />
            </a>
          </span>
          <button className="btn">Launch App</button>
        </div>
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  )
}