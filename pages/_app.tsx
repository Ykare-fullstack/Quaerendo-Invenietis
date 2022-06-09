import '../styles/globals.css'
import '../styles/variables.css'
import '../styles/transition.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import type { AppProps } from 'next/app'
import {PieceStatusProvider} from '../context'

function MyApp({ Component, pageProps }: AppProps) {
  return (<PieceStatusProvider>
            <Component {...pageProps} />
          </PieceStatusProvider>)
}

export default MyApp
