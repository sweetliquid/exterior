import Head from 'next/head'
import React from 'react'
import { BlitzLayout } from '@blitzjs/next'
import Header from '../components/Header'

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || 'exterior'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {children}
    </>
  )
}

export default Layout
