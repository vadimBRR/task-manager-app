'use client'
import { useTodos } from '@/store/todoStore'
import Task from './Task'

const TasksList = () => {
	const data = useTodos()
	return (
		<div className='space-y-3'>
			{data.map(item => (
				<Task {...item} key={item.id} />
			))}
		</div>
	)
}

export default TasksList
