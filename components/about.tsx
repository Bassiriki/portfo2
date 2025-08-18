import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, BookOpen, Heart, Quote, Sparkles } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Formation Académique",
      description: "Philosophe de formation avec une expertise approfondie en pensée critique et analyse conceptuelle",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: Users,
      title: "Enseignement",
      description: "Professeur de philosophie au lycée et formateur en culture générale pour les concours",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      icon: BookOpen,
      title: "Auteur",
      description: "Créateur de 4 ouvrages couvrant philosophie et développement personnel",
      gradient: "from-purple-600 to-violet-700",
    },
    {
      icon: Heart,
      title: "Conseil",
      description: "Spécialiste en relations amoureuses avec une approche philosophique unique",
      gradient: "from-orange-500 to-purple-600",
    },
  ]

  return (
    <section
      id="a-propos"
      className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-amber-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-violet-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-300/10 to-emerald-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200/50 mb-6">
            <Sparkles className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium text-green-600">Philosophe & Créateur de contenu</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-500 to-orange-600 bg-clip-text text-transparent mb-6">
            À propos de moi
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
           Ma formation en philosophie m'a naturellement orienté vers l'enseignement 
           et le domaine des relations humaines, avec un intérêt particulier pour la 
           vie de couple. J'aide les individus et les couples à améliorer leurs 
           compétences en communication, à résoudre les conflits, à surmonter les difficultés et à renforcer leur connexion.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="relative w-80 h-96 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl transform -rotate-2"></div>

              <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                <img
                  src="/onphilosophe.jpg"
                  alt="Seydou KONE - Onphilosophe"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg border-4 border-green-100">
                <Quote className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent mb-4">
                Seydou KONE
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-orange-500 rounded-full mb-6"></div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-green-100/50 shadow-sm">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Passionné par les réseaux sociaux, j'ai suivi des formations en création de contenu, en communication
                  et en marketing digital. C'est ainsi que j'ai bâti ma présence en ligne, où je propose un contenu de
                  qualité, à la fois éducatif et inspirant.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-orange-100/50 shadow-sm">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Mon objectif est double : à travers mes contenus sur la philosophie et la vie de couple, je souhaite
                  non seulement inspirer les individus et les couples à s'épanouir dans leur vie et sur les réseaux,
                  mais aussi les encourager à approfondir leurs connaissances en philosophie et en culture générale.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <CardContent className="p-8 relative">
                <div
                  className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  )
}
