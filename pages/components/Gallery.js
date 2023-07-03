import img_url from '../data/imageUrl.json';

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {img_url.map((url) => {
        return (
          <div
            className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg"
            key={url.id}
          >
            <div className="overflow-hidden">
              <img
                src={url.img_url}
                alt="fox"
                className="transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="m-4">
              <p className="font-bold text-gray-500">{url.title}</p>
              <p className="text-sm font-light text-gray-400">
                {url.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
