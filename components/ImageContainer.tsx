'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Card, CardBody, CardHeader, Skeleton } from '@nextui-org/react'

interface ImageData {
  id: number
  title: string
  url: string
  alt_text?: string
  container_id: number
}

interface ImageContainerProps {
  containerId: number
  title: string
}

export default function ImageContainer({ containerId, title }: ImageContainerProps) {
  const [images, setImages] = useState<ImageData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(`/api/images?container_id=${containerId}`)
        if (!response.ok) {
          throw new Error('Failed to fetch images')
        }
        const data = await response.json()
        setImages(data.images)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        console.error('Error fetching images:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [containerId])

  if (loading) {
    return (
      <Card className="image-container p-4">
        <CardHeader>
          <Skeleton className="h-6 w-3/4 rounded-lg" />
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="aspect-square rounded-lg" />
            ))}
          </div>
        </CardBody>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="image-container p-4">
        <CardHeader>
          <h3 className="text-lg font-semibold">{title}</h3>
        </CardHeader>
        <CardBody>
          <div className="text-center text-red-500 py-8">
            <p>Error loading images: {error}</p>
          </div>
        </CardBody>
      </Card>
    )
  }

  return (
    <Card className="image-container p-4">
      <CardHeader>
        <h3 className="text-lg font-semibold">{title}</h3>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-2 gap-4">
          {images.map((image) => (
            <div key={image.id} className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={image.url}
                alt={image.alt_text || image.title}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
          ))}
          {/* Fill remaining slots if less than 4 images */}
          {images.length < 4 && (
            Array.from({ length: 4 - images.length }).map((_, index) => (
              <div
                key={`placeholder-${index}`}
                className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-500 text-sm">No Image</span>
              </div>
            ))
          )}
        </div>
      </CardBody>
    </Card>
  )
}