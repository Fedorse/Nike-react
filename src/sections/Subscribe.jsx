import Button from "../components/Button"
const Subscribe = () => {
  return (
    <section id="contact-us" className=" max-container flex items-center gap-10 justify-between max-lg:flex-col">
        <h3 className="text-4xl leading-[68px] font-palanquin lg:max-w-md font-bold">
          Sign Up from
          <span className="text-coral-red"> Update</span> & Newsletter
        </h3>
        <div className="lg:max-w-[40%] w-full items-center max-sm:flex-col sm:border rounded-full sm:border-slate-gray gap-5 p-3 flex">
          <input type="text" placeholder="subscribe" className="input" />
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button
          label='Sign up'
          fullWidth
          />
        </div>
        </div>

    </section>
  )
}

export default Subscribe