import { useEffect, useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const ExampleModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [noPosition, setNoPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);
  
  const handleNoHover = () => {
    const maxTop = 50;
    const maxLeft = 180;
    setNoPosition({
      top: Math.floor(Math.random() * maxTop),
      left: Math.floor(Math.random() * maxLeft),
    });
  };

  if (!isOpen) return null;
  return (
    <div className="p-6 text-center">
      <button
        onClick={handleOpenModal}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
      >
        Open Modal
      </button>

      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Welcome Modal"
        className="relative bg-white rounded-lg py-6 px-4 max-w-md mx-auto shadow-lg outline-none"
        overlayClassName="fixed inset-0 bg-black/50 flex justify-center items-center p-5"
      >
        <h2 className="text-xl font-bold text-center mb-4">Welcome my Page!</h2>
        <p className="mb-4 text-center">
          Will you contact with me after watching at the my portfolio?
        </p>
        <div className="w-full flex items-center justify-center gap-x-3">
          <button
            onClick={handleCloseModal}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer"
          >
            Yes
          </button>
          <button
            onMouseEnter={handleNoHover}
            style={
              noPosition
                ? {
                    position: "absolute",
                    top: noPosition.top,
                    left: noPosition.left,
                  }
                : {}
            }
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
          >
            No
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default ExampleModal;
