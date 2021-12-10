import React from 'react';
import { Figure, ListGroup, ListGroupItem } from 'react-bootstrap';
import fbIcon from '../assets/images/icon-facebook.svg';
import instaIcon from '../assets/images/icon-instagram.svg';
import pintrestIcon from '../assets/images/icon-pinterest.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';

function Footer() {
	const footerData = [
		{
			title: 'Features',
			list: ['Link Shortening', 'Branded Links', 'Analytics'],
		},
		{
			title: 'Resources',
			list: ['Blog', 'Developers', 'Support'],
		},
		{
			title: 'Company',
			list: ['About', 'Our Team', 'Carrers', 'Contact'],
		},
	];
	const footerSocialIcons = [fbIcon, instaIcon, pintrestIcon, twitterIcon];

	return (
		<footer className='w-100 footer p-5 bg-dark'>
			<div className='brand'>
				<h5 className='text-white'>Shortly</h5>
			</div>

			{footerData.map((d) => {
				return (
					<div className='footer-sections'>
						<div className='footer-list'>
							<ListGroup as='ul'>
								<ListGroupItem
									as='li'
									className='footer-list-title'
								>
									{d.title}
								</ListGroupItem>
								{d.list.map((li) => {
									return (
										<ListGroupItem
											as='li'
											className='footer-list-item'
										>
											{li}
										</ListGroupItem>
									);
								})}
							</ListGroup>
						</div>
					</div>
				);
			})}

			<div className='social-icons d-flex justify-content-evenly mt-3'>
				{footerSocialIcons.map((i) => {
					return (
						<Figure>
							<Figure.Image
								src={i}
								height={'15px'}
								width={'15px'}
							/>
						</Figure>
					);
				})}
			</div>
		</footer>
	);
}

export default Footer;
