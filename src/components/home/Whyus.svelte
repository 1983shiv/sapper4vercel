<script>
  import Heading from "../common/Heading.svelte";
</script>

<section
  id="whyus"
  class="text-gray-600 body-font bg-gradient-to-r from-gray-100 via-gray-50 to-gray-0"
>
  <div class="container px-5 py-24 pb-20 mx-auto">
    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <div class="my-10 text-center">
        <Heading
          text="Why Us"
          size="text-4xl sm:text-5xl md:text-6xl"
          heading="font-heading1 border-b-2"
          color="text-pink-500"
        />
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-black text-2xl font-body">
        Our results and 480+ happy clients clearly indicate that we possess
        exception skills and expertise.
      </p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="shadow p-6 rounded-lg">
          <div
            class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4"
          >
            <svg
              class="h-8 w-8 text-pink-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path
                d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"
              /> <path d="M12 3v3m0 12v3" /></svg
            >
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
            Great ROI
          </h2>
          <p class="leading-relaxed text-base font-body">
            Although we’re a team, we do not overcharge to our clients just to
            keep our team members work loaded. We have been accurate and digital
            from the start. Using our small team, we focus on delivering the
            best product design/development, without wasting your time and
            budget.
          </p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="shadow p-6 rounded-lg">
          <div
            class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4"
          >
            <svg
              class="h-8 w-8 text-pink-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" /></svg
            >
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
            Undivided attention
          </h2>
          <p class="leading-relaxed text-base font-body">
            When we take on your project, our team is fully committed from start
            to finish. It means constant progress, uninterrupted focus and
            tangible results. When you decide to work with us, your project will
            get all attention that it deserves.
          </p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="shadow p-6 rounded-lg">
          <div
            class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4"
          >
            <svg
              class="h-8 w-8 text-pink-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
              <path d="M4 16v2a2 2 0 0 0 2 2h2" />
              <path d="M16 4h2a2 2 0 0 1 2 2v2" />
              <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
              <line x1="9" y1="10" x2="9.01" y2="10" />
              <line x1="15" y1="10" x2="15.01" y2="10" />
              <path d="M9.5 15a3.5 3.5 0 0 0 5 0" /></svg
            >
          </div>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
            Small yet result oriented
          </h2>
          <p class="leading-relaxed text-base font-body">
            We are a team of passionate designers, developers with a strong zeal
            to work with SMEs, emerging startups and individuals who need
            technical help. We love coming to work every day and figuring out a
            better World Wide Web for businesses and the end-users.
          </p>
        </div>
      </div>
    </div>
    <a href="/about" alt="about us">
    <button
      class="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-pink-500 rounded text-lg"
      >About Us</button
    ></a>
  </div>
</section>

<style>
  #whyus {
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
