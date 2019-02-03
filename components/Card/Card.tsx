import * as React from 'react';

/**
 * @class Card
 * component for rendering content in a card
 */
export class Card extends React.PureComponent{
	render(){
		return(
			<div className='card'>
				{this.props.children}
			</div>
		)
	}
}