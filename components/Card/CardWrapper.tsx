import * as React from 'react';

/**
 * @class CardWrapper
 * wrapper around cards, so that wrap when the need to
 */
export class CardWrapper extends React.PureComponent{
	render() {
		return (
			<div className='card-wrapper'>
				{this.props.children}
			</div>
		)
	}
}