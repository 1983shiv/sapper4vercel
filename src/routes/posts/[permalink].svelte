<script context="module">
  // import { findPost } from "@/posts";
  import { findPost } from "../../posts.js";

  export function preload(page) {
    return { post: findPost(page.params.permalink) };
  }
</script>

<script>
  import highlight from "@/highlight";
  import Tags from "../../components/Tags.svelte";
  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<section class="text-gray-600 body-font">
  <div class="container py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1>{post.title}</h1>

      <Tags tags={post.tags} />

      <div use:highlight>
        {@html post.html}
      </div>
    </div>
  </div>
</section>
