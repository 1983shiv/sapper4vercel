<script>
  export let imgOri;
  export let imgSrc;
  export let title;
  export let detail;
  export let loadingSpeed;
  export let deliveryTime;
  export let bounceRate;
  export let organicTraffic;
  export let category;
  export let techUsed;
</script>

{#if imgOri}
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-12 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap space-between">
        <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-2 lg:mb-0 p-8">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">
            {category}
          </h2>
          <h1
            class="text-gray-900 text-3xl title-font font-medium mb-4 border-b-2 border-pink-500 py-2 "
          >
            {title}
          </h1>
          <p class="leading-relaxed mb-4">
            {detail}
          </p>

          <div class="flex border-t border-gray-200 py-2">
            <span class="text-gray-500">Delivery Time</span>
            <span class="ml-auto text-gray-900">{deliveryTime}</span>
          </div>
          <div class="flex border-t border-gray-200 py-2">
            <span class="text-gray-500">Loading Speed</span>
            <span class="ml-auto text-gray-900">{loadingSpeed}</span>
          </div>
          <div class="flex border-t border-gray-200 py-2">
            <span class="text-gray-500">Increate in Organic Traffic</span>
            <span class="ml-auto text-gray-900">{organicTraffic}</span>
          </div>
          <div class="flex border-t border-gray-200 py-2">
            <span class="text-gray-500">Bounce Rate</span>
            <span class="ml-auto text-gray-900">{bounceRate}</span>
          </div>
          <div class="flex border-t border-b mb-6  border-gray-200 py-2">
            <span class="text-gray-500">Technology</span>
            <span class="ml-auto text-right text-gray-900">{techUsed}</span>
          </div>
        </div>

        <div class="column lg:w-1/2 w-full">
          <div class="content ">
            <img
              src={imgSrc}
              alt={title}
              style="width:100%"
              max-width="650px"
              height="auto"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
{:else}
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-12 mx-auto">
      <div class="lg:w-full mx-auto flex flex-wrap space-between">
        <div class="column lg:w-1/2 w-full">
          <div class="content ">
            <img
              src={imgSrc}
              alt={title}
              style="width:100%"
              max-width="650px"
              height="auto"
            />
          </div>
        </div>
        <div class="lg:w-1/2 w-full mt-2 md:mt-0 lg:ml-20 lg:pl-10 lg:py-10">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">
            {category}
          </h2>
          <h1
            class="text-gray-900 text-3xl title-font font-medium mb-4 border-b-2 border-pink-500 py-2 "
          >
            {title}
          </h1>
          <p class="leading-relaxed mb-4">
            {detail}
          </p>

          <div class="flex border-t border-gray-200 py-2">
            <span class="text-gray-500">Delivery Time</span>
            <span class="ml-auto text-gray-900">{deliveryTime}</span>
          </div>
          <div class="flex border-t border-gray-200 py-2">
            <span class="text-gray-500">Loading Speed</span>
            <span class="ml-auto text-gray-900">{loadingSpeed}</span>
          </div>
          <div class="flex border-t border-gray-200 py-2">
            <span class="text-gray-500">Increase in Organic Traffic</span>
            <span class="ml-auto text-gray-900">{organicTraffic}</span>
          </div>
          <div class="flex border-t border-gray-200 py-2">
            <span class="text-gray-500">Bounce Rate</span>
            <span class="ml-auto text-gray-900">{bounceRate}</span>
          </div>
          <div class="flex border-t border-b mb-6  border-gray-200 py-2">
            <span class="text-gray-500">Technology</span>
            <span class="ml-2 text-right text-gray-900">{techUsed}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
{/if}

<style>
  @media (max-width: 768px) {
    .column {
      width: 100%;
    }
    .content {
      width: 92vw;
    }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    .column {
      width: 50%;
    }
    .content {
      width: 46vw;
    }
  }

  @media (min-width: 1025px) {
    .column {
      width: 50%;
    }
    .content {
      width: 40vw;
    }
  }

  /* Create three equal columns */
  .column {
    justify-content: center;
    margin-top: 40px;
  }

  /* Content */
  .content {
    background-color: white;
    margin: 5px;
    padding: 10px;
    box-shadow: 1px 1px 5px black;
    max-height: 400px;
    overflow-y: scroll;
  }

  img {
    min-height: 200px;
  }
</style>
