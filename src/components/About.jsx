import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (

    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("rigth", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px]'
        
      >

        <div
          options={
            {
              max: 45,
              scale: 1,
              speed: 450
            }}
          className='bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex jusify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='textBlack text-[20px] font-bold text-center'>{title }</h3>

        </div>
        
      </motion.div>

    </Tilt>
   
  )
}


const About = () => {
  return (
    
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
        
      </motion.div>
      
      <motion.p
        className='textBlack mt-4 text-[17px] max-w-3xl leading-[30px]'
      variants={fadeIn("", "", 0.1, 1)}
      >
        I am a multimedia engineer with experience encompassing a diverse set of skills, ranging from graphic design to web development. Proficient in Python and Javascript, I have worked with frameworks such as Django, React, Node.js, and Three.js.

        I leverage my web development expertise alongside my graphic design proficiency to craft visually appealing applications that resonate with users. I am skilled in the Adobe suite, particularly Illustrator and After Effects. Additionally, I possess 3D modeling experience using MAYA and Blender.

        My passion for consuming multimedia content fuels my commitment to creating engaging content that captivates audiences. I am eager to undertake any necessary tasks to ensure the delivery of multimedia experiences that people will truly enjoy.


      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 textBlack'>
        {services.map((service, index) => (
        <ServiceCard key={service.title} index={index}{...service}/>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper (About, "about")