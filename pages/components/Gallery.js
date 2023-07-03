import { useState } from 'react';
import img_url from '../data/imageUrl.json';
import { Modal } from './gallery-modal/Modal';

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImgClick = (imgSrc) => {
    setSelectedImg(imgSrc);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedImg(null);
    setIsModalOpen(false);
  };

  const handleNext = () => {
    const currentIndex = img_url.findIndex((url) => url.img_url === selectedImg);
    const nextIndex = (currentIndex + 1) % img_url.length;
    setSelectedImg(img_url[nextIndex].img_url);
  };

  const handlePrev = () => {
    const currentIndex = img_url.findIndex((url) => url.img_url === selectedImg);
    const prevIndex = (currentIndex - 1 + img_url.length) % img_url.length;
    setSelectedImg(img_url[prevIndex].img_url);
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {img_url.map((url) => {
          return (
            <div
              className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg"
              key={url.id}
              onClick={() => handleImgClick(url.img_url)}
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
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        imgSrc={selectedImg}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
}