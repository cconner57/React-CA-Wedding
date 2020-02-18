import React from 'react';
import ImageCarousel from './ImageCarousel';

const photos = [
	'/media/gallery/1.jpg',
	'/media/gallery/2.jpg',
	'/media/gallery/3.jpg',
	'/media/gallery/4.jpg',
	'/media/gallery/5.jpg',
	'/media/gallery/6.jpg'
];

function Gallery() {
	const galleryCard = photos.map(i => {
		return <img key={i} className="overflow-hidden c-image" src={i} />;
	});

	return (
		<div className="container card">
			<h2 className="Gallery-title">Engagement Photos</h2>
			<ImageCarousel />
			<div className="Gallery-img">
				<div className="row-fluid">{galleryCard}</div>
			</div>
		</div>
	);
}

export default Gallery;
