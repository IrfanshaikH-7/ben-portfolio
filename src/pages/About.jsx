import { about, ben_img_18, ben_img_22 } from "../assets";

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-black text-white px-8 py-12 flex items-center">
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute right-0 left-0 mx-auto w-[400px] h-[600px] top-1/2 -translate-y-1/2 scale-75 mt-8">
            <img
              src={about}
              alt="Portrait"
              className="w-full h-full object-cover grayscale opacity-80"
            />
          </div>

          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 font-glock">
              Hi, I&apos;m Benjamin
            </h1>

            <div className="text-orange-500">
              <p className="text-xl md:text-2xl font-semibold font-glock">
                <span className="mx-2"></span>
                <span>Tech Enthusiast</span>
                <br />
                <span className="mx-2">/</span>
                <span>
                  Avid Learner <br />
                  Visionaryl
                </span>
                <span className="mx-2">/</span>
                <span>
                  Passionate <br /> Professional
                </span>
              </p>
            </div>
            <div className="flex-end flex flex-col justify-end items-end">
              <div className="mt-24 max-w-sm">
                <p className="text-xs leading-relaxed font-glock">
                  Benjamin E. Miller is a seasoned professional with a strong
                  background in organizational leadership, strategic planning,
                  and team development. He specializes in leveraging data-driven
                  insights to drive operational efficiency and foster
                  innovation. With a passion for empowering individuals and
                  organizations, Benjamin delivers tailored solutions that align
                  with unique business goals. His expertise spans streamlining
                  processes, enhancing collaboration, and achieving measurable
                  success. Committed to continuous growth, he thrives in dynamic
                  environments, creating value at every step. Explore his
                  portfolio to see how Benjamin can help transform challenges
                  into opportunities.
                </p>
              </div>

              <button className="bg-orange-500 text-white px-8 py-4 hover:bg-[#8EB486] transition-colors">
                WORK WITH ME
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" text-black mt-40 py-16 gap-6 flex px-8 max-w-6xl mx-auto">
        <div className="flex-1 flex  flex-col gap-6 text-sm mt-0.5">
          <h2 className="py-2 flex items-center justify-center  text-6xl font-bold font-glock">
            <p className="text-blue-900">Ben&apos;s Parsona</p>
          </h2>
          <div className="aspect-square max-h-[600px] w-full  shadow-xl  ">
            <img
              src={ben_img_22}
              alt="Portrait"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="aspect-[19/21.7] w-full p-6 bg-slate-600  ">
            <h2 className="text-4xl font-bold mb-4">
              The Global Business Strategist
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              Benjamin&rsquo;s experience includes exposure to international
              markets, providing him with a global perspective on business
              operations.
            </p>
            <h2 className="text-xl font-bold mb-4 -pb-2">Key Traits:</h2>
            <ul className="text-sm leading-relaxed mb-4 list-disc pl-4">
              <li>
                Cultural Awareness: Understands the nuances of conducting
                business across different cultures and adapts strategies
                accordingly.
              </li>
              <li>
                Market Analyst: Proficient in analyzing global market trends to
                identify opportunities for expansion.
              </li>
              <li>
                Network Builder: Establishes and maintains relationships with
                key stakeholders worldwide.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-4 -pb-2">
              Professional Goals:
            </h2>
            <ul className="text-sm leading-relaxed mb-4 list-disc pl-4">
              <li>
                To expand the organization&rsquo;s presence in international
                markets through strategic initiatives
              </li>
              <li>
                To leverage global networks to drive business growth and
                innovation.
              </li>
            </ul>
            <button className="bg-black text-white px-8 py-3 mx-auto hover:bg-gray-800 transition-colors">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6 ">
          <div className="aspect-[19/21.7] w-full p-6 bg-slate-600  ">
            <h2 className="text-4xl font-bold mb-4">
              The Strategic
              <br />
              Financial Leader
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              Benjamin E. Miller has a robust background in finance, holding key
              positions that have honed his expertise in financial analysis,
              strategic planning, and investment management.
            </p>
            <h2 className="text-xl font-bold mb-4 -pb-2">Key Traits:</h2>
            <ul className="text-sm leading-relaxed mb-4 list-disc pl-4">
              <li>
                Analytical Thinker: Demonstrates a keen ability to dissect
                complex financial data to inform strategic decisions.
              </li>
              <li>
                Risk Manager: Skilled in identifying potential financial risks
                and implementing measures to mitigate them.
              </li>
              <li>
                Strategic Planner: Adept at developing long-term financial
                strategies that align with organizational goals.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-4 -pb-2">
              Professional Goals:
            </h2>
            <ul className="text-sm leading-relaxed mb-4 list-disc pl-4">
              <li>
                To lead financial teams in optimizing resource allocation and
                maximizing profitability.
              </li>
              <li>
                To stay abreast of market trends and adjust strategies
                accordingly to maintain a competitive edge.
              </li>
            </ul>
            <button className="bg-black text-white px-8 py-3 mx-auto hover:bg-gray-800 transition-colors">
              LEARN MORE
            </button>
          </div>
          <div className="aspect-square max-h-600px] overflow-hidden w-full bg-red-500 shadow-xl">
            <img
              src={ben_img_18}
              alt="Portrait"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </>
  );
}
