 import Image from 'next/image'
 interface AstroCard {
    name: string;
    role: string;
    bio: string;
    src: string;
 }

export default function AstronautCard({name, role, bio, src}: AstroCard) {
    return(
        <div className="bg-neutral-primary-soft block max-w-sm border border-default rounded-base shadow-xs">
            <Image className="rounded-t-base" width={500} height={500} src={src} alt="" />
            <div className="p-6 text-center">
                <span className="inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
                {name}
                </span> <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">{role}</h5>
                    {bio}
            </div>
        </div>

    )

}