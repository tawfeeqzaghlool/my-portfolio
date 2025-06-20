// DEBUG: Green outline for all elements is active to help visualize layout leaks
import '../styles/main.css';

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
