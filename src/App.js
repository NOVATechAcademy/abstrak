import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';


// Home Pages Import
import DigitalAgency from './pages/DigitalAgency';
import CorporateAgency from './pages/CorporateAgency';
// Pages 
import AboutUs from './pages/AboutUs';
import OurClients from './pages/OurClients';
import Contact from './pages/Contact';
import ErrorPage from './pages/404';
import ComingSoon from './pages/ComingSoon';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

// Css Import
import './assets/scss/app.scss';
import FaqOne from './component/faq/FaqOne';
import Apply from './pages/Apply';
import Programs from './pages/Programs';


const App = () => {
  return (
    <Router>
		<ScrollToTop>
			<Routes>
				<Route path={process.env.PUBLIC_URL + "/digital-agency"} element={<DigitalAgency />}/>
				<Route path={process.env.PUBLIC_URL + "/"} element={<CorporateAgency />}/>

				{/* Pages  */}
				<Route path={process.env.PUBLIC_URL + "/who-we-are"} element={<AboutUs />}/>
				<Route path={process.env.PUBLIC_URL + "/faq"} element={<FaqOne />}/>
				<Route path={process.env.PUBLIC_URL + "/apply"} element={<Apply />}/>
				<Route path={process.env.PUBLIC_URL + "/our-clients"} element={<OurClients />}/>
				<Route path={process.env.PUBLIC_URL + "/contact"} element={<Contact />}/>
				<Route path={process.env.PUBLIC_URL + "/programs"} element={<Programs />}/>
				{/* <Route path={process.env.PUBLIC_URL + "/404"} element={<ErrorPage />}/> */}
				<Route path={process.env.PUBLIC_URL + "/coming-soon"} element={<ComingSoon />}/>
				<Route path={process.env.PUBLIC_URL + "/privacy-policy"} element={<PrivacyPolicy />}/>
				<Route path={process.env.PUBLIC_URL + "/terms-use"} element={<TermsOfUse />}/>

			</Routes>
		</ScrollToTop>
    </Router>
  )
}

export default App;
