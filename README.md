# Siete voces

A modern blog built with Next.js, TypeScript, and a comprehensive tech stack including Better Auth, Neon PostgreSQL, Drizzle ORM.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Neon PostgreSQL
- **ORM**: Drizzle ORM
- **Authentication**: Better Auth
- **State Management**: Zustand
- **Icons**: NextIcons
- **Linting**: ESLint

## Features

- 🛍️ Books catalog 
- 🔐 Authentication system with Better Auth
- 📱 Responsive design with Tailwind CSS
- 🗄️ PostgreSQL database with Drizzle ORM
- 🎨 Modern UI with NextIcons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Neon PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sietevoces
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your database credentials:
   ```
   DATABASE_URL="postgresql://username:password@hostname:port/database"
   BETTER_AUTH_SECRET="your-secret-key-here"
   BETTER_AUTH_URL="http://localhost:3000"
   ```

4. Generate and push database schema:
   ```bash
   npm run db:push
   ```

5. Seed the database with sample products:
   ```bash
   npm run db:seed
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Commands

- `npm run db:generate` - Generate migration files
- `npm run db:migrate` - Run migrations
- `npm run db:push` - Push schema changes to database
- `npm run db:seed` - Seed database with sample data

## Project Structure

```
src/
├── app/                 # Next.js app router
│   ├── api/            # API routes
│   └── page.tsx        # Homepage
├── components/         # React components
├── lib/               # Utilities and configurations
│   ├── auth/          # Better Auth configuration
│   └── db/            # Database schema and connection
├── store/             # Zustand stores
└── scripts/           # Database scripts
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Submit a pull request

## License

This project is licensed under the MIT License.