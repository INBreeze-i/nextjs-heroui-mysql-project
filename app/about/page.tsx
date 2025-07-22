import Banner from "@/components/Banner"
import { Card, CardBody } from "@nextui-org/react"

export default function About() {
  return (
    <div className="flex-1">
      <Banner
        title="About Us"
        subtitle="Learn more about our mission and vision"
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        height="h-64"
      />
      
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6">
            <CardBody>
              <h2 className="text-3xl font-bold mb-6 text-center">About HeroUI Gallery</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Welcome to HeroUI Gallery, a modern web application built with cutting-edge technologies
                  to showcase the power of NextJS, TypeScript, and MySQL integration.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Our Technology Stack</h3>
                <ul className="mb-6 text-gray-700 dark:text-gray-300">
                  <li><strong>NextJS 14:</strong> The React framework for production</li>
                  <li><strong>TypeScript:</strong> Type-safe JavaScript development</li>
                  <li><strong>NextUI (HeroUI):</strong> Beautiful and modern React components</li>
                  <li><strong>MySQL:</strong> Reliable and scalable database solution</li>
                  <li><strong>Prisma ORM:</strong> Modern database toolkit</li>
                  <li><strong>TailwindCSS:</strong> Utility-first CSS framework</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4">Features</h3>
                <ul className="mb-6 text-gray-700 dark:text-gray-300">
                  <li>Responsive design that works on all devices</li>
                  <li>6 organized image containers with dynamic content</li>
                  <li>Database-driven image management</li>
                  <li>Modern UI components with NextUI</li>
                  <li>Fast and optimized image loading</li>
                  <li>Type-safe development with TypeScript</li>
                </ul>
                
                <p className="text-gray-700 dark:text-gray-300">
                  This project demonstrates best practices in modern web development,
                  combining powerful technologies to create a seamless user experience.
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </div>
  )
}