import type { NextPage } from 'next'
import Link from 'next/Link';
import Head from 'next/head'

import { ChuckNorrisJoke } from '@/components/chuck-norris-content'
import { wrapperInitializer } from '@/store'

interface Props {
  title: string
}

const styles = {
  fontSize: '30px',
  display: 'flex',
  height: '110vh',
  alignItems: 'center',
  justifyContent: 'center',
}

const ChuckNorrisPage: NextPage<Props> = ({ title }) => {
  return (
    <div>
      <Head>
        <title>{title}123</title>
      </Head>
      <h1>{title}12321</h1>
      <Link href="/aviasales/gip">Home</Link>
      <div style={{ ...styles, background: 'red' }}>Scroll ...</div>
      <ChuckNorrisJoke />
      <div style={{ ...styles, background: 'green' }}>Scroll ...</div>
      <ChuckNorrisJoke />
      <div style={{ ...styles, background: 'blue' }}>Scroll ...</div>
      <ChuckNorrisJoke />
      <div style={styles}>Finish!</div>
    </div>
  )
}

const wrapper = wrapperInitializer.getPageWrapper()

ChuckNorrisPage.getInitialProps = wrapper.wrapGetInitialProps({
  title: 'Chuck Norris page (with Get Initial Props)',
})

export default wrapper.wrapPage(ChuckNorrisPage)
