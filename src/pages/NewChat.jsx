import Input from "../components/common/Input";
import { head } from "../assets/icons/head.png"

function NewChat() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-8 lg:w-9/12 lg:float-right'>
      {/* main title */}
      <div className='flex items-center gap-2'>
        <img src={head} alt="head" srcset=""
          className='w-8 h-8' />
        <p className='text-white text-xl font-semibold'>Start chatting with Pheobe</p>
      </div>

      {/* chat box */}
      <Input />
    </div>
  )
}

export default NewChat