import Head from 'next/head';
import Image from 'next/image';
import Gallery from './components/Gallery';
import Nav from './components/Nav';

export default function Home() {
  return (
    <div>
      <main>
        <div className="bg-gray-800 p-4 mmd:min-h-screen lg:px-40 lg:min-h-screen">
          <Nav />
          <div className="text-white font-light mt-8">
            The Ai Generated Images from the Short
          </div>
          <hr className="m-3 opacity-10" />
          <Gallery />
        </div>
      </main>
    </div>
  );
}
