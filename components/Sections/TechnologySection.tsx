import * as React from 'react';
import {CardWrapper} from '../Card/CardWrapper';
import {Card} from '../Card/Card';

/**
 * @class TechnologySection
 * a section that describes the technology I like to work with
 */
export class TechnologySection extends React.PureComponent{
	render(){
		return(
			<section className='technology-section'>
				<h1>Technology and languages</h1>
				<p>I prefer working with typifying programming languages. In my opinion that results in quicker
					understanding a large code base and less bugs. I have experience to introducing TypeScript into a
					not typified code base.</p>
				<h2>Frontend</h2>
				<CardWrapper>
					<Card>
						<img src='/static/technology/TypeScript.png'/>
						TypeScript
					</Card>
					<Card>
						<img src='/static/technology/React.png'/>
						React
					</Card>
					<Card>
						<img src='/static/technology/Vue.png'/>
						Vue
					</Card>
					<Card>
						<img src='/static/technology/Webpack.png'/>
						Webpack
					</Card>
					<Card>
						<img src='/static/technology/Sass.png'/>
						Sass
					</Card>
					<Card>
						<img src='/static/technology/Jest.jpg'/>
						Jest
					</Card>
				</CardWrapper>
				<h2>Backend</h2>
				<CardWrapper>
					<Card>
						<img src='/static/technology/Php.jpeg'/>
						php
					</Card>
					<Card>
						<img src='/static/technology/Java.png'/>
						Java
					</Card>
					<Card>
						<img src='/static/technology/Python.png'/>
						Python
					</Card>
					<Card>
						<img src='/static/technology/MySQL.png'/>
						MySql
					</Card>
					<Card>
						<img src='/static/technology/Laravel.jpg'/>
						Laravel
					</Card>
					<Card>
						<img src='/static/technology/nodejs.png'/>
						nodejs
					</Card>
				</CardWrapper>
				<h2>Tools</h2>
				<CardWrapper>
					<Card>
						<img src='/static/technology/Idea.png'/>
						Intellij Idea
					</Card>
					<Card>
						<img src='/static/technology/Docker.png'/>
						Docker
					</Card>
					<Card>
						<img src='/static/technology/Jenkins.png'/>
						Jenkins
					</Card>
					<Card>
						<img src='/static/technology/Jira.png'/>
						Jira
					</Card>
					<Card>
						<img src='/static/technology/ant.png'/>
						Apache Ant
					</Card>
					<Card>
						<img src='/static/technology/Gitlab.png'/>
						Gitlab
					</Card>
				</CardWrapper>
			</section>
		)
	}
}