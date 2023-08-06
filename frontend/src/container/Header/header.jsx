import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './header.scss';

const scaleVariants = {
  whileInView:{
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const header = () => {
  return (
    <div id="home" className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0],  opacity: [0, 1] }} 
        transition={{ duration: 0.5 }} 
        className='app__header-info'
      >
        <div className="app__header-badge">
          <div className="bade-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>
                Hello, I am
                <h1>Tareq El-Sayyed</h1>
              </p>
              
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Software Engineer</p>
            <p className='p-text'>Open for job positions</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5, staggerChildren: 0.5 }}
        className='app__header-img'
      >
      <img src={images.profile} style={{ borderRadius: '12px' }} alt='header' />

          <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='overlay_circle'
          src={images.circle}
          alt='profile_circle'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.express, images.react, images.mongoDB].map((circle, index) => (  
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
        
      </motion.div>

    
    </div>
  )
}

export default header