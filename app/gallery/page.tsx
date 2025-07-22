import Banner from "@/components/Banner"
import ImageGrid from "@/components/ImageGrid"

export default function Gallery() {
  return (
    <div className="flex-1">
      <Banner
        title="Gallery"
        subtitle="Explore our comprehensive image collection"
        imageSrc="https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />
      <ImageGrid />
    </div>
  )
}