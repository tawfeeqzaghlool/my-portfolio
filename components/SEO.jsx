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
			<link rel="icon" href="/favicon.ico" />
			<link rel="apple-touch-icon" sizes="180x180" href="/favicon-64.png" />
		</Head>
	);
}

export default SEO;
