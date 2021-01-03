import React, { FC } from 'react'
import Head from 'next/head'

interface Props {
  title?: string
}

const MetaHead: FC<Props> = ({
  title = 'newa Blog',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, shrink-to-fit=no, user-scalable=0"
        />
      </Head>

      <Head>
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Head>
        <meta
          name="description"
          content="Technology, Music and Poems. | newa Blog | newa Inc."
        />
      </Head>
    </>
  )
}

export default MetaHead
