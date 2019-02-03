import * as React from 'react';
import {Sidebar} from './Sidebar';

/**
 * @class Layout
 * basic layout of the site
 */
export class Layout extends React.Component{
	render(){
		return(
			<>
				<Sidebar/>
				<main>{this.props.children}</main>
			</>
		)
	}
}