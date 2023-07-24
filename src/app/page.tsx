"use client"
import NavBarLanding from '@/app/components/navbar/navBarLanding/navBarLanding'
import Header from '@/app/components/header/header'
import Feature from '@/app/components/features/features'
import Metrics from '@/app/components/metrics/metrics'
import CallToAction from '@/app/components/callToAction/callToAction'
import Footer from '@/app/components/footer/footer'
import { ThemeProvider } from '@emotion/react'
import theme from '@/utils/theme';

export default function Home() {

  return (
    <ThemeProvider theme={theme}>
        <NavBarLanding />
        <Header />
        <Feature />
        <Metrics />
        <CallToAction />
        <Footer />
    </ThemeProvider>
  )
}
