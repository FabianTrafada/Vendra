"use client"

import { Poppins } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { MenuIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { NavbarItemProps } from "@/types/interface"
import { Button } from "@/components/ui/button"
import { navbarItems } from "@/types/variable"
import { MobileSidebar } from "@/components/mobile-sidebar"

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"]
})

const NavbarItem = ({
    href,
    children,
    isActive
}: NavbarItemProps) => {
    return (
        <Button
            asChild
            variant={"outline"}
            className={cn(
                "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
                isActive && "bg-black text-white hover:bg-black hover:text-white"
            )}
        >
            <Link href={href}>
                {children}
            </Link>
        </Button>
    )
}

export const Navbar = () => {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <nav className="h-20 flex border-b justify-between font-medium bg-white">
            <Link href={"/"} className="pl-6 flex items-center">
                <span className={cn("text-5xl font-semibold", poppins.className)}>
                    vendra
                </span>
            </Link>

            <MobileSidebar 
                items={navbarItems}
                open={isSidebarOpen}
                onOpenChange={setIsSidebarOpen}
            />

            <div className="items-center gap-4 hidden lg:flex">
                {navbarItems.map((item) => (
                    <NavbarItem 
                        key={item.href}
                        isActive={pathname === item.href}
                        {...item}
                    />
                ))}
            </div>

            <div className="hidden lg:flex">
                <Button
                    asChild
                    variant={"secondary"}
                    className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
                >
                    <Link href={"/sign-in"}>
                        Login
                    </Link>
                </Button>
                <Button
                    asChild
                    className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"
                >
                    <Link href={"/sign-up"}>
                        Start Selling
                    </Link>
                </Button>
            </div>

            <div className="flex lg:hidden items-center justify-center">
                <Button
                    variant={"ghost"}
                    className="size-12 border-transparent bg-white"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <MenuIcon />
                </Button>
            </div>
        </nav>
    )
}