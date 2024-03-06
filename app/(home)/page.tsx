import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Poppins } from "next/font/google";
import HomePageHeader from './_components/homeheader';
import HomePageFooter from './_components/homefooter';

const textFont = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function Home() {
    return (
        <><div>
            <HomePageHeader />
        </div>
            <div className="flex items-center justify-center flex-col">
                <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-7 mt-8">
                    Platform for Creators
                </h1>
                <div>
                    <Link href="/register">
                        <button className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-3 w-fit">Get Started</button>
                    </Link>
                </div>
                <div className={cn("text-md md:text-xl text-center text-gray-600 mt-4 max-w-s md:max-w-xl text-center mx-auto", textFont.className,)}>
                    The All-in-One Creator Platform:
                    Craft your Link-in-Bio.
                    Empower your creative journey with our AI Creations Hub, offering Chat, Image Generation, Video Generation, and Code Generation.
                    Also, enjoy your personal Workstation brimming with useful tools
                </div>
                <div>
                    <p className={cn("text-md md:text-xl text-center text-gray-600 mt-8 max-w-s md:max-w-xl text-center mx-auto", textFont.className,)}>
                        Your all-in-one destination for showcasing your games, apps, and gaming profiles with a single link.
                        Share and showcase your games and apps across various platforms and social networks with a single, convenient link.
                    </p>
                </div>
            </div>
            <div>
                <HomePageFooter />
            </div>
        </>
    );
}
