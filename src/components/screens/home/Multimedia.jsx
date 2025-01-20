import React from 'react';
import { motion } from 'framer-motion';
import { ben_video_1 } from '../../../assets';

export default function Multimedia() {
  const containerRef = React.useRef(null);
  const [isMobile, setIsMobile] = React.useState(true);

  React.useEffect(() => {
    // Check for window width
    const checkWidth = () => {
      if (containerRef.current) {
        setIsMobile(containerRef.current.offsetWidth < 680);
      }
    };
    
    checkWidth();
    window.addEventListener('resize', checkWidth);

    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = 'https://platform.instagram.com/en_US/embeds.js';
    script.async = true;
    script.defer = true;
    
    document.body.appendChild(script);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkWidth);
      document.body.removeChild(script);
    };
  }, []);

  // Function to refresh Instagram embeds
  const refreshEmbeds = () => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  };

  React.useEffect(() => {
    refreshEmbeds();
  }, []);

  return (
    <section className='min-h-screen w-full relative py-24 overflow-hidden'>
      <div className='w-full mx-auto px-8'>
        <div className='relative h-full grid grid-cols-1 min-[680px]:grid-cols-2 lg:grid-cols-3 gap-8' ref={containerRef}>
          {[
            { mt: "0px", gridColumn: isMobile ? "1" : "span 1" },
            { mt: "0px", gridColumn: isMobile ? "1" : "span 1" },
            { mt: "220px", gridColumn: isMobile ? "1" : "span 1" },
            { mt: "-70px", gridColumn: isMobile ? "1" : "span 1" },
            { mt: "70px", gridColumn: isMobile ? "1" : "span 1" },
            { mt: "200px", gridColumn: isMobile ? "1" : "span 1" },
            { mt: "80px", gridColumn: isMobile ? "1" : "span 1" },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { 
                  duration: 0.5,
                  delay: 0.1,
                  type: "spring", 
                  stiffness: 50 
                }
              }}
              viewport={{ 
                margin: "100px 0px -30% 0px",
                once: false
              }}
              className={`${index % 2 === 0 ? 'aspect-[9/16]' : 'aspect-[12/9]'} w-full sm:max-w-80 self-center bg-slate-300 relative mx-auto`}
              style={{ 
                marginTop: isMobile ? '0px' : card.mt,
                gridColumn: isMobile ? 0 : card.gridColumn
              }}
            >
             <video
                className="w-full h-full object-cover "
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={ben_video_1} type="video/mp4" />
              </video>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}