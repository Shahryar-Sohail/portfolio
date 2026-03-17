import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Problem Solver, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Shahryar Sohail"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Shahryar Sohail, a final-year BS Software Engineering student at UMT with{" "}
                <span className="font-bold text-white">
                  8 months of internship experience
                </span>{" "}
                in full-stack development.
              </p>
              <p className="text-white">
                Specialized in MERN and Django stacks, building secure, scalable web apps with AI integration using RAG and LangChain. Passionate about creating efficient, user-friendly applications that solve real-world problems.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner driven by curiosity and a passion for technology. From building e-commerce platforms to AI-powered RAG pipelines, I strive to deliver scalable and impactful solutions that make a difference.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Shahryar Sohail — Software Engineer
                    </cite>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <span>📍 Township, Lahore</span>
                      <span>·</span>
                      <span>🎓 UMT (Graduating July 2026)</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
