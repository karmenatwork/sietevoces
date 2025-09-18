import { db } from '@/db';
import { books } from '@/db/schema';
import Card from '@/components/Card';

async function getBooks() {
  try {
    const allBooks = await db.select().from(books);
    return allBooks;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
}

export default async function HomePage() {
  const booksList = await getBooks();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to SieteVoces
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A community of readers exploring transformative books that change lives and perspectives
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Join Our Club
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Browse Books
            </button>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Featured Books
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the books that are transforming our community and changing lives
            </p>
          </div>

          {booksList.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {booksList.map((book) => (
                <Card
                  key={book.id}
                  title={book.title}
                  author={book.author}
                  description={book.description || ''}
                  image={book.image || ''}
                  className="h-full"
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No books available yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Inspirational Quotes Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Words That Inspire
            </h2>
            <p className="text-lg text-gray-600">
              Powerful quotes from our featured authors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <blockquote className="text-lg italic text-gray-700 mb-4">
                &ldquo;You are worthy of the love you keep trying to give everyone else.&rdquo;
              </blockquote>
              <cite className="text-gray-600 font-semibold">— Jamie Kern Lima, Worthy</cite>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <blockquote className="text-lg italic text-gray-700 mb-4">
                &ldquo;Your mindset is the foundation of everything you build in life.&rdquo;
              </blockquote>
              <cite className="text-gray-600 font-semibold">— Lewis Howes, The Greatest Mindset</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of readers and discover books that will change your perspective
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}