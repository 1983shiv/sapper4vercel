<script>
  import { images } from "./imgData.js";
  import { categories } from "./imgData.js";
  import Heading from "../common/Heading.svelte";

  import ButtonContainer from "./ButtonContainer.svelte";
  import Gallery from "./Gallery.svelte";

  let selected = "eCommerce";

  const filterSelection = (e) => (selected = e.target.dataset.name);
</script>

<main>
  <div class="my-10">
    <Heading
      text="Portfolio"
      size="text-4xl sm:text-5xl md:text-6xl"
      heading="font-heading1 border-b-2"
      color="text-pink-500"
    />
  </div>
  <ButtonContainer>
    {#each categories as category}
      <button
        class:active={selected === category}
        class="btn"
        data-name={category}
        on:click={filterSelection}
      >
        {category}
      </button>
    {/each}
  </ButtonContainer>

  <!-- Portfolio Gallery Grid -->

  <Gallery>
    {#each images as { name, url, keyword, descr }}
      {#if selected === "all"}
        <div class="show column">
          <div class="content">
            <img src={url} alt={name} style="width:100%" />
            <!-- <a href={name} alt={name} class="btn">{name} </a> -->
            <p>{descr}</p>
          </div>
        </div>
      {:else}
        <div class:show={keyword === selected} class="column">
          <div class="content">
            <img src={url} alt={name} style="width:100%" />
            <!-- <a href={name} alt={name} class="btn">{name} </a> -->
            <p>{descr}</p>
          </div>
        </div>
      {/if}
    {/each}
  </Gallery>
</main>

<style>
  /* Center website */

  main {
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* 	background-color: red; */
  }
  p {
    margin: 0 0 0.5rem;
    position: relative;
  }

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
      width: 33%;
    }
    .content {
      width: 30vw;
    }
  }

  /* Create three equal columns */
  .column {
    display: none;
    justify-content: center;
    margin: 10px 0;
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

  /* The "show" class is added to the filtered elements */
  .show {
    display: flex;
  }

  /* Style the buttons */
  .btn {
    text-transform: uppercase;
    font-weight: 200;
    font-size: 14px;
    letter-spacing: 1px;
    border: none;
    outline: none;
    margin: 5px;
    padding: 10px 10px 8px;
    background-color: white;
    border: 1px solid pink;
    cursor: pointer;
    transition: 0.1s ease-in-out;
  }

  /* Add a dark background color to the active button */
  .btn:active,
  .active {
    background-color: #000;
    color: white;
  }
</style>
