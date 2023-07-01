import Head from 'next/head';
import Image from 'next/image';
import Nav from './components/Nav';

export default function Home() {
  return (
    <div>
      <main>
        <div className="bg-gray-800 p-4 md:h-screen lg:px-40 lg:h-screen">
          <Nav />
          <div className="grid grid-cols-1 gap-4 bg-gray-800 md:grid-cols-2 lg:grid-cols-4">
            <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg">
              <Image
                src="https://cdn.jsdelivr.net/gh/ananduremanan/dreamCatcherNext@main/pages/assets/images/OIG%20(1)%201.jpg"
                alt="fox"
              />
              <div className="m-4">
                <p className="font-bold text-gray-500">The Room</p>
                <p className="text-sm font-light text-gray-400">
                  Dark Moody with minimal lighting.
                </p>
              </div>
            </div>
            <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg">
              <Image
                src="https://cdn.jsdelivr.net/gh/ananduremanan/dreamCatcherNext@main/pages/assets/images/OIG%20(1).jpg"
                alt="fox"
              />
              <div className="m-4">
                <p className="font-bold text-gray-500">The Dream Catcher</p>
                <p className="text-sm font-light text-gray-400">
                  Made of out of feathers, sticks and curiosity.
                </p>
              </div>
            </div>
            <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg">
              <Image
                src="https://1drv.ms/i/s!ArgY4Srt5Mp3iS7cYXxznvN-uxYF?e=ox6h2Z"
                alt="fox"
              />
              <div className="m-4">
                <p className="font-bold text-gray-500">The Lightning</p>
                <p className="text-sm font-light text-gray-400">
                  Image taken from Sony Website.
                </p>
              </div>
            </div>
            <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg">
              <Image
                src="https://1drv.ms/i/s!ArgY4Srt5Mp3iS7cYXxznvN-uxYF?e=ox6h2Z"
                alt="fox"
              />
              <div className="m-4">
                <p className="font-bold text-gray-500">The Beauty</p>
                <p className="text-sm font-light text-gray-400">
                  Image taken from Sony Website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
