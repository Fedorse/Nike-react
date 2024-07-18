import { products } from "../constans"
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className=" text-4xl font-bold font-palanquin">Our <span className="text-coral-red">Poppular</span> products</h2>
        <p className="lg:max-w-lg mt-2 text-slate-gray font-montserrat">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore atque fugit alias quibusdam excepturi a, consequatur corrupti ipsam nemo, id odio facilis impedit vitae minus adipisci autem at. Expedita, perferendis.</p>
      </div>
      <div className="grid mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product,index)=> (
          <PopularProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts