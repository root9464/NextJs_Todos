'use server';
import prisma from '@/prisma/db';
import {revalidatePath} from 'next/cache';

export const addTodo = async (formData: FormData) => {
	const input = formData.get('input') as string;
	try {
		await prisma.todo.create({
			data: {
				desc: input,
			},
		});
	} catch (e: Error | unknown) {
		console.log(e);
	}

	revalidatePath('/');
};

export const getData = async () => {
	const data = await prisma.todo.findMany({
		select: {
			desc: true,
			id: true,
		},
	});
	return data;
};
