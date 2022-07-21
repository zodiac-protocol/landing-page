
import Link from 'next/link'
import TwitterLogo from './twitter.svg'
import DiscordLogo from './discord.svg'
import TelegramLogo from './telegram.svg'
import { SOCIAL_LINKS } from '../constants/links';

export function Footer() {
    return (
        <footer className="footer">
            <Link href="/about">About Us</Link>
            <Link href="/community">Community</Link>
            <Link href="/media">Media</Link>
            <Link href="/faq">FAQ</Link>
            <a href={SOCIAL_LINKS.TWITTER} target="_blank" rel="noopener noreferrer">
                <TwitterLogo />
            </a>
            <a href={SOCIAL_LINKS.TELEGRAM} target="_blank" rel="noopener noreferrer">
                <TelegramLogo />
            </a>
            <a href={SOCIAL_LINKS.DISCORD} target="_blank" rel="noopener noreferrer">
                <DiscordLogo />
            </a>
        </footer>
    )
}
