import Image from 'next/image';
import { Tilt_Neon, Varela_Round } from "next/font/google";
import styles from '@/styles/Home.module.css';
import backgroundImg from "/public/background.jpg";
import avatarImg from "/public/avatar.jpg";
// import blurryGradentImg from "/public/blurry-gradent.png";
import Script from 'next/script';

// import puppeteer from 'puppeteer';

const varelaRound = Varela_Round({
  weight: '400',
  subsets: ['latin'],
});

const tiltNeon = Tilt_Neon({
  weight: '400',
  subsets: [],
});

const divVariants = {
  hidden: {
    transition: {
      staggerChildren: .2, // delay between animating children
      staggerDirection: -1, // animating children in reverse order
    },
  },
  visible: {
    transition: {
      staggerChildren: .2,
      staggerDirection: 1, // animating children in normal order,
      type: "spring"
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .22, // duration of the animation
      ease: "easeOut", // easing function
    },
  }
};

const Home = () => {

  return (
    <>
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      <Image src={backgroundImg} priority alt='' style={{ height: "100vh", width: "100%", position: "absolute", top: 0, left: 0, zIndex: "-1" }} />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.backImageContainer}>
            <Image src={backgroundImg} loading='lazy' className={styles.image} alt='' style={{ height: "200px", width: "100%", position: "relative", zIndex: "-1" }} />
          </div>
          <div className={styles.childContainer}>
            <Image src={"https://i.ibb.co/fMvhMXs/blurry-gradient-haikei-1.png"} loading='lazy' alt='' width={100} height={100} style={{ height: "100% !important", width: "100% !important", position: "absolute", zIndex: -9}} />
            <div className={styles.avatarContainer}>
              <Image src={avatarImg} loading='lazy' alt='' style={{ height: 140, width: 140, borderRadius: "100%" }} />
            </div>
            <div className={styles.descriptionContainer}>
              <h2 className={varelaRound.className}>Adarsh Gupta</h2>
              <span className={tiltNeon.className}>Full Stack Developer</span>
            </div>
            <div className={styles.detailsContainer}>
              <div>
                <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_mucnxajz.json" background="transparent" speed="1" style={{ width: 50, height: 50 }} loop autoplay></lottie-player>
                <a target='_blank' href='https://www.makesurge.co'><span className={tiltNeon.className}>Makesurge</span></a>
              </div>
              <div>
                <lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_c2xguvtx.json" background="transparent" speed="1" style={{ width: 50, height: 50 }} loop autoplay></lottie-player>
                <a target='_blank' href='https://www.google.com/maps?q=Kolkata,+West+bengal,+India'><span className={tiltNeon.className}>Kolkata, West Bengal, India</span></a>
              </div>
            </div>
            <div className={styles.socialIconsContainer}>
              <a variants={childVariants} target='_blank' href='https://www.linkedin.com/in/apneduniya/' ><lottie-player src="https://assets3.lottiefiles.com/packages/lf20_ijoepf55.json" background="transparent" speed="1" style={{ width: 100, height: 100 }} loop autoplay></lottie-player></a>
              <a variants={childVariants} target='_blank' href='https://www.instagram.com/thatsmeadarsh/' ><lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_f5ytlpiy.json" background="transparent" speed="1" style={{ width: 100, height: 100 }} loop autoplay></lottie-player></a>
              <a variants={childVariants} target='_blank' href='https://twitter.com/thatsmeadarsh' ><lottie-player src="https://assets6.lottiefiles.com/packages/lf20_puu4hfmk.json" background="transparent" speed="1" style={{ width: 100, height: 100 }} loop autoplay></lottie-player></a>
            </div>
            {/* <a href="/api/download" download="profile.pdf"><lottie-player src="https://assets10.lottiefiles.com/temp/lf20_CALcmp.json" background="transparent" speed="1" style={{ margin: "20px 0", padding: 0, width: 200, height: 50, cursor: "pointer" }} loop autoplay></lottie-player></a> */}
          </div>
        </div>
      </main>
    </>
  )
}

export default Home;
