import { Link, NavLink } from "react-router-dom"
// import React, { useState } from "react";

function Header({title="⛩"}) {
  // const [isExpanded, toggleExpansion] = useState(false);
  // let navElement = useRef(null);

  return (
    <header className="w-full fixed z-50">
      <div className="flex justify-between smx-pd-40 sm:p-8 smx-flex-col p-4 md:p-8 lg:mx-20 md:mx-20">
        <Link className="flex justify-center smx-mt-15 smx-mb-4 lg:mt-0 md:mt-0 sm:mt-4 no-underline text-white" to="/">
          <span className="font-bold text-3xl tracking-tight">
            {title}
          </span>
        </Link>

        <nav
          className="md:block md:flex sm:block md:w-auto overflow-auto xs:overflow-x-scroll"
          // ref={element => { navElement = element }}
        >
          {[
            {
              route: `/`,
              title: `Home`
            },
            // {
            //   route: `/about`,
            //   title: `About`
            // },
            // {
            //   route: `/projects`,
            //   title: `Projects`
            // }
          ].map(link => (
            <NavLink
              // className="sf-mono-font text-base name-grey anti-main-color-hover mt-4 md:mt-0 md:ml-6 sm:ml-6 smx-ml-40 no-underline text-white"
              key={link.title}
              to={link.route}
              className={({ isActive, isPending }) =>
                isPending ? 
                "pending" : 
                isActive ? 
                "border-b-2 sf-mono-font text-base name-grey anti-main-color-hover mt-4 md:mt-0 md:ml-6 sm:ml-6 smx-ml-40 no-underline text-white" : 
                "sf-mono-font text-base name-grey anti-main-color-hover mt-4 md:mt-0 md:ml-6 sm:ml-6 smx-ml-40 no-underline text-white"
              }
            >
              {link.title}
            </NavLink>
          ))}
          <a
            className="sf-mono-font text-base name-grey anti-main-color-hover mt-4 md:mt-0 md:ml-6 sm:ml-6 smx-ml-40 no-underline text-white"
            href="https://jideolutola.hashnode.dev/" target="_blank" rel="noreferrer">
            Blog
          </a>

          {/* <div className=" ml-2 p-1 flex justify-end mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="12" r="4" />
              <path d="M3 12h1M12 3v1M20 12h1M12 20v1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7M17.7 17.7l.7 .7M6.3 17.7l-.7 .7" />
            </svg>
          </div> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
