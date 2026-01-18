import { Box, Download } from "lucide-react"

const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between items-center p-4">
      <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
        <Box className="mr-2" /> ALK <span className="text-accent">DEV</span>
      </a>
      
      <ul className="hidden md:flex items-center space-x-4">
        <li><a href="#Home" className="btn btn-sm btn-ghost">Accueil</a></li>
        <li><a href="#About" className="btn btn-sm btn-ghost">A propos</a></li>
        <li><a href="#Experiences" className="btn btn-sm btn-ghost">Mes expériences</a></li>
        <li><a href="#Projects" className="btn btn-sm btn-ghost">Mes projets</a></li>
        
        {/* Bouton de téléchargement du CV */}
        <li>
          <a 
            href="/cv.pdf" 
            download="CV_ALKDEV.pdf" 
            className="btn btn-accent btn-sm ml-4 gap-2 text-white"
          >
            <Download size={18} />
            Mon CV
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar