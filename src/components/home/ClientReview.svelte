<script>
  import Carousel from "@beyonk/svelte-carousel";
  import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";
  import ReviewCard from "./ReviewCard.svelte";
  import { reviews } from "../../reviews.js";
</script>

<section class="text-gray-600 flex flex-wrap body-font overflow-hidden">
  <div class="container p-6 mx-auto justify-center">
    <Carousel autoplay={30000} perPage={1}>
      <span class="control" slot="left-control">
        <ChevronLeftIcon />
      </span>
      {#each reviews as review}
        <div class="slide-content">
          <ReviewCard
            reviewsrc={review.src}
            clientdesignation={review.clientdesignation}
            clientname={review.clientname}
            clientReview={review.clientreview}
            profile={review.clientprofile}
          />
        </div>
      {/each}
      <span class="control" slot="right-control">
        <ChevronRightIcon />
      </span>
    </Carousel>
  </div>
</section>
