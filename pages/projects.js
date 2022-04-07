import * as React from 'react';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import MyDrawer from '../componants/MyDrawer';
 
export default function projects() {
  return (
    <div className={styles.projectsContainer}>
      <Head>
        <title>My projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <main className={styles.projects}> 
         projects
      </main> 
    </div>
  )
}
