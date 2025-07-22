import Banner from "@/components/Banner"
import { Card, CardBody, Input, Textarea, Button } from "@nextui-org/react"

export default function Contact() {
  return (
    <div className="flex-1">
      <Banner
        title="Contact Us"
        subtitle="Get in touch with our team"
        imageSrc="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        height="h-64"
      />
      
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-6">
              <CardBody>
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      label="First Name"
                      placeholder="Enter your first name"
                      required
                    />
                    <Input
                      type="text"
                      label="Last Name"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                  
                  <Input
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    required
                  />
                  
                  <Input
                    type="text"
                    label="Subject"
                    placeholder="Enter message subject"
                    required
                  />
                  
                  <Textarea
                    label="Message"
                    placeholder="Enter your message"
                    minRows={4}
                    required
                  />
                  
                  <Button color="primary" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardBody>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6">
                <CardBody>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-primary text-xl">📧</div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600 dark:text-gray-300">info@heroui-gallery.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="text-primary text-xl">📱</div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="text-primary text-xl">📍</div>
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600 dark:text-gray-300">
                          123 Gallery Street<br />
                          Digital City, DC 12345
                        </p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
              
              <Card className="p-6">
                <CardBody>
                  <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-gray-600 dark:text-gray-300">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-gray-600 dark:text-gray-300">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-gray-600 dark:text-gray-300">Closed</span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}