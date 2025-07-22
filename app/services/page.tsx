import Banner from "@/components/Banner"
import { Card, CardBody, CardHeader } from "@nextui-org/react"

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies like NextJS and TypeScript.",
    icon: "💻"
  },
  {
    title: "Database Design",
    description: "Scalable MySQL database solutions with Prisma ORM integration.",
    icon: "🗄️"
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and responsive user interfaces using NextUI components.",
    icon: "🎨"
  },
  {
    title: "Image Management",
    description: "Optimized image galleries with advanced loading and responsive design.",
    icon: "🖼️"
  },
  {
    title: "API Development",
    description: "RESTful APIs and serverless functions for seamless data integration.",
    icon: "🔌"
  },
  {
    title: "Performance Optimization",
    description: "Fast-loading applications with Next.js optimization features.",
    icon: "⚡"
  }
]

export default function Services() {
  return (
    <div className="flex-1">
      <Banner
        title="Our Services"
        subtitle="Professional web development and design services"
        imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        height="h-64"
      />
      
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We provide comprehensive web development services using cutting-edge technologies
            to help bring your digital vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-2">
                <div className="text-4xl mb-2">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </CardHeader>
              <CardBody className="pt-0">
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {service.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}