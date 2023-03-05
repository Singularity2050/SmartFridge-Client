import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';

export const globalState = atom({
	key: 'globalState', // unique ID (with respect to other atoms/selectors)
	default: '', // default value (aka initial value)
});
