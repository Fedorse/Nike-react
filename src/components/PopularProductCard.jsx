import { star } from "../assets/icons"
const PopularProductCard = ({imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img className="w-[280px] h-[280px]"  src={imgURL} alt={name} />
            <div className="mt-8 flex-col  justify-start gap-2.5" >
            <div className="flex gap-2">
            <img src={star} alt="raiting" width={24} height={24} />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
            </div>
            <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
            <p className="mt-2 text-2xl font-semibold text-coral-red leading-normal">{price}</p>
    </div>    
</div>
)
}

export default PopularProductCard