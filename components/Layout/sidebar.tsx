'use client'
import Image from 'next/image';
import Link from 'next/link';
import { LayoutDashboard } from 'lucide-react';
import { CodeIcon, ImageIcon, MessageSquare, VideoIcon, NotebookText, NotebookPen, FlaskConical, SettingsIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '../../lib/utils';


interface Route {
    label: string;
    icon: React.ComponentType<any>;
    href: string;
    color: string;
}

const routes: Route[] = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        label: "Pages",
        icon: FlaskConical,
        href: "/page",
        color: "text-pink-500", // Updated color for MyPage
    },
    {
        label: "DesignHub",
        icon: NotebookPen,
        href: "/designhub",
        color: "text-green-500", // Updated color for Brainstorm
    },
    {
        label: "Work Space",
        icon: NotebookText,
        href: "/workspace",
        color: "text-orange-500", // Updated color for Notes
    },
    {
        label: "Chat",
        icon: MessageSquare,
        href: "/chat",
        color: "text-violet-500",
    },
    {
        label: "Image",
        icon: ImageIcon,
        href: "/image",
        color: "text-green-500",
    },
    {
        label: "Video",
        icon: VideoIcon,
        href: "/video",
        color: "text-pink-500",
    },
    {
        label: "Code",
        icon: CodeIcon,
        href: "/code",
        color: "text-red-500",
    },
    {
        label: "Settings",
        icon: SettingsIcon,
        href: "/settings",
        color: "text-cyan-500", // Updated color for MyPage
    },
];

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-12 h-12 mr-4">
                        <Image
                            fill
                            alt="Logo"
                            src="/logo.png"
                        />
                    </div>
                    <div className="flex items-center">
                        <Image
                            width={175} // Adjust width as needed
                            height={80} // Adjust height as needed
                            alt="Header Image"
                            src="/header.png"
                            className="rounded-full mr-2"
                        />
                    </div>
                </Link>
                <div className="space-y-1">
                    {routes.map((route, index) => (
                        <div key={index}>
                            <Link href={route.href} className={cn("block text-m group w-full font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", pathname === route.href ? "text-white bg-white/10" : "text-zinc-400")}>
                                <div className="flex items-center justify-start p-3">
                                    <route.icon className={`h-5 w-5 mr-3 ${route.color}`} />
                                    {route.label}
                                </div>
                            </Link>
                            {index === 0 && (
                                <>
                                    <hr className="border-t border-gray-600" /> {/* Add border after Dashboard category */}
                                    <p className="mt-2 mb-2 ml-4 text-sm font-semibold text-orange-400">Social Hub</p> {/* Label with increased spacing */}
                                </>
                            )}
                            {index === 1 && (
                                <>
                                    <hr className="border-t border-gray-600" /> {/* Add border after Code category */}
                                    <p className="mt-2 mb-2 ml-4 text-sm font-semibold text-orange-400">Work Station</p> {/* Label with increased spacing */}
                                </>
                            )}
                            {index === 3 && (
                                <>
                                    <hr className="border-t border-gray-600" /> {/* Add border after Notes category */}
                                    <p className="mt-2 mb-2 ml-4 text-sm font-semibold text-orange-400">AI Tools</p> {/* Label with increased spacing */}
                                </>
                            )}
                            {index === 7 && <hr className="border-t border-gray-600" />} {/* Add border after Social Hub category */}

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
