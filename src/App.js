
import './App.css';
import { AllRoutes } from './Routes/AllRoutes';
import { Footer, Header } from './pages';


function App() {
  return (
    <div className='App dark:bg-slate-800'>
    <Header/>
    <AllRoutes/>
    <Footer/>
    </div>
  );
}

export default App;
