import { services } from "../constans"
import ServicesCard from '../components/ServicesCard'


const Servises = () => {
  return (
    <section>
      <div className="gap-9 max-container flex justify-center items-center flex-wrap">
      {services.map((service)=>(
          <ServicesCard key={service.label}
          {...service}

          />
      ))}
      </div>
      </section>
  )
}
export default Servises