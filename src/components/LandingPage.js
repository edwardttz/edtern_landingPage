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
			</div>
		</header>
		<HowItWorks WorkContent={WorkContent}/>
		<Section Content={Content}/>
		<footer>
			<img id="banner" src="/img/banner.png"/>
			<p>
				We are still in the developmental stages and if you are a student looking for career opportunities or an employer looking to hire the
				<br/>best talents, leave us your email contact and we will update you on our progress and the upcoming opportunities available.
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