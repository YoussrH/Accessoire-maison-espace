import React from 'react'
import styles from "./Hero.module.css";
import { GiThornedArrow } from "react-icons/gi";
import Image from "next/image";
import Nav from '../Navbar/Nav';
export default function Hero() {
  return (
    <><Nav />
    <div className={styles.heroSectionMeno}>
          {/*Navbar start here */}
          {/*Navbar section ends here */}
          <div className={styles.hero}>
              <div className={styles.title}>
                  <b className={styles.perfectHarmonyComfort}>{`Découvrez les Nouveaux  `}<b style={{color:'#C04500'}}>Accessoires</b></b>
                  <div className={styles.exploreFurnitureThat}>Achetez les derniers articles de mode et restez à la pointe du style</div>
                  <div className={styles.buttonParent}>
                      <div className={styles.button}>

                          <div className={styles.exploreOurOffers}>Découvrez nos offres                         
                          </div>

                      </div>
                    
                  </div>
              </div>
              <div className={styles.ornament}>
                  <Image className={styles.ornamentChild} width={628} height={415} alt="" src="/planche-tournante1.jpg" />
                  <div className={styles.ornamentItem} />
              </div>
              <div className={styles.searchBar}>
                  <div className={styles.from}>
                      <div className={styles.confort}>Confort</div>
                      <div className={styles.form}>
                          <div className={styles.content}>
                              <div className={styles.destination}>
                                  <Image className={styles.locationIcon} width={21} height={21} alt="" src="/conf.svg" />
                                  <div className={styles.cozySeating}>Accès facile </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className={styles.from}>
                      <div className={styles.confort}>Assurance Qualité</div>
                      <div className={styles.form1}>
                          <div className={styles.content}>
                              <div className={styles.destination}>
                                  <Image className={styles.locationIcon} width={21} height={21} style={{top:'-9px'}} alt="" src="/Like.svg" />
                                  <div className={styles.cozySeating}>Haute qualité signée StarX</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className={styles.from}>
                      <div className={styles.confort}>Livraison gratuite</div>
                      <div className={styles.form2}>
                          <div className={styles.content2}>
                              <div className={styles.destination2}>
                                  <div className={styles.noCostDelivery}>Livraison sans frais</div>
                                  <Image className={styles.locationIcon2} width={19} height={19} alt="" src="/Location.svg" />
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.from}>
                      <div className={styles.exploreOurOffers}>Paiement sécurisé</div>
                      <div className={styles.form2}>
                          <div className={styles.content2}>
                              <div className={styles.destination2}>
                                  <div className={styles.noCostDelivery}>Paiements garantis</div>
                                  <Image className={styles.locationIcon2} width={19} height={19} alt="" src="/Secure.svg" />
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className={styles.button1}>
                      <div className={styles.exploreOurOffers}>Voir plus</div>
                  </div>
              </div>
              <div className={styles.brand}>
                  <b className={styles.lowes}>StarX</b>
                  <div className={styles.dewalt}>BLOOM</div>
                  <div className={styles.homeDepot}>Home Depot</div>
                  <b className={styles.ikea}>IKEA</b>
                  <b className={styles.makita}>Makita</b>
                  <b className={styles.exploreOurOffers}>3M</b>
              </div>
          </div>
      </div></>
  )
}
