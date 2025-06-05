import NewTask from '@/components/NewTask'
import TasksList from '@/components/TasksList'
import Image from 'next/image'

export default function Home() {
	return (
		<div className='max-w-3xl mx-auto space-y-5 py-10'>
			{/* <h1>Hello</h1> */}
			<div className='flex flex-col items-center justify-center space-y-4'>
				<h1 className='text-5xl text-poppins font-bold'>Manage your tasks</h1>
				<h3 className='text-xl font-light'>
					Keep track of your to-do list efficiently.
				</h3>
			</div>

			<NewTask />

			<TasksList />
		</div>
	)
}
