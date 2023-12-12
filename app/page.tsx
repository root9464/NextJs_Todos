import Image from 'next/image';
import styles from './page.module.scss';
import {Section} from '@/components/section';
export default function Home() {
	return (
		<main className={styles.main}>
			<Section/>
		</main>
	);
}
