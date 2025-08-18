import { BookOpen, Heart, Users, Mail, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-xl font-philosopher font-bold text-white">O</span>
              </div>
              <h3 className="text-2xl font-philosopher font-bold">Onphilosophe</h3>
            </div>
            <p className="text-white/90 leading-relaxed text-lg">
              Philosophe, créateur de contenu et accompagnateur dans votre quête de sens et de développement personnel.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="mailto:Bassiriki@gmail.com"
                className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com/@onohilosophe"
                className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center hover:bg-purple-500 hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm font-bold">T</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Cours de Philosophie</span>
              </li>
              <li className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Culture Générale</span>
              </li>
              <li className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span>Conseil Relations</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navigation</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#accueil" className="hover:text-orange-400 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#a-propos" className="hover:text-orange-400 transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#livres" className="hover:text-orange-400 transition-colors">
                  Mes Livres
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold font-philosopher">Contact</h4>
            <div className="space-y-3 text-white/90">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-400" />
                <span className="text-lg">seydouk79@ail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <span className="text-lg">00223-71-66-70-30</span>
              </div>
              <p className="text-orange-400 font-medium">Réponse sous 24h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/70 text-lg">© {currentYear} M-tech Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
