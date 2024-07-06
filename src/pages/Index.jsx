import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="text-center space-y-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Maseru SDA Primary School</h1>
        <p className="text-lg">Empowering students for a brighter future.</p>
      </header>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="text-base">To provide a holistic education that nurtures the mind, body, and spirit.</p>
        <Link to="/mission" className="text-blue-500 hover:underline">Learn more</Link>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">About Our School</h2>
        <p className="text-base">Discover our history, values, and what makes us unique.</p>
        <Link to="/about" className="text-blue-500 hover:underline">Learn more</Link>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
        </div>
        <Link to="/gallery" className="text-blue-500 hover:underline">View more</Link>
      </section>
    </div>
  );
};

export default Index;