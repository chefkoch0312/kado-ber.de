const GallerySection: React.FC = () => (
  <section id="gallery" className="py-20 px-4 bg-slate-900/60">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Wo Algorithmen träumen lernen
      </h2>
      <p className="text-base md:text-lg text-slate-300 mb-8">
        Eine kuratierte Galerie KI-generierter Bilder – erschaffen mit{" "}
        <strong>Stable Diffusion XL</strong>.<br />
        Technisch präzise, ästhetisch feinfühlig. Jedes Bild ein stiller Dialog
        zwischen Idee und Algorithmus.
      </p>
      <div className="mb-8">
        <img
          src="/assets/gallery-preview.jpg"
          alt="Vorschau Galerie"
          className="w-full rounded-2xl shadow-lg border border-slate-800"
        />
      </div>
      <a
        href="http://gallery.kado-ber.de"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition"
      >
        Galerie ansehen
      </a>
    </div>
  </section>
);

export default GallerySection;
