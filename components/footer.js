
import Link from 'next/link'
import TwitterLogo from './twitter.svg'
import DiscordLogo from './discord.svg'
import TelegramLogo from './telegram.svg'

export function Footer() {
    return (
        <footer className="footer">
            <Link href="/about">About Us</Link>
            <Link href="/community">Community</Link>
            <Link href="/media">Media</Link>
            <Link href="/faq">FAQ</Link>
            <a href="https://mobile.twitter.com/zodiacprotocol" target="_blank" rel="noopener noreferrer">
                <TwitterLogo />
            </a>
            <a href="https://t.me/Zodiac_Protocol_Announcements" target="_blank" rel="noopener noreferrer">
                <TelegramLogo />
            </a>
            <a href="https://discord.com/invite/feJtwxdvsQ" target="_blank" rel="noopener noreferrer">
                <DiscordLogo />
            </a>            
        </footer>
    )
}
