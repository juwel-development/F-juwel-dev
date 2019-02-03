import * as React from 'react';

/**
 * @class IndexSection
 * this is the default section that every user sees on the first rendering
 */
export class IndexSection extends React.PureComponent{
	render() {
		return (
			<section className={'index-section full-height'}>
				<div className="container">
					<h1>I love to create large scaling apps.</h1>
				</div>
			</section>
		)
	}
}