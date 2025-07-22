# HeroUI Gallery Project Setup Instructions

This is a modern web application built with NextJS, TypeScript, NextUI, and MySQL.

## Prerequisites

- Node.js 18+ 
- MySQL database
- npm or yarn package manager

## Environment Setup

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update the `.env` file with your MySQL database connection:
```
DATABASE_URL="mysql://username:password@localhost:3306/database_name"
```

## Installation & Setup

1. Install dependencies:
```bash
npm install
```

2. Generate Prisma client:
```bash
npm run db:generate
```

3. Push database schema:
```bash
npm run db:push
```

4. Seed the database with sample data:
```bash
npm run db:seed
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Features

- **Responsive Navigation**: 6-page navigation (Home, Gallery, Portfolio, About, Services, Contact)
- **Hero Banner**: Dynamic banner section with overlay text
- **Image Grid**: 6 containers displaying 4 images each from MySQL database
- **Modern UI**: Built with NextUI components and TailwindCSS
- **Type Safety**: Full TypeScript implementation
- **Database Integration**: MySQL with Prisma ORM

## Database Schema

The `images` table structure:
- `id`: Auto-incrementing primary key
- `title`: Image title (VARCHAR 255)
- `url`: Image URL (VARCHAR 500)  
- `alt_text`: Alt text for accessibility (VARCHAR 255)
- `container_id`: Container assignment (1-6)
- `created_at` & `updated_at`: Timestamps

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/images/        # API routes
│   ├── (pages)/           # Page routes
│   └── layout.tsx         # Root layout
├── components/            # React components
├── lib/                   # Utility functions
├── prisma/               # Database schema and migrations
└── public/               # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push schema to database
- `npm run db:generate` - Generate Prisma client
- `npm run db:seed` - Seed database with sample data

## Technology Stack

- **Frontend**: NextJS 14, TypeScript, NextUI, TailwindCSS
- **Backend**: NextJS API Routes, Prisma ORM
- **Database**: MySQL
- **Images**: Next.js Image optimization with external domains