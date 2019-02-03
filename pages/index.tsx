import '../app';
import  React from 'react';
import Head from 'next/head';

import {Layout} from '../components/Layout/Layout';
import {IndexSection} from '../components/Sections/IndexSection';
import {AboutSection} from '../components/Sections/AboutSection';
import {TechnologySection} from '../components/Sections/TechnologySection';

/**
 * index page
 */
export default () => (
	<>
		<Head>
			<title>Jens-Uwe Loessl | jens-uwe-loessl.de</title>
		</Head>
		<Layout>
			<IndexSection/>
			<a id='about'/>
			<AboutSection/>
			<a id='technology'/>
			<TechnologySection/>
		</Layout>
	</>
)