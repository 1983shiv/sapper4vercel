---
title: Create a blog with Sapper & Markdown (2 Part Series
summary: TCreate a blog with Sapper & Markdown (2 Part Series
date: 2021-01-01
tags: hello, world
image: "seo2.png"
---

permalink: "Create-a-blog-with-Sapper-Markdown-Part-Series 1"

<div class="crayons-article__main">

<nav class="series-switcher crayons-card crayons-card--secondary">

<header class="crayons-card__header">### [Create a blog with Sapper & Markdown (2 Part Series)](/joshnuss/series/9454)</header>

<div class="series-switcher__list">[<span class="series-switcher__num">1</span> <span class="series-switcher__title">Create a blog with Sapper & Markdown</span>](/joshnuss/create-a-blog-with-markdown-sapper-50ad "Published Mar 28 '20") [<span class="series-switcher__num">2</span> <span class="series-switcher__title">Create a blog with Sapper & Markdown: Tagging</span>](/joshnuss/create-a-blog-with-sapper-markdown-part-2-31m4 "Published Oct 29 '20")</div>

</nav>

<div class="crayons-article__body text-styles spec__body" data-article-id="292941" id="article-body">[Sapper](https://sapper.svelte.dev) is a toolkit for creating [Svelte](https://svelte.dev) apps. It comes with a bunch of conventions baked in to help you get your project up and running quickly. It can be deployed as a static site or as as a node.js server+SPA that does both server-side rendering and client-side rendering. NOTE: You can find a screencast of this at the end of the article. # [](#concept)Concept We're going to store blog posts as markdown `.md` files inside repo. That way we can use `git` as the workflow for editing posts. That means Pull Requests for reviewing posts, `git log` to view history of changes, and forking/branching if we have multiple authors. Since our data comes from static files (no databases), we don't need a server side component, we can deploy this using Sapper's static site generator. # [](#setup)Setup Start by scaffolding the app with `degit`. You can use the official [`svelte/sapper-template`](https://github.com/svelte/sapper-template), but it includes a lot of demo code. I've going to use my fork [`joshnuss/sapper-template`](https://github.com/joshnuss/sapper-template) which is a blank slate without demo code.

<div class="highlight js-code-highlight">npx degit joshnuss/sapper-template blog cd blog yarn install

<div class="highlight__panel js-actions-panel">

<div class="highlight__panel-action js-fullscreen-code-action"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title></svg></div>

</div>

</div>

# [](#posts-data)Posts data Each post will be saved in the `posts` directory and include `yaml` metadata the top of the file (aka front matter). Here's what a post `posts/example.md` would look like:

<div class="highlight js-code-highlight">-------- title: Everything you wanted to know summary: A short post about ... date: 2020-04-01 -------- - this - is - markdown

<div class="highlight__panel js-actions-panel">

<div class="highlight__panel-action js-fullscreen-code-action"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title></svg></div>

</div>

</div>

# [](#plugins)Plugins We could load these `.md` files using `fs.readFile()` at build time, but there is an even easier way, using `import` statements. To configure `rollup` for `.md` imports, we'll use the plugin [`@jackfranklin/rollup-plugin-markdown`](https://www.npmjs.com/package/@jackfranklin/rollup-plugin-markdown). That makes it possible to:

<div class="highlight js-code-highlight">import post1 from 'posts/example1.md' import post2 from 'posts/example2.md' // ...

<div class="highlight__panel js-actions-panel">

<div class="highlight__panel-action js-fullscreen-code-action"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title></svg></div>

</div>

</div>

Of course importing each post one-by-one will get tedious fast. 😅 It would be easier to import a bunch of files at once based on a wildcard search pattern, like `posts/*.md`. The plugin [`rollup-plugin-glob`](https://www.npmjs.com/package/rollup-plugin-glob) does exactly this. 🚀 Add the NPM packages:

<div class="highlight js-code-highlight">yarn add -D @jackfranklin/rollup-plugin-markdown rollup-plugin-glob

<div class="highlight__panel js-actions-panel">

<div class="highlight__panel-action js-fullscreen-code-action"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title></svg></div>

</div>

</div>

Then, tell `rollup` to use these plugins. Update `rollup.config.js`:

<div class="highlight js-code-highlight">// import plugins import markdown from '@jackfranklin/rollup-plugin-markdown' import glob from 'rollup-plugin-glob' // .... // remember rollup is creating multiple builds // make sure to add the new plugins to both the server *and* client builds export { client: { plugins: [ markdown(), glob(), ... ], ... }, server: { plugins: [ markdown(), glob(), ... ], ... } }

<div class="highlight__panel js-actions-panel">

<div class="highlight__panel-action js-fullscreen-code-action"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title></svg></div>

</div>

</div>

# [](#reading-posts)Reading Posts Now that we can import `.md`, let's centralize the logic for accessing posts inside `src/posts.js`:

<div class="highlight js-code-highlight">import all from '../posts/*.md' export const posts = all

<div class="highlight__panel js-actions-panel">

<div class="highlight__panel-action js-fullscreen-code-action"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title></svg></div>

</div>

</div>

If we `console.log(posts)`, the data for posts currently looks like this:

<div class="highlight js-code-highlight">[ { metadata: {title: 'the title', summary: '...', date: '2020-01-02'}, html: ' # ... ', filename: 'example.md' } ]

<div class="highlight__panel js-actions-panel">

<div class="highlight__panel-action js-fullscreen-code-action"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title></svg></div>

</div>

</div>

Let's reshape it a bit, just to make it easier for our UI to use. We're going to make these improvements: _ Put the `metadata` (`title`, `summary`, `date`) at the top level. _ Add a `permalink` field. It will be based on the `filename` \* Sort the list of posts by `date` in descending order (newest posts first) Makes these changes to `src/posts.js`:

<div class="highlight js-code-highlight">import _ from 'lodash' import all from '../posts/*.md' export const posts = _.chain(all) // begin a chain .map(transform) // transform the shape of each post .orderBy('date', 'desc') // sort by date descending .value() // convert chain back to array // function for reshaping each post function transform({filename, html, metadata}) { // the permalink is the filename with the '.md' ending removed const permalink = filename.replace(/\.md$/, '') // convert date string into a proper `Date` const date = new Date(metadata.date) // return the new shape return {...metadata, filename, html, permalink, date} } // provide a way to find a post by permalink export function findPost(permalink) { // use lodash to find by field name: return _.find(posts, {permalink}) }

<div class="highlight__panel js-actions-panel">

<div class="highlight__panel-action js-fullscreen-code-action"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title></svg></div>

</div>

</div>

# [](#index-page)Index page Now that we have our posts, we can move on to the UI. Open the `src/routes/index.svelte` and display an `

<article>` tag for each post:

<div class="highlight js-code-highlight"><script>// import the list of posts import {posts} from '../posts'</script> # My Weblog {#each posts as post}

<article>[ ## {post.title} {post.summary} ]({`/posts/${post.permalink}`})</article>

{/each}

<div class="highlight__panel js-actions-panel">

<div class="highlight__panel-action js-fullscreen-code-action"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title></svg></div>

</div>

</div>

# [](#blog-details-page)Blog details page The index page now shows summaries of each posts, to see the entire post add a page/route called `src/routes/posts/[permalink].svelte`. Notice we're using square brackets around `[permalink]`? That tells sapper that the `permalink` is a dynamic parameter. Sapper will provide all parameters to our `preload()` function.

<div class="highlight js-code-highlight"><script context="module">// import the logic for finding a post based on permalink import {findPost} from '../../posts' // sapper calls this to load our data export function preload(page) { // find the post based on the permalink param const post = findPost(page.params.permalink) // return a list of props return { post } }</script> <script>// this prop is filled from the result of the `preload()` export let post</script> # {post.title} {@html post.html}

<div class="highlight__panel js-actions-panel">

<div class="highlight__panel-action js-fullscreen-code-action"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title></svg></div>

</div>

</div>

# [](#deploy)Deploy To deploy our site we can generate the static site with `yarn export`. You can also 🛳 it with `zeit` while you're at it:

<div class="highlight js-code-highlight">yarn export now

<div class="highlight__panel js-actions-panel">

<div class="highlight__panel-action js-fullscreen-code-action"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title></svg></div>

</div>

</div>

That's it, all done! 💃 # [](#summary)Summary Building static sites with Sapper takes very little effort. There are many helpful rollup plugins that can convert static data into importable formats, that means we don't even have to write a parser for our data in many cases. Another good thing about this approach is its' versatility. The same concept will work for project pages, wikis, news sites, books, landing pages, etc. Any data you can put in a `git` repo, can be the driver of a sapper site. You can find example code here: [https://github.com/joshnuss/sample-blog](https://github.com/joshnuss/sample-blog) Happy coding! ✌ PS. This is part of my upcoming course on svelte: [http://svelte.video](http://svelte.video) # [](#screencast)Screencast

<div class=" fluidvids" style="padding-top: 56.1972%;"><iframe width="710" height="399" src="https://www.youtube.com/embed/9dSrsDdHyHg" allowfullscreen="" loading="lazy" class=" fluidvids-elem"></iframe></div>

</article>

</div>

<nav class="series-switcher crayons-card crayons-card--secondary">

<header class="crayons-card__header">### [Create a blog with Sapper & Markdown (2 Part Series)](/joshnuss/series/9454)</header>

<div class="series-switcher__list">[<span class="series-switcher__num">1</span> <span class="series-switcher__title">Create a blog with Sapper & Markdown</span>](/joshnuss/create-a-blog-with-markdown-sapper-50ad "Published Mar 28 '20") [<span class="series-switcher__num">2</span> <span class="series-switcher__title">Create a blog with Sapper & Markdown: Tagging</span>](/joshnuss/create-a-blog-with-sapper-markdown-part-2-31m4 "Published Oct 29 '20")</div>

</nav>

</div>
