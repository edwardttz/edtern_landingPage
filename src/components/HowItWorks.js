'use strict';

import React from 'react';

export default class Section extends React.Component {
  render() {
	return (
    <section id="heading">
    <label className="heading_font">How It Works</label>
    <p className="description">Finding a dream career can be daunting without the right opportunities and skills sets.
    <br/> Our dream is to help you find yours. </p>
    <div id="workProcess">
	     {this.props.WorkContent.map(infoDetails => {
          return <div className="information-cell">
                  <img className="workImg" id={infoDetails.id} src={infoDetails.img}/>
                  <label className="heading_font steps" id={infoDetails.id}>{infoDetails.title}</label>
                  <p className="content">{infoDetails.details}</p>
                </div>;
        })}
    </div>
    </section>
	);
  }
}