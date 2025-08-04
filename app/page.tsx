import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Download, Gitlab, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const projects = [
    {
      title: "Pine VPN",
      description:
        "VPN application for iOS and macOS with secure connection and privacy features. Successfully maintained and released multiple versions ensuring stable performance and Apple compliance.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Swift", "SwiftUI", "Core Data", "Network Security", "iOS", "macOS"],
      liveUrl: "https://apps.apple.com/app/pine-vpn",
      status: "Live on App Store",
    },
    {
      title: "Garuda ID",
      description:
        "Flutter-based verification app with secure user authentication and easy verification process. Currently in development with advanced security features.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Flutter", "Dart", "Firebase", "Bloc", "Authentication"],
      liveUrl: "#",
      status: "Coming Soon",
    },
    {
      title: "Home Surveillance App",
      description:
        "Flutter application integrating CCTV systems with AI capabilities for smart home monitoring and security management.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Flutter", "Dart", "AI Integration", "CCTV", "Firebase", "Real-time Streaming"],
      liveUrl: "#",
      status: "In Development",
    },
    {
      title: "Gramedia E-Commerce App",
      description:
        "Enhanced e-commerce mobile application for Indonesia's largest bookstore chain, improving user experience and performance across multiple versions.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Swift", "UIKit", "Core Data", "Alamofire", "Firebase"],
      liveUrl: "https://apps.apple.com/app/gramedia",
      status: "Live on App Store",
    },
    {
      title: "Gramedia Digital E-Reader",
      description:
        "Complete rewrite from Objective-C to Swift, modernizing the digital book reading experience with improved performance and payment integration.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Swift", "SwiftUI", "Core Data", "Migration", "Payment Integration"],
      liveUrl: "https://apps.apple.com/app/gramedia-digital",
      status: "Live on App Store",
    },
  ]

  const appleSkills = [
    "Swift",
    "Objective-C",
    "SwiftUI",
    "UIKit",
    "Core Data",
    "SwiftData",
    "Core Animation",
    "ARKit",
    "MVC",
    "MVVM",
    "Viper",
    "Xcode",
    "CocoaPods",
    "SPM",
    "Firebase",
    "CloudKit",
    "Core ML",
    "Alamofire",
  ]

  const flutterSkills = [
    "Flutter",
    "Dart",
    "Kotlin",
    "Bloc",
    "Firebase",
    "REST APIs",
    "HTTP",
    "Dio",
    "FCM",
    "Cross-Platform Development",
  ]

  const certifications = [
    {
      title: "Apple Development With Swift Associate",
      issuer: "Apple",
      year: "2023",
      description: "Official Apple certification in Swift development",
    },
    {
      title: "Flutter and Dart The Complete Guide",
      issuer: "Udemy",
      year: "2024",
      description: "Comprehensive cross-platform development certification",
    },
    {
      title: "Stanford Code in Place",
      issuer: "Stanford University",
      year: "2023",
      description: "Python programming fundamentals",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-6 md:px-8">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Rostadhi Akbar</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="hover:text-foreground/80">
              About
            </Link>
            <Link href="#experience" className="hover:text-foreground/80">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#skills" className="hover:text-foreground/80">
              Skills
            </Link>
            <Link href="#contact" className="hover:text-foreground/80">
              Contact
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-32 md:py-40 px-6 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-16 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm Rostadhi Akbar
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                Senior Mobile Developer specializing in iOS and Flutter development. I've published 3 iOS apps on the
                App Store and have extensive experience in e-commerce, VPN, and verification applications.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Pondok Aren, Tangerang, Banten</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  <span>+62 812 959 344 90</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row pt-4">
              <Button size="lg" asChild>
                <Link href="mailto:rostadhi@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                View My Work
              </Button>
            </div>
            <div className="flex space-x-6 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Gitlab className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:rostadhi@gmail.com" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Rostadhi Akbar"
              width={400}
              height={400}
              className="aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-32 md:py-40 px-6 md:px-8">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">About Me</h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-relaxed mb-6">
            I'm a passionate Software Engineer specializing in mobile app development with expertise in iOS and Flutter.
            With 3 iOS apps successfully published on the App Store and 1 Flutter app ready for release, I bring
            extensive experience in developing applications within the Apple ecosystem and cross-platform solutions.
          </p>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-relaxed">
            My experience spans across various domains including e-commerce mobile apps, e-reader applications, VPN
            solutions, verification systems, and home surveillance applications. I'm currently pursuing advanced
            development techniques and staying updated with the latest mobile development trends.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container py-32 md:py-40 px-6 md:px-8 bg-muted/50">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Experience</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Senior Staff - IT Solution</CardTitle>
                  <CardDescription className="text-lg">Assist X Enterprise • Jakarta, Indonesia</CardDescription>
                </div>
                <Badge variant="secondary">2023 - Present</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Leading mobile development initiatives, successfully finalizing Pine VPN release and overseeing ongoing
                development. Currently developing Flutter applications with a team of mobile engineers.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Maintained and released new versions of Pine VPN apps on iOS and macOS</li>
                <li>Developed Garuda ID app using Flutter with secure authentication</li>
                <li>Built Home Surveillance app integrating CCTV and AI technologies</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Staff IT - Gramedia.Com & Gramedia Digital</CardTitle>
                  <CardDescription className="text-lg">Kompas Gramedia • Jakarta, Indonesia</CardDescription>
                </div>
                <Badge variant="secondary">2022 - 2023</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Developed new versions of Gramedia e-commerce apps and completely revamped Gramedia Digital e-book
                applications, migrating from Objective-C to Swift.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Launched multiple versions of Gramedia e-commerce and digital e-book apps</li>
                <li>Migrated legacy Objective-C code to modern Swift architecture</li>
                <li>Released Gramedia iOS versions 1.19 - 1.21.3 and Gramedia Digital 5.0.0 & 5.0.1</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-32 md:py-40 px-6 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mobile applications I've developed and published, showcasing expertise in iOS and Flutter development.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-8 py-16 lg:grid-cols-2 lg:gap-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="h-full w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{project.title}</CardTitle>
                  <Badge variant={project.status === "Live on App Store" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.status === "Live on App Store" && (
                    <Button size="sm" asChild>
                      <Link href={project.liveUrl}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        App Store
                      </Link>
                    </Button>
                  )}
                  {project.status === "Coming Soon" && (
                    <Button size="sm" variant="outline" disabled>
                      Coming Soon
                    </Button>
                  )}
                  {project.status === "In Development" && (
                    <Button size="sm" variant="outline" disabled>
                      In Development
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-32 md:py-40 px-6 md:px-8 bg-muted/50">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Technologies and frameworks I use to build mobile applications.
            </p>
          </div>

          <div className="w-full max-w-6xl pt-12 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Apple Ecosystem</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {appleSkills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm py-2 px-4">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Cross-Platform (Flutter)</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {flutterSkills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm py-2 px-4">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="container py-32 md:py-40 px-6 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Certifications</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Professional certifications and continuous learning achievements.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl items-center gap-6 py-16 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{cert.title}</CardTitle>
                <CardDescription>
                  {cert.issuer} • {cert.year}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-32 md:py-40 px-6 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm always open to discussing new opportunities, mobile development projects, or collaboration on
              innovative applications.
            </p>
          </div>
          <div className="flex flex-col gap-3 min-[400px]:flex-row pt-12">
            <Button size="lg" asChild>
              <Link href="mailto:rostadhi@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="tel:+6281295934490">
                <Phone className="mr-2 h-4 w-4" />
                Call Me
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 md:py-12">
        <div className="container flex flex-col items-center justify-between gap-6 px-6 md:px-8 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 Rostadhi Akbar. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Gitlab className="h-4 w-4" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="mailto:rostadhi@gmail.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
