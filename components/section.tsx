
import styles from '@/app/page.module.scss';
import {Form} from './Form';
import {getData} from '@/functions/action.form';
const Section = async () => {
	const todos = await getData();
	return (
		<div className={styles.section}>
			<h1> Todo </h1>
			<Form todos={todos}/>

		</div>
	);
};

export {Section};
