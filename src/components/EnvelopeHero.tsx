import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface EnvelopeHeroProps {
  onOpen: () => void;
}

export const EnvelopeHero: React.FC<EnvelopeHeroProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpening(true);
    setTimeout(() => { onOpen(); }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#2a0810 0%,#120306 40%,#1e0609 70%,#2e0a10 100%)' }}
    >
      {/* Ambient radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{position:'absolute',top:'10%',left:'50%',transform:'translateX(-50%)',width:'70vw',height:'50vh',background:'radial-gradient(ellipse,rgba(139,30,44,0.38) 0%,transparent 70%)',filter:'blur(40px)'}} />
        <div style={{position:'absolute',bottom:'5%',left:'20%',width:'40vw',height:'30vh',background:'radial-gradient(ellipse,rgba(223,168,95,0.13) 0%,transparent 70%)',filter:'blur(50px)'}} />
      </div>

      {/* Floating sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.span key={i}
            style={{
              position:'absolute',
              left:`${(i*19+5)%95}%`,
              top:`${(i*23+3)%90}%`,
              color:i%3===0?'rgba(252,224,173,0.55)':i%3===1?'rgba(139,30,44,0.45)':'rgba(223,168,95,0.4)',
              fontSize:`${8+(i%4)*5}px`,
            }}
            animate={{y:[-8,8,-8],opacity:[0.15,0.7,0.15],rotate:[0,180,360],scale:[0.7,1.1,0.7]}}
            transition={{duration:4+(i%5)*1.2,repeat:Infinity,ease:'easeInOut',delay:(i*0.35)%4}}
          >
            {i%4===0?'✦':i%4===1?'✧':i%4===2?'◆':'❋'}
          </motion.span>
        ))}
      </div>


      {/* Corner ornaments */}
      {([{top:'20px',left:'20px'},{top:'20px',right:'20px'},{bottom:'20px',left:'20px'},{bottom:'20px',right:'20px'}] as React.CSSProperties[]).map((sty,i)=>(
        <motion.div key={i} style={{position:'absolute',...sty,color:'rgba(223,168,95,0.45)',fontSize:'18px'}}
          animate={{opacity:[0.3,0.9,0.3]}} transition={{duration:3,repeat:Infinity,delay:i*0.6}}>✦</motion.div>
      ))}

      {/* Accent lines */}
      <div style={{position:'absolute',top:'32px',left:'5%',right:'5%',height:'1px',background:'linear-gradient(90deg,transparent,rgba(223,168,95,0.25),transparent)'}} />
      <div style={{position:'absolute',bottom:'32px',left:'5%',right:'5%',height:'1px',background:'linear-gradient(90deg,transparent,rgba(223,168,95,0.25),transparent)'}} />

      <AnimatePresence mode="wait">
        {!isOpening ? (
          <motion.div
            key="card"
            initial={{opacity:0,y:40,scale:0.92}}
            animate={{opacity:1,y:0,scale:1}}
            exit={{opacity:0,scale:0.88,y:-30}}
            transition={{duration:0.9,ease:[0.16,1,0.3,1]}}
            style={{position:'relative',width:'100%',maxWidth:'400px',margin:'0 auto',padding:'0 20px'}}
          >
            {/* Glow ring */}
            <motion.div animate={{opacity:[0.4,0.9,0.4]}} transition={{duration:3,repeat:Infinity}}
              style={{position:'absolute',inset:'-3px',borderRadius:'28px',background:'linear-gradient(135deg,rgba(223,168,95,0.3),transparent,rgba(139,30,44,0.3),transparent,rgba(223,168,95,0.3))',filter:'blur(2px)',zIndex:0}}
            />

            {/* Card body */}
            <div style={{
              position:'relative',zIndex:1,
              background:'linear-gradient(165deg,rgba(38,8,15,0.98) 0%,rgba(18,3,6,0.99) 100%)',
              borderRadius:'24px', border:'1px solid rgba(223,168,95,0.38)',
              boxShadow:'0 0 70px -10px rgba(139,30,44,0.65),0 35px 90px rgba(0,0,0,0.8),inset 0 1px 0 rgba(223,168,95,0.22)',
              padding:'36px 28px 32px', overflow:'hidden',
            }}>
              {/* Inner sheen */}
              <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 50% 0%,rgba(223,168,95,0.07) 0%,transparent 55%)',pointerEvents:'none'}} />

              {/* Top diamonds */}
              <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'24px'}}>
                <div style={{flex:1,height:'1px',background:'linear-gradient(90deg,transparent,rgba(223,168,95,0.55))'}} />
                <span style={{color:'rgba(223,168,95,0.85)',fontSize:'9px',letterSpacing:'4px'}}>◆ ◆ ◆</span>
                <div style={{flex:1,height:'1px',background:'linear-gradient(90deg,rgba(223,168,95,0.55),transparent)'}} />
              </div>

              {/* Exclusive Invitation badge */}
              <div style={{display:'flex',justifyContent:'center',marginBottom:'22px'}}>
                <div style={{display:'inline-flex',alignItems:'center',gap:'7px',padding:'5px 16px',borderRadius:'100px',background:'rgba(223,168,95,0.1)',border:'1px solid rgba(223,168,95,0.32)'}}>
                  <Sparkles style={{width:'10px',height:'10px',color:'#fce0ad'}} />
                  <span style={{fontFamily:'var(--font-cinzel)',fontSize:'9px',letterSpacing:'0.28em',textTransform:'uppercase',color:'#fce0ad'}}>Exclusive Invitation</span>
                  <Sparkles style={{width:'10px',height:'10px',color:'#fce0ad'}} />
                </div>
              </div>


              {/* Wax seal */}
              <motion.div initial={{opacity:0,scale:0.65,rotate:-15}} animate={{opacity:1,scale:1,rotate:0}} transition={{delay:0.5,duration:0.95,ease:[0.16,1,0.3,1]}}
                style={{display:'flex',justifyContent:'center',marginBottom:'24px'}}>
                <div style={{position:'relative'}}>
                  <motion.div animate={{opacity:[0.35,0.85,0.35],scale:[0.92,1.08,0.92]}} transition={{duration:3,repeat:Infinity}}
                    style={{position:'absolute',inset:'-12px',borderRadius:'50%',background:'radial-gradient(circle,rgba(139,30,44,0.6) 0%,transparent 70%)',filter:'blur(10px)',zIndex:0}} />
                  <div style={{position:'relative',zIndex:1,width:'92px',height:'92px',borderRadius:'50%',
                    background:'linear-gradient(145deg,#9b2232 0%,#7a1824 40%,#a83045 70%,#6b1420 100%)',
                    border:'2.5px solid rgba(223,168,95,0.65)',
                    boxShadow:'0 0 25px rgba(139,30,44,0.75),inset 0 3px 6px rgba(255,255,255,0.12)',
                    display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                    <span style={{fontFamily:'var(--font-serif)',fontSize:'27px',color:'#fce0ad',lineHeight:1,letterSpacing:'3px'}}>TR</span>
                    <span style={{fontSize:'7px',color:'rgba(252,224,173,0.75)',letterSpacing:'3px',marginTop:'3px'}}>✦✦✦</span>
                  </div>
                </div>
              </motion.div>

              {/* Invitation text */}
              <p style={{textAlign:'center',textTransform:'uppercase',letterSpacing:'0.3em',fontSize:'9px',color:'rgba(212,195,179,0.78)',marginBottom:'8px'}}>
                You Are Cordially Invited To Celebrate
              </p>
              <h1 style={{textAlign:'center',fontFamily:'var(--font-serif)',fontSize:'clamp(32px,8vw,44px)',fontWeight:400,letterSpacing:'0.05em',margin:'0 0 4px',
                background:'linear-gradient(135deg,#fce0ad 0%,#dfa85f 50%,#fef3c7 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',lineHeight:1.1}}>
                Trizsa Reign
              </h1>
              <p style={{textAlign:'center',fontFamily:'var(--font-script)',fontSize:'clamp(26px,6vw,36px)',color:'#f3d2c1',margin:'0 0 18px',lineHeight:1.3}}>
                Turning 21
              </p>
              <div style={{width:'60px',height:'1px',background:'linear-gradient(90deg,transparent,rgba(223,168,95,0.75),transparent)',margin:'0 auto 18px'}} />

              {/* Date */}
              <div style={{textAlign:'center',marginBottom:'26px'}}>
                <p style={{fontSize:'9px',textTransform:'uppercase',letterSpacing:'0.22em',color:'rgba(212,195,179,0.72)',lineHeight:1.9}}>
                  An Intimate Evening of Love &amp; Celebration
                </p>
                <p style={{fontFamily:'var(--font-cinzel)',fontSize:'11px',color:'#fce0ad',letterSpacing:'0.15em',marginTop:'5px'}}>
                  October 11, 2026 &nbsp;•&nbsp; 9:00 PM
                </p>
              </div>

              {/* CTA button */}
              <motion.button whileHover={{scale:1.03}} whileTap={{scale:0.97}}
                onClick={handleOpenInvitation}
                style={{position:'relative',width:'100%',padding:'14px 24px',borderRadius:'14px',
                  background:'linear-gradient(135deg,#8b1e2c 0%,#a32839 50%,#8b1e2c 100%)',
                  border:'1px solid rgba(252,224,173,0.42)',color:'#fff',
                  fontFamily:'var(--font-cinzel)',letterSpacing:'0.2em',fontSize:'12px',textTransform:'uppercase',
                  cursor:'pointer',boxShadow:'0 0 28px -8px rgba(139,30,44,0.75),0 8px 28px rgba(0,0,0,0.45)',
                  overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
                <motion.div
                  style={{position:'absolute',inset:0,background:'linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.2) 50%,transparent 100%)',pointerEvents:'none'}}
                  animate={{x:['-100%','100%']}} transition={{duration:2.5,repeat:Infinity,repeatDelay:1,ease:'easeInOut'}} />
                <Sparkles style={{width:'14px',height:'14px',color:'#fce0ad'}} />
                <span>Open Invitation</span>
                <Sparkles style={{width:'14px',height:'14px',color:'#fce0ad'}} />
              </motion.button>

              <p style={{textAlign:'center',marginTop:'12px',fontSize:'10px',color:'rgba(156,137,127,0.65)'}}>
                Tap to open and play background music 🎵
              </p>

              {/* Bottom diamonds */}
              <div style={{display:'flex',alignItems:'center',gap:'8px',marginTop:'22px'}}>
                <div style={{flex:1,height:'1px',background:'linear-gradient(90deg,transparent,rgba(223,168,95,0.5))'}} />
                <span style={{color:'rgba(223,168,95,0.7)',fontSize:'9px',letterSpacing:'4px'}}>◆ ◆ ◆</span>
                <div style={{flex:1,height:'1px',background:'linear-gradient(90deg,rgba(223,168,95,0.5),transparent)'}} />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div key="opening" initial={{opacity:1}} animate={{opacity:0,scale:1.12}} transition={{duration:0.85}}
            style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'16px'}}>
            <motion.div animate={{rotate:360}} transition={{duration:1,ease:'linear',repeat:1}}>
              <Sparkles style={{width:'56px',height:'56px',color:'#fce0ad'}} />
            </motion.div>
            <p style={{fontFamily:'var(--font-cinzel)',color:'#fce0ad',letterSpacing:'0.22em',fontSize:'13px'}}>
              Opening…
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

