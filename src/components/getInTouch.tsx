export default function getInTouch() {
  return (
    <section className="in-touch-wrap py-8 sm:py-8 md:py-20 lg:py-18 mt-6">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12">
          <div className="col-span-2 sm:col-span-2 md:col-span-6 lg:col-span-4 mb-4 lg:mb-0 flex items-end">
            <h2 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-4xl leading-none font-semibold lg:pl-8 md:pl-0 sm:pl-8 pl-0">
              Get in touch
            </h2>
          </div>
          <div className="col-span-2 sm:col-span-2 md:col-span-6 lg:col-span-2 lg:col-start-6">
            <h4 className="text-white text-lg font-semibold">Connect</h4>
          </div>
          <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 lg:col-start-6">
            <ul className="text-teal-200 text-2xl sm:text-2xl md:text-2xl lg:text-3xl -mt-4">
              <li><a href="mailto:olutolajide@gmail.com">Email</a></li>
              <li><a href="https://www.linkedin.com/in/michael-olajide-olutola-4836a0ab" target="_blank" rel="noopener">Linkedin</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2">
            <ul className="text-teal-200 text-2xl sm:text-2xl md:text-2xl lg:text-3xl -mt-4">
              <li><a href="https://gitlab.com/jidegitlab" target="_blank" rel="noopener">Gitlab</a></li>
              <li><a href="https://github.com/jidegithub" target="_blank" rel="noopener">Github</a></li>
            </ul>
          </div>
          <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2">
            <ul className="text-teal-200 text-2xl sm:text-2xl md:text-2xl lg:text-3xl -mt-4">
              <li><a href="https://unsplash.com/jidesnr" target="_blank" rel="noopener">Unsplash</a></li>
              <li><a href="https://music.apple.com/profile/jidesnr" target="_blank" rel="noopener"><span className="font-bold text-xl">🍎</span> Music</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
