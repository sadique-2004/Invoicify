const AlertCard = ({ children, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
          <button 
            onClick={onClose} 
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800  shadow-md px-2 py-1 text-lg font-bold hover:bg-gray-200 transition"

          >
            ×
          </button>
  
          <div className="text-gray-800">
            {children} 
            {/* In React, children is a special prop that automatically receives whatever you wrap between the opening and closing tags of a component. */}
          </div>
  
          <div className="mt-6 text-center">
            <button 
              onClick={onClose} 
              className="bg-[#45ccb8] text-white px-4 py-2 rounded hover:bg-[#3cb0a0] transition"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default AlertCard;
  