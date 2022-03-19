import createEmotionCache from '@/utils/createEmotionCache'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import PropTypes from 'prop-types'
import EmptyLayout from '../components/layout/empty'
import '../styles/globals.css'
import { theme } from '../utils/theme'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clientSideEmotionCache = createEmotionCache()


function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ?? EmptyLayout
  return <CacheProvider value={clientSideEmotionCache}>
    <ThemeProvider theme={theme}>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </CacheProvider>
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};