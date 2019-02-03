import * as React from 'react';

/**
 * @class AboutSection
 * about section of the web page
 */
export class AboutSection extends React.PureComponent{
	render() {
		return (
			<section className={'about-section'}>
				<h1>About Me</h1>
				<div className='row'>
					<div className='left-column'>
						<img src='/static/jens-uwe-loessl.jpg'/>
					</div>
					<div className='right-column'>
						<p>Hi!</p>
						<p>I am a full stack web developer and subproject manager located in Germany. My main focus it to
							develop flexible web applications planned for a large amount of users.</p>
						<p>In my three years of experience I learned to keep a large code base maintainable, by:</p>
						<ul>
							<li>splitting it into modules that are manageable for people</li>
							<li>writing unit and integration tests</li>
							<li>documenting the classes and functions for other developers</li>
						</ul>
						<p>The reason I became a developer is because I love to constantly learning and experiencing new things.
							That's why I prefer working with a team of developers from different coding background.</p>
					</div>
				</div>
			</section>
		)
	}
}