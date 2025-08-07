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
        "Secure VPN application providing private internet access and data encryption across multiple servers globally. Successfully revived after 2 years and launched on App Store with enhanced security features.",
      image: "/pine-vpn-screenshots.png",
      technologies: ["Swift", "SwiftUI", "StoreKit 2", "TunnelKit", "Passepartout", "MD5 Hashing", "Widget Kit"],
      liveUrl: "https://apps.apple.com/app/pine-vpn",
      status: "Live on App Store",
      keyFeatures: [
        "Migrated payment integration from StoreKit to StoreKit 2",
        "Fixed VPN connectivity with updated TunnelKit and Passepartout",
        "Implemented MD5 hashing for enhanced VPN certificate reception",
        "Added Google and Apple login options",
        "Built home screen widget for quick VPN access",
      ],
    },
    {
      title: "Garuda ID",
      description:
        "Mobile verification app for PSSI (Indonesian Football Association) to verify ticket holders at soccer matches. Replaced web-based system with convenient mobile solution using Flutter.",
      image: "/garuda-id-screenshots.png",
      technologies: ["Flutter", "Dart", "MobX", "Dio", "Auto Route", "Firebase", "Deep Linking"],
      liveUrl: "#",
      status: "Live in Production",
      keyFeatures: [
        "Built with Flutter focusing on iOS platform",
        "Integrated camera access for ID verification",
        "Implemented deep linking functionality",
        "Developed re-registration flow for user updates",
        "Fixed login functionality for smoother UX",
      ],
    },
    {
      title: "Home Surveillance App",
      description:
        "Flutter-based home surveillance app connecting with CCTV cameras, featuring AI-based human detection and comprehensive security monitoring for enhanced home protection.",
      image: "/home-surveillance-screenshots.png",
      technologies: ["Flutter", "Dart", "AI Integration", "CCTV", "Firebase", "Authentication", "Device Pairing"],
      liveUrl: "#",
      status: "In Production",
      keyFeatures: [
        "Developed authentication with login, registration, and OTP",
        "Integrated camera devices with mobile app",
        "Implemented user session management",
        "Collaborated with AI teams for human detection",
        "Ensured seamless device pairing processes",
      ],
    },
    {
      title: "Gramedia E-Commerce App",
      description:
        "E-commerce application for Indonesia's largest bookstore chain allowing users to purchase books, stationery, and products with seamless shopping experience and order tracking.",
      image: "/gramedia-ecommerce-screenshots.png",
      technologies: ["Swift", "UIKit", "MVVM", "Midtrans API", "Maps Integration", "Unit Testing"],
      liveUrl: "https://apps.apple.com/app/gramedia",
      status: "Live on App Store",
      keyFeatures: [
        "Revamped architecture from MVC to MVVM",
        "Implemented new shipping features with maps integration",
        "Upgraded payment integration with latest Midtrans API",
        "Added comprehensive unit and UI testing",
        "Released under high-pressure circumstances in 1 month",
      ],
    },
    {
      title: "Gramedia Digital E-Reader",
      description:
        "E-reader application providing access to thousands of digital books, magazines, and newspapers from Indonesia's largest publisher with seamless reading experience.",
      image: "/gramedia-digital-screenshots.png",
      technologies: ["Swift", "UIKit", "SwiftUI", "VIP Architecture", "StoreKit", "Midtrans", "Core Data"],
      liveUrl: "https://apps.apple.com/app/gramedia-digital",
      status: "Live on App Store",
      keyFeatures: [
        "Built with UIKit combined with SwiftUI",
        "Followed VIP architecture with Router pattern",
        "Integrated subscription-based payment systems",
        "Optimized offline reading with content caching",
        "Managed App Store releases and updates",
      ],
    },
  ]

  const mobileSkills = [
    "Flutter",
    "Dart",
    "Swift",
    "Objective-C",
    "SwiftUI",
    "UIKit",
    "iOS Development",
    "iPadOS",
    "macOS",
    "MobX",
    "Dio",
    "Auto Route",
    "StoreKit",
    "StoreKit 2",
    "Core Data",
    "Widget Kit",
    "Firebase",
  ]

  const architectureSkills = ["MVVM", "MVC", "VIP Architecture", "Router Pattern", "Clean Architecture"]

  const otherSkills = [
    "Python",
    "UI/UX Design",
    "Web Development",
    "WordPress",
    "Unit Testing",
    "UI Testing",
    "Payment Integration",
    "Deep Linking",
    "Camera Integration",
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
              src="/profile-photo.jpg"
              alt="Rostadhi Akbar - Senior Mobile Developer"
              width={400}
              height={500}
              className="overflow-hidden rounded-xl object-contain shadow-lg bg-gray-50"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-32 md:py-40 px-6 md:px-8">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">About Me</h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-relaxed mb-6">
            I'm a software engineer specializing in mobile app development who made a successful career transition from
            sports to tech. With more than 3 years of experience in iOS and Flutter development, I've built and
            published 3 iOS apps and 2 Flutter apps across various domains including e-commerce, e-reader applications,
            VPN solutions, online verification systems, and home surveillance applications. As a former golf athlete and
            professional swimming coach, I bring discipline, teamwork, and problem-solving skills from sports into
            software development. I'm excited to contribute to innovative mobile solutions and collaborate with teams to
            create impactful applications.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full py-32 md:py-40 bg-muted/50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Experience</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Staff Solution Department - iOS Developer</CardTitle>
                    <CardDescription className="text-lg">PT Milleano Amertha Data • Jakarta, Indonesia</CardDescription>
                  </div>
                  <Badge variant="secondary">Oct 2023 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Leading iOS development initiatives, successfully reviving and launching Pine VPN after 2 years.
                  Currently developing Flutter applications including home surveillance and verification systems.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Revived and launched Pine VPN on App Store with enhanced security features</li>
                  <li>Developed Garuda ID verification app for PSSI using Flutter</li>
                  <li>Built Home Surveillance app with AI-based human detection</li>
                  <li>Migrated payment systems to latest Apple requirements</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Staff IT - iOS Developer</CardTitle>
                    <CardDescription className="text-lg">PT Kompas Gramedia • Jakarta, Indonesia</CardDescription>
                  </div>
                  <Badge variant="secondary">Feb 2022 - Oct 2023</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Developed and maintained Gramedia's e-commerce and digital reading applications. Successfully
                  delivered critical updates under high-pressure circumstances and improved app architecture.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Revamped Gramedia.com app architecture from MVC to MVVM</li>
                  <li>Integrated new payment systems and shipping features</li>
                  <li>Built Gramedia Digital e-reader with VIP architecture</li>
                  <li>Implemented comprehensive testing and quality assurance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Intern - iOS Developer</CardTitle>
                    <CardDescription className="text-lg">Apple Developer Academy • BSD, Indonesia</CardDescription>
                  </div>
                  <Badge variant="secondary">Jan 2021 - Jan 2022</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Intensive iOS development program focusing on Swift, SwiftUI, and Apple ecosystem technologies. Gained
                  foundational skills in mobile app development and Apple's development practices.
                </p>
              </CardContent>
            </Card>
          </div>
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

      {/* Other Projects Section */}
      <section className="container py-32 md:py-40 px-6 md:px-8">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Other Professional Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Additional projects showcasing versatility in web development and business solutions.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl items-center gap-6 py-16 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>K-Advisory Website</CardTitle>
              <CardDescription>Custom WordPress Development</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Built company website using custom WordPress with tailored design and enhanced features based on user
                feedback to improve engagement and user experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">WordPress</Badge>
                <Badge variant="outline">Custom Design</Badge>
                <Badge variant="outline">UX Optimization</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rumah Renang</CardTitle>
              <CardDescription>Swimming Platform Startup</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                First digital platform for swimming services, allowing users to choose location, schedule, and
                professional coaches. Combining sports expertise with technology innovation.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Startup</Badge>
                <Badge variant="outline">Digital Platform</Badge>
                <Badge variant="outline">Sports Tech</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-32 md:py-40 bg-muted/50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
              <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Technologies and frameworks I use to build mobile applications.
              </p>
            </div>

            <div className="w-full max-w-6xl mx-auto pt-12 space-y-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Mobile Development</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {mobileSkills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm py-2 px-4">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Architecture</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {architectureSkills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm py-2 px-4">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Other Skills</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {otherSkills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm py-2 px-4">
                      {skill}
                    </Badge>
                  ))}
                </div>
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
