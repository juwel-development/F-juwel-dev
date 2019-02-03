import * as React from 'react';
import Link from 'next/link';

/**
 * @class Sidebar
 * navigation menu for the website
 */
export class Sidebar extends React.PureComponent{
	render() {
		return(
			<aside className={'sidebar'}>
				<ul>
					<li className={'brand'}>
						<Link href={'/'}>
						<a>
							<h1>Jens-Uwe Loessl</h1>
							<p>Full Stack Developer</p>
						</a>
						</Link>
					</li>
					<li>
						<Link href={'/#about'}>
							<a className={'about'}>
								About
							</a>
						</Link>
					</li>
					<li>
						<Link href={'/#technology'}>
							<a className={'technology'}>
								Technology
							</a>
						</Link>
					</li>
					<li>
						<Link href={'/impressum'}>
							<a>Impressum</a></Link> &#183; <Link href={'/datenschutz'}>
							<a>Datenschutz</a>
						</Link>
					</li>
				</ul>
			</aside>
	)
	}
}