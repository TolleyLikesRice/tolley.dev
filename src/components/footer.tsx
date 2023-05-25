import Layout from '@/components/layout';
import { SocialLink } from '@/components/socials';
import { SOCIAL_LIST } from '@/components/socials';


export default function Footer() {
    return (
        <footer className="w-screen bg-slate-900 container px-10 py-7">
            <div className='flex items-center justify-center'>
                {SOCIAL_LIST.map((item) => (
                    <SocialLink key={item.text} src={item.src} alt={item.alt} href={item.href} />
                ))}
            </div>
            <div className='text-center w-full pt-5 text-gray-700'>2023 © TolleyLikesRice</div>
        </footer>
    )
}