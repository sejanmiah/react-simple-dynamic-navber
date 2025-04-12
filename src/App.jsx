import { Suspense } from 'react'
import './App.css'
import Header from './component/header/Header'
import Navbercustom from './component/navber/Navbercustom'
import PricingOption from './component/pricing-option/PricingOption'
import Rechart from './component/Rechart/Rechart'



const pricingPromiss = fetch('pricingData.json').then(res => res.json())


function App() {

  return (
    <>
      <Navbercustom></Navbercustom>

      <main>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <PricingOption pricingPromiss={pricingPromiss}></PricingOption>
      </Suspense>
      </main>
      <Rechart></Rechart>

    </>
  )
}

export default App
