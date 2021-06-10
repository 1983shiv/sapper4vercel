<script context="module">
  import { findByTag } from "../../posts.js";

  export function preload(page) {
    const { slug } = page.params;
    const posts = findByTag(slug);

    return { slug, posts };
  }
</script>

<script>
  import PostList from "../../components/blog/PostList.svelte";
  import Sidebar from "../../components/Sidebar.svelte";
  import Bloghero from "../../components/Bloghero.svelte";
  export let slug, posts;
</script>

<svelte:head>
  <title>Latest Articles for {slug}</title>
</svelte:head>
<Bloghero title1="Latest Articles for " title2={slug} />
<section class="text-gray-600 body-font relative mb-4">
  <div
    class="flex flex-wrap mx-1 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2"
  >
    <div
      class="container my-1 px-1 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-full md:my-2 md:px-2 md:w-2/3 lg:my-2 lg:px-2 lg:w-2/3 xl:my-2 xl:px-2 xl:w-2/3"
    >
      <PostList {posts} />
    </div>
    <div
      class="container my-6 px-6 w-full overflow-hidden sm:my-8 sm:px-8 sm:w-full md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3"
    >
      <Sidebar />
    </div>
  </div>
</section>
