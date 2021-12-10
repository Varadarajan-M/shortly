import './App.scss';

import NavBar from './Navbar/NavBar';
import ShowCaseBanner from './Showcase/ShowCaseBanner';
import UrlSectionWrapper from './URL/UrlSectionWrapper';
import StatLabel from './StatLabel/StatLabel';
import StatsCards from './Statscards/StatsCards';
import AdBanner from './AdBanner/AdBanner';
import Footer from './Footer/Footer';

function App() {
	return (
		<section className='App hero'>
			<section className='my-2 top-section'>
				<NavBar />
				<ShowCaseBanner />
			</section>

			<section className='adv-statistics w-100 d-flex justify-content-center'>
				<UrlSectionWrapper />
				<StatLabel />
				<StatsCards />
			</section>
			<section>
				<AdBanner />
				<Footer />
			</section>
		</section>
	);
}

export default App;
