import Link from 'next/link'
import Logo from './logo.svg'
import TwitterLogo from './logos/twitter.svg'
import DiscordLogo from './logos/discord.svg'
import TelegramLogo from './logos/telegram.svg'
import MediumLogo from './logos/medium.svg'
import { Footer } from './footer'
import Head from 'next/head'
import { SOCIAL_LINKS, APP } from '../constants/links';

export function Layout({ children }) {
  return (
    <div className="app">
      <Head>
        <title>Zodiac</title>
        <meta name="description" content="Open-source protocol for deconstructing LPs into principal and yield tokens." />
        <meta name="robots" content="nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="header">
        <div className="navbar-left">
          <Link href="/"><Logo className="zodiac-logo" width="100%" height="100%" /></Link>
        </div>
        <div className="navbar-right">
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
          <span className="nav-icon">
            <a href={SOCIAL_LINKS.MEDIUM} target="_blank" rel="noopener noreferrer">
              <MediumLogo />
            </a>
          </span>
          <button className="btn">
            <a href={APP} target="_blank" rel="noopener noreferrer">
              Launch App
            </a>
          </button>                 
        </div>
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  )
}