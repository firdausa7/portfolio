import Image from "next/image";

export default function HeroPatterns() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none bg-zinc-400 dark:bg-slate-950">

            {/* 1. Portrait background */}
            <div className="absolute inset-0">
                <Image
                    src="/myhero.jpeg"
                    alt="Hero Background"
                    fill
                    priority
                    sizes="100vw"
                    /* CHANGED: 'object-right-top' pushes the image to the right.
                       If it's TOO far right, use 'object-[80%_top]' to fine-tune it.
                    */
                    className="object-contain object-right-top scale transition-transform duration-700"
                />
            </div>

            {/* 2. Theme overlay */}
            <div className="absolute inset-0 bg-black/40 dark:bg-slate-950/70" />

            {/* 3. Vignette - Adjusting focus slightly to the right to match the image */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_center,transparent_20%,rgba(0,0,0,0.8)_100%)] dark:bg-[radial-gradient(circle_at_70%_center,transparent_20%,rgba(5,11,16,0.95)_100%)]" />

            {/* 4. Dots texture */}
            <div className="absolute inset-0 opacity-[0.18] dark:opacity-[0.14] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
    );
}
