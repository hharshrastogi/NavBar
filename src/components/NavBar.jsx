import { useState, useEffect } from "react";

function NavigationBar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <nav className={`p-4 shadow-md ${darkMode ? 'bg-gray-900' : 'bg-transparent'} text-white`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl transition-transform font-bold transform hover:scale-110 font-bold">
            <a href="#home">
          <span className="text-[#6E260E]">Book</span><span className="text-purple-600">AI</span>
            </a>
        </div>

        <div className="flex text-[#6E260E] items-center space-x-6">
          <a
            href="#features"
            className={`transition-transform font-bold transform hover:scale-110  ${darkMode?' hover:text-purple-800':'hover:text-[#6E260E]'}`}
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className={`transition-transform font-bold transform hover:scale-110  ${darkMode?' hover:text-purple-800':'hover:text-[#6E260E]'}`}
          >
            How It Works
          </a>
          <a
            href="#roadmap"
            className={`transition-transform font-bold transform hover:scale-110  ${darkMode?' hover:text-purple-800':'hover:text-[#6E260E]'}`}
          >
            Roadmap
          </a>
          <a
            href="#api"
            className={`transition-transform font-bold transform hover:scale-110  ${darkMode?' hover:text-purple-800':'hover:text-[#6E260E]'}`}
          >
            API
          </a>
          <a
            href="#price"
            className={`transition-transform font-bold transform hover:scale-110  ${darkMode?' hover:text-purple-800':'hover:text-[#6E260E]'}`}
          >
            Price
          </a>
          <a
            href="#model"
            className={`transition-transform font-bold transform hover:scale-110  ${darkMode?' hover:text-purple-800':'hover:text-[#6E260E]'}`}
          >
            Model
          </a>


          <button className={`px-2 font-semibold py-2  rounded-md ${darkMode? 'text-[#301934] bg-[#E1C16E] hover:bg-[#CD7F32]':' text-[#EADDCA] bg-[#6E260E] hover:bg-[#D27D2D]'}`}>
            Login / Sign Up
          </button>
        </div>

        <button
          onClick={toggleDarkMode}
          className={`p-1 font-bold rounded-md ${darkMode ? 'bg-gray-800 text-[#F5F5DC]': 'bg-[#ECDFCF] text-[#6E260E]' } flex items-center justify-center ml-1`} 
        >
          {darkMode ?'Light':'Dark'}
        </button>
      </div>
    </nav>
  );
}

export default NavigationBar;
