'use strict';

import React from 'react';

export default class Section extends React.Component {
  render() {
	return (
	  <section>
	  {this.props.Content.map(infoSect => {
          return <span className="detailSection">
            		<img id={infoSect.id}/>
            		<p>{infoSect.details}</p>
          		</span>;
        })}
	  </section>
	);
  }
}