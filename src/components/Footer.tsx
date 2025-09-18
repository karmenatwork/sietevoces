export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SieteVoces Book Club</h3>
            <p className="text-gray-300 text-sm">
              A community of readers exploring transformative books together.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/books" className="text-gray-300 hover:text-white">Books</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="/members" className="text-gray-300 hover:text-white">Members</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 text-sm">
              Join our community and discover your next great read.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 SieteVoces Book Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}