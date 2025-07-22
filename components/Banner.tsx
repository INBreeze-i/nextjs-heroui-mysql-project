import Image from "next/image"

interface BannerProps {
  title?: string
  subtitle?: string
  imageSrc?: string
  height?: string
}

export default function Banner({
  title = "Welcome to HeroUI Gallery",
  subtitle = "Discover amazing images powered by MySQL and NextJS",
  imageSrc = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  height = "h-96"
}: BannerProps) {
  return (
    <section className={`relative ${height} overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="Hero banner"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}