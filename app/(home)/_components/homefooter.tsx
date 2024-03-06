import Link from 'next/link';
import Image from 'next/image';

export default function HomePageFooter() {
    return (
        <footer className="bg-gray-800 text-white py-6 px-4 md:px-12 fixed bottom-0 left-0 right-0 z-50">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center gap-x-4">
                    <Link href={"/"}>
                        <div className="hover-opacity-75 transition items-center gap-x-2 hover:text-blue-600 flex items-center">
                            <Image
                                width={30} // Adjust width as needed
                                height={30} // Adjust height as needed
                                alt="Header Image"
                                src="/logo.png"
                                className="rounded-full mr-2"
                            />
                            <p className="text-xl font-bold text-pink-600 pb-1">
                                Creatoris Lab
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="flex gap-4 md:ml-auto">
                    <Link href="/privacy-policy">
                        <div className="hover:text-blue-600 text-sm">
                            Privacy Policy
                        </div>
                    </Link>
                    <Link href="/terms-of-service">
                        <div className="hover:text-blue-600 text-sm">
                            Terms of Service
                        </div>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
