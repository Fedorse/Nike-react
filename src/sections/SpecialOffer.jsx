import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="" width={773} height={687} className="w-full object-contain" />
        
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-bold text-4xl font-palanquin capitalize lg:max-w-lg">
          <br />
          <span className="text-coral-red inline-block mt-3">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis facere rem quam neque? Excepturi ipsam suscipit deserunt perspiciatis accusamus similique! Facere consequatur amet architecto blanditiis quia perspiciatis tempore recusandae placeat!
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor incidunt repellat velit tenetur magni minima debitis inventore mollitia dolores unde eligendi cumque veritatis.</p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button label='Wiew details'  />
        <Button label='Learn more' 
        backgroundColor = 'bg-white' 
        borderColor = 'border-slate-gray'
        textColor = 'text-slate-gray'
        />

        </div>
      </div>
    </section>
  )
}

export default SpecialOffer