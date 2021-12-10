import React from 'react';
import { Figure, Card } from 'react-bootstrap';

import brandrecognitionIcon from '../assets/images/icon-brand-recognition.svg';
import detailedRecordsIcon from '../assets/images/icon-detailed-records.svg';
import fullyCustomizableIcon from '../assets/images/icon-fully-customizable.svg';
function StatsCards() {
	const cardData = [
		{
			icon: brandrecognitionIcon,
			title: 'Brand Recognition',
			desc: 'Boost your brand recognition with each click. Generic links don’t mean a thing.Branded links help instil confidence in your content.',
		},
		{
			icon: detailedRecordsIcon,
			title: 'Detailed Records',
			desc: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
		},
		{
			icon: fullyCustomizableIcon,
			title: 'Fully Customizable',
			desc: 'Improve brand awareness and content discoverability through customizable links,supercharging audience engagement',
		},
	];
	return (
		<div className='stats-cards d-flex my-0 p-5 justify-content-between'>
			{cardData.map((data, index) => {
				return (
					<Card
						className={`stat-card shadow-md p-4 pt-5 mx-3 ${
							index > 0 && `stat-card-${index + 1}`
						}`}
					>
						<div className='icon-wrapper'>
							<div className='icon'>
								<Figure>
									<Figure.Image src={data.icon} />
								</Figure>
							</div>
						</div>
						<div className='stat-text'>
							<div>
								<h5>{data.title}</h5>
								<p>{data.desc}</p>
							</div>
						</div>
					</Card>
				);
			})}
		</div>
	);
}

export default StatsCards;
