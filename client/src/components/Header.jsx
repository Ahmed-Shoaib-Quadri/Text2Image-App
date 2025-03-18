import React,{useContext} from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { delay, motion } from "framer-motion";
import { AppContext } from '../context/AppContext';
const Header = () => {
  const { user,setShowLogin } = useContext(AppContext);

  const navigate = useNavigate();
  const onClickHandler=()=>{
    if(user){
      navigate('/Login')
    }else{
      setShowLogin(true)
    }
  }
  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20'
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    >

      <motion.div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'
      initial={{opacity:0, y:-20}}
      animate={{opacity:1,y:0}}
      transition={{delay:0.2,duration:0.8}}
      >
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>

      <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] 
      mx-auto mt-10 text-center'>Turn text to <span className='text-blue-600'
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:0.4,duration:2}}
      >image</span>, in seconds.</motion.h1>

      <motion.p className='text-center max-w-xl 
      mx-auto mt-5'
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:0.6,duration:2}}
      >Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen</motion.p>

<motion.div className="mt-10"> 
  <motion.button
    onClick={onClickHandler}
    className="relative sm:text-lg text-white px-8 py-3 rounded-full font-semibold 
               bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg 
               hover:brightness-110 hover:scale-105 transition-all duration-300 
               active:scale-95 flex items-center gap-3"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
  >
    <span className="drop-shadow-lg">Generate Images</span>
    <img className="h-6 animate-bounce" src={assets.star_group} alt="Star Group" />
  </motion.button>
</motion.div>

      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1,duration:1}}
      className='flex flex-wrap justify-center mt-16 gap-3'>
        {Array(6).fill('').map((item,index)=>(
            <motion.img 
            whileHover={{scale:1.05,duration:0.1}}
            className='rounded hover:scale-105 transition-all 
            duration-300 cursor-pointer max-sm:-10' src={index % 2 == 0 ?assets.sample_img_2 : assets.sample_img_1} 
            alt="" key={index} width={70}/>
        ))}
      </motion.div>

      <motion.p className='mt-2 text-neutral-600'>Generated images from Text2Image</motion.p>

    </motion.div>
  )
}

export default Header
