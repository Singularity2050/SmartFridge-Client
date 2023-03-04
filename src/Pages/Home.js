
import NavBottom from '../Components/NavBottom';
import NavTop from '../Components/NavTop';
import Camera from '../Components/Camera';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { textState } from '../recoil';
import Profile from './Profile';
const Home = () => {
	const [text, setText] = useRecoilState(textState);
	console.log(text);
	return (
		<>
			{/*<NavTop/>*/}
				<Camera />
				<NavBottom />
		</>
	);
};

export default Home;
