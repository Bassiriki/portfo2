import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-100 to-emerald-200 pt-24"
    >
      <div className="absolute inset-0">
        {/* Formes organiques colorées */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-full opacity-20 animate-float blur-sm"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full opacity-30 animate-float delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-green-600 to-emerald-500 rounded-full opacity-25 animate-float delay-500"></div>
        <div className="absolute top-1/2 right-20 w-28 h-28 bg-gradient-to-br from-purple-600 to-violet-700 rounded-full opacity-20 animate-float delay-700"></div>

        {/* Formes géométriques modernes */}
        <div className="absolute top-60 left-1/4 w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 opacity-30 animate-pulse transform rotate-45"></div>
        <div className="absolute bottom-40 right-1/4 w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 opacity-25 animate-pulse delay-1000 transform rotate-12"></div>

        {/* Petites particules flottantes */}
        <div className="absolute top-32 left-1/3 w-3 h-3 bg-emerald-500 rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-orange-600 rounded-full animate-float delay-500 opacity-70"></div>
        <div className="absolute top-3/4 left-1/2 w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center animate-pulse opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12">
          <div className="relative mx-auto w-48 h-48 mb-8 mt-8">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 rounded-full animate-pulse opacity-80"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full opacity-60 animate-float"></div>
            <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <img
                src="/onphilosophe.jpg"
                alt="Seydou KONE - Onphilosophe"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center animate-bounce">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="https://www.tiktok.com/@onphilosophe?_t=ZM-8ysmWxBIxdQ&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium text-white bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600"
            >
              <span>Suivez-moi sur TikTok</span>
            </a>
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-philosopher font-bold bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-800 bg-clip-text text-transparent leading-tight animate-fade-in">
              Onphilosophe
            </h1>

            <div className="max-w-4xl mx-auto">
              <p className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Seydou KONE</p>
              <p className="text-xl md:text-2xl text-emerald-700 leading-relaxed font-medium">
                Enseignant, créateur de contenu et conseiller en relation amoureuse
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
            <Button
              size="lg"
              className="text-xl px-12 py-8 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-700 hover:via-green-700 hover:to-emerald-800 hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-110 transition-all duration-500 rounded-full font-bold text-white relative overflow-hidden group"
              asChild
            >
              <a href="#services">
                <span className="relative z-10">Découvrir mes services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-emerald-700 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-xl px-12 py-8 bg-white/80 backdrop-blur-lg hover:bg-white/95 border-3 border-orange-500 text-orange-600 hover:text-orange-700 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110"
              asChild
            >
              <a href="#reservations">Mes réservations</a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-xl px-12 py-8 bg-white/80 backdrop-blur-lg hover:bg-white/95 border-3 border-purple-500 text-purple-600 hover:text-purple-700 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110"
              asChild
            >
              <a href="#livres">Mes livres</a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-700 rounded-full flex items-center justify-center shadow-lg">
            <ArrowDown className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </section>
  )
}
