import { useEffect } from 'react'
import { useRouter } from 'next/router'

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(process.env.NEXT_PUBLIC_FBpixel) // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])

  

  return <Component {...pageProps} />
}

export default App
