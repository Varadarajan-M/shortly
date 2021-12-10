import React from 'react';
import { Button } from 'react-bootstrap';

function AdBanner() {
	return (
		<section className='advertise d-flex flex-column justify-content-center align-items-center'>
			<div>
				<h4 className='text-white fw-bolder mt-4'>
					Boost your links today
				</h4>
				<Button className='get-started-btn mt-3'>Get Started</Button>
			</div>
		</section>
	);
}

export default AdBanner;
