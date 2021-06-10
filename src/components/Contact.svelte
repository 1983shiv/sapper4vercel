<!-- <form action="https://getform.io/f/3d8af4d6-d4dc-41e1-b2ea-43bb410a81a5" method="POST"> -->
<script>
  import { onMount } from "svelte";
  import Socialbutton from "./common/Socialbutton.svelte";
  let messageSent = false;
  export let contactbg;

  onMount(() => {
    const formElement = document.querySelector("#contact-form");
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new URLSearchParams(new FormData(formElement));
      fetch("https://getform.io/f/3d8af4d6-d4dc-41e1-b2ea-43bb410a81a5", {
        method: "POST",
        body: data,
      });
      messageSent = true;
    });
  });
</script>

<!-- Contact form End Point :  -->

<section class="text-gray-600 body-font relative {contactbg}">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1
        class="sm:text-3xl text-2xl font-2xl font-bold title-font mb-4 text-gray-900"
      >
        Let's Talk
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
        Let's have a discussion regarding your new job requriement. please send
        us your name, email and your job description with time availability and
        skype id, so we can discuss in detail.
      </p>
    </div>
    <div
      class="flex flex-col text-center w-full mb-12 {messageSent
        ? ''
        : 'hidden'}"
    >
      <h2>Thanking you for Contact us, we will get back to you very soon.</h2>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto {messageSent ? 'hidden' : ''}">
      <form
        id="contact-form"
        action="https://getform.io/f/3d8af4d6-d4dc-41e1-b2ea-43bb410a81a5"
        method="POST"
      >
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-600"
                >Name</label
              >
              <input
                type="text"
                id="fullname"
                name="fullname"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-600"
                >Email</label
              >
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-600"
                >Message</label
              >
              <textarea
                id="message"
                name="message"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-full">
            <button
              type="submit"
              class="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg"
              >Submit</button
            >
          </div>
        </div>
      </form>
      <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
        <a href="#srivastava.shiv" class="text-pink-500"
          >Skype: srivastava.shiv</a
        >
      </div>
    </div>
  </div>
</section>
