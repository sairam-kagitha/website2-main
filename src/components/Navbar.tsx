"use client";
import { Dock, DockIcon } from "./magicui/dock";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const path = usePathname();

    return (
        <Dock
            direction="middle"
            className="text-sm font-semibold bg-black/30 backdrop-blur-xl my-2 mx-auto fixed top-0 inset-x-0 z-50 hidden md:flex border-slate-600"
        >
            <DockIcon className="mx-4">
                <Link
                    href="/"
                    className={`hover:text-yellow-400 ${path === "/" && "text-yellow-400"}`}
                >
                    Home
                </Link>
            </DockIcon>
            <DockIcon className="mx-4">
                <Link
                    href="/events"
                    className={`hover:text-yellow-400 ${path === "/events" && "text-yellow-400"}`}
                >
                    Events
                </Link>
            </DockIcon>
            <DockIcon className="mx-8">
                <Link
                    href="/merchandise"
                    className={`hover:text-yellow-400 ${
                        path === "/merchandise" && "text-yellow-400"
                    }`}
                >
                    Merchandise
                </Link>
            </DockIcon>
            <DockIcon className="mx-4">
                <Link
                    href="/gallary"
                    className={`hover:text-yellow-400 ${path === "/gallary" && "text-yellow-400"}`}
                >
                    Gallary
                </Link>
            </DockIcon>
            <DockIcon className="mx-4">
                <Link
                    href="/contact"
                    className={`hover:text-yellow-400 ${path === "/contact" && "text-yellow-400"}`}
                >
                    Contact
                </Link>
            </DockIcon>
            <DockIcon className="mx-4">
                <Link
                    href="/login"
                    className={`hover:text-yellow-400 ${path === "/login" && "text-yellow-400"}`}
                >
                    Login
                </Link>
            </DockIcon>
        </Dock>
    );
};

export default Navbar;
