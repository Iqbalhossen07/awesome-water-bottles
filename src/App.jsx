import { Suspense } from 'react'
import './App.css'
import Bottles from './components/bottles/Bottles';

const bottlesPromise = fetch("./bottles.json").then(res=>res.json())

function App() {



  return (
    <>
      
      <Suspense>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App
