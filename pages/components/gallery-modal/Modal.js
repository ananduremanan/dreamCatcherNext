export default function Modal({ isOpen, onClose, imgSrc, onNext, onPrev }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="relative w-3/4 h-3/4">
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={imgSrc}
            alt="Full screen"
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 p-2 text-white bg-black rounded-full"
        >
          X
        </button>
        <button
          onClick={onPrev}
          className="absolute left-0 top-1/2 p-2 text-white bg-black rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={onNext}
          className="absolute right-0 top-1/2 p-2 text-white bg-black rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
