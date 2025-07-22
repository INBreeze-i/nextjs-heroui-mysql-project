// Mock Prisma client for development without database connection
interface Image {
  id: number
  title: string
  url: string
  alt_text?: string
  container_id: number
  created_at: Date
  updated_at: Date
}

// Mock data for demonstration
const mockImages: Image[] = [
  // Container 1 - Nature Collection
  { id: 1, title: 'Mountain Lake', url: 'https://picsum.photos/300/200?random=1', alt_text: 'Beautiful mountain lake view', container_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 2, title: 'Forest Path', url: 'https://picsum.photos/300/200?random=2', alt_text: 'Peaceful forest walking path', container_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 3, title: 'Ocean Sunset', url: 'https://picsum.photos/300/200?random=3', alt_text: 'Stunning ocean sunset', container_id: 1, created_at: new Date(), updated_at: new Date() },
  { id: 4, title: 'Garden Flowers', url: 'https://picsum.photos/300/200?random=4', alt_text: 'Colorful garden flowers', container_id: 1, created_at: new Date(), updated_at: new Date() },
  
  // Container 2 - Architecture Gallery
  { id: 5, title: 'Modern Building', url: 'https://picsum.photos/300/200?random=5', alt_text: 'Contemporary architecture', container_id: 2, created_at: new Date(), updated_at: new Date() },
  { id: 6, title: 'Classic Bridge', url: 'https://picsum.photos/300/200?random=6', alt_text: 'Historic stone bridge', container_id: 2, created_at: new Date(), updated_at: new Date() },
  { id: 7, title: 'City Skyline', url: 'https://picsum.photos/300/200?random=7', alt_text: 'Urban city skyline', container_id: 2, created_at: new Date(), updated_at: new Date() },
  { id: 8, title: 'Gothic Cathedral', url: 'https://picsum.photos/300/200?random=8', alt_text: 'Medieval cathedral architecture', container_id: 2, created_at: new Date(), updated_at: new Date() },
  
  // Container 3 - Art & Design
  { id: 9, title: 'Abstract Art', url: 'https://picsum.photos/300/200?random=9', alt_text: 'Modern abstract artwork', container_id: 3, created_at: new Date(), updated_at: new Date() },
  { id: 10, title: 'Sculpture Garden', url: 'https://picsum.photos/300/200?random=10', alt_text: 'Outdoor sculpture display', container_id: 3, created_at: new Date(), updated_at: new Date() },
  { id: 11, title: 'Street Mural', url: 'https://picsum.photos/300/200?random=11', alt_text: 'Vibrant street art mural', container_id: 3, created_at: new Date(), updated_at: new Date() },
  { id: 12, title: 'Gallery Exhibition', url: 'https://picsum.photos/300/200?random=12', alt_text: 'Art gallery interior', container_id: 3, created_at: new Date(), updated_at: new Date() },
  
  // Container 4 - Travel Photos
  { id: 13, title: 'Paris Streets', url: 'https://picsum.photos/300/200?random=13', alt_text: 'Charming Paris street scene', container_id: 4, created_at: new Date(), updated_at: new Date() },
  { id: 14, title: 'Tokyo Lights', url: 'https://picsum.photos/300/200?random=14', alt_text: 'Neon lights in Tokyo', container_id: 4, created_at: new Date(), updated_at: new Date() },
  { id: 15, title: 'Bali Beach', url: 'https://picsum.photos/300/200?random=15', alt_text: 'Tropical beach in Bali', container_id: 4, created_at: new Date(), updated_at: new Date() },
  { id: 16, title: 'Swiss Alps', url: 'https://picsum.photos/300/200?random=16', alt_text: 'Snow-capped Alpine peaks', container_id: 4, created_at: new Date(), updated_at: new Date() },
  
  // Container 5 - Food & Lifestyle
  { id: 17, title: 'Fresh Vegetables', url: 'https://picsum.photos/300/200?random=17', alt_text: 'Organic fresh vegetables', container_id: 5, created_at: new Date(), updated_at: new Date() },
  { id: 18, title: 'Coffee Culture', url: 'https://picsum.photos/300/200?random=18', alt_text: 'Artisanal coffee preparation', container_id: 5, created_at: new Date(), updated_at: new Date() },
  { id: 19, title: 'Home Interior', url: 'https://picsum.photos/300/200?random=19', alt_text: 'Modern home living space', container_id: 5, created_at: new Date(), updated_at: new Date() },
  { id: 20, title: 'Healthy Meal', url: 'https://picsum.photos/300/200?random=20', alt_text: 'Nutritious meal presentation', container_id: 5, created_at: new Date(), updated_at: new Date() },
  
  // Container 6 - Technology
  { id: 21, title: 'Code on Screen', url: 'https://picsum.photos/300/200?random=21', alt_text: 'Programming code display', container_id: 6, created_at: new Date(), updated_at: new Date() },
  { id: 22, title: 'Circuit Board', url: 'https://picsum.photos/300/200?random=22', alt_text: 'Electronic circuit board', container_id: 6, created_at: new Date(), updated_at: new Date() },
  { id: 23, title: 'Smartphone Tech', url: 'https://picsum.photos/300/200?random=23', alt_text: 'Modern smartphone technology', container_id: 6, created_at: new Date(), updated_at: new Date() },
  { id: 24, title: 'Data Visualization', url: 'https://picsum.photos/300/200?random=24', alt_text: 'Data charts and graphs', container_id: 6, created_at: new Date(), updated_at: new Date() },
]

// Mock Prisma client
class MockPrismaClient {
  image = {
    findMany: async ({ where, orderBy, take }: any) => {
      let results = mockImages
      
      if (where && where.container_id) {
        results = results.filter(img => img.container_id === where.container_id)
      }
      
      if (take) {
        results = results.slice(0, take)
      }
      
      return results
    },
    
    create: async ({ data }: any) => {
      const newImage: Image = {
        id: mockImages.length + 1,
        ...data,
        created_at: new Date(),
        updated_at: new Date()
      }
      mockImages.push(newImage)
      return newImage
    },
    
    deleteMany: async () => {
      mockImages.length = 0
      return { count: 0 }
    }
  }
}

const globalForPrisma = globalThis as unknown as {
  prisma: MockPrismaClient | undefined
}

export const db = globalForPrisma.prisma ?? new MockPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db