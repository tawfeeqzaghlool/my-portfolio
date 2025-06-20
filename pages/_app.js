// DEBUG: Green outline for all elements is active to help visualize layout leaks
import '../styles/main.css';
import '@fontsource/nunito-sans/400.css';
import '@fontsource/nunito-sans/600.css';
import '@fontsource/nunito-sans/700.css';

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
