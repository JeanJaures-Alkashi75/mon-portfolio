import { Box, Facebook, Linkedin, Twitter } from "lucide-react"


const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center  p-10">
  <aside>
    <Box className="w-10 h-10" />
    <p className="font-bold">
      ALK <span className="text-accent">DEV</span>
      <br />
      Providing reliable tech since 1992
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href="https://x.com/JeanJauresALK" target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://www.linkedin.com/in/jeanjaures/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://web.facebook.com/profile.php?id=61563289983962" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-6 h-6 text-current" />
                    </a>
    </div>
  </nav>
</footer>
    </div>
  )
}

export default Footer
