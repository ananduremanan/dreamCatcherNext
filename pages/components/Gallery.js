export default function Gallery() {
  return(
    <div className="grid grid-cols-1 gap-4 bg-gray-800 md:grid-cols-2 lg:grid-cols-4">
            <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg">
              <img
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
              <img
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
              <img
                src="https://cdn.jsdelivr.net/gh/ananduremanan/dreamCatcherNext@main/pages/assets/images/OIG.jpg"
                alt="fox"
              />
              <div className="m-4">
                <p className="font-bold text-gray-500">The Catcher</p>
                <p className="text-sm font-light text-gray-400">
                  Who's he? Where is he from? No one knows!.
                </p>
              </div>
            </div>
            <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg">
              <img
                src="https://cdn.jsdelivr.net/gh/ananduremanan/dreamCatcherNext@main/pages/assets/images/OIG._gqO.jpg"
                alt="fox"
              />
              <div className="m-4">
                <p className="font-bold text-gray-500">The Room In a different angle</p>
                <p className="text-sm font-light text-gray-400">
                  Image Generated with Dall-E 2.
                </p>
              </div>
            </div>
            {/* <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg">
              <img
                src="https://stackblitz.com/files/stackblitz-starters-vt4zdd/github/ananduremanan/dreamCatcherNext/main/pages/assets/images/car_accident.jpg"
                alt="fox"
              />
              <div className="m-4">
                <p className="font-bold text-gray-500">The Accident</p>
                <p className="text-sm font-light text-gray-400">
                  Image Generated with Dall-E 2.
                </p>
              </div>
            </div> */}
          </div>
  )
}