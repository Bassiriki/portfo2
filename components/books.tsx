import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ExternalLink } from "lucide-react"

export function Books() {
  const books = [
    {
      title: "Philo-Bac (P.B)",
      description:
        "Methodologie ,sujets corriges , lexique et sujets D'application conformes a l'APC",
      image: "/philo1.png",
      category: "Philosophie",
    },
    {
      title: "la philosophie au bac ",
      description:
        "Collection ",
      image: "/photo2.jpeg",
      category: "Philosophie",
    },
    {
      title: "Onphilosophe Sujet et corrigés",
      description:
        "énéralités sur les techniques de dissertation philosophique.",
      image: "/photo3.jpeg",
      category: "Philosophie",
    },
    {
      title: "Philosophe 2.0",
      description:
        "leçons de philosophie issues de l'intelligence artificielle.",
      image: "/photo4.png",
      category: "Philosophie",
    },
  ]

  return (
    <section id="livres" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-philosopher font-bold text-primary mb-6">Mes Livres</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Une collection d'ouvrages qui allient réflexion philosophique et applications pratiques pour la vie
            quotidienne.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={book.image || "/placeholder.svg"}
                  alt={book.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                    {book.category}
                  </span>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle className="text-lg font-philosopher text-primary leading-tight">{book.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{book.description}</p>
                <Button className="w-full bg-transparent" variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Vous souhaitez vous procurer un de mes ouvrages ou en savoir plus sur mes écrits ?
          </p>
          <Button size="lg" asChild>
            <a href="#contact">Me contacter pour mes livres</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
