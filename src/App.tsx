import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Types ---
type Section = 'About' | 'History' | 'Values' | 'Strength' | 'Dreams';

interface PageData {
  id: string;
  title: string;
  content: React.ReactNode;
}

// --- Content Data ---
const PAGES: PageData[] = [
  {
    id: 'TableOfContents',
    title: 'Contents',
    content: null,
  },
  {
    id: 'About',
    title: 'About',
    content: (
      <div className="space-y-6 text-2xl">
        <p className="text-[28px] leading-relaxed italic font-black">"새로운 가능성을 디자인하는 사람, 김기환입니다."</p>
        <p className="leading-relaxed text-2xl">
          다채로운 공간을 상상하고 구현하여 사람들에게 '경험'을 전달하고 싶습니다.
        </p>
        <div className="pt-6 space-y-4">
          <div className="flex justify-between border-b-2 border-stone-300 pb-2">
            <span className="font-bold">이름</span>
            <span>김기환(Kim Ki Hwan)</span>
          </div>
          <div className="flex justify-between border-b-2 border-stone-300 pb-2">
            <span className="font-bold">소속</span>
            <span>한성대학교 2학년 재학</span>
          </div>
          <div className="flex justify-between border-b-2 border-stone-300 pb-2">
            <span className="font-bold">학번 / 학과</span>
            <span>2392087 / 문학문화콘텐츠학과</span>
          </div>
          <div className="flex justify-between border-b-2 border-stone-300 pb-2">
            <span className="font-bold">주소</span>
            <span>대한민국, 서울특별시, 송파구</span>
          </div>
          <div className="flex justify-between border-b-2 border-stone-300 pb-2">
            <span className="font-bold">연락처</span>
            <span>010.5680.6163 / mykim1116@naver.com</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'History',
    title: 'History',
    content: (
      <div className="h-full overflow-y-auto pr-2 space-y-8 scrollbar-hide">
        <div className="grid grid-cols-1 gap-8 pb-12">
          <section className="space-y-4">
            <h4 className="font-bold text-olive uppercase tracking-[0.2em] text-[17px] underline decoration-olive/20 underline-offset-4">유아기 & 초등학생</h4>
            <div className="leading-relaxed text-[19px] space-y-4">
              <p>엄마가 자는 사이 출근하던 할머니를 따라나섰다 미아가 될 뻔해 경찰서까지 갔던 기억, 가족 여행 중 물에 빠져 익사할 뻔했던 공포는 지금까지도 깊은 물을 두려워하게 만들었습니다.</p>
              <p>초등학교 저학년 때 만난 '김지영' 친구의 철없는 모습을 보며 스스로 어른스러워져야겠다고 다짐했고, 고학년 때는 평생의 인연인 '김동주', '황성범'을 만나 게임과 추억을 공유했습니다. 6학년 무렵 부모님의 이혼이라는 큰 변화를 맞이하기도 했습니다.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h4 className="font-bold text-olive uppercase tracking-[0.2em] text-[17px] underline decoration-olive/20 underline-offset-4">중학교 & 고등학생</h4>
            <div className="leading-relaxed text-[19px] space-y-4">
              <p>중학교 시절 '김경민'을 필두로 교우 관계를 넓혔고, 미술의 꿈을 키우며 '레인보우 식스 시즈'와 '암살교실' 등을 통해 일본 서브컬처에 눈을 떴습니다. 중3 무렵 아버지의 비보는 삶의 무게를 실감하게 했습니다.</p>
              <p>고등학생 때는 미술과 코딩의 길을 내려놓고 학업에 정진했으나 암기 위주 교육의 한계를 느꼈습니다. 코로나 시기, 온라인 클래스 속에서 친구들과 게임으로 소통하며 유대를 다졌고, 유럽과 일본 여행에서 본 풍경은 소중한 영감이 되었습니다.</p>
            </div>
          </section>
          <section className="space-y-4 border-t-2 border-stone-100 pt-2">
            <h4 className="font-bold text-olive uppercase tracking-[0.2em] text-[17px] underline decoration-olive/20 underline-offset-4">대학 & 군대</h4>
            <div className="leading-relaxed text-[19px] space-y-4">
              <p>대학 입학 후 '배준영', '박수연' 등 좋은 친구들을 만났고, 1학년을 마친 뒤 입대했습니다.</p>
              <p>군 생활이라는 인생 최대의 암흑기를 지나며 역설적으로 자기중심적인 주체성의 중요성을 깨달았고, 사회가 돌아가는 구조와 인간 관계의 본질을 파악하게 되었습니다.</p>
            </div>
          </section>
        </div>
      </div>
    ),
  },
  {
    id: 'Values',
    title: 'Values',
    content: (
      <div className="grid grid-cols-1 gap-6 py-4">
        <div className="p-6 lg:p-8 bg-stone-100/50 rounded-xl border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
          <h4 className="font-serif text-2xl font-bold mb-2">Experience</h4>
          <p className="font-serif text-lg leading-relaxed">다른 무엇보다 경험이 가장 중요하다고 생각합니다. 그것이 매체를 통한 간접적이던, 직접적이던 느낌으로써 얻는 교훈이 있기 때문입니다. 경험을 통해 성공한다면 노하우이자 숙련, 실패한다면 깨달음과 옳지 않은 방법을 알수 있기 때문입니다.</p>
        </div>
        <div className="p-6 lg:p-8 bg-stone-100/50 rounded-xl border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
          <h4 className="font-serif text-2xl font-bold mb-2">Egocentrism</h4>
          <p className="font-serif text-lg leading-relaxed">사회를 살면서 중요한 것 하나가 바로 '자기중심주의'입니다. 타인보다 자신을 중심으로 생각하는것이 중요하다는 것은 타인을 배척하고, 이기주의가 아닙니다. 자신감을 갖고 자신이 하고자 하는 것을 타인의 시선에 아랑곳 않고 하는것입니다.</p>
        </div>
        <div className="p-6 lg:p-8 bg-stone-100/50 rounded-xl border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
          <h4 className="font-serif text-2xl font-bold mb-2">Trust</h4>
          <p className="font-serif text-lg leading-relaxed">신뢰는 사람과 사람이 모여 사는 사회에서 가장 크게 작용하다고 생각합니다. 아무리 능력이 있는 사람이라도 신뢰가 없다는 것 하나만으로 일을 맡길 수 없고, 관계를 유지할 수 없다고 생각하기 때문입니다.</p>
        </div>
      </div>
    ),
  },
  {
    id: 'Strength',
    title: 'Strength',
    content: (
      <div className="h-full overflow-y-auto pr-2 space-y-4 pt-2 scrollbar-hide">
        <p className="text-sm text-stone-500 mb-6 italic">* 성인용 직업적성검사(워크넷) 결과 데이터 기준</p>
        {[
          { label: 'Mechanical Ability (기계능력)', value: 126, level: '최상' },
          { label: 'Spatial Perception (공간지각력)', value: 123, level: '최상' },
          { label: 'Verbal Ability (언어력)', value: 117, level: '상' },
          { label: 'Situational Judgment (상황판단력)', value: 113, level: '상' },
          { label: 'Concentration (집중력)', value: 112, level: '상' },
          { label: 'Problem Solving (문제해결능력)', value: 111, level: '중상' },
          { label: 'Numerical Ability (수리력)', value: 110, level: '중상' },
        ].map((skill) => {
          const isTopTier = skill.value >= 120;
          const percentage = (skill.value / 150) * 100; // 150 max on test scale
          return (
            <div key={skill.label} className="group">
              <div className="flex justify-between mb-1 text-[15px] font-bold">
                <span className={isTopTier ? 'text-red-600' : 'text-stone-700'}>{skill.label}</span>
                <span className={isTopTier ? 'text-red-600' : 'text-stone-500'}>
                  {skill.value} <span className="text-[10px] opacity-60 ml-1">({skill.level})</span>
                </span>
              </div>
              <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden border border-black/5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className={`${isTopTier ? 'bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.4)]' : 'bg-olive'} h-full rounded-full`} 
                />
              </div>
            </div>
          );
        })}
        <div className="pb-8" />
      </div>
    ),
  },
  {
    id: 'Dreams',
    title: 'Dreams',
    content: (
      <div className="space-y-8">
        <p className="text-[36px] text-center font-black py-8 border-y-2 border-stone-200 leading-tight">
          "모두가 살아갈 즐거운 세상을 만드는 기획자"
        </p>
        <div className="text-[25px] leading-relaxed space-y-6">
          <p>
            저는 앞으로 단순히 콘텐츠를 소비하는 사람에 머무르지 않고, 사람들에게 새로운 즐거움과 몰입을 제공할 수 있는 기획자로 성장하고자 합니다. 평소 제가 좋아해 온 게임, 소설, 서브컬처 콘텐츠를 통해 사람들의 마음을 움직이는 아이디어와 이야기의 힘을 느껴왔으며, 이제는 그 감동을 직접 설계하고 만들어내는 사람이 되고 싶다는 목표를 가지게 되었습니다.
          </p>
          <p>
            현재 저만의 웹소설을 비롯한 작품활동을 통해 노력하고 있으며 제 작품을 통해 사람들이 모이고, 이야기를 나누고, 즐거워 하는것이 꿈입니다.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'Future',
    title: 'Future',
    content: null,
  },
];

// --- Components ---
const GoldFrame = ({ isCover = false }: { isCover?: boolean }) => {
  return (
    <>
      <div className={`absolute ${isCover ? 'inset-4 border-2' : 'inset-2 border'} border-gold pointer-events-none z-10`} />
      <div className={`absolute ${isCover ? 'inset-6 border' : 'inset-3 border-[0.5px]'} border-gold/60 pointer-events-none z-10`} />
      
      {/* Corner Ornaments */}
      {[
        "top-0 left-0 rotate-0",
        "top-0 right-0 rotate-90",
        "bottom-0 right-0 rotate-180",
        "bottom-0 left-0 rotate-270"
      ].map((pos, i) => (
        <div key={i} className={`absolute ${pos.split(' ').slice(0,2).join(' ')} p-1 pointer-events-none opacity-60 z-20`}>
          <svg width={isCover ? "40" : "24"} height={isCover ? "40" : "24"} viewBox="0 0 40 40" fill="none" className={pos.split(' ')[2]}>
            <path d="M0 0 L15 0 L15 2 L2 2 L2 15 L0 15 Z" fill="#D4AF37" />
            <circle cx="5" cy="5" r="2.5" fill="#D4AF37" />
            <path d="M10 10 L25 10 L25 12 L12 12 L12 25 L10 25 Z" fill="#D4AF37" opacity="0.4" />
          </svg>
        </div>
      ))}
    </>
  );
};

const PageContent = ({ page, index, side, direction, variant = 'full', onNavigate }: { page: PageData | undefined; index: number; side: 'left' | 'right'; direction: number; variant?: 'full' | 'flipping'; onNavigate?: (idx: number) => void }) => {
  if (!page) {
    return (
      <div className="h-full flex flex-col items-center justify-center opacity-10 pointer-events-none relative">
        <GoldFrame />
        <div className="w-48 h-64 border-4 border-black" />
      </div>
    );
  }

  // Simplified view during flip to prevent text-mirror artifacts and optimize timing
  if (variant === 'flipping') {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 bg-paper text-center border-x-2 border-black/20 shadow-inner relative">
        <GoldFrame />
        <span className="text-[10px] font-serif tracking-[0.4em] text-stone-300 uppercase mb-4 opacity-40">Page {index + 1}</span>
        <h2 className="font-serif text-3xl lg:text-4xl text-stone-400 italic opacity-60 tracking-tight">{page.title}</h2>
        <div className="mt-8 w-12 h-px bg-black/20" />
      </div>
    );
  }

  if (page.id === 'TableOfContents') {
    if (side === 'left') {
      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="h-full flex flex-col items-center justify-center p-8 text-center bg-paper relative"
        >
          <GoldFrame />
          <h2 className="font-serif text-5xl lg:text-6xl text-stone-300 italic mb-4 opacity-50">Discovery</h2>
          <div className="w-24 h-px bg-stone-300" />
          <p className="mt-6 font-serif text-sm tracking-[0.5em] text-stone-400 uppercase">Index & Navigation</p>
        </motion.div>
      );
    }
    const menuItems = PAGES.slice(1);
    return (
      <motion.div 
        key={`toc-${index}`}
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.6 }}
        className="h-full flex flex-col pt-10 px-8 bg-paper relative"
      >
        <GoldFrame />
        <h3 className="font-serif text-2xl italic text-stone-400 border-b border-stone-200 pb-2 mb-8 uppercase tracking-widest">Contents</h3>
        <nav className="flex-1 flex flex-col space-y-4 lg:space-y-6">
          {menuItems.map((item, i) => (
            <motion.div 
              key={item.id} 
              className="flex items-baseline text-left group cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate?.(i + 1);
              }}
              whileHover="hover"
              initial="initial"
              variants={{
                initial: { x: 0 },
                hover: { x: 0 }
              }}
            >
              <motion.span 
                variants={{
                  initial: { x: 0, scale: 1 },
                  hover: { x: 10, scale: 1.05 }
                }}
                className="font-serif text-5xl lg:text-6xl text-ink group-hover:text-olive transition-colors origin-left"
              >
                -{item.title}-
              </motion.span>
              <div className="flex-1 border-b border-dotted border-stone-300 mx-4 h-1 opacity-50 relative top-[-6px] group-hover:border-olive/30 transition-colors" />
              <motion.span 
                variants={{
                  initial: { x: 0 },
                  hover: { x: -5 }
                }}
                className="font-sans text-xl text-stone-400 group-hover:text-olive transition-colors"
              >
                0{i + 2}
              </motion.span>
            </motion.div>
          ))}
        </nav>
        <footer className="mt-8 mb-4 text-center text-[10px] tracking-[0.3em] font-serif opacity-30 uppercase">
          KIM KI WHAN © 2026
        </footer>
      </motion.div>
    );
  }

  if (side === 'left') {
    if (page.id === 'Future') {
      return (
        <div className="h-full bg-paper relative">
          <GoldFrame />
        </div>
      );
    }
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-paper relative">
        <GoldFrame />
        <motion.div
          key={index} // Force re-animation on page change
          initial={{ opacity: 0, scale: 0.85, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            delay: direction === 1 ? 1.1 : 0.4, // Slower when moving forward as requested
            duration: 1.0, 
            ease: [0.33, 1, 0.68, 1] 
          }}
          className="flex flex-col items-center"
        >
          <span className="text-xs font-serif tracking-[0.6em] text-stone-300 uppercase mb-8">Section 0{index + 1}</span>
          <h2 className="font-serif text-6xl lg:text-7xl text-ink tracking-tighter mb-6 underline decoration-olive/20 decoration-4 underline-offset-8 leading-tight">{page.title}</h2>
          <div className="w-12 h-1 bg-olive opacity-40" />
        </motion.div>
      </div>
    );
  }

  if (page.id === 'Future' && side === 'right') {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-paper relative">
        <GoldFrame />
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-serif text-6xl lg:text-7xl text-ink tracking-tighter font-bold leading-tight"
        >
          미래를 기대해주세요
        </motion.h2>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col px-10 pt-10 bg-paper relative">
      <GoldFrame />
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: direction === -1 ? 0.8 : 0.8, duration: 0.8 }} // Adjusted forward/backward timing
        className="flex-1 flex flex-col"
      >
        <div className="flex justify-between items-baseline border-b border-stone-200 pb-2 mb-8">
          <h3 className="font-serif text-sm text-stone-400 tracking-widest uppercase italic font-light">
            Overview
          </h3>
          <span className="text-xs font-serif italic text-stone-400">P. 0{index + 1}</span>
        </div>
        <div className="flex-1 font-serif text-ink opacity-90 text-lg lg:text-xl leading-relaxed mt-4">
          {page.content}
        </div>
        <div className="mt-8 text-center opacity-40 text-[10px] font-serif italic text-stone-400 tracking-[0.2em] border-t border-stone-100 pt-4 uppercase">
          Kim Ki Whan Portfolio
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState(-1); // -1: Cover, 0: Spread 1 (Frontispiece/ToC), 1: Spread 2 (About/History), etc.
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const [isAnimating, setIsAnimating] = useState(false);
  const [isRapid, setIsRapid] = useState(false);
  const lastScrollTime = useRef(0);

  const totalSpreads = PAGES.length;

  const navigateToPage = (targetIdx: number) => {
    if (isAnimating || targetIdx === currentPage) return;
    
    const diff = targetIdx - currentPage;
    const stepDir = diff > 0 ? 1 : -1;
    const distance = Math.abs(diff);

    if (distance === 1) {
      // Normal single page flip
      setIsRapid(false);
      setDirection(stepDir);
      setIsAnimating(true);
      setCurrentPage(targetIdx);
      setTimeout(() => setIsAnimating(false), 900);
    } else {
      // Rapid multi-page flip
      setIsRapid(true);
      setDirection(stepDir);
      setIsAnimating(true);
      
      let stepCount = 0;
      const interval = setInterval(() => {
        setCurrentPage(prev => {
          const next = prev + stepDir;
          if (next === targetIdx) {
            clearInterval(interval);
            setTimeout(() => {
              setIsAnimating(false);
              setIsRapid(false);
            }, 400); // Final cooldown
            return next;
          }
          return next;
        });
        stepCount++;
      }, 150); // Fast interval between pages
    }
  };

  const flipNext = () => {
    if (isAnimating || currentPage >= totalSpreads - 1) return;
    setIsRapid(false);
    setDirection(1);
    setIsAnimating(true);
    setCurrentPage(prev => prev + 1);
    setTimeout(() => setIsAnimating(false), 900);
  };

  const flipPrev = () => {
    if (isAnimating || currentPage <= -1) return;
    setIsRapid(false);
    setDirection(-1);
    setIsAnimating(true);
    setCurrentPage(prev => prev - 1);
    setTimeout(() => setIsAnimating(false), 900);
  };

  // Wheel Logic
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime.current < 1000) return;
      if (Math.abs(e.deltaY) < 30 && Math.abs(e.deltaX) < 30) return;

      if (e.deltaY > 0 || e.deltaX > 0) {
        flipNext();
      } else {
        flipPrev();
      }
      lastScrollTime.current = now;
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentPage, isAnimating]);

  return (
    <div className="h-screen w-screen bg-desk-bg flex items-center justify-center p-4 lg:p-8 font-sans overflow-hidden select-none">
      {/* Ambient Shadow/Surface */}
      <div className="absolute inset-0 z-0 bg-radial-[circle_at_center] from-[#e5ddd3] to-[#d2c8bc]" />

      {/* 3D Scene Wrapper */}
      <div className="relative z-10 w-full h-full max-w-[90vw] max-h-[80vh] aspect-[4/3] flex items-center justify-center perspective-[2500px]">
        
        {/* The Book Structure */}
        <div 
          className="relative w-full h-full preserve-3d transition-transform duration-1000 ease-out"
          style={{ transform: currentPage === -1 ? 'translateX(-25%)' : 'translateX(0)' }}
        >
          {/* Static Left Side (Shows what's BEHIND the turning page on the left) */}
          {currentPage >= 0 && (
            <div 
              className="absolute left-0 top-0 w-1/2 h-full bg-paper rounded-l-sm shadow-[20px_20px_0_0_rgba(0,0,0,1)] overflow-hidden cursor-pointer group border-2 border-black"
              onClick={flipPrev}
            >
               <div className="relative w-full h-full transition-opacity duration-500 z-30">
                  <PageContent page={PAGES[currentPage]} index={currentPage} side="left" direction={direction} onNavigate={navigateToPage} />
               </div>
               
               {/* Intensified Spine Shadow (Left Page) - Adjusted width per request */}
               <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-black/40 via-black/20 to-transparent z-40 pointer-events-none" />
               <div className="absolute top-0 right-0 bottom-0 w-5 bg-gradient-to-l from-black/30 to-transparent z-45 pointer-events-none" />
               
               {/* Corner Triangle Left */}
               <div className="absolute left-4 bottom-4 w-0 h-0 border-t-[17px] border-t-transparent border-r-[26px] border-r-black/30 border-b-[17px] border-b-transparent group-hover:border-r-black transition-colors z-50" />
            </div>
          )}

          {/* Static Right Side (Shows what will be the new right page) */}
          {currentPage >= -1 && (
            <div 
              className="absolute right-0 top-0 w-1/2 h-full bg-paper rounded-r-sm shadow-[20px_20px_0_0_rgba(0,0,0,1)] overflow-hidden cursor-pointer group border-2 border-black"
              onClick={flipNext}
            >
               <div className="relative w-full h-full transition-opacity duration-500 z-30">
                  {currentPage === -1 ? (
                    null 
                  ) : (
                    <PageContent page={PAGES[currentPage]} index={currentPage} side="right" direction={direction} onNavigate={navigateToPage} />
                  )}
               </div>
               
               {/* Intensified Spine Shadow (Right Page) - Adjusted width per request */}
               <div className="absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-black/40 via-black/20 to-transparent z-40 pointer-events-none" />
               <div className="absolute top-0 left-0 bottom-0 w-5 bg-gradient-to-r from-black/30 to-transparent z-45 pointer-events-none" />

               {/* Corner Triangle Right */}
               {currentPage < PAGES.length - 1 && (
                 <div className="absolute right-4 bottom-4 w-0 h-0 border-t-[17px] border-t-transparent border-l-[26px] border-l-black/30 border-b-[17px] border-b-transparent group-hover:border-l-black transition-colors z-50" />
               )}
            </div>
          )}

          {/* The Turning Page (The moving leaf) */}
          <AnimatePresence mode="popLayout" custom={direction}>
            {isAnimating && (
              <motion.div
                key={currentPage}
                custom={direction}
                initial={{ rotateY: direction === 1 ? 0 : -180 }}
                animate={{ rotateY: direction === 1 ? -180 : 0 }}
                transition={{ 
                  duration: isRapid ? 0.35 : 1.0, 
                  ease: isRapid ? "linear" : [0.645, 0.045, 0.355, 1.000] 
                }}
                className="absolute top-0 left-1/2 w-1/2 h-full z-50 preserve-3d pointer-events-none"
                style={{ transformOrigin: 'left center' }}
              >
                {/* Front of the leaf (Visible at start of forward flip) */}
                <div 
                  className="absolute inset-0 backface-hidden rounded-r-sm shadow-[5px_0_15px_rgba(0,0,0,0.1)] overflow-hidden border-2 border-black"
                  style={{ transform: 'rotateY(0deg)', transformStyle: 'preserve-3d' }}
                >
                  <div className="w-full h-full">
                     {direction === 1 ? (
                        /* Right side of OLD spread - Show simplified view */
                        <PageContent page={PAGES[currentPage - 1]} index={currentPage - 1} side="right" direction={direction} variant="flipping" onNavigate={navigateToPage} />
                     ) : (
                        /* Left side of CURRENT spread - Being flipped back */
                        <PageContent page={PAGES[currentPage + 1]} index={currentPage + 1} side="left" direction={direction} variant="flipping" onNavigate={navigateToPage} />
                     )}
                  </div>
                  {/* Persistent Spine Shadow on Front of Leaf */}
                  <div className="absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-black/40 via-black/20 to-transparent z-40 pointer-events-none" />
                </div>

                {/* Back of the leaf (Visible at end of forward flip) */}
                <div 
                  className="absolute inset-0 backface-hidden rounded-l-sm overflow-hidden border-2 border-black"
                  style={{ transform: 'rotateY(180deg)', transformStyle: 'preserve-3d' }}
                >
                  <div className="w-full h-full">
                     {direction === 1 ? (
                        /* Left side of NEW spread - Revealed after flip */
                        <PageContent page={PAGES[currentPage]} index={currentPage} side="left" direction={direction} variant="flipping" onNavigate={navigateToPage} />
                     ) : (
                        /* Right side of OLD spread - Revealed after flip back */
                        <PageContent page={PAGES[currentPage]} index={currentPage} side="right" direction={direction} variant="flipping" onNavigate={navigateToPage} />
                     )}
                  </div>
                  {/* Persistent Spine Shadow on Back of Leaf */}
                  <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-black/40 via-black/20 to-transparent z-40 pointer-events-none" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Cover Page (Distinct from inner leaves) */}
          {currentPage === -1 && (
            <motion.div
              key="front-cover"
              onClick={flipNext}
              initial={false}
              className="absolute left-1/2 top-0 w-1/2 h-full bg-paper rounded-r-sm shadow-[24px_24px_0_0_rgba(0,0,0,1)] cursor-pointer z-[100] border-l-8 border-gold/20 flex flex-col items-center justify-center p-12 preserve-3d border-2 border-black"
              style={{ transformOrigin: 'left center' }}
              whileHover={{ rotateY: -5 }}
            >
              <GoldFrame isCover />

              {/* Central Emblem */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-12 relative">
                  <div className="absolute inset-0 scale-150 opacity-20 rotate-45 border-4 border-gold" />
                  <div className="absolute inset-0 scale-125 opacity-40 -rotate-12 border border-gold" />
                  <div className="w-48 h-48 border-2 border-gold flex items-center justify-center bg-paper rotate-45 shadow-xl">
                    <div className="rotate-[-45deg] flex flex-col items-center">
                      <span className="font-serif text-5xl mb-2 text-gold">K</span>
                      <div className="w-8 h-px bg-gold" />
                    </div>
                  </div>
                </div>

                <h1 className="font-serif text-[72px] lg:text-[84px] font-light tracking-tight mb-2 text-ink/90 pointer-events-none">About</h1>
                <p className="text-xl font-bold tracking-[10px] uppercase text-gold pointer-events-none mb-12">김기환</p>
                
                <div className="w-16 h-px bg-gold mb-8" />
                
                <div className="text-[12px] opacity-60 font-serif tracking-[0.5em] uppercase pointer-events-none text-ink">
                  Portfolio Book • 2026
                </div>
              </div>

              {/* Enhanced Corner Triangle Right */}
              <div className="absolute right-4 bottom-4 w-0 h-0 border-t-[17px] border-t-transparent border-l-[26px] border-l-gold border-b-[17px] border-b-transparent group-hover:scale-110 transition-transform z-50" />
            </motion.div>
          )}
        </div>

        {/* Floating Bookmarks */}
        {currentPage >= 0 && (
          <>
            <div className="absolute right-[12%] -top-2 z-[60]">
              <motion.div 
                whileHover={{ y: 5 }}
                onClick={() => navigateToPage(0)}
                className="bookmark-ribbon w-[66px] h-[80px] text-white shadow-[5px_5px_0_0_rgba(0,0,0,1)] cursor-pointer flex items-end justify-center pb-4 text-[10px] font-bold uppercase transition-all tracking-wider relative"
              >
                Index
              </motion.div>
            </div>
            <div className="absolute left-[12%] -bottom-2 z-[60]">
               <motion.div 
                whileHover={{ y: -5 }}
                onClick={() => navigateToPage(0)}
                className="bookmark-ribbon-bottom w-[66px] h-[80px] text-white shadow-[5px_5px_0_0_rgba(0,0,0,1)] cursor-pointer flex items-start justify-center pt-4 text-[10px] font-bold uppercase transition-all tracking-wider relative"
              >
                <span className="rotate-180">Index</span>
              </motion.div>
            </div>
          </>
        )}
      </div>

      {/* Guide Footer */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-stone-400 tracking-[0.5em] uppercase opacity-40 pointer-events-none">
         Flip to Explore • Click or Scroll
      </div>
    </div>
  );
}
