import Head from 'next/head';
import Image from 'next/image';
import Gallery from './components/Gallery';
import Nav from './components/Nav';

export default function Home() {
  return (
    <div>
      <main>
        <div className="bg-gray-800 p-4 md:h-screen lg:px-40 lg:h-screen">
          <Nav />
          <Gallery />
        </div>
      </main>
    </div>
  );
}
