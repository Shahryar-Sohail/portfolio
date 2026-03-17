import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import aceofblade from "../../assets/images/fullScreenShot.jpg";
import sms from "../../assets/images/sms.png";
import finder from "../../assets/images/finder.jpg";
import tweeter from "../../assets/images/tweeter.jpg";
import health from "../../assets/images/health.jpg";
import leads from "../../assets/images/leads.jpg";

const projects = [
  {
    title: "Local RAG Assistant (LangChain & Ollama)",
    description:
      "Created a Local RAG Pipeline using LangChain and Ollama, processing queries with 95% accuracy. Optimized a FAISS Vector Store with 1024-dim embedding for high-speed semantic search.",
    src: "rock.jpg",
    link: "https://i.postimg.cc/DwgWTfP0/Annotation-2025-03-19-113338.png",
    color: "#5196fd",
    githubLink: "https://github.com/Shahryar-Sohail/local-rag",
    liveLink: "https://github.com/Shahryar-Sohail/local-rag",
  },
  {
    title: "Ecommerce Website (React + Firebase)",
    description:
      "Features like Add to Cart, Checkout, Login, fetching real-time data for an admin panel using Firebase. Products and checkout details on Admin Panel with 20% faster load times via lazy loading.",
    src: "fullScreenShot.jpg",
    link: aceofblade,
    color: "#8f89ff",
    githubLink: "https://github.com/Shahryar-Sohail/AceOfBlades",
    liveLink: "https://ace-of-blades-xst2.vercel.app/",
  },
  {
    title: "Student Management System (MERN Stack)",
    description:
      "Developed secure CRUD operations with encrypted authentication, managing attendance for 100+ users. Mark and view student attendance with respect to dates.",
    src: "sms.png",
    link: sms,
    color: "#fff",
    githubLink: "https://github.com/Shahryar-Sohail/StudentManagementSystem",
    liveLink: "https://sms-one-phi.vercel.app/",
  },
  {
    title: "GitHub Repository & User Finder (Next.js)",
    description:
      "Architected an open-source tool using GitHub API for profile exploration used by 200+ developers. Explore user followers, following and repositories.",
    src: "finder.PNG",
    link: finder,
    color: "#ed649e",
    githubLink: "https://github.com/Shahryar-Sohail/github-finder",
    liveLink: "https://github-finder-olive-iota.vercel.app/",
  },
  {
    title: "Twitter-like Platform (Django)",
    description:
      "Built a Twitter clone app with CRUD, image uploading, and secure auth (password checks, protected routes). User-based tweet management — each user can edit/delete their own tweets only.",
    src: "tweeter.jpg",
    link: tweeter,
    color: "#1DA1F2",
    githubLink: "https://github.com/Shahryar-Sohail/Twitter-Django",
    liveLink: "https://shahryarsohail.pythonanywhere.com/",
  },
  {
    title: "Mental Report n8n Workflow",
    description:
      "🧠 Mental health automation workflow: Webhook ➡️ Groq AI ➡️ Colorful HTML Email. 💌 Personalized wellness scores delivered in real-time! ⚡️🔥",
    src: "health.jpg",
    link: health,
    color: "#ed649e",
    githubLink: "https://github.com/Shahryar-Sohail/mental-report-n8n",
    liveLink: "mental-report-n8n.vercel.app",
  },
  {
    title: "Dental Appointment n8n Workflow",
    description:
      "🦷 Dental Care On-the-Go! 🏥 Fill out the appointment form and get an instant confirmation email delivered straight to your inbox! 📩✨ ✨ Smart Scheduling 📅 + Automated Emailing 📧 — Making dental bookings smooth, fast, and completely digital! 🦷💻🚀",
    src: "leads.jpg",
    link: leads,
    color: "#5196fd",
    githubLink: "https://github.com/Shahryar-Sohail/dental-appointment-n8n",
    liveLink: "https://dental-appointment-n8n.vercel.app/",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  const cardProjectItems = projects.map((project, i) => (
    <ProjectGridCard key={`grid_${i}`} project={project} index={i} />
  ));

  const animatedProjectItems = projects.map((project, i) => {
    const targetScale = 1 - (projects.length - i) * 0.05;
    return (
      <Card
        key={`p_${i}`}
        i={i}
        url={project.link}
        title={project.title}
        color={project.color}
        description={project.description}
        progress={scrollYProgress}
        range={[i * 0.25, 1]}
        targetScale={targetScale}
        githubLink={project.githubLink}
        liveLink={project.liveLink}
      />
    );
  });

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="bg-slate-950 px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10">
              Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">{cardProjectItems}</div>
          </div>
        </section>

        <section className="text-white w-full bg-slate-950">{animatedProjectItems}</section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ProjectGridCard({ project, index }) {
  return (
    <motion.article
      className="rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
    >
      <div className="relative h-52 sm:h-60 overflow-hidden">
        <img src={project.link} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute top-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
          Project {index + 1}
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: project.color }}
          />
          <span className="text-zinc-400 text-xs uppercase tracking-widest">Featured</span>
        </div>

        <h3 className="text-white text-lg sm:text-xl font-semibold mb-3">{project.title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-5">{project.description}</p>

        <div className="flex items-center gap-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium"
            style={{ color: project.color }}
          >
            Code
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium"
            style={{ color: project.color }}
          >
            Live
          </a>
        </div>
      </div>
    </motion.article>
  );
}
// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};

ProjectGridCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    liveLink: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
