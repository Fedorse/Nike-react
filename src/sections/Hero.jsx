import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { statistics } from "../constans"
import { bigShoe1 } from "../assets/images"


const Hero = () => {
  return (
    <section
    id="home"
    className="w-full max-container gap-10 flex xl:flex-row justify-center flex-col min-h-screen"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-bold text-8xl font-palanquin max-sm:text-[72px] max-sm:leading-[82]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat sm:max-w-sm mt-6 mb-14 leading-8 text-slate-gray">
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button label='Shop now' iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat,index)=>(
            <div key={index}>
            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
            <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
          <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
            <img src={bigShoe1} alt="shoe collection" width={610} height={500} className="object-contain relative z-10" />
          </div>
    </section>
  )
}

export default Hero