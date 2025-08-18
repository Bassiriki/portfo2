import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ExternalLink } from "lucide-react"

export function Books() {
  const books = [
    {
      title: "Philo-Bac (P.B)",
      description: "Methodologie ,sujets corriges , lexique et sujets D'application conformes a l'APC",
      image: "/philo1.png",
      category: "Philosophie",
    },
    {
      title: "la philosophie au bac ",
      description: "Collection ",
      image: "/photo2.jpeg",
      category: "Philosophie",
    },
    {
      title: "Onphilosophe Sujet et corrigés",
      description: "énéralités sur les techniques de dissertation philosophique.",
      image: "/photo3.jpeg",
      category: "Philosophie",
    },
    {
      title: "Philosophe 2.0",
      description: "leçons de philosophie issues de l'intelligence artificielle.",
      image: "/photo4.png",
      category: "Philosophie",
    },
  ]

  return (
    <section id="livres" className="py-20 bg-gradient-to-br from-emerald-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-philosopher font-bold text-emerald-800 mb-6">Mes Livres</h2>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
            Une collection d'ouvrages qui aide les candidats à renforcer leurs connaissances en philosophie et en
            culture générale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white/80 backdrop-blur-sm border-emerald-200 hover:border-orange-300"
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
                  <span className="text-xs font-medium text-orange-700 bg-orange-100 px-2 py-1 rounded-full">
                    {book.category}
                  </span>
                  <BookOpen className="h-4 w-4 text-emerald-600" />
                </div>
                <CardTitle className="text-lg font-philosopher text-emerald-800 leading-tight">{book.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-emerald-700 text-sm leading-relaxed">{book.description}</p>
                <Button
                  className="w-full bg-transparent border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400"
                  variant="outline"
                  size="sm"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-emerald-700 mb-6">
            Vous souhaitez vous procurer un de mes ouvrages ou en savoir plus sur mes écrits ?
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
            asChild
          >
            <a href="#contact">Me contacter pour mes livres</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
