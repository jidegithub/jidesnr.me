export default function footer() {
  return (
    <footer className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-12 lg:grid-cols-12">
      <div className="col-span-2 sm:col-span-6 md:col-span-5 lg:col-span-4 mb-4">
        <span className="whatido-grey uppercase font-semibold inline-block">
          <h4>©<span id="year">2023</span>, Olajide Olutola</h4>
        </span>
        <p className="whatido-grey">This site was built with <a href="https://react.dev/" target="_blank" rel="noreferrer" className="text-teal-800">React </a>
          &amp; <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="text-teal-800">Tailwind</a>
          . It’s hosted on <a href="https://github.com/jidegithub" target="_blank" rel="noreferrer" className="text-teal-800">
            Github</a> and deployed with <a href="https://netlify.com" target="_blank" rel="noreferrer" className="text-teal-800">Netlify</a>.
        </p>
      </div>
    </footer>
  )
}
