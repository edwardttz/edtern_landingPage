'use strict';

import React from 'react';

export default class Section extends React.Component {
  render() {
	return (
	  <div>
	  {this.props.Content.map(infoSect => {
          return <div className="detailSection">
            		<img className="detailPic" id={infoSect.id} src={infoSect.img}/>
            		<p id={infoSect.idNo}>
                  <label> {infoSect.title} </label><br/>
                  {infoSect.details}
                </p>
          		</div>;
        })}
	  </div>
	);
  }
}