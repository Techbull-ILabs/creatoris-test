import Link from 'next/link';
import Image from 'next/image';

export default function HomePageHeader() {
    return (
        <div>
            <header className="bg-white border-b flex justify-between items-center px-7 py-4">
                <div className="flex items-center gap-10">
                    <Link href={"/"}>
                        <div className="hover-opacity-75 transition items-center gap-x-2 hover:text-blue-600 hidden md:flex">
                            <Image
                                width={40} // Adjust width as needed
                                height={40} // Adjust height as needed
                                alt="Header Image"
                                src="/logo.png"
                                className="rounded-full mr-2"
                            />
                            <p className="text-3xl font-bold text-pink-600 pb-1">
                                Creatoris Lab
                            </p>
                        </div>
                    </Link>

                    <nav className="flex items-center gap-6 text-gray-600 text-lg hidden md:flex">
                        <Link href="/examples">
                            <span className="cursor-pointer hover:text-blue-600">Examples</span>
                        </Link>
                        <Link href="/pricing">
                            <span className="cursor-pointer hover:text-blue-600">Pricing</span>
                        </Link>
                        <Link href="/about">
                            <span className="cursor-pointer hover:text-blue-600">About</span>
                        </Link>
                    </nav>
                </div>
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    <Link href="/login">
                        <button className="text-white bg-blue-500 px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">Login</button>
                    </Link>
                    <Link href="/register">
                        <button className="text-white bg-green-500 px-6 py-2 rounded-md hover:bg-green-600 transition duration-300">Register</button>
                    </Link>
                </div>
            </header>
        </div>
    );
}
