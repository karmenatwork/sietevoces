import Hero from '../components/Hero';

export default async function HomePage() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

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
                &quot;You are worthy of the love you keep trying to give everyone else.&quot;
              </blockquote>
              <cite className="text-gray-600 font-semibold">— Jamie Kern Lima, Worthy</cite>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <blockquote className="text-lg italic text-gray-700 mb-4">
                &quot;Your mindset is the foundation of everything you build in life.&quot;
              </blockquote>
              <cite className="text-gray-600 font-semibold">— Lewis Howes, The Greatest Mindset</cite>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}