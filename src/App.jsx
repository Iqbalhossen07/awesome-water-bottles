import { Suspense } from 'react'
import './App.css'
import Bottles from './components/bottles/Bottles';

const bottlesPromise = fetch("./bottles.json").then(res=>res.json())

function App() {



  return (
    <>
      <h1>Buy Awesome Water Bottles</h1>
      <Suspense>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App
