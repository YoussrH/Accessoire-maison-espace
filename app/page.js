"use client"
import { useCallback } from 'react';
import Image from "next/image";
import styles from '../Styles/index.module.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';


const Home= () => {
 
  	return (
    		<div className={styles.homePage}>
          
          {/*footer start here ------*/}
      			<Footer/>
          {/*footer ends here ------*/}
         
       

          {/*stylich coll start here */}
      			<div className={styles.stylishCollectionFoFurnitur}>
        				<div className={styles.ellipseParent1}>
          					<div className={styles.groupChild3} />
          					<div className={styles.layer1Parent}>
            						<Image className={styles.layer1Icon} width={139} height={92} alt="" src="/Layer_1.svg" />
             						<div className={styles.frameParent9}>
              							<div className={styles.stylishCollectionOfFurniturParent}>
                								<b className={styles.subheading}>Stylish Collection of Furniture</b>
                								<div className={styles.stayUpdatedWith1}>Stay updated with our information and engaging blog posts about modern Furniture and Fashion on the industry</div>
              							</div>
              							<div className={styles.frameParent10}>
                								<div className={styles.frameParent11}>
                  									<div className={styles.allFurnitureWrapper}>
                    										<div className={styles.quality}>All Furniture</div>
                  									</div>
                  									<div className={styles.bedroomWrapper}>
                    										<div className={styles.quality}>Bedroom</div>
                  									</div>
                  									<div className={styles.bedroomWrapper}>
                    										<div className={styles.quality}>Living Room</div>
                  									</div>
                  									<div className={styles.bedroomWrapper}>
                    										<div className={styles.quality}>Home Office</div>
                  									</div>
                  									<div className={styles.bedroomWrapper}>
                    										<div className={styles.quality}>Dining Table</div>
                  									</div>
                  									<div className={styles.frameChild2} />
                  									<div className={styles.bedroomWrapper}>
                    										<div className={styles.quality}>More</div>
                  									</div>
                								</div>
                								<div className={styles.frameParent12}>
                  									<div className={styles.frameDiv}>
                    										<div className={styles.textParent}>
                       											<Image className={styles.instanceInner} width={276} height={176} alt="" src="/Rectangle 18.png" />
                      											<div className={styles.textParent}>
                        												<div className={styles.stylishSoftChairParent}>
                          													<b className={styles.subheading}>Stylish Soft Chair</b>
                          													<div className={styles.ellipseParent2}>
                            														<div className={styles.frameChild3} />
                            														<div className={styles.frameChild4} />
                            														<div className={styles.frameChild5} />
                            														<div className={styles.frameChild6} />
                          													</div>
                        												</div>
                        												<div className={styles.parent}>
                          													<b className={styles.subheading}>$20.00</b>
                          													<div className={styles.addToWrapper}>
                            														<b className={styles.subheading}>Add to</b>
                          													</div>
                        												</div>
                      											</div>
                    										</div>
                    										<div className={styles.textParent}>
                      											<Image className={styles.instanceInner} width={276} height={176} alt="" src="/Rectangle 11.png" />
                    											<div className={styles.textParent}>
                        												<div className={styles.stylishSoftChairParent}>
                          													<b className={styles.subheading}>Modern Soft Chair</b>
                          													<div className={styles.ellipseParent2}>
                            														<div className={styles.frameChild3} />
                            														<div className={styles.frameChild4} />
                            														<div className={styles.frameChild5} />
                            														<div className={styles.frameChild6} />
                          													</div>
                        												</div>
                        												<div className={styles.parent}>
                          													<b className={styles.subheading}>$40.00</b>
                          													<div className={styles.addToWrapper}>
                            														<b className={styles.subheading}>Add to</b>
                          													</div>
                        												</div>
                      											</div>
                    										</div>
                    										<div className={styles.textParent}>
                      											<Image className={styles.instanceInner} width={276} height={176} alt="" src="/Rectangle 12.png" />
                       											<div className={styles.textParent}>
                        												<div className={styles.stylishSoftChairParent}>
                          													<b className={styles.subheading}>Comfortable Soft Chair</b>
                          													<div className={styles.ellipseParent2}>
                            														<div className={styles.frameChild3} />
                            														<div className={styles.frameChild4} />
                            														<div className={styles.frameChild5} />
                            														<div className={styles.frameChild6} />
                          													</div>
                        												</div>
                        												<div className={styles.parent}>
                          													<b className={styles.subheading}>$40.00</b>
                          													<div className={styles.addToWrapper}>
                            														<b className={styles.subheading}>Add to</b>
                          													</div>
                        												</div>
                      											</div>
                    										</div>
                    										<div className={styles.textParent}>
                       											<Image className={styles.instanceInner} width={276} height={176} alt="" src="/Rectangle 13.png" />
                       											<div className={styles.textParent}>
                        												<div className={styles.stylishSoftChairParent}>
                          													<b className={styles.subheading}>New Soft Chair</b>
                          													<div className={styles.ellipseParent2}>
                            														<div className={styles.frameChild15} />
                            														<div className={styles.frameChild4} />
                            														<div className={styles.frameChild5} />
                            														<div className={styles.frameChild18} />
                          													</div>
                        												</div>
                        												<div className={styles.parent}>
                          													<b className={styles.subheading}>$20.00</b>
                          													<div className={styles.addToWrapper}>
                            														<b className={styles.subheading}>Add to</b>
                          													</div>
                        												</div>
                      											</div>
                    										</div>
                  									</div>



                                    
                  									<div className={styles.instanceGroup}>
                    										<div className={styles.rectangleParent5}>
                       											<Image className={styles.instanceInner} width={276} height={176} alt="" src="/Rectangle 14.png" />
                       											<div className={styles.textParent}>
                        												<div className={styles.stylishSoftChairParent}>
                          													<b className={styles.subheading}>New Light Soft Chair</b>
                          													<div className={styles.ellipseParent2}>
                            														<div className={styles.frameChild3} />
                            														<div className={styles.frameChild4} />
                            														<div className={styles.frameChild5} />
                            														<div className={styles.frameChild6} />
                          													</div>
                        												</div>
                        												<div className={styles.parent}>
                          													<b className={styles.subheading}>$80.00</b>
                          													<div className={styles.addToWrapper}>
                            														<b className={styles.subheading}>Add to</b>
                          													</div>
                        												</div>
                      											</div>
                    										</div>
                    										<div className={styles.rectangleParent6}>
                      											<Image className={styles.instanceInner} width={276} height={176} alt="" src="/Rectangle 15.png" />
                      											<div className={styles.textParent}>
                        												<div className={styles.stylishSoftChairParent}>
                          													<b className={styles.subheading}>Modern Soft Chair</b>
                          													<div className={styles.ellipseParent2}>
                            														<div className={styles.frameChild3} />
                            														<div className={styles.frameChild4} />
                            														<div className={styles.frameChild5} />
                            														<div className={styles.frameChild6} />
                          													</div>
                        												</div>
                        												<div className={styles.parent}>
                          													<b className={styles.subheading}>$32.00</b>
                          													<div className={styles.addToWrapper}>
                            														<b className={styles.subheading}>Add to</b>
                          													</div>
                        												</div>
                      											</div>
                    										</div>
                    										<div className={styles.rectangleParent7}>
                       											<Image className={styles.instanceInner} width={276} height={176} alt="" src="/Rectangle 16.png" />
                       											<div className={styles.textParent}>
                        												<div className={styles.stylishSoftChairParent}>
                          													<b className={styles.subheading}>OLd Modern Soft Chair</b>
                          													<div className={styles.ellipseParent2}>
                            														<div className={styles.frameChild27} />
                            														<div className={styles.frameChild4} />
                            														<div className={styles.frameChild5} />
                            														<div className={styles.frameChild30} />
                          													</div>
                        												</div>
                        												<div className={styles.parent}>
                          													<b className={styles.subheading}>$70.00</b>
                          													<div className={styles.addToWrapper}>
                            														<b className={styles.subheading}>Add to</b>
                          													</div>
                        												</div>
                      											</div>
                    										</div>
                    										<div className={styles.rectangleParent8}>
                       											<Image className={styles.instanceInner} width={276} height={176} alt="" src="/Rectangle 17.png" />
                       											<div className={styles.textParent}>
                        												<div className={styles.stylishSoftChairParent}>
                          													<b className={styles.subheading}>Stylish Soft Chair</b>
                          													<div className={styles.ellipseParent2}>
                            														<div className={styles.frameChild3} />
                            														<div className={styles.frameChild4} />
                            														<div className={styles.frameChild5} />
                            														<div className={styles.frameChild6} />
                          													</div>
                        												</div>
                        												<div className={styles.parent}>
                          													<b className={styles.subheading}>$20.00</b>
                          													<div className={styles.addToWrapper}>
                            														<b className={styles.subheading}>Add to</b>
                          													</div>
                        												</div>
                      											</div>
                    										</div>
                  									</div>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
          {/*stylich coll ends here */}

      		<Hero/>

    		</div>
        );
};

export default Home;
