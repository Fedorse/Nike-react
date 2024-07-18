
const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button className={`flex ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-coral-red border-coral-red text-white'} rounded-full border font-montserrat text-lg px-7 py-4 gap-2 leading-none justify-center items-center ${fullWidth && 'w-full'}`}>
      {label}
      {iconURL && 
        <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full h-5 w-5" />
      }
    </button>
  )
}

export default Button;