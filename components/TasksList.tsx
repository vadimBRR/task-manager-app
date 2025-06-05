import Task from './Task'

const TasksList = () => {
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
		<div className='space-y-3'>
			{data.map(item => (
				<Task {...item} key={item.id}/>
			))}
		</div>
	)
}

export default TasksList
