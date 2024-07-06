const Gallery = () => {
  return (
    <div className="p-4 space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <p className="text-lg">A glimpse into the life at Maseru SDA Primary School.</p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[300px]" />
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[300px]" />
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[300px]" />
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[300px]" />
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[300px]" />
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[300px]" />
      </section>
    </div>
  );
};

export default Gallery;