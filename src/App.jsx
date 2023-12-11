import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
const App = () => {
    return (
        <div className='bg-black min-h-screen flex items-center justify-center space-y-2'>
            <div className='flex  items-center p-4'>
                <img src={viteLogo} className="w-full" alt="Vite logo" />
                <img src={reactLogo} className="motion-safe:animate-spin w-full" alt="React logo" />
            <h1 className="text-5xl font-bold text-white">
                Chai Chai... Chai lelo Chai!
            </h1>
            </div>
        </div>
    );
};

export default App;