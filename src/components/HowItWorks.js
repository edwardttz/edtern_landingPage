'use strict';

import React from 'react';

export default class Section extends React.Component {
  render() {
	return (
    <section id="heading">
	  <div id="heading1">
    <label className="heading_font">How It Works</label>
    <p className="description">Finding a dream career can be daunting without the right opportunities and skills sets.
    <br/> Our dream is to help you find yours. </p>
    <table id="workProcess">
      <tr>
	     {this.props.WorkContent.map(infoDetails => {
          return <td className="information-cell">
                  <img className="workImg" id={infoDetails.id} src={infoDetails.img}/>
                  <label className="heading_font steps" id={infoDetails.id}>{infoDetails.title}</label>
                  <p className="content">{infoDetails.details}</p>
                </td>;
        })}
      </tr>
    </table>
	  </div>
    </section>
	);
  }
}