<script>
  export let segment;
  export let isOpen = false;

  function toggleNav() {
    isOpen = !isOpen;
  }
</script>

<div>
  <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
    <nav
      class="relative flex items-center justify-between sm:h-10 lg:justify-start"
      aria-label="Global"
    >
      <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div class="flex items-center justify-between w-full md:w-auto">
          <a href=".">
            <span class="sr-only">Workflow</span>
            <img
              alt="logo"
              class="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            />
          </a>
          <div class="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Heroicon name: outline/menu -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
        <a
          class="font-medium text-gray-500 hover:text-gray-900"
          aria-current={segment === undefined ? "page" : undefined}
          href=".">home</a
        >

        <a
          class="font-medium text-gray-500 hover:text-gray-900"
          aria-current={segment === "about" ? "page" : undefined}
          href="about">about</a
        >

        <a
          class="font-medium text-gray-500 hover:text-gray-900"
          aria-current={segment === "services" ? "page" : undefined}
          href="services">services</a
        >

        <a
          class="font-medium text-gray-500 hover:text-gray-900"
          aria-current={segment === "portfolio" ? "page" : undefined}
          href="portfolio">portfolio</a
        >

        <a
          class="font-medium text-indigo-600 hover:text-indigo-500"
          aria-current={segment === "contact" ? "page" : undefined}
          href="contact">contact</a
        >
      </div>
    </nav>
  </div>
  <!-- Mobile Nav -->
  <div
    class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
  >
    <div
      class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
    >
      <div class="px-5 pt-4 flex items-center justify-between">
        <div>
          <img
            alt="Logo"
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          />
        </div>
        <div class="-mr-2">
          <button
            type="button"
            on:click={toggleNav}
            class:is-active={isOpen}
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Close main menu</span>

            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="px-2 pt-2 pb-3 space-y-1" class:is-active={isOpen}>
        <a
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          aria-current={segment === undefined ? "page" : undefined}
          href=".">home</a
        >

        <a
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          rel="prefetch"
          aria-current={segment === "about" ? "page" : undefined}
          href="about">about</a
        >

        <a
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          rel="prefetch"
          aria-current={segment === "services" ? "page" : undefined}
          href="services">services</a
        >

        <a
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          rel="prefetch"
          aria-current={segment === "portfolio" ? "page" : undefined}
          href="portfolio">portfolio</a
        >
      </div>
      <a
        class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
        rel="prefetch"
        aria-current={segment === "contact" ? "page" : undefined}
        href="contact">contact</a
      >
    </div>
  </div>
</div>

<!-- <li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li> -->
