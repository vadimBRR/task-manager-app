import Image from 'next/image'

export default function Home() {
	const data = [
		{
			id: 1,
			content: 'Item1',
		},
		{
			id: 2,
			content: 'Item2',
		},
		{
			id: 3,
			content: 'Item3',
		},
	]
	return (
		<div className='max-w-3xl mx-auto bg-background space-y-5 py-10'>
			{/* <h1>Hello</h1> */}
			<div className='flex flex-col items-center justify-center space-y-4'>
				<h1 className='text-5xl text-poppins font-bold'>Manage your tasks</h1>
				<h3 className='text-xl font-light'>
					Keep track of your to-do list efficiently.
				</h3>
			</div>


			{data.map(item => (
				<div
					className='p-2 border border-gray-500 flex flex-row items-center rounded-md '
					key={item.id}
				>
					<input id={item.id + ''} type='checkbox' className='h-6 w-6' />
					<label
						htmlFor={item.id + ''}
						className='block w-full p-3 text-xl cursor-pointer'
					>
						{item.content}
					</label>
				</div>
			))}
		</div>
	)
}
