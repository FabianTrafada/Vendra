import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { HomeProps } from "@/types/interface"

const Layout = ({ children }: HomeProps) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 bg-[#f4f4f0]">
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout