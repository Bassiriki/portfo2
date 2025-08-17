import { Button } from "@/components/ui/button"
import { ArrowDown, BookOpen, Heart, Sparkles, Users } from "lucide-react"

export function Hero() {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 pt-24"
    >
      <div className="absolute inset-0">
        {/* Formes organiques colorées */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-800 to-blue-600 rounded-full opacity-20 animate-float blur-sm"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-amber-600 to-red-700 rounded-full opacity-30 animate-float delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-green-700 to-teal-600 rounded-full opacity-25 animate-float delay-500"></div>
        <div className="absolute top-1/2 right-20 w-28 h-28 bg-gradient-to-br from-slate-600 to-gray-800 rounded-full opacity-20 animate-float delay-700"></div>

        {/* Formes géométriques modernes */}
        <div className="absolute top-60 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-400 to-sky-600 opacity-30 animate-pulse transform rotate-45"></div>
        <div className="absolute bottom-40 right-1/4 w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 opacity-25 animate-pulse delay-1000 transform rotate-12"></div>

        {/* Petites particules flottantes */}
        <div className="absolute top-32 left-1/3 w-3 h-3 bg-blue-500 rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-60 right-1/3 w-2 h-2 bg-red-600 rounded-full animate-float delay-500 opacity-70"></div>
        <div className="absolute top-3/4 left-1/2 w-4 h-4 bg-green-600 rounded-full flex items-center justify-center animate-pulse opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12">
          <div className="relative mx-auto w-48 h-48 mb-8 mt-8">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-slate-700 to-gray-800 rounded-full animate-pulse opacity-80"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-green-600 to-teal-700 rounded-full opacity-60 animate-float"></div>
            <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <img
                src="/onphilosophe.jpg"
                alt="Seydou KONE - Onphilosophe"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center animate-bounce">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
          </div>
            
          <div className="flex justify-center">
            <a
              href="https://www.tiktok.com/@onphilosophe?_t=ZM-8ysmWxBIxdQ&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium text-white bg-gradient-to-r from-blue-800 via-slate-700 to-gray-700 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
            >
              <span>Suivez-moi sur TikTok</span>
            </a>
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-philosopher font-bold bg-gradient-to-r from-blue-800 via-slate-700 to-gray-700 bg-clip-text text-transparent leading-tight animate-fade-in">
              Onphilosophe
            </h1>

            <div className="max-w-4xl mx-auto">
              <p className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Seydou KONE</p>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
                Philosophe de formation • Créateur de contenu • Formateur
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="group relative bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-200 hover:scale-105 hover:rotate-1">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-700 to-slate-700 rounded-full flex items-center justify-center shadow-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 mt-4">Professeur de Philosophie</h3>
              <p className="text-slate-600">Cours privés et formation académique</p>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-200 hover:scale-105 hover:-rotate-1">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-amber-600 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 mt-4">Culture Générale</h3>
              <p className="text-slate-600">Préparation aux concours</p>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-green-200 hover:scale-105 hover:rotate-1">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-600 to-teal-700 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 mt-4">Conseiller Relations</h3>
              <p className="text-slate-600">Accompagnement personnalisé</p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <blockquote className="text-2xl md:text-3xl italic text-slate-700 leading-relaxed bg-white/70 backdrop-blur-lg p-10 rounded-3xl border-l-8 border-gradient-to-b from-blue-700 to-slate-700 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-800 via-slate-700 to-gray-700"></div>
              "La philosophie n'est pas un luxe de l'esprit, mais une nécessité de l'âme qui cherche à comprendre le
              monde et sa place en lui."
            </blockquote>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
            <Button
              size="lg"
              className="text-xl px-12 py-8 bg-gradient-to-r from-blue-800 via-slate-700 to-gray-700 hover:from-blue-900 hover:via-slate-800 hover:to-gray-800 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 transition-all duration-500 rounded-full font-bold text-white relative overflow-hidden group"
              asChild
            >
              <a href="#services">
                <span className="relative z-10">Découvrir mes services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-slate-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-xl px-12 py-8 bg-white/80 backdrop-blur-lg hover:bg-white/95 border-3 border-blue-700 text-blue-700 hover:text-blue-800 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110"
              asChild
            >
              <a href="#livres">Mes livres</a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-slate-700 rounded-full flex items-center justify-center shadow-lg">
            <ArrowDown className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </section>
  )
}
