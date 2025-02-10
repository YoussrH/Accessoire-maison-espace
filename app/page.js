"use client"
import styles from '../Styles/index.module.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Product from './components/Product/Product';
import Image from "next/image";


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
							<Image className={styles.layer1Icon} width={139} height={92} alt="" src="/Layer_2.png" />
							<div className={styles.frameParent9}>
								<div className={styles.stylishCollectionOfFurniturParent}>
										<b className={styles.subheading}>Collection Elégante D'Accessoires</b>
										<div className={styles.stayUpdatedWith1}>Restez à jour avec nos informations et nos articles de blog engageants sur les accessoires de maison et la mode modernes dans l'industrie</div>
								</div>
								<Product/>
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
