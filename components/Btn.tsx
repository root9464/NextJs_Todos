
import styles from '@/app/page.module.scss';
import {useFormStatus} from 'react-dom';
const Btn = (): JSX.Element => {
	const {pending} = useFormStatus();
	return (
		<>
			<button type='submit'>
				{pending ? 'Adding...' : 'Add'}
			</button>
		</>
	);
};

export {Btn};
