<script>
  import { slugify } from "../../posts.js";
  import Tags from "../Tags.svelte";
  export let post;
</script>

<!-- <div
  class="my-2 px-2 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3"
>
  <a href={`/posts/${slugify(post.title)}`}>
    <img
      class="w-full object-cover object-center"
      src={post.image}
      alt={post.title}
    />
  </a>
  <div class="p-6">
    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
      {post.title}
    </h1>
    <h4
      class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
    >
      <Tags tags={post.tags} />
    </h4>
    <p class="leading-relaxed mb-3">
      {post.summery ? post.summery : ""}
    </p>
    <div class="flex items-center flex-wrap ">
      <a
        href={`/posts/${slugify(post.title)}`}
        class="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0"
        >Learn More
        <svg
          class="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
      <span
        class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
      >
        <svg
          class="w-4 h-4 mr-1"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>1.2K
      </span>
      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
        <svg
          class="w-4 h-4 mr-1"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          viewBox="0 0 24 24"
        >
          <path
            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
          />
        </svg>6
      </span>
    </div>
  </div>border-2 border-gray-200 border-opacity-20 
</div> -->

<div class="w-full">
  <div class="shadow rounded-lg overflow-hidden">
    <a class="mt-2" href={`/posts/${slugify(post.title)}`}>
      <img
        class="m-2 w-full object-cover object-center"
        src={post.image}
        alt={post.title}
        width="200px"
        height="120px"
      />
    </a>
    <div class="p-6">
      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
        {post.title}
      </h1>
      <h4
        class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
      >
        <Tags tags={post.tags} />
      </h4>
      <p class="leading-relaxed mb-3">
        {post.summery ? post.summery : ""}
      </p>
      <div class="flex items-center flex-wrap ">
        <a
          href={`/posts/${slugify(post.title)}`}
          class="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0"
          >Learn More
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </a>
        <span
          class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
        >
          <svg
            class="w-4 h-4 mr-1"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>1.2K
        </span>
        <span
          class="text-gray-400 inline-flex items-center leading-none text-sm"
        >
          <svg
            class="w-4 h-4 mr-1"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
          >
            <path
              d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
            />
          </svg>6
        </span>
      </div>
    </div>
  </div>
</div>
