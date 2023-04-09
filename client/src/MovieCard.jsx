import { useState } from 'react';
import { saveAs } from 'file-saver';
import { RiZoomInLine } from 'react-icons/ri';
import { HiOutlineDownload } from 'react-icons/hi';

import { ModalImage } from './ModalImage';
import './MovieCard.css';

export function MovieCard({ movies }) {
	const [style, setStyle] = useState({ display: 'none' });
	const [showModal, setShowModal] = useState(false);

	const url = movies.Poster.replace('300.jpg', '800.jpg');
	const thumb = movies.Poster.replace('300.jpg', '600.jpg');

	const handleModalView = () => {
		return setShowModal(true);
	};

	return (
		<>
			{showModal && (
				<ModalImage url={url} show={showModal} setShow={setShowModal} />
			)}
			<div
				className='movies'
				onMouseEnter={() => setStyle({ display: 'block' })}
				onMouseLeave={() => setStyle({ display: 'none' })}
			>
				<div className='img_wrapper'>
					<img
						src={
							movies.Poster !== 'N/A'
								? thumb
								: 'https://via.placeholder.com/700/333?text=Imagem+não+encontrada'
						}
						alt={movies.Title}
					/>
				</div>

				<div className='text_label' style={style}>
					<p className='text_year'>{movies.Year}</p>
					<span className='text_type'>{movies.Type}</span>
					<h3>{movies.Title}</h3>

					<div className='card_buttons'>
						<div onClick={() => handleModalView()} alt='Ampliar' title='Ampliar'>
							<RiZoomInLine className='view_image_button' />
						</div>
						<div
							onClick={() =>
								saveAs(movies.Poster.replace('300.jpg', '3000.jpg'), 'image1')
							}
							alt='Baixar'
							title='Baixar'
						>
							<HiOutlineDownload className='download_button' />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}