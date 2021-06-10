<script>
  import Reviewstar from "./Reviewstar.svelte";
  export let clientReview;
  export let clientname;
  export let clientdesignation;
  export let profile;
  export let reviewsrc;
</script>

<section class="text-gray-600 body-font">
  <div class="container px-6 py-8 mx-auto">
    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <div class="my-10">
        <Reviewstar {reviewsrc} />
      </div>
      <img
        alt="testimonial"
        class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
        src={profile}
      />
      <p class="leading-relaxed text-lg">{clientReview}</p>
      <span class="inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6" />
      <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
        {clientname}
      </h2>
      <p class="text-gray-500">{clientdesignation}</p>
    </div>
  </div>
</section>

<!-- <style>
  #reviews {
    height: 98vh;
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
    /* clip-path: polygon(0 0, 75% 0, 100% 0, 0 100%); */
  }
</style> -->
