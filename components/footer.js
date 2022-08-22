
import TwitterLogo from './twitter.svg'
import DiscordLogo from './discord.svg'
import TelegramLogo from './telegram.svg'
import { SOCIAL_LINKS } from '../constants/links';

export function Footer() {
    return (
        <footer>
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
