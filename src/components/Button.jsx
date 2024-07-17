
const Button = ({label, iconURL}) => {
  return (
    <button className="flex bg-coral-red border-coral-red rounded-full border font-montserrat text-white text-lg px-7 py-4 gap-2 leading-none justify-center items-center">
        {label}
        <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full h-5 w-5" />
    </button>
  )
}

export default Button