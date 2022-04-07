import * as React from 'react';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'; 
 
export default function posts() {
  return (
    <div className={styles.postsContainer}>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <main className={styles.projects}> 
         posts
      </main> 
    </div>
  )
}
