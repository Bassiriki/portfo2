import { Button } from "@/components/ui/button"
import { BookOpen, Heart, Users } from "lucide-react"

export function Reservations() {
  return (
    <section id="reservations" className="py-20 bg-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-philosopher font-bold text-emerald-700 mb-6">Réservations</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Réservez une séance ou en savoir plus sur mes services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="group relative bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-emerald-200 hover:scale-105 hover:rotate-1">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center shadow-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-emerald-800 mb-3 mt-4">Professeur de Philosophie</h3>
            <p className="text-emerald-600">Cours privés et formation académique</p>
          </div>

          <div className="group relative bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-200 hover:scale-105 hover:-rotate-1">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-orange-800 mb-3 mt-4">Culture Générale</h3>
            <p className="text-orange-600">Préparation aux concours</p>
          </div>

          <div className="group relative bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-purple-200 hover:scale-105 hover:rotate-1">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-purple-800 mb-3 mt-4">Conseiller Relations (Amoureuses)</h3>
            <p className="text-purple-600">Accompagnement personnalisé</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Vous souhaitez réserver une séance ou en savoir plus sur mes services ?
          </p>
          <Button size="lg" asChild className="bg-emerald-600 hover:bg-emerald-700">
            <a href="#contact">Me contacter pour mes services</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
