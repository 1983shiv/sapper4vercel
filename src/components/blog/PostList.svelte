<script>
  export let posts;
  import PostCard from "./PostCard.svelte";
</script>

<div
  class="flex flex-wrap mt-4 mx-2 overflow-hidden sm:mx-2 md:mx-2 lg:mx-2 xl:mx-2"
>
  {#each posts as post}
    <div
      class="my-2 px-2 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3"
    >
      <PostCard {post} />
    </div>
  {/each}
</div>
<!-- <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      {#each posts as post}
        <PostCard {post} />
      {/each}
    </div>
  </div>
</section>
 -->
<!-- <a href={`/posts/${slugify(post.title)}`}>
            <img src={post.image} alt={post.title} width="200" height="auto" />
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
          </a> -->
