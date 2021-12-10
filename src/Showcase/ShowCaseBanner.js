import React from 'react';
import bannerimage from '../assets/images/illustration-working.svg';
import { Button, Figure } from 'react-bootstrap';

function ShowCaseBanner() {
	return (
		<section className='d-flex showcase-banner align-items-center my-5'>
			<div className='d-flex get-started '>
				<div className='banner-content'>
					<h1>
						{' '}
						More than just <br /> shorter links{' '}
					</h1>
					<p>
						Build your brand’s recognition and get detailed
						<br /> insights on how your links are performing.
					</p>
					<Button className='get-started-btn'>Get Started</Button>
				</div>
			</div>
			<div className='banner-image d-flex'>
				<Figure>
					<Figure.Image src={bannerimage} />
				</Figure>
			</div>
		</section>
	);
}

export default ShowCaseBanner;
