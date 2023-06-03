import Image from "next/image";

import emailIcon from "../../public/img/socials-row/email.png"
import steamLogo from "../../public/img/socials-row/steam.png"

export const SOCIAL_LIST = [
    { src: "/img/socials-row/github.svg", alt: "GitHub Logo", href: "https://github.com/TolleyLikesRice" },
    { src: "/img/socials-row/twitter.svg", alt: "Twitter Logo", href: "https://twitter.com/TolleyLikesRice" },
    { src: steamLogo, alt: "Steam Logo", href: "https://steamcommunity.com/id/Tolley" },
    { src: emailIcon, alt: "Email Icon", href: "mailto:tolley@tolley.dev"}
];

export function SocialLink({ src, alt, href }) {
    return (
        <div className="px-2">
            <a href={href} target="_blank">
                <Image src={src} alt={alt} width={512} height={512} className="h-6 w-6" />
            </a>
        </div>
    )
}