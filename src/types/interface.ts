export interface HomeProps {
    children: React.ReactNode
}

export interface NavbarItemProps {
    href: string
    children: React.ReactNode
    isActive?: boolean
}

interface NavbarItem {
    href: string
    children: React.ReactNode
}

export interface MobileNavbarItemProps {
    items: NavbarItem[]
    open: boolean
    onOpenChange: (open: boolean) => void
}