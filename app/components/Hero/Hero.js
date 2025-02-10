import React from 'react'
import styles from '../../../Styles/index.module.css';
import Image from "next/image";
import Nav from '../Navbar/Nav';
import { color } from 'framer-motion';
export default function Hero() {
  return (
    <div className={styles.heroSectionMeno}>
    {/*Navbar start here */}
      <Nav/>
      {/*Navbar section ends here */}
      <div className={styles.heroSection}>
          <div className={styles.frameParent22}>
              <div className={styles.frameParent23}>
                  <div className={styles.discoverTheLatestParent}>
                      <b className={styles.subheading} style={{color:'#C04500'}}>Découvrez les Dernières
                      </b>
                      <b className={styles.subheading} >Accessoires de cuisine</b>
                  </div>
                   <Image className={styles.brushIcon} width={180} height={29} alt="" src="/brush.png" />
                  <div className={styles.shopTheLatest}>Achetez les derniers articles de mode et restez à la pointe du style</div>
              </div>
              <div className={styles.button8} >
                  <div className={styles.facebook}>Découvrir plus</div>
                 <Image className={styles.iconFacebook} width={24} height={24} alt="" src="/arrow-forward-outline.svg" />
              </div>
          </div>
          <div className={styles.frameParent24}>
              <div className={styles.rectangleParent9}>
                  <Image className={styles.frameChild35} width={272} height={261} alt="" src="/planche-tournante1.jpg" />
                 <div className={styles.newWrapper}>
                      <div className={styles.facebook}>New</div>
                  </div>
              </div>
              <div className={styles.rectangleParent10} >
                  <Image className={styles.frameChild36} width={276} height={261} alt="" src="/planche-tournante2.jpg" />
              <div className={styles.newContainer}>
                      <div className={styles.facebook}>New</div>
                  </div>
              </div>
              <div className={styles.rectangleParent10} >
                  <Image className={styles.frameChild37} width={580} height={261} alt="" src="/pullDown.jpg" />
                  <div className={styles.newFrame}>
                      <div className={styles.facebook}>New</div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  )
}
