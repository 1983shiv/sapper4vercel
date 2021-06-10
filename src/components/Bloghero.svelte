<!-- <script context="module" ✂prettier:content✂="CiAgZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQocGFnZSkgewogICAgcmV0dXJuIHsgc2x1ZzogcGFnZS5wYXJhbXMgfTsKICB9Cg==" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=">{}</script> -->
<script>
  export let title1;
  export let title2;
  export let blogdate;
  import moment from "moment";
</script>

<div
  class="lg:px-16 px-6 py-12 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-100"
>
  <h1
    class="mt-4 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-2xl mb-8"
  >
    <span class="block inline">{title1}</span>
    <span class="block text-white inline">{title2}</span>
  </h1>
  {#if blogdate}
    <p class="text-md text-gray-300">
      Posted at : {blogdate ? moment(blogdate).format("Do MMMM YYYY") : ""}
    </p>
    <p class="text-md text-gray-300">Author By : Ninja Team</p>
  {/if}
</div>
