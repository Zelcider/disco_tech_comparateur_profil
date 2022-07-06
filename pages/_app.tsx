import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FlamingoThemeProvider, theme } from "@epsor/flamingo";

const MyApp = ({ Component, pageProps }: AppProps) => <FlamingoThemeProvider theme={theme}><Component {...pageProps} /></FlamingoThemeProvider>

export default MyApp
