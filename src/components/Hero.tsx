export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="https://images.pexels.com/videos/7052871/pexels-photo-7052871.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=630"
      >
        <source
          src="https://videos.pexels.com/video-files/7052871/7052871-hd_720_1280_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Leemos para crecer 
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Hablamos para transformar
        </h2>
        <p className="text-lg md:text-xl mb-8">
          De Worthy a Greatness: un viaje contado a través de las páginas en siete voces.
        </p>
        <div className="space-x-4">
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Browse Books
          </button>
        </div>
      </div>
    </section>
  );
}
