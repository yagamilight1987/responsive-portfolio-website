export default () => {
  return (
    <header className="absolute top-0 left-0 w-full">
      <div className="container mx-auto px-2 py-4 flex items-center justify-between">
        <p className="font-semibold">
        WORK<span className="font-extralight"> : LIFE : FITNESS</span>
        </p>
        <ul className="flex">
          <li className="px-2">
            <a href="/" className="rounded p-2 border-2 border-transparent border-solid hover:border-b-zinc-600 hover:font-semibold">
              Home
            </a>
          </li>
          <li className="px-2">
            <a href="/background" className="rounded p-2 border-2 border-transparent border-solid hover:border-b-zinc-600 hover:font-semibold">
              Background
            </a>
          </li>
          <li className="px-2">
            <a href="/projects" className="rounded p-2 border-2 border-transparent border-solid hover:border-b-zinc-600 hover:font-semibold">
              Projects
            </a>
          </li>
          <li className="px-2">
            <a href="/about" className="rounded p-2 border-2 border-transparent border-solid hover:border-b-zinc-600 hover:font-semibold">
              About
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
