"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:Bassiriki@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`
    window.location.href = mailtoLink
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "seydouk79@gmail.com",
      description: "Réponse sous 24h",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "71667030",
      description: "Lun-Ven 9h-18h",
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Mali (Bamako)",
      description: "Cours en ligne et présentiel",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-philosopher font-bold gradient-text mb-6">Me Contacter</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Une question, un projet, ou simplement l'envie d'échanger ? N'hésitez pas à me contacter.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center glass-effect hover-glow border-primary/20">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{info.title}</h4>
                <p className="text-lg font-medium text-foreground mb-1">{info.value}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-philosopher font-semibold gradient-text">Envoyez-moi un message</h3>
            <p className="text-muted-foreground leading-relaxed">
              Que ce soit pour une question sur mes services, une demande de collaboration, ou simplement pour échanger
              sur la philosophie, je serai ravi de vous répondre.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-primary">Réponse rapide</h4>
                  <p className="text-sm text-muted-foreground">Je réponds généralement sous 24h</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-primary">Consultation gratuite</h4>
                  <p className="text-sm text-muted-foreground">Premier échange gratuit de 15 minutes</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="glass-effect border-primary/20 hover-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 gradient-text">
                <Send className="h-5 w-5 text-accent" />
                Formulaire de contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                      className="glass-effect border-primary/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                      className="glass-effect border-primary/30"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Objet de votre message"
                    className="glass-effect border-primary/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Votre message..."
                    className="glass-effect border-primary/30"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
