import React from 'react';
import { Button, Card, FormControl, Form } from 'react-bootstrap';

function UrlSectionWrapper() {
	return (
		<>
			<div className='url-form-card w-75'>
				<Card className='w-100 input-card p-5 mt-n5'>
					<Form.Group className='d-flex group'>
						<FormControl placeholder='Shorten a link here...' />
						<Button className='ms-2 shorten-btn'>
							Shorten it!
						</Button>
					</Form.Group>
				</Card>
			</div>

			{/* <div className='shortened-urls'>
				<Card>
					<h2>Here comes the shortened urls</h2>
				</Card>
			</div> */}
		</>
	);
}

export default UrlSectionWrapper;
