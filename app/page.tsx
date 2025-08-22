import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientOnlySections from './components/ClientOnlySections';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <ClientOnlySections />
    </div>
  );
}
