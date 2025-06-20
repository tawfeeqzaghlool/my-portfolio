import React from 'react';
import Head from 'next/head';
import { seoData } from '../portfolio';

function SEO() {
	return (
		<Head>
			<title>{seoData.title}</title>
			<meta name="title" content={seoData.title} />
			<meta name="author" content={seoData.author} />
			<meta name="description" content={seoData.description} />
			<meta name="keywords" content={seoData.keywords.join(', ')} />
			<link rel="canonical" href={seoData.url} />
			{/* Favicon */}
			<link rel="apple-touch-icon" sizes="120x120" href="./favicon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="./favicon.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="./favicon.png" />
		</Head>
	);
}

export default SEO;
