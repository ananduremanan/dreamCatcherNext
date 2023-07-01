import Head from 'next/head';
import Image from 'next/image';
import room from './assets/images/room.jpg';

export default function Home() {
  return (
    <div>
      <main>
        <div className="bg-gray-800 p-4 md:h-screen">
          <div className="grid grid-cols-1 gap-4 bg-gray-800 md:grid-cols-4">
            <div className="cursor-pointer rounded-lg bg-white shadow-md hover:shadow-lg">
              <Image src={room} alt="fox" />
              <div className="m-4">
                <p className="font-bold text-gray-500">The Cunning</p>
                <p className="text-sm font-light text-gray-400">
                  Image taken from Sony Website.
                </p>
              </div>
            </div>
            <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg">
              <Image src={room} alt="fox" />
              <div className="m-4">
                <p className="font-bold text-gray-500">The Mighty King</p>
                <p className="text-sm font-light text-gray-400">
                  Image taken from Sony Website.
                </p>
              </div>
            </div>
            <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg">
              <Image src={room} alt="fox" />
              <div className="m-4">
                <p className="font-bold text-gray-500">The Lightning</p>
                <p className="text-sm font-light text-gray-400">
                  Image taken from Sony Website.
                </p>
              </div>
            </div>
            <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg">
              <Image src={room} alt="fox" />
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
