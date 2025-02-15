import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
// import gmData from '../../config/gmData';

//to allow GM page to be visible on the navbar and accessible
//uncomment the above import line "import gmData from '../../config/gmData';" to get quarter from the gmData page
//uncomment the two lines saying  "/* <NavLink to="/gm"><li>{gmData.date.quarter} gm</li></NavLink> */"

function MobileNavItem() {
	return (
			<ul className="committee-mobile-nav">
					<li><NavHashLink to={'/committees#studio'}>Studio</NavHashLink></li>
					<li><NavHashLink to={'/committees#icpc'}>ICPC</NavHashLink></li>
					<li><NavHashLink to={'/committees#design'}>Design</NavHashLink></li>
					<li><NavHashLink to={'/committees#cyber'}>Cyber</NavHashLink></li>
					<li><NavHashLink to={'/committees#teachla'}>Teach LA</NavHashLink></li>
					<li><NavHashLink to={'/committees#w'}>W</NavHashLink></li>
					<li><NavHashLink to={'/committees#ai'}>AI</NavHashLink></li>
					<li><NavHashLink to={'/committees#hack'}>Hack</NavHashLink></li>
			</ul>
	);
}


export default class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.clickMobileNav = this.clickMobileNav.bind(this);
	}

	clickMobileNav() {
		document.getElementById('menu-toggle').checked = false;
	}

	componentDidMount() {
		const items = document.querySelectorAll('#mobile-nav .nav-items li');
		for (const item of items) {
			item.addEventListener('click', this.clickMobileNav);
		}
	}

	componentWillUnmount() {
		const items = document.querySelectorAll('#mobile-nav .nav-items li');
		for (const item of items) {
			item.removeEventListener('click', this.clickMobileNav);
		}
	}

	render() {
		return (
			<div id="navbar">
				<div id="navbar-inner">
					<NavLink to="/">
						<div id="nav-title" className="nav-section left">
							<img src={process.env.PUBLIC_URL + '/images/acm_wordmark&logo.svg'} id="acm-logo" alt="acm logo"></img>
						</div>
					</NavLink>
					<div className="nav-section right" id="desktop-nav">
						<ul className="nav-items">
							<NavLink to="/about"><li>About</li></NavLink>
							<NavLink to="/committees"><li>Committees</li></NavLink>
							{/* <NavLink to="/gm"><li>{gmData.date.quarter} gm</li></NavLink> */}
							<NavLink to="/events"><li>Events</li></NavLink>
							<NavLink to="/sponsors"><li>Sponsors</li></NavLink>
							<a href="https://members.uclaacm.com"><li className="button">Member Login</li></a>
						</ul>
					</div>
					<div className="nav-section right" id="mobile-nav">
						<label htmlFor="menu-toggle">
							<div className="hamburger-icon">
								<div className="bar" id="top-bar" />
								<div className="bar" id="middle-bar" />
								<div className="bar" id="bottom-bar" />
							</div>
						</label>
						<input type="checkbox" id="menu-toggle" />
						<div id="hamburger-menu">
							<ul className="nav-items">
								<NavLink to="/about"><li>About</li></NavLink>
								<div>
									<NavLink to="/committees"><li>Committees</li></NavLink>
									<MobileNavItem/>
								</div>
								{/* <NavLink to="/gm"><li>{gmData.date.quarter} gm</li></NavLink> */}
								<NavLink to="/events"><li>Events</li></NavLink>
								<NavLink to="/sponsors"><li>Sponsors</li></NavLink>
								<a href="https://members.uclaacm.com"><li className="button">Member Login</li></a>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
