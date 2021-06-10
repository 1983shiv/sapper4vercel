<script context="module">
  import SvelteTawkToChaTWidget from "svelte-tawk-to-chat-widget/src/TawkToChatWidget.svelte";
  import Logo from "./Logo.svelte";
  import Socialbutton from "./common/Socialbutton.svelte";
</script>

<footer class="text-white bg-gray-50 body-font justify-center">
  <div
    class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"
  >
    <a
      href="."
      class="flex title-font font-medium items-center md:justify-center justify-center text-gray-900"
    >
      <Logo />
    </a>
    <p
      class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
    >
      © 2021
    </p>
    <div class="mb-4 ml-4">
      <Socialbutton />
    </div>
  </div>

  <!-- 59f359984854b82732ff8281 -->
  <SvelteTawkToChaTWidget
    propertyId="59f359984854b82732ff8281"
    chatId="default"
  />
</footer>

<!--Start of Tawk.to Script-->
<!-- https://embed.tawk.to/59f359984854b82732ff8281/default'/5693205ca37c51511e7c1e17; -->
