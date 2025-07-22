import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const containerId = searchParams.get('container_id')

    if (!containerId) {
      return NextResponse.json(
        { error: 'container_id parameter is required' },
        { status: 400 }
      )
    }

    const containerIdNum = parseInt(containerId)
    if (isNaN(containerIdNum) || containerIdNum < 1 || containerIdNum > 6) {
      return NextResponse.json(
        { error: 'container_id must be between 1 and 6' },
        { status: 400 }
      )
    }

    const images = await db.image.findMany({
      where: {
        container_id: containerIdNum
      },
      orderBy: {
        created_at: 'asc'
      },
      take: 4 // Limit to 4 images per container
    })

    return NextResponse.json({ images })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch images' },
      { status: 500 }
    )
  }
}