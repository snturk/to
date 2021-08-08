import Link from 'next/link'

export default function Index({ resData }) {
  const containerBaseStyle = "flex flex-col text-gray-800 font-light justify-center items-center p-5 px-2 mt-12 mb-10 h-auto lg:w-3/6 w-5/6 rounded-lg "
  const bgGradient = "bg-gradient-to-r from-gray-400 to-gray-500"
  const containerStyle = containerBaseStyle + bgGradient;

  const indexElementStyle = "flex flex-col bg-gray-800 p-4 rounded-md mt-2 w-5/6 h-auto text-gray-200 hover:bg-gray-600 duration-150";
  const indexElementHeaderStyle = "flex flex-row w-2/6 self-center justify-around items-center mb-4";
  const indexElementUlStyle = "list-inside list-disc text-gray-300 text-sm";

  return (
    <div
    id="overviewContainer"
    className={containerStyle}>
      <div id="overviewHeader" className="flex flex-row justify-around items-center w-4/6 h-40">
        <img
        className="w-auto h-full rounded-3xl shadow-xl"
        src="https://avatars3.githubusercontent.com/u/41567673?s=400&u=1512be61f63ea33dd4e0a5d8da986eb978430d5e&v=4"
        alt="profilePhoto"/>
        <div id="profileName" className="flex flex-col text-center mt-5 w-auto">
          <div className="text-lg font-normal">Muratcan Şentürk</div>
          <div className="text-md">&lt;software developer&gt;</div>
        </div>
      </div>
      <div className="h-1 w-11/12 mt-7 mb-7 border-b border-gray-700"></div>
      <div id="overviewIndex" className="flex flex-col justify-center items-center mt-2 w-full lg:w-5/6 h-11/12">
        <div className={'language '+indexElementStyle}>
          <div className={indexElementHeaderStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <div>Language</div>
          </div>
          <ul className={indexElementUlStyle}>
            <li>TUR (Native)</li>
            <li>ENG (Fluent)</li>
          </ul>
        </div>
        <div className={'education '+indexElementStyle}>
          <div className={indexElementHeaderStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            <div>Education</div>
          </div>
          <ul className={indexElementUlStyle}>
            <li>Atılım University, Comp. Eng., 2018-Present</li>
          </ul>
        </div>
        <div className={'technologies '+indexElementStyle}>
          <div className={indexElementHeaderStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <div>Technologies</div>
          </div>
          <ul className={indexElementUlStyle}>
            <li>HTML, CSS - Bootstrap, Tailwind, Vuetify</li>
            <li>Javascript - Vue, Nuxt.js, JQuery</li>
            <li>Firebase - Database, Authentication</li>
            <li>Java - Spring, Thymeleaf</li>
            <li>C, C++</li>
          </ul>
        </div>
        <div className={'experience ' +indexElementStyle}>
          <div className={indexElementHeaderStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>Experience</div>
          </div>
          <ul className={indexElementUlStyle}>
            <li>
                <a className="underline" href="https://ozguryazilim.com.tr" target="_blank">Özgür Yazılım A.Ş</a>, Summer Intern, Jul 21' - Aug 21'
            </li>
            <li>
            <a className="underline" href="https://ozguryazilim.com.tr" target="_blank">Özgür Yazılım A.Ş</a>, Java Web Developer, Aug 21' - Present
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
