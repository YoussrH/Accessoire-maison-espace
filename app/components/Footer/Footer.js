import React from 'react'
import styles from '../../../Styles/index.module.css';
import Image from "next/image";
export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
    <div className={styles.footer}>
          <div className={styles.frameParent}>
                <div className={styles.logoParent}>
                      <div className={styles.logo}>
{/*                  								<Image className={styles.logoChild} width={33} height={34} alt="" src="/elevateur.png" />
*/}              							</div>
                      <div className={styles.textParent}>
                            <div className={styles.text}>Join our newsletter to stay up to date on features and releases.</div>
                            <div className={styles.frameGroup}>
                                  <div className={styles.textInputParent}>
                                        <div className={styles.textInput}>
                                              <div className={styles.placeholder}>Enter your email</div>
                                        </div>
                                        <div className={styles.button}>
                                              <div className={styles.facebook}>Subscribe</div>
                                        </div>
                                  </div>
                                  <div className={styles.textWrapper}>
                                        <div className={styles.text1}>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</div>
                                  </div>
                            </div>
                      </div>
                </div>
                <div className={styles.headingParent}>
                      <b className={styles.heading}>About Us</b>
                      <div className={styles.linkParent}>
                            <div className={styles.heading}>FAQ</div>
                            <div className={styles.heading}>Contact</div>
                            <div className={styles.heading}>Returns</div>
                            <div className={styles.heading}>Blog</div>
                            <div className={styles.heading}>Shipping</div>
                      </div>
                </div>
                <div className={styles.headingParent}>
                      <b className={styles.heading}>Customer Support</b>
                      <div className={styles.linkParent}>
                            <div className={styles.heading}>Affiliates</div>
                            <div className={styles.heading}>Apple Pay Payments</div>
                            <div className={styles.heading}>Returns</div>
                            <div className={styles.heading}>Returns Policy</div>
                            <div className={styles.heading}>Returns</div>
                      </div>
                </div>
                <div className={styles.headingContainer}>
                      <div className={styles.heading2}>Follow Us</div>
                      <div className={styles.linkContainer}>
                            <div className={styles.link10}>
                                  <Image className={styles.iconFacebook} width={24} height={24} alt="" src="/Facebook.svg" />
                                   <div className={styles.facebook}>Facebook</div>
                            </div>
                            <div className={styles.link10}>
                                 <Image className={styles.iconFacebook} width={24} height={24} alt="" src="/Instagram.svg" />
                                <div className={styles.facebook}>Instagram</div>
                            </div>
                            <div className={styles.link10}>
                                 <Image className={styles.iconFacebook} width={24} height={24} alt="" src="/Twitter.svg" />
                                  <div className={styles.facebook}>Twitter</div>
                            </div>
                            <div className={styles.link10}>
                                <Image className={styles.iconFacebook} width={24} height={24} alt="" src="/LinkedIn.svg" />
                                 <div className={styles.facebook}>LinkedIn</div>
                            </div>
                      </div>
                </div>
          </div>
          <div className={styles.textGroup}>
                <div className={styles.subheading}>© 2023 GFirnuture. All rights reserved.</div>
                <div className={styles.frameDiv}>
                      <div className={styles.subheading}>Privacy Policy</div>
                      <div className={styles.subheading}>Terms of Service</div>
                      <div className={styles.subheading}>Cookies Settings</div>
                </div>
          </div>
    </div>
</div>
  )
}
