const Task = ({ id, content }: { id: number; content: string }) => {
	return (
		<div className='p-2 border border-gray-500 flex flex-row items-center rounded-md '>
			<input id={id + ''} type='checkbox' className='h-6 w-6' />
			<label
				htmlFor={id + ''}
				className='block w-full p-3 text-xl cursor-pointer'
			>
				{content}
			</label>
		</div>
	)
}

export default Task
