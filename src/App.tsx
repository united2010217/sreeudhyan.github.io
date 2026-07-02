import { ArrowRight, Code, Globe, Layout, Smartphone } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#E5E5E5] font-sans relative flex flex-col overflow-hidden">
      {/* JARVIS Vibe Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-blue-500/10 rounded-full blur-[150px]"></div>

        {/* Tech Overlays */}
        <div className="absolute top-8 left-8 text-[#444] font-mono text-[10px] uppercase tracking-widest hidden md:block">
          SYS.RDY // 100%<br />
          LOC: SECURE_NET<br />
          STATUS: ONLINE
        </div>
        <div className="absolute bottom-8 right-8 text-[#444] font-mono text-[10px] uppercase tracking-widest text-right hidden md:block">
          UPLINK ACTIVE<br />
          BANDWIDTH: OPTIMAL<br />
          NODE: 0x8F92A
        </div>

        {/* Decorative Circle Grid */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#222]/50 rounded-full flex items-center justify-center opacity-30">
            <div className="w-[600px] h-[600px] border border-[#333]/50 rounded-full border-dashed animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute w-[400px] h-[400px] border border-[#444]/30 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
        </div>
      </div>

      {/* Background Graphic Element (Legacy) */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-[#222] opacity-30 pointer-events-none"></div>

      {/* Navigation */}
      <nav className="w-full z-50 pt-12 px-8 lg:px-12 flex justify-between items-baseline relative">
        <div className="flex items-center space-x-4">
          <Globe className="h-6 w-6 text-[#555]" />
          <span className="text-2xl font-bold tracking-tighter uppercase">
            Explore <span className="text-[#555]">/</span> Index
          </span>
        </div>
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-medium">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#books" className="hover:text-white transition-colors">Books</a>
          <a href="#numismatics" className="hover:text-white transition-colors">Numismatics</a>
          <a href="#astronomy" className="hover:text-white transition-colors">Astronomy</a>
          <a href="#zensci" className="hover:text-white transition-colors">ZenSci</a>
          <a href="#research" className="hover:text-white transition-colors">Research</a>
          <a href="#apps" className="hover:text-white transition-colors">Apps</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div>
          <button className="text-[10px] uppercase tracking-[0.3em] font-medium border border-[#333] px-6 py-3 hover:bg-white hover:text-black transition-colors">
            Get in touch
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-8 lg:px-12 mx-auto flex flex-col max-w-7xl w-full z-10">
        <div className="flex flex-col relative z-10">
          <div className="text-[10px] uppercase tracking-[0.5em] text-[#555] mb-8 leading-relaxed">
            Author, Astronomer, Numismatist, Researcher and a Founder
          </div>
          <h1 className="text-6xl md:text-[100px] leading-[0.85] font-serif italic tracking-tighter text-white max-w-5xl">
            Sree
          </h1>
          <div className="flex flex-col md:flex-row md:items-end gap-8 mt-4">
            <h2 className="text-6xl md:text-[100px] leading-[0.85] font-serif italic tracking-tighter text-white md:ml-24">
              Udhyan
            </h2>
            <div className="mb-2 md:mb-4 max-w-sm">
              <p className="text-[11px] leading-relaxed text-[#888] uppercase tracking-wider">
                "Exploring ideas, one project at a time."
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-8 mt-24 md:ml-24 z-10 items-start">
          <button className="flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.3em] font-medium border border-cyan-500/50 bg-cyan-500/10 text-cyan-400 px-8 py-4 hover:bg-cyan-500/20 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all group">
            View My Work
            <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
          </button>
          <button className="text-[10px] uppercase tracking-[0.3em] font-medium border border-[#333] px-8 py-4 text-[#888] hover:text-white hover:border-[#555] transition-colors">
            Contact Me
          </button>
        </div>
        
        {/* Decorative Circular HUD */}
        <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-cyan-900/30 rounded-full items-center justify-center pointer-events-none z-0">
          <div className="absolute w-[300px] h-[300px] border-t border-r border-blue-500/40 rounded-full animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute w-[350px] h-[350px] border-b border-l border-cyan-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
          <div className="w-56 h-56 border border-[#333] rounded-full opacity-50 flex items-center justify-center">
            <div className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_2px_rgba(6,182,212,0.8)]"></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-32 px-8 lg:px-12 relative border-t border-[#222] z-10 bg-[#0F0F0F]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-24">
            <h2 className="text-4xl md:text-7xl font-serif italic tracking-tighter text-white">Selected Works</h2>
            <p className="text-[11px] leading-relaxed text-[#888] uppercase tracking-wider max-w-md mt-6 md:mt-0 text-left md:text-right">
              A collection of recent projects exploring web development, interactive design, and creative engineering.
            </p>
          </div>
          <div className="flex flex-col mt-12 border-b border-[#222]">
            <ProjectRow 
              icon="📚"
              title="Book Publication"
              description="Novels, scientific literature, and guided journals I have authored and published."
            />
            <ProjectRow 
              icon="🔭"
              title="Astronomy"
              description="Exploring the cosmos, sharing observations, and studying celestial phenomena."
            />
            <ProjectRow 
              icon="🚀"
              title="ZenSci_Astronomy"
              description="My dedicated platform and community for all things related to space and science."
            />
            <ProjectRow 
              icon="🧪"
              title="Research"
              description="Deep dives into scientific literature, historical data, and new discoveries."
            />
            <ProjectRow 
              icon="💻"
              title="Apps"
              description="Software projects and digital tools built to solve interesting problems."
            />
            <ProjectRow 
              icon="🪙"
              title="Coins"
              description="A curated collection and study of rare coins from around the world."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 lg:px-12 relative border-t border-[#222] z-10 bg-[#0F0F0F]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="lg:w-1/3">
             <h2 className="text-4xl md:text-7xl font-serif italic tracking-tighter text-white sticky top-32">About</h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-8 text-[#E5E5E5] text-sm md:text-base leading-relaxed max-w-2xl font-light">
             <p>Hello! I'm Sree Udhyan, a student, author, founder, researcher, astronomy enthusiast, and numismatist. Those titles might make it seem like I had everything planned from the beginning, but the truth is much simpler.</p>
             <p className="text-2xl md:text-4xl font-serif italic text-white my-4">"I've always been curious."</p>
             <p>Ever since I was young, I found myself asking questions that didn't have simple answers. Why does the universe exist? What lies beyond what we can observe? How did civilizations rise and fall? What stories can an old coin tell? Most people eventually stop asking "why." I never really did.</p>
             <p>That curiosity has shaped almost everything I've done.</p>
             <p>My journey into writing began with stories. I spent countless hours reading, imagining, and creating worlds of my own. Over time, those ideas grew into manuscripts, and those manuscripts eventually became published books. Writing taught me more than storytelling. It taught me patience, discipline, and the importance of finishing what I start. Every book I write represents a chapter of my own growth as much as it represents a story for my readers.</p>
             <p>While writing gave me a way to express my imagination, astronomy gave me a reason to keep asking questions. Looking up at the night sky reminded me that every answer humanity discovers only reveals even greater mysteries waiting to be explored. The more I learned about the universe, the more fascinated I became by astrophysics, cosmology, and scientific research.</p>
             <p>As my interest in astronomy grew, I realized I wanted to create something larger than myself. That idea eventually became ZenSci_Astronomy, an organization dedicated to encouraging scientific curiosity, astronomy education, and collaborative learning. What started as an idea gradually transformed into real projects, meaningful collaborations, and opportunities to connect with people who share the same passion for science.</p>
             <p>Research naturally became the next step in that journey. For me, research is not simply about publishing papers or finding answers. It is about questioning assumptions, exploring possibilities, and remaining open to new ideas. Every project reminds me that knowledge is never complete, and that is exactly what makes science exciting.</p>
             <p>My curiosity doesn't stop with astronomy. I also have a deep interest in numismatics. Every coin represents a small piece of human history. Holding a coin that has travelled through different generations is like holding a tiny historical document. It tells stories of cultures, economies, rulers, and civilizations that textbooks often summarize in just a few paragraphs.</p>
             <p>Alongside writing and research, I enjoy building technology. Programming has allowed me to transform ideas into practical solutions, whether through applications, digital tools, or experimental projects. I believe technology and science should work together to make learning more accessible and engaging.</p>
             <p>People often ask me how I manage to balance writing, research, astronomy, technology, and my studies. The honest answer is that I don't think of them as separate things. They are all connected by a single idea: curiosity. Every book begins with a question. Every research project begins with a question. Every application begins with a question. Every discovery begins with someone asking, "What if?"</p>
             <p>Today, I continue to write books, develop research projects, build applications, expand ZenSci_Astronomy, and explore the fascinating worlds of astronomy and numismatics. Each project teaches me something new, and every experience reminds me that learning is a lifelong journey.</p>
             <p>I don't believe I've achieved everything I want to achieve. In many ways, I feel like I'm only getting started. There are still stories left to write, ideas waiting to be built, mysteries hidden among the stars, and countless questions yet to be asked.</p>
             <p>If there's one thing I'd like people to remember about me, it isn't the titles I've collected or the projects I've completed.</p>
             <p className="text-2xl md:text-4xl font-serif italic text-white mt-8 border-l-2 border-[#555] pl-8">"I'd rather be remembered as someone who never stopped being curious."</p>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="py-32 px-8 lg:px-12 relative border-t border-[#222] z-10 bg-[#0F0F0F]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-24">
            <h2 className="text-4xl md:text-7xl font-serif italic tracking-tighter text-white">Publications</h2>
            <p className="text-[11px] leading-relaxed text-[#888] uppercase tracking-wider max-w-md mt-6 md:mt-0 text-left md:text-right">
              Novels, scientific literature, and guided journals I have authored and published.
            </p>
          </div>
          <div className="flex flex-col gap-24">
            <BookItem 
              year="2023"
              title="LIMTER: THE SUPERIOR LEGEND"
              category="Fiction | Action | Adventure | Mystery"
              description="My debut novel, LIMTER: THE SUPERIOR LEGEND, marked the beginning of my journey as a published author. Driven by action, mystery, and imagination, the story follows a world where courage, sacrifice, and the search for truth shape every decision. More than my first publication, this book represents the moment I transformed years of ideas into a story that readers could experience. It remains a milestone that sparked my passion for writing and storytelling."
              links={[
                { label: "Amazon (USD)", url: "https://www.amazon.in/Limter-Superior-Legend-Sree-Udhyan/dp/B0CF4CXVJT" },
                { label: "Indian Market", url: "https://store.pothi.com/book/m-sree-udhyan-ram-limter-superior-legend/" }
              ]}
            />
            <BookItem 
              year="2024"
              title="The Cosmic Chronology: Space and Time"
              category="Astronomy | Popular Science"
              description="Inspired by my fascination with the universe, The Cosmic Chronology: Space and Time explores the evolution of the cosmos, from the birth of space and time to the large-scale structures that define our universe today. Written with the aim of making astronomy engaging and accessible, the book introduces readers to complex scientific ideas in a way that encourages curiosity and exploration. It reflects my belief that every discovery begins with a single question."
              links={[
                { label: "Amazon (USD)", url: "https://www.amazon.in/Cosmic-Chronology-Space-Time/dp/B0DJQJXDWZ/ref=tmm_pap_swatch_0" },
                { label: "Indian Market", url: "https://store.pothi.com/book/m-sree-udhyan-ram-cosmic-chronology-space-and-time/" }
              ]}
            />
            <BookItem 
              year=""
              title="My Seeking Journey of This Year"
              category="Guided Reflection Journal"
              description="My Seeking Journey of This Year is a guided journal designed to help readers reflect on their personal growth, goals, experiences, and lessons throughout the year. It provides a dedicated space for recording milestones, celebrating progress, and embracing self-discovery. Rather than telling a story, this book encourages readers to write their own."
              links={[
                { label: "Buy on Amazon", url: "https://www.amazon.com/stores/Mr-Sree-Udhyan-.M/author/B0CFHG9Y3F" }
              ]}
            />
            <BookItem 
              year=""
              title="Me, Mine and Myself"
              category="Self-Reflection Journal"
              description="Me, Mine and Myself is a personal reflection journal created to encourage mindfulness, gratitude, and self-awareness. Through thoughtfully designed pages, it offers readers a quiet space to organize their thoughts, express their emotions, and better understand themselves. It serves as a companion for anyone seeking clarity, personal growth, and meaningful reflection in everyday life."
              links={[
                { label: "Buy on Amazon", url: "https://www.amazon.com/stores/Mr-Sree-Udhyan-.M/author/B0CFHG9Y3F" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Numismatics Section */}
      <section id="numismatics" className="py-32 px-8 lg:px-12 relative border-t border-[#222] z-10 bg-[#0F0F0F]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="lg:w-1/3">
             <h2 className="text-4xl md:text-7xl font-serif italic tracking-tighter text-white sticky top-32">Numismatics</h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-8 text-[#E5E5E5] text-sm md:text-base leading-relaxed max-w-2xl font-light">
             <p className="text-2xl md:text-4xl font-serif italic text-white mb-4">Preserving History, One Coin at a Time</p>
             <p>My fascination with history extends beyond books and research. It lives in the palm of my hand through my coin collection.</p>
             <p>Numismatics has become one of my most rewarding hobbies because every coin represents a unique chapter of human civilization. From the rulers who issued them to the economies they supported and the events they silently witnessed, coins are far more than pieces of metal. They are historical artifacts that have travelled across generations.</p>
             <p>Over the years, I have built a diverse collection featuring more than ten different currencies from around the world. My collection includes Indian commemorative ₹5 coins, British Indian coinage, modern and historical foreign coins, and several pieces that hold significant historical and collectible value.</p>
             <p>Among the highlights of my collection is an 1835 British India Quarter Anna, one of the oldest and most treasured coins in my collection. Minted during the reign of William IV, it represents an important period in the history of British Indian coinage and remains one of my most valued possessions.</p>
             <p>For me, collecting coins is not simply about rarity or value. Every coin tells a story. Some speak of empires, some of independence, and others of technological and artistic progress. Building this collection has allowed me to connect with history in a way that textbooks alone never could.</p>
             <p>As my collection continues to grow, so does my appreciation for the cultures, economies, and civilizations that each coin represents. Every new addition is another small piece of history preserved for the future.</p>
          </div>
        </div>
      </section>

      {/* Astronomy Section */}
      <section id="astronomy" className="py-32 px-8 lg:px-12 relative border-t border-[#222] z-10 bg-[#0F0F0F]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="lg:w-1/3">
             <h2 className="text-4xl md:text-7xl font-serif italic tracking-tighter text-white sticky top-32">Astronomy</h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-8 text-[#E5E5E5] text-sm md:text-base leading-relaxed max-w-2xl font-light">
             <p className="text-2xl md:text-4xl font-serif italic text-white mb-4">A Lifelong Curiosity</p>
             <p>Astronomy has always been more than just an interest to me. It is the field that continually reminds me how vast the universe is and how much remains to be discovered. Every new concept I learn, from planetary science to cosmology, only deepens my curiosity and motivates me to keep exploring.</p>
             <p>As a self-directed learner, I have completed several online courses in Astronomy and Basic Astrophysics, building a strong foundation in celestial mechanics, stellar evolution, galaxies, cosmology, and the fundamental principles that govern our universe. These courses have complemented my independent study and strengthened my understanding of modern astronomy.</p>
             <p>Beyond formal courses, I dedicate a significant amount of time to continuous learning through scientific literature, educational lectures, documentaries, and research-based content. One of the educators who has greatly influenced my learning journey is Professor Dave Explains, whose clear and structured explanations have helped me understand many complex concepts in astronomy, physics, and related sciences.</p>
             <p>Learning, for me, does not end with a completed course. I actively follow scientific discoveries, space missions, and advancements in astrophysics through reliable educational resources and regularly engage with astronomy-related content to expand my knowledge. Whether it is understanding the life cycle of stars, exploring black holes, or following the latest discoveries from modern observatories, I believe every new discovery offers another opportunity to learn.</p>
             <p>My passion for astronomy eventually inspired me to establish ZenSci_Astronomy, an initiative dedicated to promoting scientific curiosity, astronomy education, and collaborative learning. Through this organization, I aim to encourage more students and enthusiasts to explore the universe, ask questions, and develop a deeper appreciation for science.</p>
             <p>For me, astronomy is not simply the study of celestial objects. It is a reminder that curiosity has no boundaries, and that every answer we discover reveals countless new questions waiting to be explored.</p>
          </div>
        </div>
      </section>

      {/* ZenSci Section */}
      <section id="zensci" className="py-32 px-8 lg:px-12 relative border-t border-[#222] z-10 bg-[#0F0F0F]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="lg:w-1/3">
             <h2 className="text-4xl md:text-7xl font-serif italic tracking-tighter text-white sticky top-32">ZenSci Astronomy</h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-8 text-[#E5E5E5] text-sm md:text-base leading-relaxed max-w-2xl font-light">
             <p>ZenSci_Astronomy was founded with a simple vision: to make astronomy more accessible, engaging, and collaborative for students and enthusiasts around the world. What began as an idea driven by curiosity has gradually grown into a platform where people can learn, discuss, and explore the wonders of the universe together.</p>
             <p>At ZenSci_Astronomy, we believe that science should never be limited by classrooms or geographical boundaries. Curiosity is universal, and so should be the opportunity to learn.</p>
             
             <h3 className="text-2xl font-serif italic text-white mt-8 mb-4">Our Mission</h3>
             <p>Our mission is to inspire scientific curiosity by providing accessible astronomy education, fostering collaboration among learners, and creating opportunities for individuals to engage with the fascinating world of astronomy, astrophysics, cosmology, and space science.</p>
             
             <h3 className="text-2xl font-serif italic text-white mt-8 mb-4">What We've Accomplished</h3>
             <p>Although we are still in the early stages of our journey, we have already taken meaningful steps toward our vision.</p>
             
             <h4 className="text-xl text-white font-medium mt-4">Four-Day Astronomy Workshop</h4>
             <p>One of our first major initiatives was organizing a four-day online workshop covering the fundamentals of: Astronomy, Astrophysics, Cosmology, and Astrobiology.</p>
             <p>The workshop was designed to introduce learners to these fascinating fields in an approachable and engaging manner, helping participants develop a strong conceptual foundation while encouraging them to ask questions and think scientifically.</p>
             
             <h4 className="text-xl text-white font-medium mt-4">Building a Global Community</h4>
             <p>Understanding that learning continues beyond workshops, we established dedicated communities for astronomy enthusiasts across multiple platforms, including Discord and WhatsApp.</p>
             <p>These communities provide a space where members from different parts of the world can:</p>
             <ul className="list-disc pl-6 space-y-2 text-[#888]">
               <li>Discuss astronomy and space science</li>
               <li>Share discoveries and scientific news</li>
               <li>Ask questions and learn together</li>
               <li>Connect with fellow enthusiasts</li>
               <li>Participate in future events and collaborative projects</li>
             </ul>
             
             <h3 className="text-2xl font-serif italic text-white mt-8 mb-4">Looking Ahead</h3>
             <p>ZenSci_Astronomy is only at the beginning of its journey. Our long-term vision is to expand into a global platform for astronomy education through workshops, research collaborations, educational resources, outreach programs, and innovative projects that inspire the next generation of scientists and explorers. Our upcoming mission is named as Project V which is expected to be launched soon in 2026.</p>
             <p>Every great discovery begins with curiosity, and at ZenSci_Astronomy, we hope to help more people take that very first step toward exploring the universe.</p>
             
             <div className="mt-8">
               <a 
                 href="https://zensci.my.canva.site/zensciastro" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-block text-[10px] uppercase tracking-[0.3em] font-medium border border-[#333] px-8 py-4 hover:bg-white hover:text-black transition-colors"
               >
                 Visit Website
               </a>
             </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-32 px-8 lg:px-12 relative border-t border-[#222] z-10 bg-[#0F0F0F]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="lg:w-1/3">
             <h2 className="text-4xl md:text-7xl font-serif italic tracking-tighter text-white sticky top-32">Research</h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-8 text-[#E5E5E5] text-sm md:text-base leading-relaxed max-w-2xl font-light">
             <p className="text-[10px] uppercase tracking-[0.5em] text-[#555]">ORCID: 0009-0003-4668-7901</p>
             <p>Curiosity has always been the foundation of my academic journey. While books allow me to tell stories, research allows me to ask questions about the universe and seek evidence-based answers. My research interests primarily focus on astronomy, astrophysics, cosmology, and stellar physics, where I combine publicly available scientific data with computational analysis to investigate celestial objects and their physical properties.</p>
             <p>As an independent student researcher, I utilize data from internationally recognized astronomical missions and archives, including Gaia DR3, the Zwicky Transient Facility (ZTF), 2MASS, and AllWISE, to study stars and their evolution. My work emphasizes scientific methodology, data analysis, and the interpretation of observational evidence while continually expanding my understanding of modern astrophysics.</p>
             <p>Every research project represents another step in my journey of learning, questioning, and contributing to scientific exploration.</p>
             
             <h3 className="text-2xl font-serif italic text-white mt-8 mb-4">Featured Research</h3>
             <h4 className="text-xl text-white font-medium mt-4 leading-normal">Multi-Wavelength Characterization and Variability Assessment of the G-type Solar Analogue Gaia DR3 3130488240559447296 in Monoceros R2</h4>
             <p>This research presents a comprehensive astrophysical study of the stellar source Gaia DR3 3130488240559447296, located within the Monoceros R2 molecular cloud complex. By integrating high-precision astrometric data, multi-epoch photometric observations, and multi-wavelength infrared analysis, I determined the star's physical characteristics, evolutionary stage, and environmental context.</p>
             <p>The study establishes the object as a stable G-type main-sequence solar analogue, approximately 2,988 light-years from Earth, with an effective temperature of 5,997 K, a luminosity of approximately 1.30 times that of the Sun, and a radius of 1.06 solar radii. Analysis of more than 450 photometric observations revealed no statistically significant intrinsic variability, confirming the star's long-term photometric stability.</p>
             <p>Infrared observations further demonstrated the absence of circumstellar dust, while kinematic analysis confirmed that a nearby apparent companion is an optical double rather than a gravitationally bound binary system. The research highlights the scientific significance of identifying a mature, Sun-like star within the dynamic Monoceros R2 star-forming region and discusses its potential as a promising candidate for future spectroscopic investigations and exoplanet studies.</p>
             
             <div className="flex flex-wrap gap-4 mt-8">
               <a 
                 href="https://doi.org/10.5281/zenodo.20324639" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-block text-[10px] uppercase tracking-[0.3em] font-medium border border-[#333] px-6 py-3 hover:bg-white hover:text-black transition-colors"
               >
                 DOI
               </a>
               <a 
                 href="https://doi.org/10.6084/m9.figshare.32578077" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-block text-[10px] uppercase tracking-[0.3em] font-medium border border-[#333] px-6 py-3 hover:bg-white hover:text-black transition-colors"
               >
                 DOI (Figshare)
               </a>
             </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="py-32 px-8 lg:px-12 relative border-t border-[#222] z-10 bg-[#0F0F0F]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="lg:w-1/3">
             <h2 className="text-4xl md:text-7xl font-serif italic tracking-tighter text-white sticky top-32">App Development</h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-8 text-[#E5E5E5] text-sm md:text-base leading-relaxed max-w-2xl font-light">
             <p>Technology has become another way for me to transform ideas into reality.</p>
             <p>Although I am relatively new to app development, I have embraced it as a self-directed learning journey. Through experimentation, documentation, and AI-assisted learning, I have taught myself the fundamentals of designing and developing applications. Every project has been an opportunity to solve problems, improve my skills, and better understand how technology can make knowledge more accessible.</p>
             <p>For me, programming is not simply about writing code. It is about creating solutions that have a meaningful impact. Whether it is building educational tools, simplifying complex tasks, or developing platforms that encourage learning, I enjoy turning concepts into functional applications that people can use.</p>
             <p>My current focus is on developing applications that support scientific education and community engagement through ZenSci_Astronomy. By combining my interests in science and technology, I aim to create digital experiences that make astronomy more interactive, accessible, and engaging for learners of all backgrounds.</p>
             
             <h3 className="text-2xl font-serif italic text-white mt-8 mb-4">Project V</h3>
             <p>One of my most exciting ongoing projects is Project V, an upcoming application developed under ZenSci_Astronomy. While still under development, Project V is designed to bring together innovation, education, and accessibility into a single platform that will support the growing astronomy community.</p>
             <p>As development continues, more details will be revealed. The project represents an important milestone in my journey as a developer and reflects my commitment to building technology that inspires curiosity and learning.</p>
             <p>I believe that every application begins with a simple idea. What transforms that idea into something meaningful is persistence, continuous learning, and the willingness to improve with every version.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-24 px-8 lg:px-12 border-t border-[#222] relative z-10 bg-[#0F0F0F]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="flex flex-col gap-8 max-w-sm">
            <div className="flex items-center space-x-4">
              <Globe className="h-6 w-6 text-[#555]" />
              <span className="text-2xl font-bold tracking-tighter uppercase text-white">
                Sree Udhyan
              </span>
            </div>
            <p className="text-[11px] leading-relaxed text-[#888] uppercase tracking-wider">
              "Exploring ideas, one project at a time."
            </p>
          </div>
          
          <div className="flex flex-row gap-16 md:gap-32">
            <div>
              <h3 className="text-[10px] text-[#555] uppercase tracking-[0.5em] mb-8">Links</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-[11px] uppercase tracking-wider text-[#E5E5E5] hover:text-white transition-colors">Home</a></li>
                <li><a href="#work" className="text-[11px] uppercase tracking-wider text-[#E5E5E5] hover:text-white transition-colors">Work</a></li>
                <li><a href="#about" className="text-[11px] uppercase tracking-wider text-[#E5E5E5] hover:text-white transition-colors">About</a></li>
                <li><a href="#books" className="text-[11px] uppercase tracking-wider text-[#E5E5E5] hover:text-white transition-colors">Books</a></li>
                <li><a href="#numismatics" className="text-[11px] uppercase tracking-wider text-[#E5E5E5] hover:text-white transition-colors">Numismatics</a></li>
                <li><a href="#astronomy" className="text-[11px] uppercase tracking-wider text-[#E5E5E5] hover:text-white transition-colors">Astronomy</a></li>
                <li><a href="#zensci" className="text-[11px] uppercase tracking-wider text-[#E5E5E5] hover:text-white transition-colors">ZenSci</a></li>
                <li><a href="#research" className="text-[11px] uppercase tracking-wider text-[#E5E5E5] hover:text-white transition-colors">Research</a></li>
                <li><a href="#apps" className="text-[11px] uppercase tracking-wider text-[#E5E5E5] hover:text-white transition-colors">Apps</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] text-[#555] uppercase tracking-[0.5em] mb-8">Connect</h3>
              <ul className="space-y-4">
                <li><a href="mailto:united2010217@gmail.com" className="text-[11px] uppercase tracking-wider text-[#E5E5E5] hover:text-white transition-colors">Email</a></li>
                <li><a href="https://instagram.com/untitledwriter172599" target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-wider text-[#E5E5E5] hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-32 flex flex-col md:flex-row justify-between items-end md:items-center">
          <div className="text-[10px] uppercase tracking-widest text-[#555]">
            &copy; 2026 Sree Udhyan. All rights reserved.
          </div>
          <div className="flex space-x-8 mt-8 md:mt-0">
            <a href="#" className="text-[10px] uppercase tracking-widest text-[#555] hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-[#555] hover:text-white transition-colors">Terms</a>
          </div>
        </div>
        
        {/* Corner Accent like in design */}
        <div className="hidden md:block absolute bottom-8 left-8">
          <div className="text-[8px] text-[#333] rotate-90 origin-bottom-left uppercase tracking-widest">
            Built with intent
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectRow({ icon, title, description }: { icon: string, title: string, description: string }) {
  return (
    <div className="group flex flex-col md:flex-row md:items-center py-12 md:py-16 border-t border-[#222] hover:bg-[#151515] transition-all duration-500 cursor-pointer px-4 -mx-4 lg:px-8 lg:-mx-8">
      <div className="text-3xl md:text-4xl mb-6 md:mb-0 md:w-32 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 origin-left">
        {icon}
      </div>
      <div className="flex-1 md:pr-12">
        <h3 className="text-4xl md:text-6xl font-serif italic tracking-tighter text-white group-hover:text-[#AAA] group-hover:translate-x-4 transition-all duration-500 mb-4">{title}</h3>
      </div>
      <div className="md:w-1/3 lg:w-1/4 mt-4 md:mt-0 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-[11px] leading-relaxed text-[#888] group-hover:text-[#CCC] transition-colors uppercase tracking-wider">
          {description}
        </p>
      </div>
    </div>
  );
}

function BookItem({ year, title, category, description, links }: { year: string, title: string, category: string, description: string, links: { label: string, url: string }[] }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start group relative">
      <div className="md:w-1/4 flex flex-col gap-4">
        {year && <div className="text-[10px] uppercase tracking-[0.5em] text-[#555]">{year}</div>}
        <div className="text-[10px] uppercase tracking-[0.2em] text-[#888] font-medium leading-relaxed border-l border-[#333] pl-4">{category}</div>
      </div>
      <div className="md:w-3/4 flex flex-col gap-6">
        <h3 className="text-3xl md:text-5xl font-serif italic tracking-tighter text-white group-hover:text-[#CCC] transition-colors">{title}</h3>
        <p className="text-sm md:text-base leading-relaxed text-[#888] font-light max-w-2xl">
          {description}
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.3em] font-medium border border-[#333] px-6 py-3 hover:bg-white hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

