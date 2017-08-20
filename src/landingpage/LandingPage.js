'use strict';

import React from 'react';
import Section from './Section';
import HowItWorks from './HowItWorks';
import Content from '../data/mainContent';
import WorkContent from '../data/workContent';

export default class LandingPage extends React.Component {
  render() {
	return (
	  <div className="landingPage">
		<header>
			<div className="headerClass">
				<img id="logo" src="/img/banner.png"/>
				<a href="https://goo.gl/forms/jMGpuJp6Z1DyU54v2">
					<button id="buttonLink" className="btn btn-danger"> Sign Up! </button>
				</a>
			</div>
		</header>
		<HowItWorks WorkContent={WorkContent}/>
		<Section Content={Content}/>
		<footer>
			<img id="banner" src="/img/banner.png"/>
			<p>
				Our platform is still in development stages, but we already have projects that are waiting for students like you to explore and learn!
				<br/> Sign up via the link above and we will contact you soon enough for a one-to-one consultation to help you find a project that you’ll love.
			</p>
			<label>
				Be in Touch
			</label>
			<p id="contact">
				Email: edternsg@gmail.com / Contact No: +65 97303750
			</p>
			<img src="/img/fb_logo.png"/> &nbsp;&nbsp;&nbsp;
			<img src="/img/insta_logo.png"/>
		</footer>
	  </div>
	);
  }
}