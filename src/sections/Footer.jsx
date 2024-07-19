import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constans"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
          <img
            src={footerLogo}
            width={150}
            height={46}
        />
          
          <p className="mt-6 text-base text-white-400 leading-7 font-montserrat sm:max-w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt cupiditate amet ab vitae enim ad officia. Officia repudiandae delectus doloremque nam. Expedita sequi a dignissimos. Aliquid excepturi blanditiis consectetur animi!
          </p>
          <div className="flex items-center mt-8 gap-5">
        {socialMedia.map((icon)=>(

            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full"> 
              <img src={icon.src} alt={icon.alt} width={24} height={24} />
            </div>
        ))}
          </div>
          </a>
        </div>
        <div className="flex flex-wrap flex-1 justify-between lg:gap-10 gap-20">
          {footerLinks.map((section)=>(
              <div className="" key={section} >
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6 ">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link)=>(
                    <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                      <a >
                      {link.name}
                      </a>
                    </li> 
                  ))}
                </ul>
              </div>
          ))
          }
        </div>
        </div>
        <div className="flex justify-between text-white-400 mt-24 max-sm:items-center max-sm:flex-col">
          <div className="flex flex-1 cursor-pointer font-montserrat items-center gap-2 justify-start">
            <img className="m-0 rounded-full" src={copyrightSign} alt="copy right sign" width={24} height={24} />
            <p className="">Copy right. All right reserved.</p>


          </div>
          <p className="font-montserrat cursor-pointer">Terms & Condidion</p>

        </div>
  </footer>
  )
}

export default Footer