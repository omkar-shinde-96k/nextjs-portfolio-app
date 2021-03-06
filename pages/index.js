import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss';
import About from '../componants/About';
import Script from 'next/script'

export default function Home() {
  return (
    <div className={styles.HomeContainer}>
      <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></Script>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
      <Script src="../externaljs/externaljs.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></Script>

      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content='Portfolio of omkar shinde' />
        <meta name='keywords' content='omkar shinde , omkar , omkar shinde portfolio , omkar portfolio , omkarshinde , omkarshinde.com' /> 
        <title>Omkar Shinde Portfolio</title>  
        <link rel="manifest" href="/manifest.json" />
        <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
        <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />


        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      </Head>
      <main className={styles.HomeMain} itemScope itemType="https://omkarshinde.vercel.app/">

        <h1 itemProp="omkar shinde"  >Hello,</h1>
        <h2 itemProp="name">I&apos;m Omkar Shinde</h2>
        <h1 itemProp="omkar shinde" className="typewrite" data-period="2000" data-type='["Web Devloper", "React Developer","Web Designer"]'>
          <span className="wrap"></span>
        </h1>
        <p itemProp="description">
          I am passionate about building excellent Website that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?
        </p>
        <br />
        <div style={{ display: "flex" }}>
          <a href="https://www.linkedin.com/in/omkar-shinde-992b9120b/" target="_blank" rel="noreferrer" itemProp="Download Resume" itemType="https://omkarshinde.com/" className="mybtn text-center"> Hire Me</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a itemProp="telephone" href="https://drive.google.com/file/d/1ibG6vJ19vLw_W84av2xUc-xXD2EcD3Yi/view" className="mybtn text-center"> Download Resume</a>
        </div>
        <br />
        <div className={styles.SocialIcons}>
          <a href="https://github.com/omkar-shinde-96k" itemProp="Github" itemType="https://github.com/omkar-shinde-96k" className="fa fa-github"></a>

          <a style={{ color: "green" }} itemProp="whatsapp" href="https://wa.me/919309120138" className="fa fa-whatsapp"></a>

          <a style={{ color: "rgb(234,66,52)" }} itemProp="email" href="mailto:oshinde796@gmail.com" className="fa fa-envelope"></a>

          <a style={{ color: "#3366ff" }} itemProp="linkedin" href="https://www.linkedin.com/in/omkar-shinde-992b9120b/" className="fa fa-linkedin"></a>

          <a style={{ color: "#bc2a8d" }} itemProp="instagram" href="https://www.instagram.com/learn_web_development/" className="fa fa-instagram"></a>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a href="#about" className=" fa fa-chevron-circle-down" style={{ color: "white", fontSize: "50px", textDecoration: "none", textAlign: "center" }}></a>
        </div>
      </main>
      <About />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}


