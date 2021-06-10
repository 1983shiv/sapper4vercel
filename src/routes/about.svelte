<script>
  import SvelteSeo from "svelte-seo";
  import Whyus from "../components/about/Whyus.svelte";
  import Contact from "../components/Contact.svelte";
  import Heading from "../components/common/Heading.svelte";
  // import ClientReview from "../components/home/ClientReview.svelte";
</script>

<SvelteSeo
  title="About Us"
  description="We are a team of passionate ui/ux designers, developers, and coders"
  openGraph={{
    title: "About Us",
    description:
      "We are a team of passionate ui/ux designers, developers, and coders",
    url: "https://www.webdesign-ninjas.com/about",
    type: "website",
    images: [
      {
        url: "https://www.example.com/images/og-image.jpg",
        width: 850,
        height: 650,
        alt: "Og Image Alt",
      },
    ],
  }}
/>

<section class="text-gray-600 body-font">
  <div class="container py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <Heading
        text="Who We Are"
        size="text-4xl sm:text-5xl md:text-6xl"
        heading="font-heading1 text-center mb-8"
        color="text-pink-500"
      />
      <!-- <h1
        class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
      >
        Who We Are
      </h1> -->
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
        We are a team of passionate ui/ux designers, developers, and coders with
        a strong zeal to work with SMEs, emerging startups and individuals who
        need technical help. In the last 12 years, We got the opportunity to
        work with many clients across the globe and We figured out that most of
        my client's wanted someone who they could trust as a technical partner
        for their products. Someone, who can give suggestions right from what
        tech should be picked up, how to get the UX right, how we should plan
        the product to launch and a lot more...
      </p>
    </div>
  </div>
</section>

<Whyus />
<!-- <ClientReview /> -->
<Contact contactbg="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-0" />
