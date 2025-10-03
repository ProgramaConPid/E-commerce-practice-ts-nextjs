interface Property {
  name: string;
  value: number | "";
  img: string
}

interface PropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  saveFormData: () => Promise<Property>;
  inputName: string;
  setInputName: (value: string) => void;
  inputValue: number | "";
  setInputValue: (value: number | "") => void;
  inputImage: string;
  setInputImage: (value: string) => void;
}

export default function CommentModal({ isOpen, onClose, saveFormData, inputName, setInputName, inputValue, setInputValue, inputImage, setInputImage }: PropertyModalProps) {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative">
        {/* Botón de cerrar */}
        <button
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 transition"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-center text-xl font-semibold mb-5 text-gray-800">
          Create A New Property
        </h2>

        <div className="flex flex-col gap-4">
          <input
            onChange={(e) => setInputName(e.target.value)}
            className="border-2 p-2 rounded-md border-gray-400 focus:outline-none focus:border-sky-500"
            type="text"
            placeholder="Name..."
            value={inputName}
          />
          <input
            onChange={(e) =>
              setInputValue(e.target.value === "" ? "" : Number(e.target.value))
            }
            className="border-2 border-gray-400 p-2 rounded-md focus:outline-none focus:border-sky-500"
            type="number"
            placeholder="Value..."
            value={inputValue}
          />
          <input
            onChange={(e) => setInputImage(e.target.value)}
            className="border-2 border-gray-400 p-2 rounded-md focus:outline-none focus:border-sky-500"
            type="text"
            placeholder="Image URL..."
            value={inputImage}
          />

          <button
            onClick={async () => console.log(await saveFormData())}
            className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-md transition"
          >
            Create Comment
          </button>
        </div>
      </div>
    </div>
  );
}
