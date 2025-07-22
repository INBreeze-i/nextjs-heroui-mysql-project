import Banner from "@/components/Banner"
import ImageGrid from "@/components/ImageGrid"

export default function Portfolio() {
  return (
    <div className="flex-1">
      <Banner
        title="Portfolio"
        subtitle="Showcasing our finest work and creative projects"
        imageSrc="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />
      <ImageGrid />
    </div>
  )
}