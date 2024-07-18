import { CustomerReviews, Footer, 
  Hero,PopularProducts,
  Servises,SpecialOffer,Subscribe,
  SuperQuality } from "./sections"
  import Nav from "./components/Nav"
import { useState } from "react"
import { useEffect } from "react"




const App = () => {

// const [type,setType] = useState('posts')
// const [data, setData] = useState('')


// useEffect(()=>{
//   fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then(response => response.json())
//       .then(json => setData(json))
// }, [type])



  return(


<main className="relative">
{/* <section>
<div>
<p>result {type}</p>
<button onClick={()=>setType('posts')}>posts</button>
<button onClick={()=>setType('users')}>users</button>
<button onClick={()=>setType('todos')}>todos</button>
</div>
<pre>{JSON.stringify(data, null, 2)}</pre>
</section> */}

<Nav />
<section className="xl:padding-l wide:padding-r padding-b">
<Hero/>
</section>
<section className="padding">
  <PopularProducts/>
</section>
<section className="padding">
  <SuperQuality/>
</section>
<section className="padding-x py-10">
  <Servises/>
</section>
<section className="padding ">
  <SpecialOffer/>
</section>
<section className="padding bg-pale-blue">
  <CustomerReviews/>
</section>
<section className="padding-x sm:py-32 py-16 w-full">
  <Subscribe/>
</section>
<section className="padding-x bg-black padding-t pb-8">
  <Footer/>
</section>
</main>
  )
}

export default App