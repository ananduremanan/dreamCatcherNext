import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <main>
        <div className="bg-gray-800 w-screen h-screen flex justify-center items-center overflow-hidden">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <div>
              <img
                src="https://1drv.ms/i/s!ArgY4Srt5Mp3iSxVcW6H-gYjEqzv?e=2JyEUf"
                alt="dreamCatcher"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
