import { Badge } from "@/components/ui/badge"
import { Heart, Users, Target, Award, ArrowRight, Mail, Linkedin, Twitter, Instagram } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "We genuinely love design and it shows in every project we deliver.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We're invested in your project's outcome.",
    },
    {
      icon: Target,
      title: "Results-Oriented",
      description: "Every design decision is made with your business objectives in mind.",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We'd rather do fewer projects exceptionally well than many projects poorly.",
    },
  ]

  const timeline = [
    {
      year: "2024",
      title: "The First Brushstroke",
      description:
        "June 19 — Stepped into the creative arena as a Graphic Design Intern at Kathmandu Infotech. This was ground zero: where curiosity turned into craft, and pixels started telling stories.",
    },
    {
      year: "2024",
      title: "Refined by Real-World Chaos",
      description:
        "November 20 — Joined Merojob.com. Here, theory met pressure. Real clients. Real campaigns. Real deadlines. By March 11, 2025, I wasn’t just designing — I was solving, adapting, leading.",
    },
    {
      year: "2025",
      title: "Freelance & Fearless",
      description:
        "With internships behind me and hunger in my gut, I entered the freelance world. Self-taught motion design. Late nights with After Effects. Every brief, a battlefield. Every client, a classroom.",
    },
  ];
  

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">About Sandesh Shrestha</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm a Nepali designer dedicated to creating exceptional graphic design and video content that helps local businesses grow and connect with their audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">My Story</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I started my creative journey with a simple belief: great design should be accessible to businesses of all sizes in Nepal. I saw too many local companies struggling with outdated designs or working with agencies that didn't truly understand the Nepali market.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My approach is different. I focus on building genuine partnerships with my clients, taking the time to understand their goals, challenges, and vision. This allows me to create designs that not only look great but also resonate with Nepali audiences.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  As a solo creator, I offer the personal attention and local expertise that international agencies can't provide, while maintaining the quality and professionalism you deserve.
                </p>
                <Link href="/contact">
                  <Button className="group">
                    Work With Me
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">2024</div>
                    <div className="text-sm text-muted-foreground">Started Design Journey</div>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-purple-100 dark:bg-purple-900 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">24h</div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                  </div>
                  <div className="bg-orange-100 dark:bg-orange-900 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">Local</div>
                    <div className="text-sm text-muted-foreground">Nepali Expertise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">My Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything i do and shape how i work with my clients.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">My Journey</h2>
              <p className="text-lg text-muted-foreground">
              What began as curiosity became craft. This is the origin story of Sandesh Shrestha.
              </p>
            </div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Badge className="bg-primary text-primary-foreground">{item.year}</Badge>
                      <div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Focus */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">My Nepali Focus</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              As a proudly Nepali Designer, I understand the local market, culture, and business environment. This allows
              me to create designs that truly connect with Nepali audiences while meeting international quality
              standards.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Local Market Knowledge",
                  description: "I understand what resonates with Nepali consumers",
                },
                {
                  title: "Affordable Local Pricing",
                  description: "Rates designed specifically for the Nepali market",
                },
                {
                  title: "Cultural Relevance",
                  description: "Designs that connect with local audiences authentically",
                },
              ].map((point, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="group">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <div className="flex gap-2">
                <Link href="mailto:sandeshshrestha.work@gmail.com">
                  <Button size="lg" variant="outline" className="w-12 h-12 p-0">
                    <Mail className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://www.instagram.com/sandeshshrestha.work" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-12 h-12 p-0">
                  <Instagram className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
