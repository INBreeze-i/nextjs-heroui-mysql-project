import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')
  
  // Clear existing data
  await prisma.image.deleteMany()
  
  const sampleImages = [
    // Container 1 - Nature Collection
    { title: 'Mountain Lake', url: 'https://picsum.photos/300/200?random=1', alt_text: 'Beautiful mountain lake view', container_id: 1 },
    { title: 'Forest Path', url: 'https://picsum.photos/300/200?random=2', alt_text: 'Peaceful forest walking path', container_id: 1 },
    { title: 'Ocean Sunset', url: 'https://picsum.photos/300/200?random=3', alt_text: 'Stunning ocean sunset', container_id: 1 },
    { title: 'Garden Flowers', url: 'https://picsum.photos/300/200?random=4', alt_text: 'Colorful garden flowers', container_id: 1 },
    
    // Container 2 - Architecture Gallery
    { title: 'Modern Building', url: 'https://picsum.photos/300/200?random=5', alt_text: 'Contemporary architecture', container_id: 2 },
    { title: 'Classic Bridge', url: 'https://picsum.photos/300/200?random=6', alt_text: 'Historic stone bridge', container_id: 2 },
    { title: 'City Skyline', url: 'https://picsum.photos/300/200?random=7', alt_text: 'Urban city skyline', container_id: 2 },
    { title: 'Gothic Cathedral', url: 'https://picsum.photos/300/200?random=8', alt_text: 'Medieval cathedral architecture', container_id: 2 },
    
    // Container 3 - Art & Design
    { title: 'Abstract Art', url: 'https://picsum.photos/300/200?random=9', alt_text: 'Modern abstract artwork', container_id: 3 },
    { title: 'Sculpture Garden', url: 'https://picsum.photos/300/200?random=10', alt_text: 'Outdoor sculpture display', container_id: 3 },
    { title: 'Street Mural', url: 'https://picsum.photos/300/200?random=11', alt_text: 'Vibrant street art mural', container_id: 3 },
    { title: 'Gallery Exhibition', url: 'https://picsum.photos/300/200?random=12', alt_text: 'Art gallery interior', container_id: 3 },
    
    // Container 4 - Travel Photos
    { title: 'Paris Streets', url: 'https://picsum.photos/300/200?random=13', alt_text: 'Charming Paris street scene', container_id: 4 },
    { title: 'Tokyo Lights', url: 'https://picsum.photos/300/200?random=14', alt_text: 'Neon lights in Tokyo', container_id: 4 },
    { title: 'Bali Beach', url: 'https://picsum.photos/300/200?random=15', alt_text: 'Tropical beach in Bali', container_id: 4 },
    { title: 'Swiss Alps', url: 'https://picsum.photos/300/200?random=16', alt_text: 'Snow-capped Alpine peaks', container_id: 4 },
    
    // Container 5 - Food & Lifestyle
    { title: 'Fresh Vegetables', url: 'https://picsum.photos/300/200?random=17', alt_text: 'Organic fresh vegetables', container_id: 5 },
    { title: 'Coffee Culture', url: 'https://picsum.photos/300/200?random=18', alt_text: 'Artisanal coffee preparation', container_id: 5 },
    { title: 'Home Interior', url: 'https://picsum.photos/300/200?random=19', alt_text: 'Modern home living space', container_id: 5 },
    { title: 'Healthy Meal', url: 'https://picsum.photos/300/200?random=20', alt_text: 'Nutritious meal presentation', container_id: 5 },
    
    // Container 6 - Technology
    { title: 'Code on Screen', url: 'https://picsum.photos/300/200?random=21', alt_text: 'Programming code display', container_id: 6 },
    { title: 'Circuit Board', url: 'https://picsum.photos/300/200?random=22', alt_text: 'Electronic circuit board', container_id: 6 },
    { title: 'Smartphone Tech', url: 'https://picsum.photos/300/200?random=23', alt_text: 'Modern smartphone technology', container_id: 6 },
    { title: 'Data Visualization', url: 'https://picsum.photos/300/200?random=24', alt_text: 'Data charts and graphs', container_id: 6 },
  ]
  
  for (const image of sampleImages) {
    await prisma.image.create({
      data: image
    })
  }
  
  console.log('Database seeded successfully!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })