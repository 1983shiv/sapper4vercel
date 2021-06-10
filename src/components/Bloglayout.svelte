<script>
  import Sidebar from "./Sidebar.svelte";
  import { posts } from "../posts.js";
  import PostList from "./blog/PostList.svelte";
  import { paginate, LightPaginationNav } from "svelte-paginate";

  let items = posts;
  let currentPage = 1;
  let pageSize = 4;
  $: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<section
  class="flex flex-wrap mx-2 overflow-hidden sm:mx-2 md:mx-2 lg:mx-2 xl:mx-2"
>
  <div
    class="lg:px-16 px-6 flex flex-wrap justify-center my-1 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-full md:my-2 md:px-2 md:w-2/3 lg:my-2 lg:w-2/3 xl:my-2 xl:px-2 xl:w-2/3"
  >
    <PostList posts={paginatedItems} />
    <LightPaginationNav
      totalItems={items.length}
      {pageSize}
      {currentPage}
      limit={1}
      showStepOptions={true}
      on:setPage={(e) => (currentPage = e.detail.page)}
    />
  </div>
  <div
    class="container my-6 px-6 w-full overflow-hidden sm:my-8 sm:px-8 sm:w-full md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3"
  >
    <Sidebar />
  </div>
</section>

<!-- <section class="text-gray-600 body-font relative mb-4">
  <div class="container mx-auto flex sm:flex-nowrap flex-wrap items-end">
    <div
      class="lg:w-3/4 md:w-2/3 bg-gray-50 rounded-lg overflow-hidden sm:mr-10 p-10 flex flex-wrap"
    >
      <PostList {posts} />
    </div>
    <div
      class="lg:w-1/4 md:w-1/3 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
    >
      <Sidebar />
    </div>
  </div>
</section> -->
