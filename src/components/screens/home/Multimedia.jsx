import React from 'react';
import { motion } from 'framer-motion';
import { ben_video_1, reel_1, reel_2, reel_3 } from '../../../assets';

export default function Multimedia() {
  const containerRef = React.useRef(null);
  const [isMobile, setIsMobile] = React.useState(true);
  const [playingVideos, setPlayingVideos] = React.useState({});
  const [hoveredVideo, setHoveredVideo] = React.useState(null);
  const [videoVolumes, setVideoVolumes] = React.useState({});

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

  const handleVideoClick = (index) => {
    const video = document.getElementById(`video-${index}`);
    
    if (!video) return; // Guard clause for safety

    setPlayingVideos(prevPlaying => {
      // If this video is currently playing, pause it
      if (prevPlaying[index]) {
        video.pause();
        return { ...prevPlaying, [index]: false };
      }
      
      // If another video is playing, pause it
      Object.entries(prevPlaying).forEach(([key, isPlaying]) => {
        if (isPlaying && key !== index.toString()) {
          const prevVideo = document.getElementById(`video-${key}`);
          if (prevVideo) prevVideo.pause();
        }
      });
      
      // Play this video
      video.play();
      return { ...prevPlaying, [index]: true };
    });
  };

  const handleVolumeChange = (index, value) => {
    const video = document.getElementById(`video-${index}`);
    if (video) {
      video.volume = value;
      video.muted = value === 0;
      setVideoVolumes(prev => ({ ...prev, [index]: value }));
    }
  };

  return (
    <section className='min-h-screen relative w-full  py-24 overflow-hidden'>
      <div className='absolute -left-12 -right-12 rotate-12 bg-[#8EB486] h-24 w-[150%] top-[45%]   flex items-center overflow-hidden whitespace-nowrap'>
          <div className='animate-scroll flex'>
            {[...Array(30)].map((_, i) => (
              <span key={i} className='text-lg font-bold text-neutral-100 mx-4'>MULTIMEDIA</span>
            ))}
          </div>
        </div>
      <div className='w-full mx-auto px-4 md:px-8'>
        <div className='relative h-full grid grid-cols-1 min-[680px]:grid-cols-2 lg:grid-cols-3 gap-8' ref={containerRef}>
          {[
            { mt: "0px", gridColumn: isMobile ? "1" : "span 1" ,media: reel_1  },
            { mt: "0px", gridColumn: isMobile ? "1" : "span 1" ,media: reel_2  },
            { mt: "220px", gridColumn: isMobile ? "1" : "span 1" ,media: reel_3  },
            { mt: "-70px", gridColumn: isMobile ? "1" : "span 1" ,media: reel_1  },
            { mt: "70px", gridColumn: isMobile ? "1" : "span 1" ,media: reel_2  },
            { mt: "200px", gridColumn: isMobile ? "1" : "span 1" ,media: reel_3  },
            { mt: "80px", gridColumn: isMobile ? "1" : "span 1" ,media: reel_1  },
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
              className={`${index % 2 === 0 ? 'aspect-[9/16]' : 'aspect-[12/9]'} w-full sm:max-w-80 self-center bg-slate-300 relative mx-auto  rounded-xl overflow-hidden`}
              style={{ 
                marginTop: isMobile ? '0px' : card.mt,
                gridColumn: isMobile ? 0 : card.gridColumn
              }}
            >
              <div 
                className="relative w-full h-full"
                onMouseEnter={() => setHoveredVideo(index)}
                onMouseLeave={() => setHoveredVideo(null)}
              >
                <button 
                  className="absolute inset-0 w-full h-full z-10"
                  onClick={() => handleVideoClick(index)}
                />
                
                <video
                  id={`video-${index}`}
                  className="w-full h-full object-cover"
                  loop
                  playsInline
                >
                  <source src={card.media} type="video/mp4" />
                </video>
                
                {/* Play/Pause Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {!playingVideos[index] && (
                    <div className="bg-black/50 rounded-full p-3">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Volume Controls */}
                {hoveredVideo === index && (
                  <div 
                    className="absolute bottom-4 right-4 bg-black/70 rounded-lg p-2 flex items-center gap-2 z-20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={videoVolumes[index] || 0}
                      onChange={(e) => handleVolumeChange(index, parseFloat(e.target.value))}
                      className="w-24 h-1 bg-white rounded-lg appearance-none cursor-pointer"
                    />
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}