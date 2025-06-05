"use client"
const NewTask = () => {
  
  return (
    <form action={()=>{}} className='grid grid-cols-[1fr_200px] '>
      <input name='task' className='w-full p-4 outline-none bg-input border border-white/15 rounded-xl shadow text-xl rounded-r-none flex-1'></input>
      <button type='submit' className='w- bg-indigo-500'>
        Add Task
      </button>
    </form>
  )
}

export default NewTask