<script>
  import { services } from "../../services";
  import Heading from "../common/Heading.svelte";
</script>

<section id="services" class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <Heading
      text="Ninja Services"
      size="text-4xl sm:text-5xl md:text-6xl"
      heading="font-heading1 text-center mb-8"
      color="text-pink-500"
    />
    <div
      class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 text-center"
    >
      {#each services as { title, svg, desc }}
        <div class="xl:w-1/3 md:w-1/2 p-4 min-h-48">
          <div class="shadow p-6 rounded-lg">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4"
            >
              {@html svg}
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
              {title}
            </h2>
            <p class="leading-relaxed text-justify">
              {desc}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  #services {
    /* height: 98vh; */
    /* background-image: linear-gradient(
        to right bottom,
        rgba(247, 39, 160, 0.994),
        rgba(243, 179, 217, 0.96)
      ),
      url("../../../static/Taieri.png");
    background-size: cover;
    background-position: top;
    position: relative; */
    /* Source : https://bennettfeely.com/clippy/ */
    /* top left(x y), top right (x y), bottom right (x y), bottom left (x y)*/
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
    padding-bottom: 100px;
  }
</style>
