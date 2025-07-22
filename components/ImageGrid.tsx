import ImageContainer from './ImageContainer'

const containerTitles = [
  'Nature Collection',
  'Architecture Gallery',
  'Art & Design',
  'Travel Photos',
  'Food & Lifestyle',
  'Technology'
]

export default function ImageGrid() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Image Gallery</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Explore our curated collection of images from various categories
        </p>
      </div>
      
      <div className="image-grid">
        {[1, 2, 3, 4, 5, 6].map((containerId) => (
          <ImageContainer
            key={containerId}
            containerId={containerId}
            title={containerTitles[containerId - 1]}
          />
        ))}
      </div>
    </section>
  )
}