<script>
  // Menu Source: https://github.com/justalever/tailwind-navbar/blob/master/public/index.html
  import Navli from "../components/Navli.svelte";
  import Logo from "../components/Logo.svelte";
  export let segment;
  export let isOpen = true;

  function toggleNav() {
    isOpen = !isOpen;
  }
</script>

<header
  class="lg:px-16 px-6 bg-gray-50 flex flex-wrap items-center lg:py-2 py-2"
>
  <Logo />

  <label
    for="menu-toggle"
    class="pointer-cursor lg:hidden block"
    on:click={toggleNav}
    ><svg
      class="fill-current text-gray-900"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      ><title>menu</title><path
        d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
      /></svg
    ></label
  >
  <input class={isOpen ? "hidden" : ""} type="hidden" id="menu-toggle" />

  <div
    class="{isOpen ? 'hidden' : ''} lg:flex lg:items-center lg:w-auto w-full"
    id="menu"
  >
    <nav>
      <ul
        class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0"
      >
        <li on:click={toggleNav}>
          <Navli
            text="Home"
            classes="lg:p-4 py-3 px-0 block border-b-2 font-extrabold border-transparent hover:border-indigo-400"
            linkk="."
            {segment}
          />
        </li>
        <li on:click={toggleNav}>
          <Navli
            text="About"
            classes="lg:p-4 py-3 px-0 block border-b-2 font-extrabold border-transparent hover:border-indigo-400"
            linkk="about"
            {segment}
          />
        </li>
        <li on:click={toggleNav}>
          <Navli
            text="Services"
            classes="lg:p-4 py-3 px-0 block border-b-2 font-extrabold border-transparent hover:border-indigo-400"
            linkk="services"
            {segment}
          />
        </li>
        <li on:click={toggleNav}>
          <Navli
            on:click={toggleNav}
            text="Case Studies"
            classes="lg:p-4 py-3 px-0 block border-b-2 font-extrabold border-transparent hover:border-indigo-400"
            linkk="case-studies"
            {segment}
          />
        </li>
        <li on:click={toggleNav}>
          <Navli
            on:click={toggleNav}
            text="Blog"
            classes="lg:p-4 py-3 px-0 block border-b-2 font-extrabold border-transparent hover:border-indigo-400"
            linkk="posts"
            {segment}
          />
        </li>
        <li on:click={toggleNav}>
          <Navli
            text="Contact"
            classes="lg:p-4 py-3 px-0 block border-b-2 font-extrabold border-transparent hover:border-indigo-400"
            linkk="contact"
            {segment}
          />
        </li>
      </ul>
    </nav>
  </div>
</header>
