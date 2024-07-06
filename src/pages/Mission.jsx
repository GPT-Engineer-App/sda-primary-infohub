const Mission = () => {
  return (
    <div className="p-4 space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Mission</h1>
        <p className="text-lg">Empowering students for a brighter future.</p>
      </header>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Mission Statement</h2>
        <p className="text-base">To provide a holistic education that nurtures the mind, body, and spirit.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Vision</h2>
        <p className="text-base">To be a leading institution in academic excellence and character development.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Values</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Integrity</li>
          <li>Respect</li>
          <li>Excellence</li>
          <li>Compassion</li>
        </ul>
      </section>
    </div>
  );
};

export default Mission;