"use client"
const NewTask = () => {

  return (
    <form action={()=>{}} className='grid grid-cols-[1fr_200px] '>
      <input name='task' className='w-full p-4 outline-none bg-input border border-white/15 rounded-xl shadow text-xl rounded-r-none flex-1 focus:border-indigo-300/50 duration-100'></input>
      <button type='submit' className='w- bg-indigo-600 text-xl duration-300 cursor-pointer scale-100 hover:scale-103 hover:bg-indigo-500'>
        Add Task
      </button>
    </form>
  )
}

export default NewTask