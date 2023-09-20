import { Link } from 'react-router-dom';

export default function hero() {
  // let content = useRef(null);

  return (
    <>
    <div className="md:mt-24 mt-40">
      <section 
      // ref={element => { content = element }} 
      >
        <div className="calibre-font font-semibold text-6xl my-4">
          <h2 className="name-grey leading-tight m-0 screen-reader-text">Michael Olajide Olutola</h2>
          <h2 className="name-grey leading-tight m-0">I am Olajide Olutola,</h2>
          <div className="flex flex-wrap">
            <h2 className="whatido-grey leading-none m-0">Cloud&nbsp;</h2>
            <h2 className="whatido-grey leading-none m-0">and&nbsp;</h2>
            <h2 className="whatido-grey leading-none m-0">DevOps Engineer</h2>
          </div>
        </div>
        <div className="whatido-grey calibre-font max-w-xl mt-8">
          <p className="text-3xl">
            I have over 3 years of proven expertise in crafting cutting-edge cloud solutions.
          </p>
        </div>
        {/* <div className="name-grey mt-4">
          <Link to="/work" className="flex text-2xl items-center font-medium">
            View Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block ml-1 icon icon-tabler icon-tabler-arrow-up-right-circle" width="34" height="34" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="12" r="9" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <polyline points="15 15 15 9 9 9" />
            </svg> 
          </Link>
        </div> */}
      </section>
    </div>
    </>
  )
}
