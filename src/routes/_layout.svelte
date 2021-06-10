<script>
  import Nav2 from "../components/Nav2.svelte";
  import Footer from "../components/Footer.svelte";
  export let segment;
</script>

  <Nav2 {segment} />
  <slot />
  <Footer />


<!-- <style>
  main {
    position: relative;
    max-width: 100vw;
    background-color: white;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style> -->
