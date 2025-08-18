import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Heart, Briefcase, Video, MapPin  } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: BookOpen,
      title: "Cours de Philosophie",
      description: "en ligne , présentiel et à domicile",
       
    },
    {
      icon: Users,
      title: " Cours de culture générale",
      description: "Pour les candidats aux différents concours",
        
    },
    {
      icon: Heart,
      title: "Conseil en Relations Amoureuses",
       
    },
    {
      icon: BookOpen,
      title: "Vente de livres ",
      },
      {
        icon: Briefcase,
        title: "Partenariat",
        
      }
    
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-philosopher font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Mes Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Une approche personnalisée pour chaque besoin, alliant rigueur académique et praticité moderne.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-emerald-100"
            >
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-xl font-philosopher text-center text-slate-700">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 text-center leading-relaxed">{service.description}</p>
                <div className="pt-4 border-t border-emerald-100">
                  <p className="text-lg font-semibold text-emerald-600 text-center mb-4"> </p>
                  <Button
                    className="w-full bg-transparent border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white"
                    variant="outline"
                    asChild
                  >
                    <a href="#contact">Me contacter</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 text-center">
          <div className="flex justify-center items-center gap-8 mb-6">
            <div className="flex items-center gap-2">
              <Video className="h-5 w-5 text-accent" />
              <span className="font-medium">En ligne</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="font-medium">En présentiel</span>
            </div>
          </div>
          <p className="text-muted-foreground mb-6">
            Tous mes services sont disponibles en ligne et en présentiel selon vos préférences et disponibilités.
          </p>
          <Button size="lg" asChild>
            <a href="#contact">Réserver une consultation</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
