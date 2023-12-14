
'use client';

import {useOptimistic, useRef, useState} from 'react';
import styles from '@/app/page.module.scss';
import {addTodo} from '@/functions/action.form';
import {Btn} from './Btn';
import {useFormStatus} from 'react-dom';

type Todos = {
	desc: string;
	id: number;
};
type PropsTodo = {
	todos: Todos[];
};

const Form = async ({todos}: PropsTodo) => {
	const contentForm = useRef<HTMLFormElement>(null);
	// Const [optimisticTodos, addOptimisticTodos] = useOptimistic(todos, (state, newTodo: Todos) => [...state, newTodo]);
	const {pending} = useFormStatus();
	return (
		<>
			<form className={styles.form} ref={contentForm} action={
				async FormData => {
					contentForm.current?.reset();
					// AddOptimisticTodos({
					// 	id: Math.random(),
					// 	desc: ,
					// });

					await addTodo(FormData);
				}
			}>
				<div className={styles.inputs}>
					<input type='text' placeholder='todo' name='input' />
					<Btn/>
				</div>
			</form>
			<div className={styles.todos}>
				<ul className={styles.list}>
					{todos.map(todo => (
						<li key={todo.id}>{todo.desc}</li>
					))}
				</ul>
			</div>
		</>
	);
};

export {Form};
