import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-100"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-emerald-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-amber-500/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-green-500/15 to-emerald-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-16">
          <div className="relative mx-auto w-40 h-40 mt-32">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-full animate-pulse opacity-20"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full opacity-30"></div>
            <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
              <img
                src="/onphilosophe.jpg"
                alt="Seydou KONE - Onphilosophe"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-800 bg-clip-text text-transparent leading-tight">
                Onphilosophe
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-emerald-800">Seydou KONE</p>
              <p className="text-lg md:text-xl text-emerald-700 max-w-2xl mx-auto leading-relaxed">
                Enseignant, créateur de contenu et conseiller en relation amoureuse
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 rounded-full font-semibold"
                asChild
              >
                <a href="#services">Découvrir mes services</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-white/90 backdrop-blur-sm hover:bg-white border-2 border-orange-500 text-orange-600 hover:text-orange-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="#reservations">Mes réservations</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-white/90 backdrop-blur-sm hover:bg-white border-2 border-purple-500 text-purple-600 hover:text-purple-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="#livres">Mes livres</a>
              </Button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Rejoignez-moi</h2>
              <p className="text-slate-600 text-lg">Suivez-moi sur mes réseaux sociaux</p>
              <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-medium rounded-full shadow-lg">
                <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                Cliquez pour me suivre !
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* TikTok Principal */}
              <div className="group relative">
                 
                <a
                  href="https://www.tiktok.com/@onphilosophe?_t=ZM-8ysmWxBIxdQ&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-slate-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 text-lg">TikTok</h3>
                      <p className="text-sm text-slate-600">@onphilosophe</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 group-hover:text-slate-700 transition-colors mb-4">
                    Découvrez mes vidéos philosophiques
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-pink-600 font-medium">👆 Cliquez ici pour suivre</span>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <span>→</span>
                      <span>Explorer</span>
                    </div>
                  </div>
                </a>
              </div>

              {/* YouTube */}
              <div className="group relative">
                 
                <a
                  href="https://youtube.com/@onphilosophe793?si=Hr8IC6W0IqetNFX_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-slate-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 text-lg">YouTube</h3>
                      <p className="text-sm text-slate-600">@onphilosophe793</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 group-hover:text-slate-700 transition-colors mb-4">
                    Mes contenus longs et approfondis
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-red-600 font-medium">🎬 Regarder maintenant</span>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <span>→</span>
                      <span>S'abonner</span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Facebook */}
              <div className="group relative">
                 
                <a
                  href="https://www.facebook.com/share/1FNz8nW3Ce/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-slate-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 text-lg">Facebook</h3>
                      <p className="text-sm text-slate-600">Page officielle</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 group-hover:text-slate-700 transition-colors mb-4">
                    Rejoignez ma communauté
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-600 font-medium">💬 Rejoindre la discussion</span>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <span>→</span>
                      <span>Liker</span>
                    </div>
                  </div>
                </a>
              </div>

              {/* TikTok Secondaire */}
              <div className="group relative">
                 
                <a
                  href="https://www.tiktok.com/@m.kone0?_t=ZM-8yzQzSlshkr&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-slate-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 text-lg">TikTok</h3>
                      <p className="text-sm text-slate-600">@m.kone0</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 group-hover:text-slate-700 transition-colors mb-4">
                    Mon compte personnel
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-purple-600 font-medium">🔍 Découvrir mon univers</span>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <span>→</span>
                      <span>Explorer</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <span className="animate-pulse">✨</span>
                <span className="font-medium">Ne ratez aucun contenu !</span>
                <span className="animate-pulse">✨</span>
              </div>
              <p className="text-sm text-slate-500 mt-3">Cliquez sur les cartes ci-dessus pour me suivre</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
            <ArrowDown className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>
    </section>
  )
}
