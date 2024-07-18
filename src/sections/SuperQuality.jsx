import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section
    id="about-us"
    className="flex justify-between items-center max-container max-lg:flex-col gap-10 w-full "
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-bold text-4xl font-palanquin capitalize lg:max-w-lg">
          We Provide You
          <br />
          <span className="text-coral-red inline-block mt-3">Super</span> Quality Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis facere rem quam neque? Excepturi ipsam suscipit deserunt perspiciatis accusamus similique! Facere consequatur amet architecto blanditiis quia perspiciatis tempore recusandae placeat!
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor incidunt repellat velit tenetur magni minima debitis inventore mollitia dolores unde eligendi cumque veritatis.</p>
        <div className="mt-11">
        <Button label='View details' />
        </div>
      </div>
      <div className="flex justify-center items-center flex-1">
        <img src={shoe8} width={570} height={522} alt="shoe" />
      </div>
    </section>
  )
}

export default SuperQuality