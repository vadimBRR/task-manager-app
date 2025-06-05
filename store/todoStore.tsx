'use client'
import { create } from 'zustand'

type Todo = {
	id: string
	content: string
	completed: boolean
}
interface TodoState {
	todos: Todo[]
	actions: {
		addTodo: (text: string) => void
		removeTodo: (id: string) => void
		toggleCompleted: (id: string) => void
	}
}

const useTodoStore = create<TodoState>()(set => ({
	todos: [
		{
			id: '1749144331786',
			content: 'Item1',
			completed: false,
		},
	],
	actions: {
		addTodo: (text: string) =>
			set(old => ({
				todos: [
					...old.todos,
					{ id: crypto.randomUUID(), content: text, completed: false },
				],
			})),
		removeTodo: (id: string) =>
			set(old => ({
				todos: old.todos.filter(todo => todo.id !== id),
			})),
		toggleCompleted: (id: string) =>
			set(old => ({
				todos: old.todos.map(todo =>
					todo.id === id ? { ...todo, completed: !todo.completed } : todo
				),
			})),
	},
}))

export const useTodos = () => useTodoStore(state => state.todos)
export const useActionsTodo = () => useTodoStore(state => state.actions)
