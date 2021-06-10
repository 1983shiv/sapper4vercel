<script>
  import NavHero from "../components/home/NavHero.svelte";
  // import ClientReview from "../components/home/ClientReview.svelte";
  import Services from "../components/home/Services.svelte";
  import Whyus from "../components/home/Whyus.svelte";
  import Contact from "../components/Contact.svelte";
  import Casestudies from "../components/home/Casestudies.svelte";
  import Heading from "../components/common/Heading.svelte";
</script>

<svelte:head>
  <title>Webdesign Ninjas</title>
</svelte:head>

<NavHero />
<Whyus />
<!-- <ClientReview /> -->
<section
  id="casestudies"
  class="text-gray-600 body-font bg-gradient-to-r from-gray-100 via-gray-50 to-gray-0 my-8 py-8"
>
  <Heading
    text="Case Studies"
    size="text-4xl sm:text-5xl md:text-6xl"
    heading="font-heading1 text-center mb-8"
    color="text-pink-500"
  />
  <Casestudies
    imgOri={true}
    imgSrc="images/impossiblefoods.png"
    title="Impossible Foods"
    detail="Impossible Foods is a multi Vendor with card functionality, where people who grow / agriculture the meat can register and sell their ready products across six countries."
    loadingSpeed="97"
    deliveryTime="6 weeks"
    bounceRate="32%"
    organicTraffic="26%"
    category="eCommerce Website"
    techUsed="Nextjs(Reactjs), Contentful, Shopify and GSAP"
  />
  <Casestudies
    imgOri={false}
    imgSrc="images/behuppy.png"
    title="Behuppy"
    detail="Behuppy is a manufacture of Toothpaste Tablets and wooden tooth brush and selling this unique idea to make ocean clean from plastic."
    loadingSpeed="98"
    deliveryTime="5 weeks"
    bounceRate="29%"
    organicTraffic="42%"
    category="eCommerce Website"
    techUsed="Frontend Using JQuery + Parcel and Backend - Shopify, Animation using GSAPP"
  />
  <Casestudies
    imgOri={true}
    imgSrc="images/inetmart-biz.png"
    title="INetMart.Biz"
    detail="INetMart.Biz is a prelaunch website for online marketplace that allows entrepreneurs to build a sustainable business. It offer a hassle-free, one-stop solution connecting businesses with customers."
    loadingSpeed="98"
    deliveryTime="2 weeks"
    bounceRate="23%"
    organicTraffic="18%"
    category="Business Website"
    techUsed="Wordpress and Hosted on AWS"
  />
  <a href="/case-studies" alt="View more case studies">
    <button
      class="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-pink-500 rounded text-lg"
      >More Case Studies...</button
    ></a
  >
</section>

<Services />
<div class="flex mb-16 justify-items-center justify-center">
  <a href="/services" alt="Our Ninja Services">
    <button
      class="flex mx-auto mb-16 text-white text-center bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-pink-500 rounded text-lg"
      >Explore more...</button
    ></a
  >
</div>
<Contact
  contactbg="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-0 mt-8"
/>

<style>
  #casestudies {
    clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
    padding-bottom: 100px;
  }
</style>
