import React from 'react';
import { motion } from 'framer-motion';

export default function Multimedia() {
  const containerRef = React.useRef(null);
  const [isMobile, setIsMobile] = React.useState(true);

  React.useEffect(() => {
    const checkWidth = () => {
      if (containerRef.current) {
        setIsMobile(containerRef.current.offsetWidth < 680);
      }
    };
    
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <section className='min-h-screen w-full relative py-24 overflow-hidden'>
      <div className='w-full mx-auto px-8'>
        <div className='relative h-full grid grid-cols-1 min-[680px]:grid-cols-2 min-[924px]:grid-cols-3 gap-8' ref={containerRef}>
          {[
            { mt: "0px", gridColumn: "1" },      // Left column
            { mt: "150px", gridColumn: "2" },    // Middle column
            { mt: "60px", gridColumn: "3" },     // Right column
            { mt: "-70px", gridColumn: "1" },    // Left column
            { mt: "70px", gridColumn: "2" },    // Middle column
            { mt: "200px", gridColumn: "3" },    // Right column
            { mt: "80px", gridColumn: "2" },    // Center bottom
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
              className={`aspect-[3/4] w-full sm:max-w-80 self-center mx-auto bg-gray-400 `}
              style={{ 
                marginTop: isMobile ? '0px' : card.mt,
                gridColumn: isMobile ? 0 : card.gridColumn
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}