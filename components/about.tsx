import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, BookOpen, Heart } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Formation Académique",
      description: "Philosophe de formation avec une expertise approfondie en pensée critique et analyse conceptuelle",
    },
    {
      icon: Users,
      title: "Enseignement",
      description: "Professeur de philosophie au lycée et formateur en culture générale pour les concours",
    },
    {
      icon: BookOpen,
      title: "Auteur",
      description: "Créateur de 4 ouvrages couvrant philosophie et développement personnel",
    },
    {
      icon: Heart,
      title: "Conseil",
      description: "Spécialiste en relations amoureuses avec une approche philosophique unique",
    },
  ]

  return (
    <section id="a-propos" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-philosopher font-bold text-primary mb-6">À propos de moi</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionné par la sagesse antique et les défis contemporains, je mets la philosophie au service de la vie
            quotidienne.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="w-64 h-80 mx-auto lg:mx-0 bg-muted rounded-lg flex items-center justify-center">
              
              <img
                src="/onphilosophe.jpg"
                alt="Seydou KONE - Onphilosophe"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-philosopher font-semibold text-primary">Seydou KONE</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Philosophe de formation, je suis passionné par l'art de transmettre la sagesse et d'accompagner les
              individus dans leur quête de sens. Mon parcours m'a mené de l'enseignement traditionnel à la création de
              contenu numérique, toujours avec la même mission : rendre la philosophie accessible et pratique.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Aujourd'hui, je combine mon expertise académique avec une approche moderne pour offrir des services variés
              : cours de philosophie, préparation aux concours, conseil en relations amoureuses, et création de contenu
              éducatif.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Je suis également ouvert aux collaborations et partenariats pour des projets de sensibilisation et de
              communication.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
