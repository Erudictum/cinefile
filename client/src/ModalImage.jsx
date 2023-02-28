import './ModalImage.css';
import { RiCloseLine } from 'react-icons/ri';

export function ModalImage({ url, show, setShow }) {
	return (
		<>
			<div
				onClick={() => setShow(false)}
				className='modal_wrapper'
				style={show ? { display: 'flex' } : { display: 'none' }}
			>
				<img className='show_image' src={url} />
				<RiCloseLine className='close-btn'/>

			</div>
		</>
	);
}
