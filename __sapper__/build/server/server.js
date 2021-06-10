'use strict';

var sirv = require('sirv');
var polka = require('polka');
var compression = require('compression');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
require('prismjs');
var moment = require('moment');
var Stream = require('stream');
var http = require('http');
var Url = require('url');
var https = require('https');
var zlib = require('zlib');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var sirv__default = /*#__PURE__*/_interopDefaultLegacy(sirv);
var polka__default = /*#__PURE__*/_interopDefaultLegacy(polka);
var compression__default = /*#__PURE__*/_interopDefaultLegacy(compression);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var ___default = /*#__PURE__*/_interopDefaultLegacy(_);
var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);
var Stream__default = /*#__PURE__*/_interopDefaultLegacy(Stream);
var http__default = /*#__PURE__*/_interopDefaultLegacy(http);
var Url__default = /*#__PURE__*/_interopDefaultLegacy(Url);
var https__default = /*#__PURE__*/_interopDefaultLegacy(https);
var zlib__default = /*#__PURE__*/_interopDefaultLegacy(zlib);

function noop() { }
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function custom_event(type, detail) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, false, false, detail);
    return e;
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error('Function called outside component initialization');
    return current_component;
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail);
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
        }
    };
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

/* src\components\home\NavHero.svelte generated by Svelte v3.29.4 */

const NavHero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<div class="${"relative bg-white overflow-hidden"}"><div class="${"max-w-7xl mx-auto"}"><div class="${"relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"}"><svg class="${"hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"}" fill="${"currentColor"}" viewBox="${"0 0 100 100"}" preserveAspectRatio="${"none"}" aria-hidden="${"true"}"><polygon points="${"50,0 100,0 50,100 0,100"}"></polygon></svg>

      <div class="${"mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"}"><div class="${"sm:text-center lg:text-left"}"><h1 class="${"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"}"><span class="${"block xl:inline font-heading1"}">Transforming Your Digital Idea</span>
            <span class="${"block text-pink-600 xl:inline font-heading1"}">into Reality</span></h1>
          <p class="${"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"}"></p>
          <div class="${"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"}"><div class="${"rounded-md shadow"}"><a href="${"."}" class="${"w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 md:py-4 md:text-lg md:px-10"}">Services
              </a></div>
            <div class="${"mt-3 sm:mt-0 sm:ml-3"}"><a href="${"."}" class="${"w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-pink-700 bg-pink-100 hover:bg-pink-200 md:py-4 md:text-lg md:px-10"}">Portfolio
              </a></div></div></div></div></div></div>
  <div class="${"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"}">
    <img src="${"home-hero.jpg"}" alt="${"Hero Image"}"></div></div>

`;
});

const services = [
  {
    title: "UI Design and development",
    svg: `<svg class="h-8 w-8 text-pink-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="4" rx="1" />  <rect x="4" y="12" width="6" height="8" rx="1" />  <line x1="14" y1="12" x2="20" y2="12" />  <line x1="14" y1="16" x2="20" y2="16" />  <line x1="14" y1="20" x2="20" y2="20" /></svg>`,
    desc: "UI Design and Front-end design/development using open source frontend framework for creating rich, optimized websites for delivering them on a blazing fast user experience like Nextjs, Gatsbyjs, Nuxtjs and Sapper (Sveltejs Framework)."
  },
  {
    title: "Website Design and Development",
    svg: `<svg class="h-8 w-8 text-pink-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="2" />  <circle cx="9" cy="12" r=".5" fill="currentColor" />  <circle cx="15" cy="12" r=".5" fill="currentColor" /></svg>`,
    desc: "We provide cutting-edge, Unique, High quality, Fully working Website design and  development services to help your business operational, more efficient, collaborative and manageable. "
  },
  {
    title: "eCommerce Website Design and Development",
    svg: `<svg class="h-8 w-8 text-pink-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
    desc: "We Design Bespoke, fully featured, Responsive eCommerce website using Magento, Shopify, Prestashop and Woocommerce CMS for all type of business owners who want to get an online shop. We expertise in these CMS to customize and create functional extension a-nd plugins to meet your business requirement."
  },
  {
    title: "Mobile App design/Development",
    svg: `<svg class="h-8 w-8 text-pink-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="7" y="4" width="10" height="16" rx="1" />  <line x1="11" y1="5" x2="13" y2="5" />  <line x1="12" y1="17" x2="12" y2="17.01" /></svg>`,
    desc: "We provide beautiful and well thought, high-performance, cutting-edge and Bespoke mobile apps design and development that Take your business ideas to a new level. We expertise in Android and IOS based design and development with the backend api design and developmentf or the same, We also do Hybrid technology development like coding the Hybrid App using React-Native or Native-Script, so one code base with multiple device and OS."
  },
  {
    title: "Backend Development (Rest or GraphQL Endpoints)",
    svg: `<svg class="h-8 w-8 text-pink-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>    <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" />    <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(60 12 12)" />    <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(120 12 12)" />    <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(180 12 12)" />    <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(240 12 12)" />    <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(300 12 12)" />  </svg>`,
    desc: "We develop completely secure, high-performance and scalable API endpoints using Laravel framework or Node.js/Expressjs technology (with Mongodb, PostgreSQL, MySQL, firebase etc) which handle a JSON/XML data between your server and Application. We can use WordPress/Magento/Shopify/Prestashop/OctoberCMS as backend as well where frontend will be designed using any of open source front-end framework."
  },
  {
    title: "SEO & SEM Consultantancy",
    svg: `<svg class="h-8 w-8 text-pink-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="3" x2="12" y2="7" />  <line x1="12" y1="21" x2="12" y2="18" />  <line x1="3" y1="12" x2="7" y2="12" />  <line x1="21" y1="12" x2="18" y2="12" />  <line x1="12" y1="12" x2="12" y2="12.01" /></svg>`,
    desc: "We will make your website search engine friendly and fully optimize your complete website using advanced white hat SEO methodology. Our services include complete Website SEO Health Check, On Page Optimization, Social Media Marketing, Local SEO Optimization and Content Marketing & Link Building."
  },
];

/* src\components\common\Heading.svelte generated by Svelte v3.29.4 */

const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { text } = $$props;
	let { color = "text-pink-500" } = $$props;
	let { heading } = $$props;
	let { size = "text-4xl" } = $$props;
	if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0) $$bindings.heading(heading);
	if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
	return `<h2 class="${escape(heading) + " " + escape(size) + " " + escape(color)}">${escape(text)}</h2>`;
});

/* src\components\home\Services.svelte generated by Svelte v3.29.4 */

const css = {
	code: "#services.svelte-mmaq09{clip-path:polygon(0 0, 100% 0, 100% 90%, 0 100%);padding-bottom:100px}",
	map: "{\"version\":3,\"file\":\"Services.svelte\",\"sources\":[\"Services.svelte\"],\"sourcesContent\":[\"<script>\\r\\n  import { services } from \\\"../../services\\\";\\r\\n  import Heading from \\\"../common/Heading.svelte\\\";\\r\\n</script>\\r\\n\\r\\n<section id=\\\"services\\\" class=\\\"text-gray-600 body-font\\\">\\r\\n  <div class=\\\"container px-5 py-24 mx-auto\\\">\\r\\n    <Heading\\r\\n      text=\\\"Ninja Services\\\"\\r\\n      size=\\\"text-4xl sm:text-5xl md:text-6xl\\\"\\r\\n      heading=\\\"font-heading1 text-center mb-8\\\"\\r\\n      color=\\\"text-pink-500\\\"\\r\\n    />\\r\\n    <div\\r\\n      class=\\\"flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 text-center\\\"\\r\\n    >\\r\\n      {#each services as { title, svg, desc }}\\r\\n        <div class=\\\"xl:w-1/3 md:w-1/2 p-4 min-h-48\\\">\\r\\n          <div class=\\\"shadow p-6 rounded-lg\\\">\\r\\n            <div\\r\\n              class=\\\"w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4\\\"\\r\\n            >\\r\\n              {@html svg}\\r\\n            </div>\\r\\n            <h2 class=\\\"text-lg text-gray-900 font-medium title-font mb-2\\\">\\r\\n              {title}\\r\\n            </h2>\\r\\n            <p class=\\\"leading-relaxed text-justify\\\">\\r\\n              {desc}\\r\\n            </p>\\r\\n          </div>\\r\\n        </div>\\r\\n      {/each}\\r\\n    </div>\\r\\n  </div>\\r\\n</section>\\r\\n\\r\\n<style>\\r\\n  #services {\\r\\n    /* height: 98vh; */\\r\\n    /* background-image: linear-gradient(\\r\\n        to right bottom,\\r\\n        rgba(247, 39, 160, 0.994),\\r\\n        rgba(243, 179, 217, 0.96)\\r\\n      ),\\r\\n      url(\\\"../../../static/Taieri.png\\\");\\r\\n    background-size: cover;\\r\\n    background-position: top;\\r\\n    position: relative; */\\r\\n    /* Source : https://bennettfeely.com/clippy/ */\\r\\n    /* top left(x y), top right (x y), bottom right (x y), bottom left (x y)*/\\r\\n    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);\\r\\n    padding-bottom: 100px;\\r\\n  }\\r\\n</style>\\r\\n\"],\"names\":[],\"mappings\":\"AAsCE,SAAS,cAAC,CAAC,AAaT,SAAS,CAAE,QAAQ,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACjD,cAAc,CAAE,KAAK,AACvB,CAAC\"}"
};

const Services = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);

	return `<section id="${"services"}" class="${"text-gray-600 body-font svelte-mmaq09"}"><div class="${"container px-5 py-24 mx-auto"}">${validate_component(Heading, "Heading").$$render(
		$$result,
		{
			text: "Ninja Services",
			size: "text-4xl sm:text-5xl md:text-6xl",
			heading: "font-heading1 text-center mb-8",
			color: "text-pink-500"
		},
		{},
		{}
	)}
    <div class="${"flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 text-center"}">${each(services, ({ title, svg, desc }) => `<div class="${"xl:w-1/3 md:w-1/2 p-4 min-h-48"}"><div class="${"shadow p-6 rounded-lg"}"><div class="${"w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4"}">${svg}</div>
            <h2 class="${"text-lg text-gray-900 font-medium title-font mb-2"}">${escape(title)}</h2>
            <p class="${"leading-relaxed text-justify"}">${escape(desc)}
            </p></div>
        </div>`)}</div></div>
</section>`;
});

/* src\components\home\Whyus.svelte generated by Svelte v3.29.4 */

const css$1 = {
	code: "#whyus.svelte-1byy5h7{clip-path:polygon(0 0, 100% 0, 100% 90%, 0 100%);padding-bottom:100px}",
	map: "{\"version\":3,\"file\":\"Whyus.svelte\",\"sources\":[\"Whyus.svelte\"],\"sourcesContent\":[\"<script>\\r\\n  import Heading from \\\"../common/Heading.svelte\\\";\\r\\n</script>\\r\\n\\r\\n<section\\r\\n  id=\\\"whyus\\\"\\r\\n  class=\\\"text-gray-600 body-font bg-gradient-to-r from-gray-100 via-gray-50 to-gray-0\\\"\\r\\n>\\r\\n  <div class=\\\"container px-5 py-24 pb-20 mx-auto\\\">\\r\\n    <div class=\\\"flex flex-wrap w-full mb-20 flex-col items-center text-center\\\">\\r\\n      <div class=\\\"my-10 text-center\\\">\\r\\n        <Heading\\r\\n          text=\\\"Why Us\\\"\\r\\n          size=\\\"text-4xl sm:text-5xl md:text-6xl\\\"\\r\\n          heading=\\\"font-heading1 border-b-2\\\"\\r\\n          color=\\\"text-pink-500\\\"\\r\\n        />\\r\\n      </div>\\r\\n      <p class=\\\"lg:w-1/2 w-full leading-relaxed text-black text-2xl font-body\\\">\\r\\n        Our results and 480+ happy clients clearly indicate that we possess\\r\\n        exception skills and expertise.\\r\\n      </p>\\r\\n    </div>\\r\\n    <div class=\\\"flex flex-wrap -m-4\\\">\\r\\n      <div class=\\\"xl:w-1/3 md:w-1/2 p-4\\\">\\r\\n        <div class=\\\"shadow p-6 rounded-lg\\\">\\r\\n          <div\\r\\n            class=\\\"w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4\\\"\\r\\n          >\\r\\n            <svg\\r\\n              class=\\\"h-8 w-8 text-pink-500\\\"\\r\\n              width=\\\"24\\\"\\r\\n              height=\\\"24\\\"\\r\\n              viewBox=\\\"0 0 24 24\\\"\\r\\n              stroke-width=\\\"2\\\"\\r\\n              stroke=\\\"currentColor\\\"\\r\\n              fill=\\\"none\\\"\\r\\n              stroke-linecap=\\\"round\\\"\\r\\n              stroke-linejoin=\\\"round\\\"\\r\\n            >\\r\\n              <path stroke=\\\"none\\\" d=\\\"M0 0h24v24H0z\\\" />\\r\\n              <path\\r\\n                d=\\\"M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2\\\"\\r\\n              /> <path d=\\\"M12 3v3m0 12v3\\\" /></svg\\r\\n            >\\r\\n          </div>\\r\\n          <h2 class=\\\"text-lg text-gray-900 font-medium title-font mb-2\\\">\\r\\n            Great ROI\\r\\n          </h2>\\r\\n          <p class=\\\"leading-relaxed text-base font-body\\\">\\r\\n            Although we’re a team, we do not overcharge to our clients just to\\r\\n            keep our team members work loaded. We have been accurate and digital\\r\\n            from the start. Using our small team, we focus on delivering the\\r\\n            best product design/development, without wasting your time and\\r\\n            budget.\\r\\n          </p>\\r\\n        </div>\\r\\n      </div>\\r\\n      <div class=\\\"xl:w-1/3 md:w-1/2 p-4\\\">\\r\\n        <div class=\\\"shadow p-6 rounded-lg\\\">\\r\\n          <div\\r\\n            class=\\\"w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4\\\"\\r\\n          >\\r\\n            <svg\\r\\n              class=\\\"h-8 w-8 text-pink-500\\\"\\r\\n              viewBox=\\\"0 0 24 24\\\"\\r\\n              fill=\\\"none\\\"\\r\\n              stroke=\\\"currentColor\\\"\\r\\n              stroke-width=\\\"2\\\"\\r\\n              stroke-linecap=\\\"round\\\"\\r\\n              stroke-linejoin=\\\"round\\\"\\r\\n            >\\r\\n              <path d=\\\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\\\" />\\r\\n              <circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"3\\\" /></svg\\r\\n            >\\r\\n          </div>\\r\\n          <h2 class=\\\"text-lg text-gray-900 font-medium title-font mb-2\\\">\\r\\n            Undivided attention\\r\\n          </h2>\\r\\n          <p class=\\\"leading-relaxed text-base font-body\\\">\\r\\n            When we take on your project, our team is fully committed from start\\r\\n            to finish. It means constant progress, uninterrupted focus and\\r\\n            tangible results. When you decide to work with us, your project will\\r\\n            get all attention that it deserves.\\r\\n          </p>\\r\\n        </div>\\r\\n      </div>\\r\\n      <div class=\\\"xl:w-1/3 md:w-1/2 p-4\\\">\\r\\n        <div class=\\\"shadow p-6 rounded-lg\\\">\\r\\n          <div\\r\\n            class=\\\"w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4\\\"\\r\\n          >\\r\\n            <svg\\r\\n              class=\\\"h-8 w-8 text-pink-500\\\"\\r\\n              width=\\\"24\\\"\\r\\n              height=\\\"24\\\"\\r\\n              viewBox=\\\"0 0 24 24\\\"\\r\\n              stroke-width=\\\"2\\\"\\r\\n              stroke=\\\"currentColor\\\"\\r\\n              fill=\\\"none\\\"\\r\\n              stroke-linecap=\\\"round\\\"\\r\\n              stroke-linejoin=\\\"round\\\"\\r\\n            >\\r\\n              <path stroke=\\\"none\\\" d=\\\"M0 0h24v24H0z\\\" />\\r\\n              <path d=\\\"M4 8v-2a2 2 0 0 1 2 -2h2\\\" />\\r\\n              <path d=\\\"M4 16v2a2 2 0 0 0 2 2h2\\\" />\\r\\n              <path d=\\\"M16 4h2a2 2 0 0 1 2 2v2\\\" />\\r\\n              <path d=\\\"M16 20h2a2 2 0 0 0 2 -2v-2\\\" />\\r\\n              <line x1=\\\"9\\\" y1=\\\"10\\\" x2=\\\"9.01\\\" y2=\\\"10\\\" />\\r\\n              <line x1=\\\"15\\\" y1=\\\"10\\\" x2=\\\"15.01\\\" y2=\\\"10\\\" />\\r\\n              <path d=\\\"M9.5 15a3.5 3.5 0 0 0 5 0\\\" /></svg\\r\\n            >\\r\\n          </div>\\r\\n          <h2 class=\\\"text-lg text-gray-900 font-medium title-font mb-2\\\">\\r\\n            Small yet result oriented\\r\\n          </h2>\\r\\n          <p class=\\\"leading-relaxed text-base font-body\\\">\\r\\n            We are a team of passionate designers, developers with a strong zeal\\r\\n            to work with SMEs, emerging startups and individuals who need\\r\\n            technical help. We love coming to work every day and figuring out a\\r\\n            better World Wide Web for businesses and the end-users.\\r\\n          </p>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n    <a href=\\\"/about\\\" alt=\\\"about us\\\">\\r\\n    <button\\r\\n      class=\\\"flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-pink-500 rounded text-lg\\\"\\r\\n      >About Us</button\\r\\n    ></a>\\r\\n  </div>\\r\\n</section>\\r\\n\\r\\n<style>\\r\\n  #whyus {\\r\\n    /* height: 98vh; */\\r\\n    /* background-image: linear-gradient(\\r\\n        to right bottom,\\r\\n        rgba(247, 39, 160, 0.994),\\r\\n        rgba(243, 179, 217, 0.96)\\r\\n      ),\\r\\n      url(\\\"../../../static/Taieri.png\\\");\\r\\n    background-size: cover;\\r\\n    background-position: top;\\r\\n    position: relative; */\\r\\n    /* Source : https://bennettfeely.com/clippy/ */\\r\\n    /* top left(x y), top right (x y), bottom right (x y), bottom left (x y)*/\\r\\n    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);\\r\\n    padding-bottom: 100px;\\r\\n  }\\r\\n</style>\\r\\n\"],\"names\":[],\"mappings\":\"AAsIE,MAAM,eAAC,CAAC,AAaN,SAAS,CAAE,QAAQ,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACjD,cAAc,CAAE,KAAK,AACvB,CAAC\"}"
};

const Whyus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$1);

	return `<section id="${"whyus"}" class="${"text-gray-600 body-font bg-gradient-to-r from-gray-100 via-gray-50 to-gray-0 svelte-1byy5h7"}"><div class="${"container px-5 py-24 pb-20 mx-auto"}"><div class="${"flex flex-wrap w-full mb-20 flex-col items-center text-center"}"><div class="${"my-10 text-center"}">${validate_component(Heading, "Heading").$$render(
		$$result,
		{
			text: "Why Us",
			size: "text-4xl sm:text-5xl md:text-6xl",
			heading: "font-heading1 border-b-2",
			color: "text-pink-500"
		},
		{},
		{}
	)}</div>
      <p class="${"lg:w-1/2 w-full leading-relaxed text-black text-2xl font-body"}">Our results and 480+ happy clients clearly indicate that we possess
        exception skills and expertise.
      </p></div>
    <div class="${"flex flex-wrap -m-4"}"><div class="${"xl:w-1/3 md:w-1/2 p-4"}"><div class="${"shadow p-6 rounded-lg"}"><div class="${"w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4"}"><svg class="${"h-8 w-8 text-pink-500"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"}"></path><path d="${"M12 3v3m0 12v3"}"></path></svg></div>
          <h2 class="${"text-lg text-gray-900 font-medium title-font mb-2"}">Great ROI
          </h2>
          <p class="${"leading-relaxed text-base font-body"}">Although we’re a team, we do not overcharge to our clients just to
            keep our team members work loaded. We have been accurate and digital
            from the start. Using our small team, we focus on delivering the
            best product design/development, without wasting your time and
            budget.
          </p></div></div>
      <div class="${"xl:w-1/3 md:w-1/2 p-4"}"><div class="${"shadow p-6 rounded-lg"}"><div class="${"w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4"}"><svg class="${"h-8 w-8 text-pink-500"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path d="${"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}"></path><circle cx="${"12"}" cy="${"12"}" r="${"3"}"></circle></svg></div>
          <h2 class="${"text-lg text-gray-900 font-medium title-font mb-2"}">Undivided attention
          </h2>
          <p class="${"leading-relaxed text-base font-body"}">When we take on your project, our team is fully committed from start
            to finish. It means constant progress, uninterrupted focus and
            tangible results. When you decide to work with us, your project will
            get all attention that it deserves.
          </p></div></div>
      <div class="${"xl:w-1/3 md:w-1/2 p-4"}"><div class="${"shadow p-6 rounded-lg"}"><div class="${"w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4"}"><svg class="${"h-8 w-8 text-pink-500"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M4 8v-2a2 2 0 0 1 2 -2h2"}"></path><path d="${"M4 16v2a2 2 0 0 0 2 2h2"}"></path><path d="${"M16 4h2a2 2 0 0 1 2 2v2"}"></path><path d="${"M16 20h2a2 2 0 0 0 2 -2v-2"}"></path><line x1="${"9"}" y1="${"10"}" x2="${"9.01"}" y2="${"10"}"></line><line x1="${"15"}" y1="${"10"}" x2="${"15.01"}" y2="${"10"}"></line><path d="${"M9.5 15a3.5 3.5 0 0 0 5 0"}"></path></svg></div>
          <h2 class="${"text-lg text-gray-900 font-medium title-font mb-2"}">Small yet result oriented
          </h2>
          <p class="${"leading-relaxed text-base font-body"}">We are a team of passionate designers, developers with a strong zeal
            to work with SMEs, emerging startups and individuals who need
            technical help. We love coming to work every day and figuring out a
            better World Wide Web for businesses and the end-users.
          </p></div></div></div>
    <a href="${"/about"}" alt="${"about us"}"><button class="${"flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-pink-500 rounded text-lg"}">About Us</button></a></div>
</section>`;
});

/* src\components\common\Socialbutton.svelte generated by Svelte v3.29.4 */

const Socialbutton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<span class="${"inline-flex  mt-4"}"><a href="${"https://www.facebook.com/webdesignninjas/"}" class="${"text-gray-500"}"><svg fill="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" class="${"w-5 h-5"}" viewBox="${"0 0 24 24"}"><path d="${"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"}"></path></svg></a>
  <a href="${"https://twitter.com/const_shiv"}" class="${"ml-4 text-gray-500"}"><svg fill="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" class="${"w-5 h-5"}" viewBox="${"0 0 24 24"}"><path d="${"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"}"></path></svg></a>
  <a href="${"https://instagram.com/ninjatech.dev"}" class="${"ml-4 text-gray-500"}"><svg fill="${"none"}" stroke="${"currentColor"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" class="${"w-5 h-5"}" viewBox="${"0 0 24 24"}"><rect width="${"20"}" height="${"20"}" x="${"2"}" y="${"2"}" rx="${"5"}" ry="${"5"}"></rect><path d="${"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"}"></path></svg></a></span>`;
});

/* src\components\Contact.svelte generated by Svelte v3.29.4 */

const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let messageSent = false;
	let { contactbg } = $$props;

	onMount(() => {
		const formElement = document.querySelector("#contact-form");

		formElement.addEventListener("submit", event => {
			event.preventDefault();
			const data = new URLSearchParams(new FormData(formElement));
			fetch("https://getform.io/f/3d8af4d6-d4dc-41e1-b2ea-43bb410a81a5", { method: "POST", body: data });
			messageSent = true;
		});
	});

	if ($$props.contactbg === void 0 && $$bindings.contactbg && contactbg !== void 0) $$bindings.contactbg(contactbg);

	return `




<section class="${"text-gray-600 body-font relative " + escape(contactbg)}"><div class="${"container px-5 py-24 mx-auto"}"><div class="${"flex flex-col text-center w-full mb-12"}"><h1 class="${"sm:text-3xl text-2xl font-2xl font-bold title-font mb-4 text-gray-900"}">Let&#39;s Talk
      </h1>
      <p class="${"lg:w-2/3 mx-auto leading-relaxed text-base"}">Let&#39;s have a discussion regarding your new job requriement. please send
        us your name, email and your job description with time availability and
        skype id, so we can discuss in detail.
      </p></div>
    <div class="${"flex flex-col text-center w-full mb-12 " + escape(messageSent ? "" : "hidden")}"><h2>Thanking you for Contact us, we will get back to you very soon.</h2></div>
    <div class="${"lg:w-1/2 md:w-2/3 mx-auto " + escape(messageSent ? "hidden" : "")}"><form id="${"contact-form"}" action="${"https://getform.io/f/3d8af4d6-d4dc-41e1-b2ea-43bb410a81a5"}" method="${"POST"}"><div class="${"flex flex-wrap -m-2"}"><div class="${"p-2 w-1/2"}"><div class="${"relative"}"><label for="${"name"}" class="${"leading-7 text-sm text-gray-600"}">Name</label>
              <input type="${"text"}" id="${"fullname"}" name="${"fullname"}" class="${"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"}"></div></div>
          <div class="${"p-2 w-1/2"}"><div class="${"relative"}"><label for="${"email"}" class="${"leading-7 text-sm text-gray-600"}">Email</label>
              <input type="${"email"}" id="${"email"}" name="${"email"}" class="${"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"}"></div></div>
          <div class="${"p-2 w-full"}"><div class="${"relative"}"><label for="${"message"}" class="${"leading-7 text-sm text-gray-600"}">Message</label>
              <textarea id="${"message"}" name="${"message"}" class="${"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"}"></textarea></div></div>
          <div class="${"p-2 w-full"}"><button type="${"submit"}" class="${"flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg"}">Submit</button></div></div></form>
      <div class="${"p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"}"><a href="${"#srivastava.shiv"}" class="${"text-pink-500"}">Skype: srivastava.shiv</a></div></div></div></section>`;
});

/* src\components\home\Casestudies.svelte generated by Svelte v3.29.4 */

const css$2 = {
	code: "@media(max-width: 768px){.column.svelte-pfqlqk{width:100%}.content.svelte-pfqlqk{width:92vw}}@media(min-width: 769px) and (max-width: 1024px){.column.svelte-pfqlqk{width:50%}.content.svelte-pfqlqk{width:46vw}}@media(min-width: 1025px){.column.svelte-pfqlqk{width:50%}.content.svelte-pfqlqk{width:40vw}}.column.svelte-pfqlqk{justify-content:center;margin-top:40px}.content.svelte-pfqlqk{background-color:white;margin:5px;padding:10px;box-shadow:1px 1px 5px black;max-height:400px;overflow-y:scroll}img.svelte-pfqlqk{min-height:200px}",
	map: "{\"version\":3,\"file\":\"Casestudies.svelte\",\"sources\":[\"Casestudies.svelte\"],\"sourcesContent\":[\"<script>\\r\\n  export let imgOri;\\r\\n  export let imgSrc;\\r\\n  export let title;\\r\\n  export let detail;\\r\\n  export let loadingSpeed;\\r\\n  export let deliveryTime;\\r\\n  export let bounceRate;\\r\\n  export let organicTraffic;\\r\\n  export let category;\\r\\n  export let techUsed;\\r\\n</script>\\r\\n\\r\\n{#if imgOri}\\r\\n  <section class=\\\"text-gray-600 body-font overflow-hidden\\\">\\r\\n    <div class=\\\"container px-5 py-12 mx-auto\\\">\\r\\n      <div class=\\\"lg:w-4/5 mx-auto flex flex-wrap space-between\\\">\\r\\n        <div class=\\\"lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-2 lg:mb-0 p-8\\\">\\r\\n          <h2 class=\\\"text-sm title-font text-gray-500 tracking-widest\\\">\\r\\n            {category}\\r\\n          </h2>\\r\\n          <h1\\r\\n            class=\\\"text-gray-900 text-3xl title-font font-medium mb-4 border-b-2 border-pink-500 py-2 \\\"\\r\\n          >\\r\\n            {title}\\r\\n          </h1>\\r\\n          <p class=\\\"leading-relaxed mb-4\\\">\\r\\n            {detail}\\r\\n          </p>\\r\\n\\r\\n          <div class=\\\"flex border-t border-gray-200 py-2\\\">\\r\\n            <span class=\\\"text-gray-500\\\">Delivery Time</span>\\r\\n            <span class=\\\"ml-auto text-gray-900\\\">{deliveryTime}</span>\\r\\n          </div>\\r\\n          <div class=\\\"flex border-t border-gray-200 py-2\\\">\\r\\n            <span class=\\\"text-gray-500\\\">Loading Speed</span>\\r\\n            <span class=\\\"ml-auto text-gray-900\\\">{loadingSpeed}</span>\\r\\n          </div>\\r\\n          <div class=\\\"flex border-t border-gray-200 py-2\\\">\\r\\n            <span class=\\\"text-gray-500\\\">Increate in Organic Traffic</span>\\r\\n            <span class=\\\"ml-auto text-gray-900\\\">{organicTraffic}</span>\\r\\n          </div>\\r\\n          <div class=\\\"flex border-t border-gray-200 py-2\\\">\\r\\n            <span class=\\\"text-gray-500\\\">Bounce Rate</span>\\r\\n            <span class=\\\"ml-auto text-gray-900\\\">{bounceRate}</span>\\r\\n          </div>\\r\\n          <div class=\\\"flex border-t border-b mb-6  border-gray-200 py-2\\\">\\r\\n            <span class=\\\"text-gray-500\\\">Technology</span>\\r\\n            <span class=\\\"ml-auto text-right text-gray-900\\\">{techUsed}</span>\\r\\n          </div>\\r\\n        </div>\\r\\n\\r\\n        <div class=\\\"column lg:w-1/2 w-full\\\">\\r\\n          <div class=\\\"content \\\">\\r\\n            <img\\r\\n              src={imgSrc}\\r\\n              alt={title}\\r\\n              style=\\\"width:100%\\\"\\r\\n              max-width=\\\"650px\\\"\\r\\n              height=\\\"auto\\\"\\r\\n            />\\r\\n          </div>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n  </section>\\r\\n{:else}\\r\\n  <section class=\\\"text-gray-600 body-font overflow-hidden\\\">\\r\\n    <div class=\\\"container px-5 py-12 mx-auto\\\">\\r\\n      <div class=\\\"lg:w-full mx-auto flex flex-wrap space-between\\\">\\r\\n        <div class=\\\"column lg:w-1/2 w-full\\\">\\r\\n          <div class=\\\"content \\\">\\r\\n            <img\\r\\n              src={imgSrc}\\r\\n              alt={title}\\r\\n              style=\\\"width:100%\\\"\\r\\n              max-width=\\\"650px\\\"\\r\\n              height=\\\"auto\\\"\\r\\n            />\\r\\n          </div>\\r\\n        </div>\\r\\n        <div class=\\\"lg:w-1/2 w-full mt-2 md:mt-0 lg:ml-20 lg:pl-10 lg:py-10\\\">\\r\\n          <h2 class=\\\"text-sm title-font text-gray-500 tracking-widest\\\">\\r\\n            {category}\\r\\n          </h2>\\r\\n          <h1\\r\\n            class=\\\"text-gray-900 text-3xl title-font font-medium mb-4 border-b-2 border-pink-500 py-2 \\\"\\r\\n          >\\r\\n            {title}\\r\\n          </h1>\\r\\n          <p class=\\\"leading-relaxed mb-4\\\">\\r\\n            {detail}\\r\\n          </p>\\r\\n\\r\\n          <div class=\\\"flex border-t border-gray-200 py-2\\\">\\r\\n            <span class=\\\"text-gray-500\\\">Delivery Time</span>\\r\\n            <span class=\\\"ml-auto text-gray-900\\\">{deliveryTime}</span>\\r\\n          </div>\\r\\n          <div class=\\\"flex border-t border-gray-200 py-2\\\">\\r\\n            <span class=\\\"text-gray-500\\\">Loading Speed</span>\\r\\n            <span class=\\\"ml-auto text-gray-900\\\">{loadingSpeed}</span>\\r\\n          </div>\\r\\n          <div class=\\\"flex border-t border-gray-200 py-2\\\">\\r\\n            <span class=\\\"text-gray-500\\\">Increase in Organic Traffic</span>\\r\\n            <span class=\\\"ml-auto text-gray-900\\\">{organicTraffic}</span>\\r\\n          </div>\\r\\n          <div class=\\\"flex border-t border-gray-200 py-2\\\">\\r\\n            <span class=\\\"text-gray-500\\\">Bounce Rate</span>\\r\\n            <span class=\\\"ml-auto text-gray-900\\\">{bounceRate}</span>\\r\\n          </div>\\r\\n          <div class=\\\"flex border-t border-b mb-6  border-gray-200 py-2\\\">\\r\\n            <span class=\\\"text-gray-500\\\">Technology</span>\\r\\n            <span class=\\\"ml-2 text-right text-gray-900\\\">{techUsed}</span>\\r\\n          </div>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n  </section>\\r\\n{/if}\\r\\n\\r\\n<style>\\r\\n  @media (max-width: 768px) {\\r\\n    .column {\\r\\n      width: 100%;\\r\\n    }\\r\\n    .content {\\r\\n      width: 92vw;\\r\\n    }\\r\\n  }\\r\\n  @media (min-width: 769px) and (max-width: 1024px) {\\r\\n    .column {\\r\\n      width: 50%;\\r\\n    }\\r\\n    .content {\\r\\n      width: 46vw;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @media (min-width: 1025px) {\\r\\n    .column {\\r\\n      width: 50%;\\r\\n    }\\r\\n    .content {\\r\\n      width: 40vw;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  /* Create three equal columns */\\r\\n  .column {\\r\\n    justify-content: center;\\r\\n    margin-top: 40px;\\r\\n  }\\r\\n\\r\\n  /* Content */\\r\\n  .content {\\r\\n    background-color: white;\\r\\n    margin: 5px;\\r\\n    padding: 10px;\\r\\n    box-shadow: 1px 1px 5px black;\\r\\n    max-height: 400px;\\r\\n    overflow-y: scroll;\\r\\n  }\\r\\n\\r\\n  img {\\r\\n    min-height: 200px;\\r\\n  }\\r\\n</style>\\r\\n\"],\"names\":[],\"mappings\":\"AAyHE,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,OAAO,cAAC,CAAC,AACP,KAAK,CAAE,IAAI,AACb,CAAC,AACD,QAAQ,cAAC,CAAC,AACR,KAAK,CAAE,IAAI,AACb,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AACjD,OAAO,cAAC,CAAC,AACP,KAAK,CAAE,GAAG,AACZ,CAAC,AACD,QAAQ,cAAC,CAAC,AACR,KAAK,CAAE,IAAI,AACb,CAAC,AACH,CAAC,AAED,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAC1B,OAAO,cAAC,CAAC,AACP,KAAK,CAAE,GAAG,AACZ,CAAC,AACD,QAAQ,cAAC,CAAC,AACR,KAAK,CAAE,IAAI,AACb,CAAC,AACH,CAAC,AAGD,OAAO,cAAC,CAAC,AACP,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,IAAI,AAClB,CAAC,AAGD,QAAQ,cAAC,CAAC,AACR,gBAAgB,CAAE,KAAK,CACvB,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAC7B,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,MAAM,AACpB,CAAC,AAED,GAAG,cAAC,CAAC,AACH,UAAU,CAAE,KAAK,AACnB,CAAC\"}"
};

const Casestudies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { imgOri } = $$props;
	let { imgSrc } = $$props;
	let { title } = $$props;
	let { detail } = $$props;
	let { loadingSpeed } = $$props;
	let { deliveryTime } = $$props;
	let { bounceRate } = $$props;
	let { organicTraffic } = $$props;
	let { category } = $$props;
	let { techUsed } = $$props;
	if ($$props.imgOri === void 0 && $$bindings.imgOri && imgOri !== void 0) $$bindings.imgOri(imgOri);
	if ($$props.imgSrc === void 0 && $$bindings.imgSrc && imgSrc !== void 0) $$bindings.imgSrc(imgSrc);
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	if ($$props.detail === void 0 && $$bindings.detail && detail !== void 0) $$bindings.detail(detail);
	if ($$props.loadingSpeed === void 0 && $$bindings.loadingSpeed && loadingSpeed !== void 0) $$bindings.loadingSpeed(loadingSpeed);
	if ($$props.deliveryTime === void 0 && $$bindings.deliveryTime && deliveryTime !== void 0) $$bindings.deliveryTime(deliveryTime);
	if ($$props.bounceRate === void 0 && $$bindings.bounceRate && bounceRate !== void 0) $$bindings.bounceRate(bounceRate);
	if ($$props.organicTraffic === void 0 && $$bindings.organicTraffic && organicTraffic !== void 0) $$bindings.organicTraffic(organicTraffic);
	if ($$props.category === void 0 && $$bindings.category && category !== void 0) $$bindings.category(category);
	if ($$props.techUsed === void 0 && $$bindings.techUsed && techUsed !== void 0) $$bindings.techUsed(techUsed);
	$$result.css.add(css$2);

	return `${imgOri
	? `<section class="${"text-gray-600 body-font overflow-hidden"}"><div class="${"container px-5 py-12 mx-auto"}"><div class="${"lg:w-4/5 mx-auto flex flex-wrap space-between"}"><div class="${"lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-2 lg:mb-0 p-8"}"><h2 class="${"text-sm title-font text-gray-500 tracking-widest"}">${escape(category)}</h2>
          <h1 class="${"text-gray-900 text-3xl title-font font-medium mb-4 border-b-2 border-pink-500 py-2 "}">${escape(title)}</h1>
          <p class="${"leading-relaxed mb-4"}">${escape(detail)}</p>

          <div class="${"flex border-t border-gray-200 py-2"}"><span class="${"text-gray-500"}">Delivery Time</span>
            <span class="${"ml-auto text-gray-900"}">${escape(deliveryTime)}</span></div>
          <div class="${"flex border-t border-gray-200 py-2"}"><span class="${"text-gray-500"}">Loading Speed</span>
            <span class="${"ml-auto text-gray-900"}">${escape(loadingSpeed)}</span></div>
          <div class="${"flex border-t border-gray-200 py-2"}"><span class="${"text-gray-500"}">Increate in Organic Traffic</span>
            <span class="${"ml-auto text-gray-900"}">${escape(organicTraffic)}</span></div>
          <div class="${"flex border-t border-gray-200 py-2"}"><span class="${"text-gray-500"}">Bounce Rate</span>
            <span class="${"ml-auto text-gray-900"}">${escape(bounceRate)}</span></div>
          <div class="${"flex border-t border-b mb-6  border-gray-200 py-2"}"><span class="${"text-gray-500"}">Technology</span>
            <span class="${"ml-auto text-right text-gray-900"}">${escape(techUsed)}</span></div></div>

        <div class="${"column lg:w-1/2 w-full svelte-pfqlqk"}"><div class="${"content  svelte-pfqlqk"}"><img${add_attribute("src", imgSrc, 0)}${add_attribute("alt", title, 0)} style="${"width:100%"}" max-width="${"650px"}" height="${"auto"}" class="${"svelte-pfqlqk"}"></div></div></div></div></section>`
	: `<section class="${"text-gray-600 body-font overflow-hidden"}"><div class="${"container px-5 py-12 mx-auto"}"><div class="${"lg:w-full mx-auto flex flex-wrap space-between"}"><div class="${"column lg:w-1/2 w-full svelte-pfqlqk"}"><div class="${"content  svelte-pfqlqk"}"><img${add_attribute("src", imgSrc, 0)}${add_attribute("alt", title, 0)} style="${"width:100%"}" max-width="${"650px"}" height="${"auto"}" class="${"svelte-pfqlqk"}"></div></div>
        <div class="${"lg:w-1/2 w-full mt-2 md:mt-0 lg:ml-20 lg:pl-10 lg:py-10"}"><h2 class="${"text-sm title-font text-gray-500 tracking-widest"}">${escape(category)}</h2>
          <h1 class="${"text-gray-900 text-3xl title-font font-medium mb-4 border-b-2 border-pink-500 py-2 "}">${escape(title)}</h1>
          <p class="${"leading-relaxed mb-4"}">${escape(detail)}</p>

          <div class="${"flex border-t border-gray-200 py-2"}"><span class="${"text-gray-500"}">Delivery Time</span>
            <span class="${"ml-auto text-gray-900"}">${escape(deliveryTime)}</span></div>
          <div class="${"flex border-t border-gray-200 py-2"}"><span class="${"text-gray-500"}">Loading Speed</span>
            <span class="${"ml-auto text-gray-900"}">${escape(loadingSpeed)}</span></div>
          <div class="${"flex border-t border-gray-200 py-2"}"><span class="${"text-gray-500"}">Increase in Organic Traffic</span>
            <span class="${"ml-auto text-gray-900"}">${escape(organicTraffic)}</span></div>
          <div class="${"flex border-t border-gray-200 py-2"}"><span class="${"text-gray-500"}">Bounce Rate</span>
            <span class="${"ml-auto text-gray-900"}">${escape(bounceRate)}</span></div>
          <div class="${"flex border-t border-b mb-6  border-gray-200 py-2"}"><span class="${"text-gray-500"}">Technology</span>
            <span class="${"ml-2 text-right text-gray-900"}">${escape(techUsed)}</span></div></div></div></div></section>`}`;
});

/* src\routes\index.svelte generated by Svelte v3.29.4 */

const css$3 = {
	code: "#casestudies.svelte-wvkxmp{clip-path:polygon(0 0, 100% 0, 100% 95%, 0 100%);padding-bottom:100px}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script>\\n  import NavHero from \\\"../components/home/NavHero.svelte\\\";\\n  // import ClientReview from \\\"../components/home/ClientReview.svelte\\\";\\n  import Services from \\\"../components/home/Services.svelte\\\";\\n  import Whyus from \\\"../components/home/Whyus.svelte\\\";\\n  import Contact from \\\"../components/Contact.svelte\\\";\\n  import Casestudies from \\\"../components/home/Casestudies.svelte\\\";\\n  import Heading from \\\"../components/common/Heading.svelte\\\";\\n</script>\\n\\n<svelte:head>\\n  <title>Webdesign Ninjas</title>\\n</svelte:head>\\n\\n<NavHero />\\n<Whyus />\\n<!-- <ClientReview /> -->\\n<section\\n  id=\\\"casestudies\\\"\\n  class=\\\"text-gray-600 body-font bg-gradient-to-r from-gray-100 via-gray-50 to-gray-0 my-8 py-8\\\"\\n>\\n  <Heading\\n    text=\\\"Case Studies\\\"\\n    size=\\\"text-4xl sm:text-5xl md:text-6xl\\\"\\n    heading=\\\"font-heading1 text-center mb-8\\\"\\n    color=\\\"text-pink-500\\\"\\n  />\\n  <Casestudies\\n    imgOri={true}\\n    imgSrc=\\\"images/impossiblefoods.png\\\"\\n    title=\\\"Impossible Foods\\\"\\n    detail=\\\"Impossible Foods is a multi Vendor with card functionality, where people who grow / agriculture the meat can register and sell their ready products across six countries.\\\"\\n    loadingSpeed=\\\"97\\\"\\n    deliveryTime=\\\"6 weeks\\\"\\n    bounceRate=\\\"32%\\\"\\n    organicTraffic=\\\"26%\\\"\\n    category=\\\"eCommerce Website\\\"\\n    techUsed=\\\"Nextjs(Reactjs), Contentful, Shopify and GSAP\\\"\\n  />\\n  <Casestudies\\n    imgOri={false}\\n    imgSrc=\\\"images/behuppy.png\\\"\\n    title=\\\"Behuppy\\\"\\n    detail=\\\"Behuppy is a manufacture of Toothpaste Tablets and wooden tooth brush and selling this unique idea to make ocean clean from plastic.\\\"\\n    loadingSpeed=\\\"98\\\"\\n    deliveryTime=\\\"5 weeks\\\"\\n    bounceRate=\\\"29%\\\"\\n    organicTraffic=\\\"42%\\\"\\n    category=\\\"eCommerce Website\\\"\\n    techUsed=\\\"Frontend Using JQuery + Parcel and Backend - Shopify, Animation using GSAPP\\\"\\n  />\\n  <Casestudies\\n    imgOri={true}\\n    imgSrc=\\\"images/inetmart-biz.png\\\"\\n    title=\\\"INetMart.Biz\\\"\\n    detail=\\\"INetMart.Biz is a prelaunch website for online marketplace that allows entrepreneurs to build a sustainable business. It offer a hassle-free, one-stop solution connecting businesses with customers.\\\"\\n    loadingSpeed=\\\"98\\\"\\n    deliveryTime=\\\"2 weeks\\\"\\n    bounceRate=\\\"23%\\\"\\n    organicTraffic=\\\"18%\\\"\\n    category=\\\"Business Website\\\"\\n    techUsed=\\\"Wordpress and Hosted on AWS\\\"\\n  />\\n  <a href=\\\"/case-studies\\\" alt=\\\"View more case studies\\\">\\n    <button\\n      class=\\\"flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-pink-500 rounded text-lg\\\"\\n      >More Case Studies...</button\\n    ></a\\n  >\\n</section>\\n\\n<Services />\\n<div class=\\\"flex mb-16 justify-items-center justify-center\\\">\\n  <a href=\\\"/services\\\" alt=\\\"Our Ninja Services\\\">\\n    <button\\n      class=\\\"flex mx-auto mb-16 text-white text-center bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-pink-500 rounded text-lg\\\"\\n      >Explore more...</button\\n    ></a\\n  >\\n</div>\\n<Contact\\n  contactbg=\\\"bg-gradient-to-r from-gray-100 via-gray-50 to-gray-0 mt-8\\\"\\n/>\\n\\n<style>\\n  #casestudies {\\n    clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);\\n    padding-bottom: 100px;\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAqFE,YAAY,cAAC,CAAC,AACZ,SAAS,CAAE,QAAQ,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACjD,cAAc,CAAE,KAAK,AACvB,CAAC\"}"
};

const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$3);

	return `${($$result.head += `${($$result.title = `<title>Webdesign Ninjas</title>`, "")}`, "")}

${validate_component(NavHero, "NavHero").$$render($$result, {}, {}, {})}
${validate_component(Whyus, "Whyus").$$render($$result, {}, {}, {})}

<section id="${"casestudies"}" class="${"text-gray-600 body-font bg-gradient-to-r from-gray-100 via-gray-50 to-gray-0 my-8 py-8 svelte-wvkxmp"}">${validate_component(Heading, "Heading").$$render(
		$$result,
		{
			text: "Case Studies",
			size: "text-4xl sm:text-5xl md:text-6xl",
			heading: "font-heading1 text-center mb-8",
			color: "text-pink-500"
		},
		{},
		{}
	)}
  ${validate_component(Casestudies, "Casestudies").$$render(
		$$result,
		{
			imgOri: true,
			imgSrc: "images/impossiblefoods.png",
			title: "Impossible Foods",
			detail: "Impossible Foods is a multi Vendor with card functionality, where people who grow / agriculture the meat can register and sell their ready products across six countries.",
			loadingSpeed: "97",
			deliveryTime: "6 weeks",
			bounceRate: "32%",
			organicTraffic: "26%",
			category: "eCommerce Website",
			techUsed: "Nextjs(Reactjs), Contentful, Shopify and GSAP"
		},
		{},
		{}
	)}
  ${validate_component(Casestudies, "Casestudies").$$render(
		$$result,
		{
			imgOri: false,
			imgSrc: "images/behuppy.png",
			title: "Behuppy",
			detail: "Behuppy is a manufacture of Toothpaste Tablets and wooden tooth brush and selling this unique idea to make ocean clean from plastic.",
			loadingSpeed: "98",
			deliveryTime: "5 weeks",
			bounceRate: "29%",
			organicTraffic: "42%",
			category: "eCommerce Website",
			techUsed: "Frontend Using JQuery + Parcel and Backend - Shopify, Animation using GSAPP"
		},
		{},
		{}
	)}
  ${validate_component(Casestudies, "Casestudies").$$render(
		$$result,
		{
			imgOri: true,
			imgSrc: "images/inetmart-biz.png",
			title: "INetMart.Biz",
			detail: "INetMart.Biz is a prelaunch website for online marketplace that allows entrepreneurs to build a sustainable business. It offer a hassle-free, one-stop solution connecting businesses with customers.",
			loadingSpeed: "98",
			deliveryTime: "2 weeks",
			bounceRate: "23%",
			organicTraffic: "18%",
			category: "Business Website",
			techUsed: "Wordpress and Hosted on AWS"
		},
		{},
		{}
	)}
  <a href="${"/case-studies"}" alt="${"View more case studies"}"><button class="${"flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-pink-500 rounded text-lg"}">More Case Studies...</button></a></section>

${validate_component(Services, "Services").$$render($$result, {}, {}, {})}
<div class="${"flex mb-16 justify-items-center justify-center"}"><a href="${"/services"}" alt="${"Our Ninja Services"}"><button class="${"flex mx-auto mb-16 text-white text-center bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-white hover:text-pink-500 rounded text-lg"}">Explore more...</button></a></div>
${validate_component(Contact, "Contact").$$render(
		$$result,
		{
			contactbg: "bg-gradient-to-r from-gray-100 via-gray-50 to-gray-0 mt-8"
		},
		{},
		{}
	)}`;
});

var component_0 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Routes
});

const images = [ 
		{
				name: "www.zeeandco.co.uk",
				url: "portfolio/zeeandco-co-uk.jpg",
				keyword: "eCommerce",
				descr: ""
		}, 
		{
				name: "www.basiclife.com",
				url: "portfolio/basicslife.jpg",
				keyword: "eCommerce",
				descr: ""
		}, 
		{
				name: "www.lynnkwagner.com",
				url: "portfolio/lynnkwagner.jpg",
				keyword: "Informational",
				descr: ""
		}, 
		{
				name: "www.smartheartworkshops.co.uk",
				url: "portfolio/smartheartworkshops-co-uk.jpg",
				keyword: "Informational",
				descr: ""
		},
		{
				name: "www.adamsweddingphotography.co.uk",
				url: "portfolio/adamsweddingphotography.jpg",
				keyword: "Informational",
				descr: ""
		}, 
		{
				name: "www.ariachairs.com",
				url: "portfolio/ariachairs.jpg",
				keyword: "eCommerce",
				descr: ""
		}, 
		{
				name: "www.azneuro.com",
				url: "portfolio/azneuro.jpg",
				keyword: "Custom",
				descr: ""
		}, 
		{
				name: "www.bannerbuzz.co.uk",
				url: "portfolio/bannerbuzz-co-uk.jpg",
				keyword: "Custom",
				descr: ""
		}, 
		{
				name: "www.latofieldsestate.com",
				url: "portfolio/latofieldsestate.jpg",
				keyword: "eCommerce",
				descr: ""
		},
	];

const categories = ["eCommerce", "Informational", "Custom"];

/* src\components\portfolio\ButtonContainer.svelte generated by Svelte v3.29.4 */

const css$4 = {
	code: "#myBtnContainer.svelte-1yeucvb{margin-bottom:1rem}",
	map: "{\"version\":3,\"file\":\"ButtonContainer.svelte\",\"sources\":[\"ButtonContainer.svelte\"],\"sourcesContent\":[\"<style>\\n\\t#myBtnContainer {\\n\\t\\tmargin-bottom: 1rem;\\n\\t}\\n</style>\\n\\n\\n<div id=\\\"myBtnContainer\\\">\\n\\t<slot></slot>\\n</div>\"],\"names\":[],\"mappings\":\"AACC,eAAe,eAAC,CAAC,AAChB,aAAa,CAAE,IAAI,AACpB,CAAC\"}"
};

const ButtonContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$4);
	return `<div id="${"myBtnContainer"}" class="${"svelte-1yeucvb"}">${slots.default ? slots.default({}) : ``}</div>`;
});

/* src\components\portfolio\Gallery.svelte generated by Svelte v3.29.4 */

const css$5 = {
	code: ".row.svelte-1kyqgnq{width:100%;display:flex;flex-wrap:wrap}",
	map: "{\"version\":3,\"file\":\"Gallery.svelte\",\"sources\":[\"Gallery.svelte\"],\"sourcesContent\":[\"<style>\\n\\t.row {\\n\\t\\twidth: 100%;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-wrap: wrap;\\t\\n\\t}\\n</style>\\n\\n\\n<div class=\\\"row\\\">\\n\\t<slot></slot>\\n</div>\"],\"names\":[],\"mappings\":\"AACC,IAAI,eAAC,CAAC,AACL,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,AAChB,CAAC\"}"
};

const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$5);
	return `<div class="${"row svelte-1kyqgnq"}">${slots.default ? slots.default({}) : ``}</div>`;
});

/* src\components\portfolio\Portfoliogaller.svelte generated by Svelte v3.29.4 */

const css$6 = {
	code: "main.svelte-6obhwh{max-width:100vw;display:flex;flex-direction:column;align-items:center;justify-content:center}p.svelte-6obhwh{margin:0 0 0.5rem;position:relative}@media(max-width: 768px){.column.svelte-6obhwh{width:100%}.content.svelte-6obhwh{width:92vw}}@media(min-width: 769px) and (max-width: 1024px){.column.svelte-6obhwh{width:50%}.content.svelte-6obhwh{width:46vw}}@media(min-width: 1025px){.column.svelte-6obhwh{width:33%}.content.svelte-6obhwh{width:30vw}}.column.svelte-6obhwh{display:none;justify-content:center;margin:10px 0}.content.svelte-6obhwh{background-color:white;margin:5px;padding:10px;box-shadow:1px 1px 5px black;max-height:400px;overflow-y:scroll}img.svelte-6obhwh{min-height:200px}.show.svelte-6obhwh{display:flex}.btn.svelte-6obhwh{text-transform:uppercase;font-weight:200;font-size:14px;letter-spacing:1px;border:none;outline:none;margin:5px;padding:10px 10px 8px;background-color:white;border:1px solid pink;cursor:pointer;transition:0.1s ease-in-out}.btn.svelte-6obhwh:active,.active.svelte-6obhwh{background-color:#000;color:white}",
	map: "{\"version\":3,\"file\":\"Portfoliogaller.svelte\",\"sources\":[\"Portfoliogaller.svelte\"],\"sourcesContent\":[\"<script>\\r\\n  import { images } from \\\"./imgData.js\\\";\\r\\n  import { categories } from \\\"./imgData.js\\\";\\r\\n  import Heading from \\\"../common/Heading.svelte\\\";\\r\\n\\r\\n  import ButtonContainer from \\\"./ButtonContainer.svelte\\\";\\r\\n  import Gallery from \\\"./Gallery.svelte\\\";\\r\\n\\r\\n  let selected = \\\"eCommerce\\\";\\r\\n\\r\\n  const filterSelection = (e) => (selected = e.target.dataset.name);\\r\\n</script>\\r\\n\\r\\n<main>\\r\\n  <div class=\\\"my-10\\\">\\r\\n    <Heading\\r\\n      text=\\\"Portfolio\\\"\\r\\n      size=\\\"text-4xl sm:text-5xl md:text-6xl\\\"\\r\\n      heading=\\\"font-heading1 border-b-2\\\"\\r\\n      color=\\\"text-pink-500\\\"\\r\\n    />\\r\\n  </div>\\r\\n  <ButtonContainer>\\r\\n    {#each categories as category}\\r\\n      <button\\r\\n        class:active={selected === category}\\r\\n        class=\\\"btn\\\"\\r\\n        data-name={category}\\r\\n        on:click={filterSelection}\\r\\n      >\\r\\n        {category}\\r\\n      </button>\\r\\n    {/each}\\r\\n  </ButtonContainer>\\r\\n\\r\\n  <!-- Portfolio Gallery Grid -->\\r\\n\\r\\n  <Gallery>\\r\\n    {#each images as { name, url, keyword, descr }}\\r\\n      {#if selected === \\\"all\\\"}\\r\\n        <div class=\\\"show column\\\">\\r\\n          <div class=\\\"content\\\">\\r\\n            <img src={url} alt={name} style=\\\"width:100%\\\" />\\r\\n            <!-- <a href={name} alt={name} class=\\\"btn\\\">{name} </a> -->\\r\\n            <p>{descr}</p>\\r\\n          </div>\\r\\n        </div>\\r\\n      {:else}\\r\\n        <div class:show={keyword === selected} class=\\\"column\\\">\\r\\n          <div class=\\\"content\\\">\\r\\n            <img src={url} alt={name} style=\\\"width:100%\\\" />\\r\\n            <!-- <a href={name} alt={name} class=\\\"btn\\\">{name} </a> -->\\r\\n            <p>{descr}</p>\\r\\n          </div>\\r\\n        </div>\\r\\n      {/if}\\r\\n    {/each}\\r\\n  </Gallery>\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n  /* Center website */\\r\\n\\r\\n  main {\\r\\n    max-width: 100vw;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    /* \\tbackground-color: red; */\\r\\n  }\\r\\n  p {\\r\\n    margin: 0 0 0.5rem;\\r\\n    position: relative;\\r\\n  }\\r\\n\\r\\n  @media (max-width: 768px) {\\r\\n    .column {\\r\\n      width: 100%;\\r\\n    }\\r\\n    .content {\\r\\n      width: 92vw;\\r\\n    }\\r\\n  }\\r\\n  @media (min-width: 769px) and (max-width: 1024px) {\\r\\n    .column {\\r\\n      width: 50%;\\r\\n    }\\r\\n    .content {\\r\\n      width: 46vw;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @media (min-width: 1025px) {\\r\\n    .column {\\r\\n      width: 33%;\\r\\n    }\\r\\n    .content {\\r\\n      width: 30vw;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  /* Create three equal columns */\\r\\n  .column {\\r\\n    display: none;\\r\\n    justify-content: center;\\r\\n    margin: 10px 0;\\r\\n  }\\r\\n\\r\\n  /* Content */\\r\\n  .content {\\r\\n    background-color: white;\\r\\n    margin: 5px;\\r\\n    padding: 10px;\\r\\n    box-shadow: 1px 1px 5px black;\\r\\n    max-height: 400px;\\r\\n    overflow-y: scroll;\\r\\n  }\\r\\n\\r\\n  img {\\r\\n    min-height: 200px;\\r\\n  }\\r\\n\\r\\n  /* The \\\"show\\\" class is added to the filtered elements */\\r\\n  .show {\\r\\n    display: flex;\\r\\n  }\\r\\n\\r\\n  /* Style the buttons */\\r\\n  .btn {\\r\\n    text-transform: uppercase;\\r\\n    font-weight: 200;\\r\\n    font-size: 14px;\\r\\n    letter-spacing: 1px;\\r\\n    border: none;\\r\\n    outline: none;\\r\\n    margin: 5px;\\r\\n    padding: 10px 10px 8px;\\r\\n    background-color: white;\\r\\n    border: 1px solid pink;\\r\\n    cursor: pointer;\\r\\n    transition: 0.1s ease-in-out;\\r\\n  }\\r\\n\\r\\n  /* Add a dark background color to the active button */\\r\\n  .btn:active,\\r\\n  .active {\\r\\n    background-color: #000;\\r\\n    color: white;\\r\\n  }\\r\\n</style>\\r\\n\"],\"names\":[],\"mappings\":\"AA+DE,IAAI,cAAC,CAAC,AACJ,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,AAEzB,CAAC,AACD,CAAC,cAAC,CAAC,AACD,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,MAAM,CAClB,QAAQ,CAAE,QAAQ,AACpB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,OAAO,cAAC,CAAC,AACP,KAAK,CAAE,IAAI,AACb,CAAC,AACD,QAAQ,cAAC,CAAC,AACR,KAAK,CAAE,IAAI,AACb,CAAC,AACH,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AACjD,OAAO,cAAC,CAAC,AACP,KAAK,CAAE,GAAG,AACZ,CAAC,AACD,QAAQ,cAAC,CAAC,AACR,KAAK,CAAE,IAAI,AACb,CAAC,AACH,CAAC,AAED,MAAM,AAAC,YAAY,MAAM,CAAC,AAAC,CAAC,AAC1B,OAAO,cAAC,CAAC,AACP,KAAK,CAAE,GAAG,AACZ,CAAC,AACD,QAAQ,cAAC,CAAC,AACR,KAAK,CAAE,IAAI,AACb,CAAC,AACH,CAAC,AAGD,OAAO,cAAC,CAAC,AACP,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,IAAI,CAAC,CAAC,AAChB,CAAC,AAGD,QAAQ,cAAC,CAAC,AACR,gBAAgB,CAAE,KAAK,CACvB,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAC7B,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,MAAM,AACpB,CAAC,AAED,GAAG,cAAC,CAAC,AACH,UAAU,CAAE,KAAK,AACnB,CAAC,AAGD,KAAK,cAAC,CAAC,AACL,OAAO,CAAE,IAAI,AACf,CAAC,AAGD,IAAI,cAAC,CAAC,AACJ,cAAc,CAAE,SAAS,CACzB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,GAAG,CACnB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,GAAG,CACtB,gBAAgB,CAAE,KAAK,CACvB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,IAAI,CAAC,WAAW,AAC9B,CAAC,AAGD,kBAAI,OAAO,CACX,OAAO,cAAC,CAAC,AACP,gBAAgB,CAAE,IAAI,CACtB,KAAK,CAAE,KAAK,AACd,CAAC\"}"
};

const Portfoliogaller = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let selected = "eCommerce";
	$$result.css.add(css$6);

	return `<main class="${"svelte-6obhwh"}"><div class="${"my-10"}">${validate_component(Heading, "Heading").$$render(
		$$result,
		{
			text: "Portfolio",
			size: "text-4xl sm:text-5xl md:text-6xl",
			heading: "font-heading1 border-b-2",
			color: "text-pink-500"
		},
		{},
		{}
	)}</div>
  ${validate_component(ButtonContainer, "ButtonContainer").$$render($$result, {}, {}, {
		default: () => `${each(categories, category => `<button class="${["btn svelte-6obhwh", selected === category ? "active" : ""].join(" ").trim()}"${add_attribute("data-name", category, 0)}>${escape(category)}
      </button>`)}`
	})}

  

  ${validate_component(Gallery, "Gallery").$$render($$result, {}, {}, {
		default: () => `${each(images, ({ name, url, keyword, descr }) => `${ `<div class="${["column svelte-6obhwh", keyword === selected ? "show" : ""].join(" ").trim()}"><div class="${"content svelte-6obhwh"}"><img${add_attribute("src", url, 0)}${add_attribute("alt", name, 0)} style="${"width:100%"}" class="${"svelte-6obhwh"}">
            
            <p class="${"svelte-6obhwh"}">${escape(descr)}</p></div>
        </div>`}`)}`
	})}
</main>`;
});

/* src\routes\case-studies.svelte generated by Svelte v3.29.4 */

const Case_studies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<section class="${"text-gray-600 body-font overflow-hidden"}"><div class="${"container px-5 py-24 mx-auto"}"><div class="${"flex flex-wrap m-12"}">${validate_component(Portfoliogaller, "Portfoliogaller").$$render($$result, {}, {}, {})}</div></div></section>`;
});

var component_1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Case_studies
});

/* src\routes\services.svelte generated by Svelte v3.29.4 */

const Services_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${validate_component(Services, "Services").$$render($$result, {}, {}, {})}
${validate_component(Contact, "Contact").$$render(
		$$result,
		{
			contactbg: "bg-gradient-to-r from-gray-100 via-gray-50 to-gray-0"
		},
		{},
		{}
	)}`;
});

var component_2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Services_1
});

/* src\routes\contact.svelte generated by Svelte v3.29.4 */

const Contact_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}`;
});

var component_3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Contact_1
});

/* node_modules\svelte-seo\src\SvelteSeo.svelte generated by Svelte v3.29.4 */

const SvelteSeo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { title = undefined } = $$props;
	let { noindex = false } = $$props;
	let { nofollow = false } = $$props;
	let { description = undefined } = $$props;
	let { keywords = undefined } = $$props;
	let { canonical = undefined } = $$props;
	let { openGraph = undefined } = $$props;
	let { twitter = undefined } = $$props;
	let { jsonLd = undefined } = $$props;
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	if ($$props.noindex === void 0 && $$bindings.noindex && noindex !== void 0) $$bindings.noindex(noindex);
	if ($$props.nofollow === void 0 && $$bindings.nofollow && nofollow !== void 0) $$bindings.nofollow(nofollow);
	if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
	if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0) $$bindings.keywords(keywords);
	if ($$props.canonical === void 0 && $$bindings.canonical && canonical !== void 0) $$bindings.canonical(canonical);
	if ($$props.openGraph === void 0 && $$bindings.openGraph && openGraph !== void 0) $$bindings.openGraph(openGraph);
	if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0) $$bindings.twitter(twitter);
	if ($$props.jsonLd === void 0 && $$bindings.jsonLd && jsonLd !== void 0) $$bindings.jsonLd(jsonLd);

	return `${($$result.head += `${title
	? `${($$result.title = `<title>${escape(title)}</title>`, "")}`
	: ``}<meta name="${"robots"}"${add_attribute("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`, 0)} data-svelte="svelte-1f0hxex"><meta name="${"googlebot"}"${add_attribute("content", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`, 0)} data-svelte="svelte-1f0hxex">${description
	? `<meta name="${"description"}"${add_attribute("content", description, 0)} data-svelte="svelte-1f0hxex">`
	: ``}${canonical
	? `<link rel="${"canonical"}"${add_attribute("href", canonical, 0)} data-svelte="svelte-1f0hxex">`
	: ``}${keywords
	? `<meta name="${"keywords"}"${add_attribute("content", keywords, 0)} data-svelte="svelte-1f0hxex">`
	: ``}${openGraph
	? `${openGraph.title
		? `<meta property="${"og:title"}"${add_attribute("content", openGraph.title, 0)} data-svelte="svelte-1f0hxex">`
		: ``}

    ${openGraph.description
		? `<meta property="${"og:description"}"${add_attribute("content", openGraph.description, 0)} data-svelte="svelte-1f0hxex">`
		: ``}

    ${openGraph.url || canonical
		? `<meta property="${"og:url"}"${add_attribute("content", openGraph.url || canonical, 0)} data-svelte="svelte-1f0hxex">`
		: ``}

    ${openGraph.type
		? `<meta property="${"og:type"}"${add_attribute("content", openGraph.type.toLowerCase(), 0)} data-svelte="svelte-1f0hxex">`
		: ``}

    ${openGraph.article
		? `${openGraph.article.publishedTime
			? `<meta property="${"article:published_time"}"${add_attribute("content", openGraph.article.publishedTime, 0)} data-svelte="svelte-1f0hxex">`
			: ``}

      ${openGraph.article.modifiedTime
			? `<meta property="${"article:modified_time"}"${add_attribute("content", openGraph.article.modifiedTime, 0)} data-svelte="svelte-1f0hxex">`
			: ``}

      ${openGraph.article.expirationTime
			? `<meta property="${"article:expiration_time"}"${add_attribute("content", openGraph.article.expirationTime, 0)} data-svelte="svelte-1f0hxex">`
			: ``}

      ${openGraph.article.section
			? `<meta property="${"article:section"}"${add_attribute("content", openGraph.article.section, 0)} data-svelte="svelte-1f0hxex">`
			: ``}

      ${openGraph.article.authors && openGraph.article.authors.length
			? `${each(openGraph.article.authors, author => `<meta property="${"article:author"}"${add_attribute("content", author, 0)} data-svelte="svelte-1f0hxex">`)}`
			: ``}

      ${openGraph.article.tags && openGraph.article.tags.length
			? `${each(openGraph.article.tags, tag => `<meta property="${"article:tag"}"${add_attribute("content", tag, 0)} data-svelte="svelte-1f0hxex">`)}`
			: ``}`
		: ``}

    ${openGraph.images && openGraph.images.length
		? `${each(openGraph.images, image => `<meta property="${"og:image"}"${add_attribute("content", image.url, 0)} data-svelte="svelte-1f0hxex">
        ${image.alt
			? `<meta property="${"og:image:alt"}"${add_attribute("content", image.alt, 0)} data-svelte="svelte-1f0hxex">`
			: ``}
        ${image.width
			? `<meta property="${"og:image:width"}"${add_attribute("content", image.width.toString(), 0)} data-svelte="svelte-1f0hxex">`
			: ``}
        ${image.height
			? `<meta property="${"og:image:height"}"${add_attribute("content", image.height.toString(), 0)} data-svelte="svelte-1f0hxex">`
			: ``}`)}`
		: ``}`
	: ``}${twitter
	? `<meta name="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-1f0hxex">
    ${twitter.site
		? `<meta name="${"twitter:site"}"${add_attribute("content", twitter.site, 0)} data-svelte="svelte-1f0hxex">`
		: ``}
    ${twitter.title
		? `<meta name="${"twitter:title"}"${add_attribute("content", twitter.title, 0)} data-svelte="svelte-1f0hxex">`
		: ``}
    ${twitter.description
		? `<meta name="${"twitter:description"}"${add_attribute("content", twitter.description, 0)} data-svelte="svelte-1f0hxex">`
		: ``}
    ${twitter.image
		? `<meta name="${"twitter:image"}"${add_attribute("content", twitter.image, 0)} data-svelte="svelte-1f0hxex">`
		: ``}
    ${twitter.imageAlt
		? `<meta name="${"twitter:image:alt"}"${add_attribute("content", twitter.imageAlt, 0)} data-svelte="svelte-1f0hxex">`
		: ``}`
	: ``}${jsonLd
	? `${`<script type="application/ld+json">${JSON.stringify({
			"@context": "https://schema.org",
			...jsonLd
		}) + "<"}/script>`}`
	: ``}`, "")}`;
});

/* src\components\about\Whyus.svelte generated by Svelte v3.29.4 */

const css$7 = {
	code: "#whyus.svelte-1byy5h7{clip-path:polygon(0 0, 100% 0, 100% 90%, 0 100%);padding-bottom:100px}",
	map: "{\"version\":3,\"file\":\"Whyus.svelte\",\"sources\":[\"Whyus.svelte\"],\"sourcesContent\":[\"<script>\\r\\n  import Heading from \\\"../common/Heading.svelte\\\";\\r\\n</script>\\r\\n\\r\\n<section\\r\\n  id=\\\"whyus\\\"\\r\\n  class=\\\"text-gray-600 body-font bg-gradient-to-r from-gray-100 via-gray-50 to-gray-0\\\"\\r\\n>\\r\\n  <div class=\\\"container px-5 py-24 pb-20 mx-auto\\\">\\r\\n    <div class=\\\"flex flex-wrap w-full mb-20 flex-col items-center text-center\\\">\\r\\n      <div class=\\\"my-10 text-center\\\">\\r\\n        <Heading\\r\\n          text=\\\"Why Us\\\"\\r\\n          size=\\\"text-2xl sm:text-3xl md:text-4xl\\\"\\r\\n          heading=\\\"font-heading1 border-b-2\\\"\\r\\n          color=\\\"text-pink-500\\\"\\r\\n        />\\r\\n      </div>\\r\\n      <p class=\\\"lg:w-1/2 w-full leading-relaxed text-black text-2xl font-body\\\">\\r\\n        Our results and 480+ happy clients clearly indicate that we possess\\r\\n        exception skills and expertise.\\r\\n      </p>\\r\\n    </div>\\r\\n    <div class=\\\"flex flex-wrap -m-4\\\">\\r\\n      <div class=\\\"xl:w-1/3 md:w-1/2 p-4\\\">\\r\\n        <div class=\\\"shadow p-6 rounded-lg\\\">\\r\\n          <div\\r\\n            class=\\\"w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4\\\"\\r\\n          >\\r\\n            <svg\\r\\n              class=\\\"h-8 w-8 text-pink-500\\\"\\r\\n              viewBox=\\\"0 0 24 24\\\"\\r\\n              width=\\\"24\\\"\\r\\n              height=\\\"24\\\"\\r\\n              xmlns=\\\"http://www.w3.org/2000/svg\\\"\\r\\n              fill=\\\"none\\\"\\r\\n              stroke=\\\"currentColor\\\"\\r\\n              stroke-width=\\\"2\\\"\\r\\n              stroke-linecap=\\\"round\\\"\\r\\n              stroke-linejoin=\\\"round\\\"\\r\\n            >\\r\\n              <path d=\\\"M18 8h1a4 4 0 0 1 0 8h-1\\\" />\\r\\n              <path d=\\\"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z\\\" />\\r\\n              <line x1=\\\"6\\\" y1=\\\"1\\\" x2=\\\"6\\\" y2=\\\"4\\\" />\\r\\n              <line x1=\\\"10\\\" y1=\\\"1\\\" x2=\\\"10\\\" y2=\\\"4\\\" />\\r\\n              <line x1=\\\"14\\\" y1=\\\"1\\\" x2=\\\"14\\\" y2=\\\"4\\\" /></svg\\r\\n            >\\r\\n          </div>\\r\\n          <h2 class=\\\"text-lg text-gray-900 font-medium title-font mb-2\\\">\\r\\n            Personalised Support\\r\\n          </h2>\\r\\n          <p class=\\\"leading-relaxed text-base font-body\\\">\\r\\n            We eliminate hoops in communication and deliver a direct and\\r\\n            personalised support via chat, skype/zoom, emailing, remote\\r\\n            connection etc.\\r\\n          </p>\\r\\n        </div>\\r\\n      </div>\\r\\n      <div class=\\\"xl:w-1/3 md:w-1/2 p-4\\\">\\r\\n        <div class=\\\"shadow p-6 rounded-lg\\\">\\r\\n          <div\\r\\n            class=\\\"w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4\\\"\\r\\n          >\\r\\n            <svg\\r\\n              class=\\\"h-8 w-8 text-pink-500\\\"\\r\\n              width=\\\"24\\\"\\r\\n              height=\\\"24\\\"\\r\\n              viewBox=\\\"0 0 24 24\\\"\\r\\n              stroke-width=\\\"2\\\"\\r\\n              stroke=\\\"currentColor\\\"\\r\\n              fill=\\\"none\\\"\\r\\n              stroke-linecap=\\\"round\\\"\\r\\n              stroke-linejoin=\\\"round\\\"\\r\\n            >\\r\\n              <path stroke=\\\"none\\\" d=\\\"M0 0h24v24H0z\\\" />\\r\\n              <path\\r\\n                d=\\\"M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10\\\"\\r\\n              />\\r\\n              <path\\r\\n                d=\\\"M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2\\\"\\r\\n              /></svg\\r\\n            >\\r\\n          </div>\\r\\n          <h2 class=\\\"text-lg text-gray-900 font-medium title-font mb-2\\\">\\r\\n            Immediate And Efficient Communication\\r\\n          </h2>\\r\\n          <p class=\\\"leading-relaxed text-base font-body\\\">\\r\\n            We streamline communication between our team and your team by\\r\\n            posting progress updates on regularl basis, so we can be on same\\r\\n            board.\\r\\n          </p>\\r\\n        </div>\\r\\n      </div>\\r\\n      <div class=\\\"xl:w-1/3 md:w-1/2 p-4\\\">\\r\\n        <div class=\\\"shadow p-6 rounded-lg\\\">\\r\\n          <div\\r\\n            class=\\\"w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4\\\"\\r\\n          >\\r\\n            <svg\\r\\n              class=\\\"h-8 w-8 text-pink-500\\\"\\r\\n              width=\\\"24\\\"\\r\\n              height=\\\"24\\\"\\r\\n              viewBox=\\\"0 0 24 24\\\"\\r\\n              stroke-width=\\\"2\\\"\\r\\n              stroke=\\\"currentColor\\\"\\r\\n              fill=\\\"none\\\"\\r\\n              stroke-linecap=\\\"round\\\"\\r\\n              stroke-linejoin=\\\"round\\\"\\r\\n            >\\r\\n              <path stroke=\\\"none\\\" d=\\\"M0 0h24v24H0z\\\" />\\r\\n              <rect x=\\\"3\\\" y=\\\"15\\\" width=\\\"6\\\" height=\\\"6\\\" rx=\\\"2\\\" />\\r\\n              <rect x=\\\"15\\\" y=\\\"15\\\" width=\\\"6\\\" height=\\\"6\\\" rx=\\\"2\\\" />\\r\\n              <rect x=\\\"9\\\" y=\\\"3\\\" width=\\\"6\\\" height=\\\"6\\\" rx=\\\"2\\\" />\\r\\n              <path d=\\\"M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1\\\" />\\r\\n              <line x1=\\\"12\\\" y1=\\\"9\\\" x2=\\\"12\\\" y2=\\\"12\\\" /></svg\\r\\n            >\\r\\n          </div>\\r\\n          <h2 class=\\\"text-lg text-gray-900 font-medium title-font mb-2\\\">\\r\\n            Flexible And Dynamic\\r\\n          </h2>\\r\\n          <p class=\\\"leading-relaxed text-base font-body\\\">\\r\\n            We help your business to move fast in today's digital era where\\r\\n            business presence is 24 x 7 and opportunity might come at any\\r\\n            time.progress updates on regularl basis, so we can be on same board.\\r\\n          </p>\\r\\n        </div>\\r\\n      </div>\\r\\n      <div class=\\\"xl:w-1/3 md:w-1/2 p-4\\\">\\r\\n        <div class=\\\"shadow p-6 rounded-lg\\\">\\r\\n          <div\\r\\n            class=\\\"w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4\\\"\\r\\n          >\\r\\n            <svg\\r\\n              class=\\\"h-8 w-8 text-pink-500\\\"\\r\\n              width=\\\"24\\\"\\r\\n              height=\\\"24\\\"\\r\\n              viewBox=\\\"0 0 24 24\\\"\\r\\n              stroke-width=\\\"2\\\"\\r\\n              stroke=\\\"currentColor\\\"\\r\\n              fill=\\\"none\\\"\\r\\n              stroke-linecap=\\\"round\\\"\\r\\n              stroke-linejoin=\\\"round\\\"\\r\\n            >\\r\\n              <path stroke=\\\"none\\\" d=\\\"M0 0h24v24H0z\\\" />\\r\\n              <line x1=\\\"3\\\" y1=\\\"4\\\" x2=\\\"21\\\" y2=\\\"4\\\" />\\r\\n              <path d=\\\"M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10\\\" />\\r\\n              <line x1=\\\"12\\\" y1=\\\"16\\\" x2=\\\"12\\\" y2=\\\"20\\\" />\\r\\n              <line x1=\\\"9\\\" y1=\\\"20\\\" x2=\\\"15\\\" y2=\\\"20\\\" />\\r\\n              <path d=\\\"M8 12l3 -3l2 2l3 -3\\\" /></svg\\r\\n            >\\r\\n          </div>\\r\\n          <h2 class=\\\"text-lg text-gray-900 font-medium title-font mb-2\\\">\\r\\n            Effective And Impactful Outcomes\\r\\n          </h2>\\r\\n          <p class=\\\"leading-relaxed text-base font-body\\\">\\r\\n            We focus on the customer experience from the day start. In\\r\\n            combination with our agile approach towards each product, we deliver\\r\\n            the qaulity that improve your business presence and makes an impact.\\r\\n          </p>\\r\\n        </div>\\r\\n      </div>\\r\\n      <div class=\\\"xl:w-1/3 md:w-1/2 p-4\\\">\\r\\n        <div class=\\\"shadow p-6 rounded-lg\\\">\\r\\n          <div\\r\\n            class=\\\"w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4\\\"\\r\\n          >\\r\\n            <svg\\r\\n              class=\\\"h-8 w-8 text-pink-500\\\"\\r\\n              width=\\\"24\\\"\\r\\n              height=\\\"24\\\"\\r\\n              viewBox=\\\"0 0 24 24\\\"\\r\\n              stroke-width=\\\"2\\\"\\r\\n              stroke=\\\"currentColor\\\"\\r\\n              fill=\\\"none\\\"\\r\\n              stroke-linecap=\\\"round\\\"\\r\\n              stroke-linejoin=\\\"round\\\"\\r\\n            >\\r\\n              <path stroke=\\\"none\\\" d=\\\"M0 0h24v24H0z\\\" />\\r\\n              <path\\r\\n                d=\\\"M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2\\\"\\r\\n              /> <path d=\\\"M12 3v3m0 12v3\\\" /></svg\\r\\n            >\\r\\n          </div>\\r\\n          <h2 class=\\\"text-lg text-gray-900 font-medium title-font mb-2\\\">\\r\\n            Great ROI\\r\\n          </h2>\\r\\n          <p class=\\\"leading-relaxed text-base font-body\\\">\\r\\n            Although we’re a team, we do not overcharge to our clients just to\\r\\n            keep our team members work loaded. We have been accurate and digital\\r\\n            from the start. Using our small team, we focus on delivering the\\r\\n            best product design/development, without wasting your time and\\r\\n            budget.\\r\\n          </p>\\r\\n        </div>\\r\\n      </div>\\r\\n      <div class=\\\"xl:w-1/3 md:w-1/2 p-4\\\">\\r\\n        <div class=\\\"shadow p-6 rounded-lg\\\">\\r\\n          <div\\r\\n            class=\\\"w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4\\\"\\r\\n          >\\r\\n            <svg\\r\\n              class=\\\"h-8 w-8 text-pink-500\\\"\\r\\n              viewBox=\\\"0 0 24 24\\\"\\r\\n              fill=\\\"none\\\"\\r\\n              stroke=\\\"currentColor\\\"\\r\\n              stroke-width=\\\"2\\\"\\r\\n              stroke-linecap=\\\"round\\\"\\r\\n              stroke-linejoin=\\\"round\\\"\\r\\n            >\\r\\n              <path d=\\\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\\\" />\\r\\n              <circle cx=\\\"12\\\" cy=\\\"12\\\" r=\\\"3\\\" /></svg\\r\\n            >\\r\\n          </div>\\r\\n          <h2 class=\\\"text-lg text-gray-900 font-medium title-font mb-2\\\">\\r\\n            Undivided attention\\r\\n          </h2>\\r\\n          <p class=\\\"leading-relaxed text-base font-body\\\">\\r\\n            When we take on your project, our team is fully committed from start\\r\\n            to finish. It means constant progress, uninterrupted focus and\\r\\n            tangible results. When you decide to work with us, your project will\\r\\n            get all attention that it deserves.\\r\\n          </p>\\r\\n        </div>\\r\\n      </div>\\r\\n      <div class=\\\"xl:w-1/3 md:w-1/2 p-4\\\">\\r\\n        <div class=\\\"shadow p-6 rounded-lg\\\">\\r\\n          <div\\r\\n            class=\\\"w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4\\\"\\r\\n          >\\r\\n            <svg\\r\\n              class=\\\"h-8 w-8 text-pink-500\\\"\\r\\n              width=\\\"24\\\"\\r\\n              height=\\\"24\\\"\\r\\n              viewBox=\\\"0 0 24 24\\\"\\r\\n              stroke-width=\\\"2\\\"\\r\\n              stroke=\\\"currentColor\\\"\\r\\n              fill=\\\"none\\\"\\r\\n              stroke-linecap=\\\"round\\\"\\r\\n              stroke-linejoin=\\\"round\\\"\\r\\n            >\\r\\n              <path stroke=\\\"none\\\" d=\\\"M0 0h24v24H0z\\\" />\\r\\n              <path d=\\\"M4 8v-2a2 2 0 0 1 2 -2h2\\\" />\\r\\n              <path d=\\\"M4 16v2a2 2 0 0 0 2 2h2\\\" />\\r\\n              <path d=\\\"M16 4h2a2 2 0 0 1 2 2v2\\\" />\\r\\n              <path d=\\\"M16 20h2a2 2 0 0 0 2 -2v-2\\\" />\\r\\n              <line x1=\\\"9\\\" y1=\\\"10\\\" x2=\\\"9.01\\\" y2=\\\"10\\\" />\\r\\n              <line x1=\\\"15\\\" y1=\\\"10\\\" x2=\\\"15.01\\\" y2=\\\"10\\\" />\\r\\n              <path d=\\\"M9.5 15a3.5 3.5 0 0 0 5 0\\\" /></svg\\r\\n            >\\r\\n          </div>\\r\\n          <h2 class=\\\"text-lg text-gray-900 font-medium title-font mb-2\\\">\\r\\n            Small yet result oriented\\r\\n          </h2>\\r\\n          <p class=\\\"leading-relaxed text-base font-body\\\">\\r\\n            We are a team of passionate designers, developers with a strong zeal\\r\\n            to work with SMEs, emerging startups and individuals who need\\r\\n            technical help. We love coming to work every day and figuring out a\\r\\n            better World Wide Web for businesses and the end-users.\\r\\n          </p>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n  </div>\\r\\n</section>\\r\\n\\r\\n<style>\\r\\n  #whyus {\\r\\n    /* height: 98vh; */\\r\\n    /* background-image: linear-gradient(\\r\\n        to right bottom,\\r\\n        rgba(247, 39, 160, 0.994),\\r\\n        rgba(243, 179, 217, 0.96)\\r\\n      ),\\r\\n      url(\\\"../../../static/Taieri.png\\\");\\r\\n    background-size: cover;\\r\\n    background-position: top;\\r\\n    position: relative; */\\r\\n    /* Source : https://bennettfeely.com/clippy/ */\\r\\n    /* top left(x y), top right (x y), bottom right (x y), bottom left (x y)*/\\r\\n    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);\\r\\n    padding-bottom: 100px;\\r\\n  }\\r\\n</style>\\r\\n\"],\"names\":[],\"mappings\":\"AA0QE,MAAM,eAAC,CAAC,AAaN,SAAS,CAAE,QAAQ,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACjD,cAAc,CAAE,KAAK,AACvB,CAAC\"}"
};

const Whyus$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$7);

	return `<section id="${"whyus"}" class="${"text-gray-600 body-font bg-gradient-to-r from-gray-100 via-gray-50 to-gray-0 svelte-1byy5h7"}"><div class="${"container px-5 py-24 pb-20 mx-auto"}"><div class="${"flex flex-wrap w-full mb-20 flex-col items-center text-center"}"><div class="${"my-10 text-center"}">${validate_component(Heading, "Heading").$$render(
		$$result,
		{
			text: "Why Us",
			size: "text-2xl sm:text-3xl md:text-4xl",
			heading: "font-heading1 border-b-2",
			color: "text-pink-500"
		},
		{},
		{}
	)}</div>
      <p class="${"lg:w-1/2 w-full leading-relaxed text-black text-2xl font-body"}">Our results and 480+ happy clients clearly indicate that we possess
        exception skills and expertise.
      </p></div>
    <div class="${"flex flex-wrap -m-4"}"><div class="${"xl:w-1/3 md:w-1/2 p-4"}"><div class="${"shadow p-6 rounded-lg"}"><div class="${"w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4"}"><svg class="${"h-8 w-8 text-pink-500"}" viewBox="${"0 0 24 24"}" width="${"24"}" height="${"24"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path d="${"M18 8h1a4 4 0 0 1 0 8h-1"}"></path><path d="${"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"}"></path><line x1="${"6"}" y1="${"1"}" x2="${"6"}" y2="${"4"}"></line><line x1="${"10"}" y1="${"1"}" x2="${"10"}" y2="${"4"}"></line><line x1="${"14"}" y1="${"1"}" x2="${"14"}" y2="${"4"}"></line></svg></div>
          <h2 class="${"text-lg text-gray-900 font-medium title-font mb-2"}">Personalised Support
          </h2>
          <p class="${"leading-relaxed text-base font-body"}">We eliminate hoops in communication and deliver a direct and
            personalised support via chat, skype/zoom, emailing, remote
            connection etc.
          </p></div></div>
      <div class="${"xl:w-1/3 md:w-1/2 p-4"}"><div class="${"shadow p-6 rounded-lg"}"><div class="${"w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4"}"><svg class="${"h-8 w-8 text-pink-500"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"}"></path><path d="${"M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"}"></path></svg></div>
          <h2 class="${"text-lg text-gray-900 font-medium title-font mb-2"}">Immediate And Efficient Communication
          </h2>
          <p class="${"leading-relaxed text-base font-body"}">We streamline communication between our team and your team by
            posting progress updates on regularl basis, so we can be on same
            board.
          </p></div></div>
      <div class="${"xl:w-1/3 md:w-1/2 p-4"}"><div class="${"shadow p-6 rounded-lg"}"><div class="${"w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4"}"><svg class="${"h-8 w-8 text-pink-500"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><rect x="${"3"}" y="${"15"}" width="${"6"}" height="${"6"}" rx="${"2"}"></rect><rect x="${"15"}" y="${"15"}" width="${"6"}" height="${"6"}" rx="${"2"}"></rect><rect x="${"9"}" y="${"3"}" width="${"6"}" height="${"6"}" rx="${"2"}"></rect><path d="${"M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1"}"></path><line x1="${"12"}" y1="${"9"}" x2="${"12"}" y2="${"12"}"></line></svg></div>
          <h2 class="${"text-lg text-gray-900 font-medium title-font mb-2"}">Flexible And Dynamic
          </h2>
          <p class="${"leading-relaxed text-base font-body"}">We help your business to move fast in today&#39;s digital era where
            business presence is 24 x 7 and opportunity might come at any
            time.progress updates on regularl basis, so we can be on same board.
          </p></div></div>
      <div class="${"xl:w-1/3 md:w-1/2 p-4"}"><div class="${"shadow p-6 rounded-lg"}"><div class="${"w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4"}"><svg class="${"h-8 w-8 text-pink-500"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><line x1="${"3"}" y1="${"4"}" x2="${"21"}" y2="${"4"}"></line><path d="${"M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10"}"></path><line x1="${"12"}" y1="${"16"}" x2="${"12"}" y2="${"20"}"></line><line x1="${"9"}" y1="${"20"}" x2="${"15"}" y2="${"20"}"></line><path d="${"M8 12l3 -3l2 2l3 -3"}"></path></svg></div>
          <h2 class="${"text-lg text-gray-900 font-medium title-font mb-2"}">Effective And Impactful Outcomes
          </h2>
          <p class="${"leading-relaxed text-base font-body"}">We focus on the customer experience from the day start. In
            combination with our agile approach towards each product, we deliver
            the qaulity that improve your business presence and makes an impact.
          </p></div></div>
      <div class="${"xl:w-1/3 md:w-1/2 p-4"}"><div class="${"shadow p-6 rounded-lg"}"><div class="${"w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4"}"><svg class="${"h-8 w-8 text-pink-500"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"}"></path><path d="${"M12 3v3m0 12v3"}"></path></svg></div>
          <h2 class="${"text-lg text-gray-900 font-medium title-font mb-2"}">Great ROI
          </h2>
          <p class="${"leading-relaxed text-base font-body"}">Although we’re a team, we do not overcharge to our clients just to
            keep our team members work loaded. We have been accurate and digital
            from the start. Using our small team, we focus on delivering the
            best product design/development, without wasting your time and
            budget.
          </p></div></div>
      <div class="${"xl:w-1/3 md:w-1/2 p-4"}"><div class="${"shadow p-6 rounded-lg"}"><div class="${"w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4"}"><svg class="${"h-8 w-8 text-pink-500"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path d="${"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}"></path><circle cx="${"12"}" cy="${"12"}" r="${"3"}"></circle></svg></div>
          <h2 class="${"text-lg text-gray-900 font-medium title-font mb-2"}">Undivided attention
          </h2>
          <p class="${"leading-relaxed text-base font-body"}">When we take on your project, our team is fully committed from start
            to finish. It means constant progress, uninterrupted focus and
            tangible results. When you decide to work with us, your project will
            get all attention that it deserves.
          </p></div></div>
      <div class="${"xl:w-1/3 md:w-1/2 p-4"}"><div class="${"shadow p-6 rounded-lg"}"><div class="${"w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4"}"><svg class="${"h-8 w-8 text-pink-500"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path stroke="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M4 8v-2a2 2 0 0 1 2 -2h2"}"></path><path d="${"M4 16v2a2 2 0 0 0 2 2h2"}"></path><path d="${"M16 4h2a2 2 0 0 1 2 2v2"}"></path><path d="${"M16 20h2a2 2 0 0 0 2 -2v-2"}"></path><line x1="${"9"}" y1="${"10"}" x2="${"9.01"}" y2="${"10"}"></line><line x1="${"15"}" y1="${"10"}" x2="${"15.01"}" y2="${"10"}"></line><path d="${"M9.5 15a3.5 3.5 0 0 0 5 0"}"></path></svg></div>
          <h2 class="${"text-lg text-gray-900 font-medium title-font mb-2"}">Small yet result oriented
          </h2>
          <p class="${"leading-relaxed text-base font-body"}">We are a team of passionate designers, developers with a strong zeal
            to work with SMEs, emerging startups and individuals who need
            technical help. We love coming to work every day and figuring out a
            better World Wide Web for businesses and the end-users.
          </p></div></div></div></div>
</section>`;
});

/* src\routes\about.svelte generated by Svelte v3.29.4 */

const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${validate_component(SvelteSeo, "SvelteSeo").$$render(
		$$result,
		{
			title: "About Us",
			description: "We are a team of passionate ui/ux designers, developers, and coders",
			openGraph: {
				title: "About Us",
				description: "We are a team of passionate ui/ux designers, developers, and coders",
				url: "https://www.webdesign-ninjas.com/about",
				type: "website",
				images: [
					{
						url: "https://www.example.com/images/og-image.jpg",
						width: 850,
						height: 650,
						alt: "Og Image Alt"
					}
				]
			}
		},
		{},
		{}
	)}

<section class="${"text-gray-600 body-font"}"><div class="${"container py-24 mx-auto"}"><div class="${"flex flex-wrap w-full mb-20 flex-col items-center text-center"}">${validate_component(Heading, "Heading").$$render(
		$$result,
		{
			text: "Who We Are",
			size: "text-4xl sm:text-5xl md:text-6xl",
			heading: "font-heading1 text-center mb-8",
			color: "text-pink-500"
		},
		{},
		{}
	)}
      
      <p class="${"lg:w-1/2 w-full leading-relaxed text-gray-500"}">We are a team of passionate ui/ux designers, developers, and coders with
        a strong zeal to work with SMEs, emerging startups and individuals who
        need technical help. In the last 12 years, We got the opportunity to
        work with many clients across the globe and We figured out that most of
        my client&#39;s wanted someone who they could trust as a technical partner
        for their products. Someone, who can give suggestions right from what
        tech should be picked up, how to get the UX right, how we should plan
        the product to launch and a lot more...
      </p></div></div></section>

${validate_component(Whyus$1, "Whyus").$$render($$result, {}, {}, {})}

${validate_component(Contact, "Contact").$$render(
		$$result,
		{
			contactbg: "bg-gradient-to-r from-gray-100 via-gray-50 to-gray-0"
		},
		{},
		{}
	)}`;
});

var component_4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': About
});

var Mod0 = {"html":"<p>permalink: \"Create-a-blog-with-Sapper-Markdown-Part-Series 1\"</p>\n<div class=\"crayons-article__main\">\n\n<nav class=\"series-switcher crayons-card crayons-card--secondary\">\n\n<header class=\"crayons-card__header\">### [Create a blog with Sapper & Markdown (2 Part Series)](/joshnuss/series/9454)</header>\n\n<div class=\"series-switcher__list\">[<span class=\"series-switcher__num\">1</span> <span class=\"series-switcher__title\">Create a blog with Sapper & Markdown</span>](/joshnuss/create-a-blog-with-markdown-sapper-50ad \"Published Mar 28 '20\") [<span class=\"series-switcher__num\">2</span> <span class=\"series-switcher__title\">Create a blog with Sapper & Markdown: Tagging</span>](/joshnuss/create-a-blog-with-sapper-markdown-part-2-31m4 \"Published Oct 29 '20\")</div>\n\n</nav>\n\n<div class=\"crayons-article__body text-styles spec__body\" data-article-id=\"292941\" id=\"article-body\">[Sapper](https://sapper.svelte.dev) is a toolkit for creating [Svelte](https://svelte.dev) apps. It comes with a bunch of conventions baked in to help you get your project up and running quickly. It can be deployed as a static site or as as a node.js server+SPA that does both server-side rendering and client-side rendering. NOTE: You can find a screencast of this at the end of the article. # [](#concept)Concept We're going to store blog posts as markdown `.md` files inside repo. That way we can use `git` as the workflow for editing posts. That means Pull Requests for reviewing posts, `git log` to view history of changes, and forking/branching if we have multiple authors. Since our data comes from static files (no databases), we don't need a server side component, we can deploy this using Sapper's static site generator. # [](#setup)Setup Start by scaffolding the app with `degit`. You can use the official [`svelte/sapper-template`](https://github.com/svelte/sapper-template), but it includes a lot of demo code. I've going to use my fork [`joshnuss/sapper-template`](https://github.com/joshnuss/sapper-template) which is a blank slate without demo code.\n\n<div class=\"highlight js-code-highlight\">npx degit joshnuss/sapper-template blog cd blog yarn install\n\n<div class=\"highlight__panel js-actions-panel\">\n\n<div class=\"highlight__panel-action js-fullscreen-code-action\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"><title>Enter fullscreen mode</title></svg> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"><title>Exit fullscreen mode</title></svg></div>\n\n</div>\n\n</div>\n\n# [](#posts-data)Posts data Each post will be saved in the `posts` directory and include `yaml` metadata the top of the file (aka front matter). Here's what a post `posts/example.md` would look like:\n\n<div class=\"highlight js-code-highlight\">-------- title: Everything you wanted to know summary: A short post about ... date: 2020-04-01 -------- - this - is - markdown\n\n<div class=\"highlight__panel js-actions-panel\">\n\n<div class=\"highlight__panel-action js-fullscreen-code-action\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"><title>Enter fullscreen mode</title></svg> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"><title>Exit fullscreen mode</title></svg></div>\n\n</div>\n\n</div>\n\n# [](#plugins)Plugins We could load these `.md` files using `fs.readFile()` at build time, but there is an even easier way, using `import` statements. To configure `rollup` for `.md` imports, we'll use the plugin [`@jackfranklin/rollup-plugin-markdown`](https://www.npmjs.com/package/@jackfranklin/rollup-plugin-markdown). That makes it possible to:\n\n<div class=\"highlight js-code-highlight\">import post1 from 'posts/example1.md' import post2 from 'posts/example2.md' // ...\n\n<div class=\"highlight__panel js-actions-panel\">\n\n<div class=\"highlight__panel-action js-fullscreen-code-action\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"><title>Enter fullscreen mode</title></svg> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"><title>Exit fullscreen mode</title></svg></div>\n\n</div>\n\n</div>\n\nOf course importing each post one-by-one will get tedious fast. 😅 It would be easier to import a bunch of files at once based on a wildcard search pattern, like `posts/*.md`. The plugin [`rollup-plugin-glob`](https://www.npmjs.com/package/rollup-plugin-glob) does exactly this. 🚀 Add the NPM packages:\n\n<div class=\"highlight js-code-highlight\">yarn add -D @jackfranklin/rollup-plugin-markdown rollup-plugin-glob\n\n<div class=\"highlight__panel js-actions-panel\">\n\n<div class=\"highlight__panel-action js-fullscreen-code-action\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"><title>Enter fullscreen mode</title></svg> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"><title>Exit fullscreen mode</title></svg></div>\n\n</div>\n\n</div>\n\nThen, tell `rollup` to use these plugins. Update `rollup.config.js`:\n\n<div class=\"highlight js-code-highlight\">// import plugins import markdown from '@jackfranklin/rollup-plugin-markdown' import glob from 'rollup-plugin-glob' // .... // remember rollup is creating multiple builds // make sure to add the new plugins to both the server *and* client builds export { client: { plugins: [ markdown(), glob(), ... ], ... }, server: { plugins: [ markdown(), glob(), ... ], ... } }\n\n<div class=\"highlight__panel js-actions-panel\">\n\n<div class=\"highlight__panel-action js-fullscreen-code-action\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"><title>Enter fullscreen mode</title></svg> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"><title>Exit fullscreen mode</title></svg></div>\n\n</div>\n\n</div>\n\n# [](#reading-posts)Reading Posts Now that we can import `.md`, let's centralize the logic for accessing posts inside `src/posts.js`:\n\n<div class=\"highlight js-code-highlight\">import all from '../posts/*.md' export const posts = all\n\n<div class=\"highlight__panel js-actions-panel\">\n\n<div class=\"highlight__panel-action js-fullscreen-code-action\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"><title>Enter fullscreen mode</title></svg> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"><title>Exit fullscreen mode</title></svg></div>\n\n</div>\n\n</div>\n\nIf we `console.log(posts)`, the data for posts currently looks like this:\n\n<div class=\"highlight js-code-highlight\">[ { metadata: {title: 'the title', summary: '...', date: '2020-01-02'}, html: ' # ... ', filename: 'example.md' } ]\n\n<div class=\"highlight__panel js-actions-panel\">\n\n<div class=\"highlight__panel-action js-fullscreen-code-action\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"><title>Enter fullscreen mode</title></svg> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"><title>Exit fullscreen mode</title></svg></div>\n\n</div>\n\n</div>\n\nLet's reshape it a bit, just to make it easier for our UI to use. We're going to make these improvements: _ Put the `metadata` (`title`, `summary`, `date`) at the top level. _ Add a `permalink` field. It will be based on the `filename` \\* Sort the list of posts by `date` in descending order (newest posts first) Makes these changes to `src/posts.js`:\n\n<div class=\"highlight js-code-highlight\">import _ from 'lodash' import all from '../posts/*.md' export const posts = _.chain(all) // begin a chain .map(transform) // transform the shape of each post .orderBy('date', 'desc') // sort by date descending .value() // convert chain back to array // function for reshaping each post function transform({filename, html, metadata}) { // the permalink is the filename with the '.md' ending removed const permalink = filename.replace(/\\.md$/, '') // convert date string into a proper `Date` const date = new Date(metadata.date) // return the new shape return {...metadata, filename, html, permalink, date} } // provide a way to find a post by permalink export function findPost(permalink) { // use lodash to find by field name: return _.find(posts, {permalink}) }\n\n<div class=\"highlight__panel js-actions-panel\">\n\n<div class=\"highlight__panel-action js-fullscreen-code-action\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"><title>Enter fullscreen mode</title></svg> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"><title>Exit fullscreen mode</title></svg></div>\n\n</div>\n\n</div>\n\n# [](#index-page)Index page Now that we have our posts, we can move on to the UI. Open the `src/routes/index.svelte` and display an `\n\n<article>` tag for each post:\n\n<div class=\"highlight js-code-highlight\"><script>// import the list of posts import {posts} from '../posts'</script> # My Weblog {#each posts as post}\n\n<article>[ ## {post.title} {post.summary} ]({`/posts/${post.permalink}`})</article>\n\n{/each}\n\n<div class=\"highlight__panel js-actions-panel\">\n\n<div class=\"highlight__panel-action js-fullscreen-code-action\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"><title>Enter fullscreen mode</title></svg> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"><title>Exit fullscreen mode</title></svg></div>\n\n</div>\n\n</div>\n\n# [](#blog-details-page)Blog details page The index page now shows summaries of each posts, to see the entire post add a page/route called `src/routes/posts/[permalink].svelte`. Notice we're using square brackets around `[permalink]`? That tells sapper that the `permalink` is a dynamic parameter. Sapper will provide all parameters to our `preload()` function.\n\n<div class=\"highlight js-code-highlight\"><script context=\"module\">// import the logic for finding a post based on permalink import {findPost} from '../../posts' // sapper calls this to load our data export function preload(page) { // find the post based on the permalink param const post = findPost(page.params.permalink) // return a list of props return { post } }</script> <script>// this prop is filled from the result of the `preload()` export let post</script> # {post.title} {@html post.html}\n\n<div class=\"highlight__panel js-actions-panel\">\n\n<div class=\"highlight__panel-action js-fullscreen-code-action\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"><title>Enter fullscreen mode</title></svg> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"><title>Exit fullscreen mode</title></svg></div>\n\n</div>\n\n</div>\n\n# [](#deploy)Deploy To deploy our site we can generate the static site with `yarn export`. You can also 🛳 it with `zeit` while you're at it:\n\n<div class=\"highlight js-code-highlight\">yarn export now\n\n<div class=\"highlight__panel js-actions-panel\">\n\n<div class=\"highlight__panel-action js-fullscreen-code-action\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-on\"><title>Enter fullscreen mode</title></svg> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20px\" height=\"20px\" viewBox=\"0 0 24 24\" class=\"highlight-action crayons-icon highlight-action--fullscreen-off\"><title>Exit fullscreen mode</title></svg></div>\n\n</div>\n\n</div>\n\nThat's it, all done! 💃 # [](#summary)Summary Building static sites with Sapper takes very little effort. There are many helpful rollup plugins that can convert static data into importable formats, that means we don't even have to write a parser for our data in many cases. Another good thing about this approach is its' versatility. The same concept will work for project pages, wikis, news sites, books, landing pages, etc. Any data you can put in a `git` repo, can be the driver of a sapper site. You can find example code here: [https://github.com/joshnuss/sample-blog](https://github.com/joshnuss/sample-blog) Happy coding! ✌ PS. This is part of my upcoming course on svelte: [http://svelte.video](http://svelte.video) # [](#screencast)Screencast\n\n<div class=\" fluidvids\" style=\"padding-top: 56.1972%;\"><iframe width=\"710\" height=\"399\" src=\"https://www.youtube.com/embed/9dSrsDdHyHg\" allowfullscreen=\"\" loading=\"lazy\" class=\" fluidvids-elem\"></iframe></div>\n\n</article>\n\n</div>\n\n<nav class=\"series-switcher crayons-card crayons-card--secondary\">\n\n<header class=\"crayons-card__header\">### [Create a blog with Sapper & Markdown (2 Part Series)](/joshnuss/series/9454)</header>\n\n<div class=\"series-switcher__list\">[<span class=\"series-switcher__num\">1</span> <span class=\"series-switcher__title\">Create a blog with Sapper & Markdown</span>](/joshnuss/create-a-blog-with-markdown-sapper-50ad \"Published Mar 28 '20\") [<span class=\"series-switcher__num\">2</span> <span class=\"series-switcher__title\">Create a blog with Sapper & Markdown: Tagging</span>](/joshnuss/create-a-blog-with-sapper-markdown-part-2-31m4 \"Published Oct 29 '20\")</div>\n\n</nav>\n\n</div>","metadata":{"title":"Create a blog with Sapper & Markdown (2 Part Series","summary":"TCreate a blog with Sapper & Markdown (2 Part Series","date":"2021-01-01T00:00:00.000Z","tags":"hello, world","image":"seo2.png"},"filename":"Create a blog with markdown and sapper.md","path":"C:\\Work\\svelte\\markdownblog\\posts\\Create a blog with markdown and sapper.md"};

var Mod1 = {"html":"<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe hic labore animi sed modi dolorem aliquam enim, accusantium dignissimos? Quae, sequi reprehenderit accusantium maxime earum nostrum ipsa quas odio nobis?<br />\nEx, ea, alias beatae dolorem ducimus, eaque sequi laudantium sint aspernatur odit maxime! Minus culpa rerum nulla voluptatem magnam. Minus, quod eveniet. Blanditiis nam placeat deserunt in voluptatibus ducimus nobis?</p>\n<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe hic labore animi sed modi dolorem aliquam enim, accusantium dignissimos? Quae, sequi reprehenderit accusantium maxime earum nostrum ipsa quas odio nobis?<br />\nEx, ea, alias beatae dolorem ducimus, eaque sequi laudantium sint aspernatur odit maxime! Minus culpa rerum nulla voluptatem magnam. Minus, quod eveniet. Blanditiis nam placeat deserunt in voluptatibus ducimus nobis?</p>\n<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe hic labore animi sed modi dolorem aliquam enim, accusantium dignissimos? Quae, sequi reprehenderit accusantium maxime earum nostrum ipsa quas odio nobis?<br />\nEx, ea, alias beatae dolorem ducimus, eaque sequi laudantium sint aspernatur odit maxime! Minus culpa rerum nulla voluptatem magnam. Minus, quod eveniet. Blanditiis nam placeat deserunt in voluptatibus ducimus nobis?</p>","metadata":{"title":"Example without copy will let you focus part 1","summary":"This is another post","date":"2021-05-02T00:00:00.000Z","tags":"Sveltejs, Reactjs, Nextjs","image":"digital-marketing.png"},"filename":"example without copy will let you focus part 1.md","path":"C:\\Work\\svelte\\markdownblog\\posts\\example without copy will let you focus part 1.md"};

var Mod2 = {"html":"<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe hic labore animi sed modi dolorem aliquam enim, accusantium dignissimos? Quae, sequi reprehenderit accusantium maxime earum nostrum ipsa quas odio nobis?<br />\nEx, ea, alias beatae dolorem ducimus, eaque sequi laudantium sint aspernatur odit maxime! Minus culpa rerum nulla voluptatem magnam. Minus, quod eveniet. Blanditiis nam placeat deserunt in voluptatibus ducimus nobis?</p>\n<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe hic labore animi sed modi dolorem aliquam enim, accusantium dignissimos? Quae, sequi reprehenderit accusantium maxime earum nostrum ipsa quas odio nobis?<br />\nEx, ea, alias beatae dolorem ducimus, eaque sequi laudantium sint aspernatur odit maxime! Minus culpa rerum nulla voluptatem magnam. Minus, quod eveniet. Blanditiis nam placeat deserunt in voluptatibus ducimus nobis?</p>\n<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe hic labore animi sed modi dolorem aliquam enim, accusantium dignissimos? Quae, sequi reprehenderit accusantium maxime earum nostrum ipsa quas odio nobis?<br />\nEx, ea, alias beatae dolorem ducimus, eaque sequi laudantium sint aspernatur odit maxime! Minus culpa rerum nulla voluptatem magnam. Minus, quod eveniet. Blanditiis nam placeat deserunt in voluptatibus ducimus nobis?</p>","metadata":{"title":"Example without copy will let you focus part 2","summary":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe hic labore animi sed modi","date":"2021-02-03","tags":"Sveltejs, Reactjs, Nextjs","image":"ecommerce1.jpg"},"filename":"example without copy will let you focus part 2.md","path":"C:\\Work\\svelte\\markdownblog\\posts\\example without copy will let you focus part 2.md"};

var Mod3 = {"html":"<p>###permalink: 'test'</p>\n<ul>\n<li>this</li>\n<li>is</li>\n<li>a <code>list</code></li>\n</ul>\n<h3 id=\"css\">CSS</h3>\n<pre><code class=\"css language-css\">h1 {\n  background-color: indigo;\n}</code></pre>\n<h3 id=\"javascript\">JavaScript</h3>\n<pre><code class=\"javascript language-javascript\">function foo() {\n  return 100;\n}</code></pre>","metadata":{"title":"Hello World","summary":"This is a post","date":"2020-01-01T00:00:00.000Z","tags":"hello, world","image":"app1.png"},"filename":"example.md","path":"C:\\Work\\svelte\\markdownblog\\posts\\example.md"};

var Mod4 = {"html":"<ul>\n<li>this</li>\n<li>is</li>\n<li>another list</li>\n</ul>","metadata":{"title":"Hello World 2","summary":"This is another post","date":"2020-01-01T00:00:00.000Z","image":"app2.png"},"filename":"example2.md","path":"C:\\Work\\svelte\\markdownblog\\posts\\example2.md"};

var Mod5 = {"html":"<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe hic labore animi sed modi dolorem aliquam enim, accusantium dignissimos? Quae, sequi reprehenderit accusantium maxime earum nostrum ipsa quas odio nobis?</p>\n<ul>\n<li>this</li>\n<li>is</li>\n<li>another list</li>\n</ul>\n<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe hic labore animi sed modi dolorem aliquam enim, accusantium dignissimos? Quae, sequi reprehenderit accusantium maxime earum nostrum ipsa quas odio nobis?<br />\nEx, ea, alias beatae dolorem ducimus, eaque sequi laudantium sint aspernatur odit maxime! Minus culpa rerum nulla voluptatem magnam. Minus, quod eveniet. Blanditiis nam placeat deserunt in voluptatibus ducimus nobis?</p>","metadata":{"title":"Learning Svelte with Sapper Part 2","summary":"Quae, sequi reprehenderit accusantium maxime earum nostrum ipsa quas odio","date":"2020-01-01T00:00:00.000Z","tags":"Sveltejs, Reactjs, Nextjs","image":"info-2.png"},"filename":"example3.md","path":"C:\\Work\\svelte\\markdownblog\\posts\\example3.md"};

var Mod6 = {"html":"<p>###permalink: 'test'</p>\n<ul>\n<li>this</li>\n<li>is</li>\n<li>a <code>list</code></li>\n</ul>\n<h3 id=\"css\">CSS</h3>\n<pre><code class=\"css language-css\">h1 {\n  background-color: indigo;\n}</code></pre>\n<h3 id=\"javascript\">JavaScript</h3>\n<pre><code class=\"javascript language-javascript\">function foo() {\n  return 100;\n}</code></pre>","metadata":{"title":"Learning Svelte with Sapper Part 3","summary":"Ex, ea, alias beatae dolorem ducimus, eaque sequi laudantium sint aspernatur","date":"2020-01-01T00:00:00.000Z","tags":"Gatbsyjs, Vuejs, Nuxtjs","image":"info-1.png"},"filename":"Learning Svelte with Sapper Part 3.md","path":"C:\\Work\\svelte\\markdownblog\\posts\\Learning Svelte with Sapper Part 3.md"};

var all = [
  Mod0,
  Mod1,
  Mod2,
  Mod3,
  Mod4,
  Mod5,
  Mod6
];

const posts = ___default['default'].chain(all)
  .map(transform)
  .orderBy('date', 'desc')
  .value();

function findPost(permalink) {
  return ___default['default'].find(posts, {permalink})
}

function findAllTag() {
  let tagSet = new Set();
  posts.map((post) => {
    if (post.tags){
      let data = Object.values(post.tags).toLocaleString().split(",");
      // console.log('type of Data : ', typeof(data));
      data.forEach( (el)=> {
        return tagSet.add(el);
      });
    }
  });
  return Array.from(tagSet);
}

function findByTag(tag) {
  return posts.filter(post => post.tags.includes(tag))
}

function slugify(text) {
  return text
    .toString()                     // Cast to string
    .toLowerCase()                  // Convert the string to lowercase letters
    .normalize('NFD')       // The normalize() method returns the Unicode Normalization Form of a given string.
    .trim()                         // Remove whitespace from both sides of a string
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-');        // Replace multiple - with single -
}

function transform({filename, metadata, html}) {
  const permalink = slugify(metadata.title) || filename.replace(/.md$/, '');
  const date = new Date(metadata.date);
  let tags = [];

  if (metadata.tags) {
    tags = metadata.tags.split(',').map(str => str.trim());
  }

  return {...metadata, filename, permalink, html, date, tags}
}

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|})\s*)(?:catch|finally)\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
		lookbehind: true,
		greedy: true,
		inside: {
			'regex-source': {
				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
				lookbehind: true,
				alias: 'language-regex',
				inside: Prism.languages.regex
			},
			'regex-flags': /[a-z]+$/,
			'regex-delimiter': /^\/|\/$/
		}
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\${|}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	}
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;

(function (Prism) {

	var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				},
				'keyword': {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: true
				}
				// See rest below
			}
		},
		'url': {
			// https://drafts.csswg.org/css-values-3/#urls
			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/,
				'string': {
					pattern: RegExp('^' + string.source + '$'),
					alias: 'url'
				}
			}
		},
		'selector': RegExp('[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
		'string': {
			pattern: string,
			greedy: true
		},
		'property': /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
		'important': /!important\b/i,
		'function': /[-a-z0-9]+(?=\()/i,
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');

		Prism.languages.insertBefore('inside', 'attr-value', {
			'style-attr': {
				pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
				lookbehind: true,
				inside: {
					'attr-value': {
						pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
						inside: {
							'style': {
								pattern: /(["'])[\s\S]+(?=["']$)/,
								lookbehind: true,
								alias: 'language-css',
								inside: Prism.languages.css
							},
							'punctuation': [
								{
									pattern: /^=/,
									alias: 'attr-equals'
								},
								/"|'/
							]
						}
					},
					'attr-name': /^style/i
				}
			}
		}, markup.tag);
	}

}(Prism));

/* src\components\Tags.svelte generated by Svelte v3.29.4 */

const css$8 = {
	code: "nav.svelte-1x0wpo3{display:flex;gap:4px}",
	map: "{\"version\":3,\"file\":\"Tags.svelte\",\"sources\":[\"Tags.svelte\"],\"sourcesContent\":[\"<script>\\n  export let tags\\n</script>\\n\\n<nav>\\n  {#each tags as tag}\\n    <a href=\\\"/tag/{tag}\\\">#{tag}</a>\\n  {/each}\\n</nav>\\n\\n<style>\\n  nav {\\n    display: flex;\\n    gap: 4px;\\n  }\\n</style>\"],\"names\":[],\"mappings\":\"AAWE,GAAG,eAAC,CAAC,AACH,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,GAAG,AACV,CAAC\"}"
};

const Tags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { tags } = $$props;
	if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0) $$bindings.tags(tags);
	$$result.css.add(css$8);

	return `<nav class="${"svelte-1x0wpo3"}">${each(tags, tag => `<a href="${"/tag/" + escape(tag)}">#${escape(tag)}</a>`)}
</nav>`;
});

/* src\routes\posts\[permalink].svelte generated by Svelte v3.29.4 */

function preload(page) {
	return { post: findPost(page.params.permalink) };
}

const U5Bpermalinku5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { post } = $$props;
	if ($$props.post === void 0 && $$bindings.post && post !== void 0) $$bindings.post(post);

	return `${($$result.head += `${($$result.title = `<title>${escape(post.title)}</title>`, "")}`, "")}

<section class="${"text-gray-600 body-font"}"><div class="${"container py-24 mx-auto"}"><div class="${"flex flex-wrap w-full mb-20 flex-col items-center text-center"}"><h1>${escape(post.title)}</h1>

      ${validate_component(Tags, "Tags").$$render($$result, { tags: post.tags }, {}, {})}

      <div>${post.html}</div></div></div></section>`;
});

var component_5 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': U5Bpermalinku5D,
    preload: preload
});

/* src\components\Sidebar.svelte generated by Svelte v3.29.4 */

const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<div class="${"m-4 p-8 shadow flex flex-wrap"}"><h2 class="${"bg-pink-500 text-white rounded p-2 text-xl text-bold shadow w-full mb-4"}">Choose Your category
  </h2>

  ${validate_component(Tags, "Tags").$$render($$result, { tags: findAllTag() }, {}, {})}</div>

<div class="${"m-4 p-8 shadow"}"><div class="${"contact-form"}"><h2 class="${"bg-pink-500 text-white rounded p-2 text-xl text-bold shadow w-full mb-4"}">Contact Us
    </h2>
    <p class="${"leading-relaxed mb-5 text-gray-600"}">Send your query below and one of ninja will get in touch asap./
    </p>
    <div class="${"relative mb-4"}"><label for="${"name"}" class="${"leading-7 text-sm text-gray-600"}">Name</label>
      <input type="${"text"}" id="${"name"}" name="${"name"}" class="${"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"}"></div>
    <div class="${"relative mb-4"}"><label for="${"email"}" class="${"leading-7 text-sm text-gray-600"}">Email</label>
      <input type="${"email"}" id="${"email"}" name="${"email"}" class="${"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"}"></div>
    <div class="${"relative mb-4"}"><label for="${"message"}" class="${"leading-7 text-sm text-gray-600"}">Message</label>
      <textarea id="${"message"}" name="${"message"}" class="${"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"}"></textarea></div>
    <button class="${"text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"}">Let&#39;s Talk</button>
    <p class="${"text-xs text-gray-500 mt-3"}">Or You can Skype at <a href="${"skype:srivastava.shiv"}">srivasava.shiv</a></p></div></div>`;
});

/* src\components\blog\PostCard.svelte generated by Svelte v3.29.4 */

const PostCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { post } = $$props;
	if ($$props.post === void 0 && $$bindings.post && post !== void 0) $$bindings.post(post);

	return `

<div class="${"w-full"}"><div class="${"shadow rounded-lg overflow-hidden"}"><a class="${"mt-2"}"${add_attribute("href", `/posts/${slugify(post.title)}`, 0)}><img class="${"m-2 w-full object-cover object-center"}"${add_attribute("src", post.image, 0)}${add_attribute("alt", post.title, 0)} width="${"200px"}" height="${"120px"}"></a>
    <div class="${"p-6"}"><h1 class="${"title-font text-lg font-medium text-gray-900 mb-3"}">${escape(post.title)}</h1>
      <h4 class="${"tracking-widest text-xs title-font font-medium text-gray-400 mb-1"}">${validate_component(Tags, "Tags").$$render($$result, { tags: post.tags }, {}, {})}</h4>
      <p class="${"leading-relaxed mb-3"}">${escape(post.summery ? post.summery : "")}</p>
      <div class="${"flex items-center flex-wrap "}"><a${add_attribute("href", `/posts/${slugify(post.title)}`, 0)} class="${"text-pink-500 inline-flex items-center md:mb-2 lg:mb-0"}">Learn More
          <svg class="${"w-4 h-4 ml-2"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path d="${"M5 12h14"}"></path><path d="${"M12 5l7 7-7 7"}"></path></svg></a>
        <span class="${"text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"}"><svg class="${"w-4 h-4 mr-1"}" stroke="${"currentColor"}" stroke-width="${"2"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" viewBox="${"0 0 24 24"}"><path d="${"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}"></path><circle cx="${"12"}" cy="${"12"}" r="${"3"}"></circle></svg>1.2K
        </span>
        <span class="${"text-gray-400 inline-flex items-center leading-none text-sm"}"><svg class="${"w-4 h-4 mr-1"}" stroke="${"currentColor"}" stroke-width="${"2"}" fill="${"none"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" viewBox="${"0 0 24 24"}"><path d="${"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"}"></path></svg>6
        </span></div></div></div></div>`;
});

/* src\components\blog\PostList.svelte generated by Svelte v3.29.4 */

const PostList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { posts } = $$props;
	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);

	return `<div class="${"flex flex-wrap mt-4 mx-2 overflow-hidden sm:mx-2 md:mx-2 lg:mx-2 xl:mx-2"}">${each(posts, post => `<div class="${"my-2 px-2 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-full md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3"}">${validate_component(PostCard, "PostCard").$$render($$result, { post }, {}, {})}
    </div>`)}</div>

`;
});

function paginate ({ items, pageSize, currentPage }) {
  return items
    .slice(
      (currentPage - 1) * pageSize,
      (currentPage - 1) * pageSize + pageSize
    )
}

const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
const NEXT_PAGE = 'NEXT_PAGE';
const ELLIPSIS = 'ELLIPSIS';

function generateNavigationOptions ({ totalItems, pageSize, currentPage, limit = null, showStepOptions = false })  {
  const totalPages = Math.ceil(totalItems / pageSize);
  const limitThreshold = getLimitThreshold({ limit });
  const limited = limit && totalPages > limitThreshold;
  let options = limited
    ? generateLimitedOptions({ totalPages, limit, currentPage })
    : generateUnlimitedOptions({ totalPages });
  return showStepOptions
    ? addStepOptions({ options, currentPage, totalPages })
    : options
}

function generateUnlimitedOptions ({ totalPages }) {
  return new Array(totalPages)
    .fill(null)
    .map((value, index) => ({
      type: 'number',
      value: index + 1
    }))
}

function generateLimitedOptions ({ totalPages, limit, currentPage }) {
  const boundarySize = limit * 2 + 2;
  const firstBoundary = 1 + boundarySize;
  const lastBoundary = totalPages - boundarySize;
  const totalShownPages = firstBoundary + 2;

  if (currentPage <= firstBoundary - limit) {
    return Array(totalShownPages)
      .fill(null)
      .map((value, index) => {
        if (index === totalShownPages - 1) {
          return {
            type: 'number',
            value: totalPages
          }
        } else if (index === totalShownPages - 2) {
          return {
            type: 'symbol',
            symbol: ELLIPSIS,
            value: firstBoundary + 1
          }
        }
        return {
          type: 'number',
          value: index + 1
        }
      })
  } else if (currentPage >= lastBoundary + limit) {
    return Array(totalShownPages)
      .fill(null)
      .map((value, index) => {
        if (index === 0) {
          return {
            type: 'number',
            value: 1
          }
        } else if (index === 1) {
          return {
            type: 'symbol',
            symbol: ELLIPSIS,
            value: lastBoundary - 1
          }
        }
        return {
          type: 'number',
          value: lastBoundary + index - 2
        }
      })
  } else if (currentPage >= (firstBoundary - limit) && currentPage <= (lastBoundary + limit)) {
    return Array(totalShownPages)
      .fill(null)
      .map((value, index) => {
        if (index === 0) {
          return {
            type: 'number',
            value: 1
          }
        } else if (index === 1) {
          return {
            type: 'symbol',
            symbol: ELLIPSIS,
            value: currentPage - limit + (index - 2)
          }
        } else if (index === totalShownPages - 1) {
          return {
            type: 'number',
            value: totalPages
          }
        } else if (index === totalShownPages - 2) {
          return {
            type: 'symbol',
            symbol: ELLIPSIS,
            value: currentPage + limit + 1
          }
        }
        return {
          type: 'number',
          value: currentPage - limit + (index - 2)
        }
      })
  }
}

function addStepOptions ({ options, currentPage, totalPages }) {
  return [
    {
      type: 'symbol',
      symbol: PREVIOUS_PAGE,
      value: currentPage <= 1 ? 1 : currentPage - 1
    },
    ...options,
    {
      type: 'symbol',
      symbol: NEXT_PAGE,
      value: currentPage >= totalPages ? totalPages : currentPage + 1
    }
  ]
}

function getLimitThreshold ({ limit }) {
  const maximumUnlimitedPages = 3; // This means we cannot limit 3 pages or less
  const numberOfBoundaryPages = 2; // The first and last pages are always shown
  return limit * 2 + maximumUnlimitedPages + numberOfBoundaryPages
}

/* node_modules\svelte-paginate\src\PaginationNav.svelte generated by Svelte v3.29.4 */

const PaginationNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const dispatch = createEventDispatcher();
	let { totalItems = 0 } = $$props;
	let { pageSize = 1 } = $$props;
	let { currentPage = 1 } = $$props;
	let { limit = null } = $$props;
	let { showStepOptions = false } = $$props;

	if ($$props.totalItems === void 0 && $$bindings.totalItems && totalItems !== void 0) $$bindings.totalItems(totalItems);
	if ($$props.pageSize === void 0 && $$bindings.pageSize && pageSize !== void 0) $$bindings.pageSize(pageSize);
	if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0) $$bindings.currentPage(currentPage);
	if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0) $$bindings.limit(limit);
	if ($$props.showStepOptions === void 0 && $$bindings.showStepOptions && showStepOptions !== void 0) $$bindings.showStepOptions(showStepOptions);
	let options;
	let totalPages;

	options = generateNavigationOptions({
		totalItems,
		pageSize,
		currentPage,
		limit,
		showStepOptions
	});

	totalPages = Math.ceil(totalItems / pageSize);

	return `<div class="${"pagination-nav"}">${each(options, option => `<span class="${[
		"option",
		(option.type === "number" ? "number" : "") + " " + (option.type === "symbol" && option.symbol === PREVIOUS_PAGE
		? "prev"
		: "") + " " + (option.type === "symbol" && option.symbol === NEXT_PAGE
		? "next"
		: "") + " " + (option.type === "symbol" && option.symbol === NEXT_PAGE && currentPage >= totalPages || option.type === "symbol" && option.symbol === PREVIOUS_PAGE && currentPage <= 1
		? "disabled"
		: "") + " " + (option.type === "symbol" && option.symbol === ELLIPSIS
		? "ellipsis"
		: "") + " " + (option.type === "number" && option.value === currentPage
		? "active"
		: "")
	].join(" ").trim()}">${option.type === "number"
	? `${slots.number
		? slots.number({ value: option.value })
		: `
          <span>${escape(option.value)}</span>
        `}`
	: `${option.type === "symbol" && option.symbol === ELLIPSIS
		? `${slots.ellipsis
			? slots.ellipsis({})
			: `
          <span>...</span>
        `}`
		: `${option.type === "symbol" && option.symbol === PREVIOUS_PAGE
			? `${slots.prev
				? slots.prev({})
				: `
          <svg style="${"width:24px;height:24px"}" viewBox="${"0 0 24 24"}"><path fill="${"#000000"}" d="${"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"}"></path></svg>
        `}`
			: `${option.type === "symbol" && option.symbol === NEXT_PAGE
				? `${slots.next
					? slots.next({})
					: `
          <svg style="${"width:24px;height:24px"}" viewBox="${"0 0 24 24"}"><path fill="${"#000000"}" d="${"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"}"></path></svg>
        `}`
				: ``}`}`}`}
    </span>`)}</div>`;
});

/* node_modules\svelte-paginate\src\LightPaginationNav.svelte generated by Svelte v3.29.4 */

const css$9 = {
	code: ".light-pagination-nav.svelte-s5ru8s .pagination-nav{display:flex;justify-content:center;background:#FFF;border-radius:3px;box-shadow:0 1px 2px rgba(0, 0, 0, 0.3)}.light-pagination-nav.svelte-s5ru8s .option{padding:10px;display:flex;align-items:center;justify-content:center;transition:0.2s all ease-out;user-select:none;color:hsl(200, 90%, 10%)}.light-pagination-nav.svelte-s5ru8s .option.number,.light-pagination-nav.svelte-s5ru8s .option.ellipsis{padding:10px 15px}.light-pagination-nav.svelte-s5ru8s .option:hover{background:rgba(0, 0, 0, 0.1);cursor:pointer}.light-pagination-nav.svelte-s5ru8s .option.active{color:hsl(200, 70%, 50%)}",
	map: "{\"version\":3,\"file\":\"LightPaginationNav.svelte\",\"sources\":[\"LightPaginationNav.svelte\"],\"sourcesContent\":[\"<script>\\n  import PaginationNav from './PaginationNav.svelte'\\n</script>\\n\\n<div class=\\\"light-pagination-nav\\\">\\n  <PaginationNav\\n    {...$$props}\\n    on:setPage\\n  />\\n</div>\\n\\n<style>\\n.light-pagination-nav :global(.pagination-nav) {\\n  display: flex;\\n  justify-content: center;\\n  background: #FFF;\\n  border-radius: 3px;\\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\\n}\\n.light-pagination-nav :global(.option) {\\n  padding: 10px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  transition: 0.2s all ease-out;\\n  user-select: none;\\n  color: hsl(200, 90%, 10%);\\n}\\n\\n.light-pagination-nav :global(.option.number),\\n.light-pagination-nav :global(.option.ellipsis) {\\n  padding: 10px 15px;\\n}\\n.light-pagination-nav :global(.option:hover) {\\n  background: rgba(0, 0, 0, 0.1);\\n  cursor: pointer;\\n}\\n.light-pagination-nav :global(.option.active) {\\n  color: hsl(200, 70%, 50%);\\n}\\n</style>\"],\"names\":[],\"mappings\":\"AAYA,mCAAqB,CAAC,AAAQ,eAAe,AAAE,CAAC,AAC9C,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,AAC1C,CAAC,AACD,mCAAqB,CAAC,AAAQ,OAAO,AAAE,CAAC,AACtC,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,IAAI,CAAC,GAAG,CAAC,QAAQ,CAC7B,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,AAC3B,CAAC,AAED,mCAAqB,CAAC,AAAQ,cAAc,AAAC,CAC7C,mCAAqB,CAAC,AAAQ,gBAAgB,AAAE,CAAC,AAC/C,OAAO,CAAE,IAAI,CAAC,IAAI,AACpB,CAAC,AACD,mCAAqB,CAAC,AAAQ,aAAa,AAAE,CAAC,AAC5C,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC9B,MAAM,CAAE,OAAO,AACjB,CAAC,AACD,mCAAqB,CAAC,AAAQ,cAAc,AAAE,CAAC,AAC7C,KAAK,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,AAC3B,CAAC\"}"
};

const LightPaginationNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$9);

	return `<div class="${"light-pagination-nav svelte-s5ru8s"}">${validate_component(PaginationNav, "PaginationNav").$$render($$result, Object.assign($$props), {}, {})}
</div>`;
});

/* src\components\Bloglayout.svelte generated by Svelte v3.29.4 */
let pageSize = 4;

const Bloglayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let items = posts;
	let currentPage = 1;
	let paginatedItems;
	paginatedItems = paginate({ items, pageSize, currentPage });

	return `<section class="${"flex flex-wrap mx-2 overflow-hidden sm:mx-2 md:mx-2 lg:mx-2 xl:mx-2"}"><div class="${"lg:px-16 px-6 flex flex-wrap justify-center my-1 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-full md:my-2 md:px-2 md:w-2/3 lg:my-2 lg:w-2/3 xl:my-2 xl:px-2 xl:w-2/3"}">${validate_component(PostList, "PostList").$$render($$result, { posts: paginatedItems }, {}, {})}
    ${validate_component(LightPaginationNav, "LightPaginationNav").$$render(
		$$result,
		{
			totalItems: items.length,
			pageSize,
			currentPage,
			limit: 1,
			showStepOptions: true
		},
		{},
		{}
	)}</div>
  <div class="${"container my-6 px-6 w-full overflow-hidden sm:my-8 sm:px-8 sm:w-full md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3"}">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}</div></section>

`;
});

/* src\components\Bloghero.svelte generated by Svelte v3.29.4 */

const Bloghero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { title1 } = $$props;
	let { title2 } = $$props;
	let { blogdate } = $$props;
	if ($$props.title1 === void 0 && $$bindings.title1 && title1 !== void 0) $$bindings.title1(title1);
	if ($$props.title2 === void 0 && $$bindings.title2 && title2 !== void 0) $$bindings.title2(title2);
	if ($$props.blogdate === void 0 && $$bindings.blogdate && blogdate !== void 0) $$bindings.blogdate(blogdate);

	return `


<div class="${"lg:px-16 px-6 py-12 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-100"}"><h1 class="${"mt-4 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-2xl mb-8"}"><span class="${"block inline"}">${escape(title1)}</span>
    <span class="${"block text-white inline"}">${escape(title2)}</span></h1>
  ${blogdate
	? `<p class="${"text-md text-gray-300"}">Posted at : ${escape(blogdate ? moment__default['default'](blogdate).format("Do MMMM YYYY") : "")}</p>
    <p class="${"text-md text-gray-300"}">Author By : Ninja Team</p>`
	: ``}</div>`;
});

/* src\routes\posts.svelte generated by Svelte v3.29.4 */

const Posts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${($$result.head += `${($$result.title = `<title>Latest Articles...</title>`, "")}`, "")}

${validate_component(Bloghero, "Bloghero").$$render($$result, { title1: "Latest", title2: "Articles..." }, {}, {})}

${validate_component(Bloglayout, "Bloglayout").$$render($$result, {}, {}, {})}`;
});

var component_6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Posts
});

/* src\routes\tag\[slug].svelte generated by Svelte v3.29.4 */

function preload$1(page) {
	const { slug } = page.params;
	const posts = findByTag(slug);
	return { slug, posts };
}

const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { slug } = $$props, { posts } = $$props;
	if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0) $$bindings.slug(slug);
	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);

	return `${($$result.head += `${($$result.title = `<title>Latest Articles for ${escape(slug)}</title>`, "")}`, "")}
${validate_component(Bloghero, "Bloghero").$$render(
		$$result,
		{
			title1: "Latest Articles for ",
			title2: slug
		},
		{},
		{}
	)}
<section class="${"text-gray-600 body-font relative mb-4"}"><div class="${"flex flex-wrap mx-1 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2"}"><div class="${"container my-1 px-1 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-full md:my-2 md:px-2 md:w-2/3 lg:my-2 lg:px-2 lg:w-2/3 xl:my-2 xl:px-2 xl:w-2/3"}">${validate_component(PostList, "PostList").$$render($$result, { posts }, {}, {})}</div>
    <div class="${"container my-6 px-6 w-full overflow-hidden sm:my-8 sm:px-8 sm:w-full md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3"}">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}</div></div></section>`;
});

var component_7 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': U5Bslugu5D,
    preload: preload$1
});

/* src\components\Navli.svelte generated by Svelte v3.29.4 */

const Navli = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { text } = $$props;
	let { segment } = $$props;
	let { classes } = $$props;
	let { linkk } = $$props;
	if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0) $$bindings.classes(classes);
	if ($$props.linkk === void 0 && $$bindings.linkk && linkk !== void 0) $$bindings.linkk(linkk);
	return `<a sapper:prefetch class="${escape(classes) + " font-heading1"}"${add_attribute("aria-current", segment === linkk ? "page" : undefined, 0)}${add_attribute("href", linkk, 0)}>${escape(text)}</a>`;
});

/* src\components\Logo.svelte generated by Svelte v3.29.4 */

const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<div class="${"flex-1 flex justify-between items-start"}"><a href="${"."}" class="${"flex flex-nowrap inline"}"><svg class="${"h-6 w-6 text-pink-500"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><path d="${"M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"}"></path><path d="${"M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}"></path><path d="${"M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"}"></path><path d="${"M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"}"></path><path d="${"M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"}"></path><path d="${"M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"}"></path><path d="${"M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"}"></path><path d="${"M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"}"></path></svg>
    <span class="${"font-extrabold font-4xl ml-1 font-heading1"}">Webdesign Ninjas</span></a></div>`;
});

/* src\components\Nav2.svelte generated by Svelte v3.29.4 */

const Nav2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { segment } = $$props;
	let { isOpen = true } = $$props;

	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0) $$bindings.isOpen(isOpen);

	return `<header class="${"lg:px-16 px-6 bg-gray-50 flex flex-wrap items-center lg:py-2 py-2"}">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}

  <label for="${"menu-toggle"}" class="${"pointer-cursor lg:hidden block"}"><svg class="${"fill-current text-gray-900"}" xmlns="${"http://www.w3.org/2000/svg"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 20 20"}"><title>menu</title><path d="${"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}"></path></svg></label>
  <input${add_attribute("class", isOpen ? "hidden" : "", 0)} type="${"hidden"}" id="${"menu-toggle"}">

  <div class="${escape(isOpen ? "hidden" : "") + " lg:flex lg:items-center lg:w-auto w-full"}" id="${"menu"}"><nav><ul class="${"lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0"}"><li>${validate_component(Navli, "Navli").$$render(
		$$result,
		{
			text: "Home",
			classes: "lg:p-4 py-3 px-0 block border-b-2 font-extrabold border-transparent hover:border-indigo-400",
			linkk: ".",
			segment
		},
		{},
		{}
	)}</li>
        <li>${validate_component(Navli, "Navli").$$render(
		$$result,
		{
			text: "About",
			classes: "lg:p-4 py-3 px-0 block border-b-2 font-extrabold border-transparent hover:border-indigo-400",
			linkk: "about",
			segment
		},
		{},
		{}
	)}</li>
        <li>${validate_component(Navli, "Navli").$$render(
		$$result,
		{
			text: "Services",
			classes: "lg:p-4 py-3 px-0 block border-b-2 font-extrabold border-transparent hover:border-indigo-400",
			linkk: "services",
			segment
		},
		{},
		{}
	)}</li>
        <li>${validate_component(Navli, "Navli").$$render(
		$$result,
		{
			text: "Case Studies",
			classes: "lg:p-4 py-3 px-0 block border-b-2 font-extrabold border-transparent hover:border-indigo-400",
			linkk: "case-studies",
			segment
		},
		{},
		{}
	)}</li>
        <li>${validate_component(Navli, "Navli").$$render(
		$$result,
		{
			text: "Blog",
			classes: "lg:p-4 py-3 px-0 block border-b-2 font-extrabold border-transparent hover:border-indigo-400",
			linkk: "posts",
			segment
		},
		{},
		{}
	)}</li>
        <li>${validate_component(Navli, "Navli").$$render(
		$$result,
		{
			text: "Contact",
			classes: "lg:p-4 py-3 px-0 block border-b-2 font-extrabold border-transparent hover:border-indigo-400",
			linkk: "contact",
			segment
		},
		{},
		{}
	)}</li></ul></nav></div></header>`;
});

/* node_modules\svelte-tawk-to-chat-widget\src\TawkToChatWidget.svelte generated by Svelte v3.29.4 */

const TawkToChatWidget = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { propertyId = "" } = $$props;
	let { chatId = "default" } = $$props;

	onMount(() => {

		(function () {
			var s1 = document.createElement("script"),
				s0 = document.getElementsByTagName("script")[0];

			s1.async = true;
			s1.src = `https://embed.tawk.to/${propertyId}/${chatId}`;
			s1.charset = "UTF-8";
			s1.setAttribute("crossorigin", "*");
			s0.parentNode.insertBefore(s1, s0);
		})();
	});

	if ($$props.propertyId === void 0 && $$bindings.propertyId && propertyId !== void 0) $$bindings.propertyId(propertyId);
	if ($$props.chatId === void 0 && $$bindings.chatId && chatId !== void 0) $$bindings.chatId(chatId);
	return ``;
});

/* src\components\Footer.svelte generated by Svelte v3.29.4 */

const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<footer class="${"text-white bg-gray-50 body-font justify-center"}"><div class="${"container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"}"><a href="${"."}" class="${"flex title-font font-medium items-center md:justify-center justify-center text-gray-900"}">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</a>
    <p class="${"text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"}">© 2021
    </p>
    <div class="${"mb-4 ml-4"}">${validate_component(Socialbutton, "Socialbutton").$$render($$result, {}, {}, {})}</div></div>

  
  ${validate_component(TawkToChatWidget, "SvelteTawkToChaTWidget").$$render(
		$$result,
		{
			propertyId: "59f359984854b82732ff8281",
			chatId: "default"
		},
		{},
		{}
	)}</footer>


`;
});

/* src\routes\_layout.svelte generated by Svelte v3.29.4 */

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { segment } = $$props;
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);

	return `${validate_component(Nav2, "Nav2").$$render($$result, { segment }, {}, {})}
  ${slots.default ? slots.default({}) : ``}
  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}


`;
});

var root_comp = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Layout
});

/* src\routes\_error.svelte generated by Svelte v3.29.4 */

const css$a = {
	code: "h1.svelte-hc3g3x,p.svelte-hc3g3x{margin:0 auto}h1.svelte-hc3g3x{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-hc3g3x{margin:1em auto}@media(min-width: 480px){h1.svelte-hc3g3x{font-size:4em}}",
	map: "{\"version\":3,\"file\":\"_error.svelte\",\"sources\":[\"_error.svelte\"],\"sourcesContent\":[\"<script>\\n  export let status\\n  export let error\\n\\n  const dev = undefined === 'development'\\n</script>\\n\\n<style>\\n  h1, p {\\n    margin: 0 auto;\\n  }\\n\\n  h1 {\\n    font-size: 2.8em;\\n    font-weight: 700;\\n    margin: 0 0 0.5em 0;\\n  }\\n\\n  p {\\n    margin: 1em auto;\\n  }\\n\\n  @media (min-width: 480px) {\\n    h1 {\\n      font-size: 4em;\\n    }\\n  }\\n</style>\\n\\n<svelte:head>\\n  <title>{status}</title>\\n</svelte:head>\\n\\n<h1>{status}</h1>\\n\\n<p>{error.message}</p>\\n\\n{#if dev && error.stack}\\n  <pre>{error.stack}</pre>\\n{/if}\\n\"],\"names\":[],\"mappings\":\"AAQE,gBAAE,CAAE,CAAC,cAAC,CAAC,AACL,MAAM,CAAE,CAAC,CAAC,IAAI,AAChB,CAAC,AAED,EAAE,cAAC,CAAC,AACF,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACrB,CAAC,AAED,CAAC,cAAC,CAAC,AACD,MAAM,CAAE,GAAG,CAAC,IAAI,AAClB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,EAAE,cAAC,CAAC,AACF,SAAS,CAAE,GAAG,AAChB,CAAC,AACH,CAAC\"}"
};

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { status } = $$props;
	let { error } = $$props;
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	$$result.css.add(css$a);

	return `${($$result.head += `${($$result.title = `<title>${escape(status)}</title>`, "")}`, "")}

<h1 class="${"svelte-hc3g3x"}">${escape(status)}</h1>

<p class="${"svelte-hc3g3x"}">${escape(error.message)}</p>

${ ``}`;
});

// This file is generated by Sapper — do not edit it!

const d = decodeURIComponent;

const manifest = {
	server_routes: [
		
	],

	pages: [
		{
			// index.svelte
			pattern: /^\/$/,
			parts: [
				{ name: "index", file: "index.svelte", component: component_0 }
			]
		},

		{
			// case-studies.svelte
			pattern: /^\/case-studies\/?$/,
			parts: [
				{ name: "case$45studies", file: "case-studies.svelte", component: component_1 }
			]
		},

		{
			// services.svelte
			pattern: /^\/services\/?$/,
			parts: [
				{ name: "services", file: "services.svelte", component: component_2 }
			]
		},

		{
			// contact.svelte
			pattern: /^\/contact\/?$/,
			parts: [
				{ name: "contact", file: "contact.svelte", component: component_3 }
			]
		},

		{
			// about.svelte
			pattern: /^\/about\/?$/,
			parts: [
				{ name: "about", file: "about.svelte", component: component_4 }
			]
		},

		{
			// posts/[permalink].svelte
			pattern: /^\/posts\/([^/]+?)\/?$/,
			parts: [
				null,
				{ name: "posts_$permalink", file: "posts/[permalink].svelte", component: component_5, params: match => ({ permalink: d(match[1]) }) }
			]
		},

		{
			// posts.svelte
			pattern: /^\/posts\/?$/,
			parts: [
				{ name: "posts", file: "posts.svelte", component: component_6 }
			]
		},

		{
			// tag/[slug].svelte
			pattern: /^\/tag\/([^/]+?)\/?$/,
			parts: [
				null,
				{ name: "tag_$slug", file: "tag/[slug].svelte", component: component_7, params: match => ({ slug: d(match[1]) }) }
			]
		}
	],

	root_comp,
	error: Error$1
};

const build_dir = "__sapper__/build";

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

const CONTEXT_KEY = {};

/* src\node_modules\@sapper\internal\App.svelte generated by Svelte v3.29.4 */

const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { stores } = $$props;
	let { error } = $$props;
	let { status } = $$props;
	let { segments } = $$props;
	let { level0 } = $$props;
	let { level1 = null } = $$props;
	let { notify } = $$props;
	afterUpdate(notify);
	setContext(CONTEXT_KEY, stores);
	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
	if ($$props.level0 === void 0 && $$bindings.level0 && level0 !== void 0) $$bindings.level0(level0);
	if ($$props.level1 === void 0 && $$bindings.level1 && level1 !== void 0) $$bindings.level1(level1);
	if ($$props.notify === void 0 && $$bindings.notify && notify !== void 0) $$bindings.notify(notify);

	return `


${validate_component(Layout, "Layout").$$render($$result, Object.assign({ segment: segments[0] }, level0.props), {}, {
		default: () => `${error
		? `${validate_component(Error$1, "Error").$$render($$result, { error, status }, {}, {})}`
		: `${validate_component(level1.component || missing_component, "svelte:component").$$render($$result, Object.assign(level1.props), {}, {})}`}`
	})}`;
});

/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (var i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime.prototype.define = function(typeMap, force) {
  for (var type in typeMap) {
    var extensions = typeMap[type].map(function(t) {return t.toLowerCase()});
    type = type.toLowerCase();

    for (var i = 0; i < extensions.length; i++) {
      var ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] == '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      var ext = extensions[0];
      this._extensions[type] = (ext[0] != '*') ? ext : ext.substr(1);
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime.prototype.getType = function(path) {
  path = String(path);
  var last = path.replace(/^.*[/\\]/, '').toLowerCase();
  var ext = last.replace(/^.*\./, '').toLowerCase();

  var hasPath = last.length < path.length;
  var hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

var Mime_1 = Mime;

var standard = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomdeleted+xml":["atomdeleted"],"application/atomsvc+xml":["atomsvc"],"application/atsc-dwd+xml":["dwd"],"application/atsc-held+xml":["held"],"application/atsc-rsat+xml":["rsat"],"application/bdoc":["bdoc"],"application/calendar+xml":["xcs"],"application/ccxml+xml":["ccxml"],"application/cdfx+xml":["cdfx"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma","es"],"application/emma+xml":["emma"],"application/emotionml+xml":["emotionml"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/fdt+xml":["fdt"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/its+xml":["its"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lgr+xml":["lgr"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mmt-aei+xml":["maei"],"application/mmt-usd+xml":["musd"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/mrb-consumer+xml":["*xdf"],"application/mrb-publish+xml":["*xdf"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/node":["cjs"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/p2p-overlay+xml":["relo"],"application/patch-ops-error+xml":["*xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/provenance+xml":["provx"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/route-apd+xml":["rapd"],"application/route-s-tsid+xml":["sls"],"application/route-usd+xml":["rusd"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/senml+xml":["senmlx"],"application/sensml+xml":["sensmlx"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/swid+xml":["swidtag"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/toml":["toml"],"application/ttml+xml":["ttml"],"application/urc-ressheet+xml":["rsheet"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-att+xml":["xav"],"application/xcap-caps+xml":["xca"],"application/xcap-diff+xml":["xdf"],"application/xcap-el+xml":["xel"],"application/xcap-error+xml":["xer"],"application/xcap-ns+xml":["xns"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xliff+xml":["xlf"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mobile-xmf":["mxmf"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/hej2k":["hej2"],"image/hsj2":["hsj2"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jph":["jph"],"image/jphc":["jhc"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/jxra":["jxra"],"image/jxrs":["jxrs"],"image/jxs":["jxs"],"image/jxsc":["jxsc"],"image/jxsi":["jxsi"],"image/jxss":["jxss"],"image/ktx":["ktx"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/mtl":["mtl"],"model/obj":["obj"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

var lite = new Mime_1(standard);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function get_server_route_handler(routes) {
    function handle_route(route, req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.params = route.params(route.pattern.exec(req.path));
            const method = req.method.toLowerCase();
            // 'delete' cannot be exported from a module because it is a keyword,
            // so check for 'del' instead
            const method_export = method === 'delete' ? 'del' : method;
            const handle_method = route.handlers[method_export];
            if (handle_method) {
                if (process.env.SAPPER_EXPORT) {
                    const { write, end, setHeader } = res;
                    const chunks = [];
                    const headers = {};
                    // intercept data so that it can be exported
                    res.write = function (chunk) {
                        chunks.push(Buffer.from(chunk));
                        return write.apply(res, [chunk]);
                    };
                    res.setHeader = function (name, value) {
                        headers[name.toLowerCase()] = value;
                        setHeader.apply(res, [name, value]);
                    };
                    res.end = function (chunk) {
                        if (chunk)
                            chunks.push(Buffer.from(chunk));
                        end.apply(res, [chunk]);
                        process.send({
                            __sapper__: true,
                            event: 'file',
                            url: req.url,
                            method: req.method,
                            status: res.statusCode,
                            type: headers['content-type'],
                            body: Buffer.concat(chunks)
                        });
                    };
                }
                const handle_next = (err) => {
                    if (err) {
                        res.statusCode = 500;
                        res.end(err.message);
                    }
                    else {
                        process.nextTick(next);
                    }
                };
                try {
                    yield handle_method(req, res, handle_next);
                }
                catch (err) {
                    console.error(err);
                    handle_next(err);
                }
            }
            else {
                // no matching handler for method
                process.nextTick(next);
            }
        });
    }
    return function find_route(req, res, next) {
        for (const route of routes) {
            if (route.pattern.test(req.path)) {
                handle_route(route, req, res, next);
                return;
            }
        }
        next();
    };
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
    '<': '\\u003C',
    '>': '\\u003E',
    '/': '\\u002F',
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\0': '\\0',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function devalue(value) {
    var counts = new Map();
    function walk(thing) {
        if (typeof thing === 'function') {
            throw new Error("Cannot stringify a function");
        }
        if (counts.has(thing)) {
            counts.set(thing, counts.get(thing) + 1);
            return;
        }
        counts.set(thing, 1);
        if (!isPrimitive(thing)) {
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                case 'Date':
                case 'RegExp':
                    return;
                case 'Array':
                    thing.forEach(walk);
                    break;
                case 'Set':
                case 'Map':
                    Array.from(thing).forEach(walk);
                    break;
                default:
                    var proto = Object.getPrototypeOf(thing);
                    if (proto !== Object.prototype &&
                        proto !== null &&
                        Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames) {
                        throw new Error("Cannot stringify arbitrary non-POJOs");
                    }
                    if (Object.getOwnPropertySymbols(thing).length > 0) {
                        throw new Error("Cannot stringify POJOs with symbolic keys");
                    }
                    Object.keys(thing).forEach(function (key) { return walk(thing[key]); });
            }
        }
    }
    walk(value);
    var names = new Map();
    Array.from(counts)
        .filter(function (entry) { return entry[1] > 1; })
        .sort(function (a, b) { return b[1] - a[1]; })
        .forEach(function (entry, i) {
        names.set(entry[0], getName(i));
    });
    function stringify(thing) {
        if (names.has(thing)) {
            return names.get(thing);
        }
        if (isPrimitive(thing)) {
            return stringifyPrimitive(thing);
        }
        var type = getType(thing);
        switch (type) {
            case 'Number':
            case 'String':
            case 'Boolean':
                return "Object(" + stringify(thing.valueOf()) + ")";
            case 'RegExp':
                return "new RegExp(" + stringifyString(thing.source) + ", \"" + thing.flags + "\")";
            case 'Date':
                return "new Date(" + thing.getTime() + ")";
            case 'Array':
                var members = thing.map(function (v, i) { return i in thing ? stringify(v) : ''; });
                var tail = thing.length === 0 || (thing.length - 1 in thing) ? '' : ',';
                return "[" + members.join(',') + tail + "]";
            case 'Set':
            case 'Map':
                return "new " + type + "([" + Array.from(thing).map(stringify).join(',') + "])";
            default:
                var obj = "{" + Object.keys(thing).map(function (key) { return safeKey(key) + ":" + stringify(thing[key]); }).join(',') + "}";
                var proto = Object.getPrototypeOf(thing);
                if (proto === null) {
                    return Object.keys(thing).length > 0
                        ? "Object.assign(Object.create(null)," + obj + ")"
                        : "Object.create(null)";
                }
                return obj;
        }
    }
    var str = stringify(value);
    if (names.size) {
        var params_1 = [];
        var statements_1 = [];
        var values_1 = [];
        names.forEach(function (name, thing) {
            params_1.push(name);
            if (isPrimitive(thing)) {
                values_1.push(stringifyPrimitive(thing));
                return;
            }
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                    values_1.push("Object(" + stringify(thing.valueOf()) + ")");
                    break;
                case 'RegExp':
                    values_1.push(thing.toString());
                    break;
                case 'Date':
                    values_1.push("new Date(" + thing.getTime() + ")");
                    break;
                case 'Array':
                    values_1.push("Array(" + thing.length + ")");
                    thing.forEach(function (v, i) {
                        statements_1.push(name + "[" + i + "]=" + stringify(v));
                    });
                    break;
                case 'Set':
                    values_1.push("new Set");
                    statements_1.push(name + "." + Array.from(thing).map(function (v) { return "add(" + stringify(v) + ")"; }).join('.'));
                    break;
                case 'Map':
                    values_1.push("new Map");
                    statements_1.push(name + "." + Array.from(thing).map(function (_a) {
                        var k = _a[0], v = _a[1];
                        return "set(" + stringify(k) + ", " + stringify(v) + ")";
                    }).join('.'));
                    break;
                default:
                    values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
                    Object.keys(thing).forEach(function (key) {
                        statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
                    });
            }
        });
        statements_1.push("return " + str);
        return "(function(" + params_1.join(',') + "){" + statements_1.join(';') + "}(" + values_1.join(',') + "))";
    }
    else {
        return str;
    }
}
function getName(num) {
    var name = '';
    do {
        name = chars[num % chars.length] + name;
        num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
    return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
    if (typeof thing === 'string')
        return stringifyString(thing);
    if (thing === void 0)
        return 'void 0';
    if (thing === 0 && 1 / thing < 0)
        return '-0';
    var str = String(thing);
    if (typeof thing === 'number')
        return str.replace(/^(-)?0\./, '$1.');
    return str;
}
function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
    return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
        var char = str.charAt(i);
        var code = char.charCodeAt(0);
        if (char === '"') {
            result += '\\"';
        }
        else if (char in escaped$1) {
            result += escaped$1[char];
        }
        else if (code >= 0xd800 && code <= 0xdfff) {
            var next = str.charCodeAt(i + 1);
            // If this is the beginning of a [high, low] surrogate pair,
            // add the next two characters, otherwise escape
            if (code <= 0xdbff && (next >= 0xdc00 && next <= 0xdfff)) {
                result += char + str[++i];
            }
            else {
                result += "\\u" + code.toString(16).toUpperCase();
            }
        }
        else {
            result += char;
        }
    }
    result += '"';
    return result;
}

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream__default['default'].Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream__default['default'].PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream__default['default']) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream__default['default']) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream__default['default'])) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
		if (!res) {
			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
			if (res) {
				res.pop(); // drop last quote
			}
		}

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream__default['default'] && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream__default['default']) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http__default['default'].STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url__default['default'].parse;
const format_url = Url__default['default'].format;

const streamDestructionSupported = 'destroy' in Stream__default['default'].Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream__default['default'].Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream__default['default'].PassThrough;
const resolve_url = Url__default['default'].resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch$1(url, opts) {

	// allow custom promise
	if (!fetch$1.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch$1.Promise;

	// wrap http.request into fetch
	return new fetch$1.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https__default['default'] : http__default['default']).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream__default['default'].Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch$1.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch$1(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib__default['default'].Z_SYNC_FLUSH,
				finishFlush: zlib__default['default'].Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib__default['default'].createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib__default['default'].createInflate());
					} else {
						body = body.pipe(zlib__default['default'].createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib__default['default'].createBrotliDecompress === 'function') {
				body = body.pipe(zlib__default['default'].createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch$1.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch$1.Promise = global.Promise;

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
var encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
var decode$1 = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};

var base64 = {
	encode: encode,
	decode: decode$1
};

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
var encode$1 = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
var decode$2 = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};

var base64Vlq = {
	encode: encode$1,
	decode: decode$2
};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var util = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port;
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;
});

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */


var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

var ArraySet_1 = ArraySet;

var arraySet = {
	ArraySet: ArraySet_1
};

var binarySearch = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};
});

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
var quickSort_1 = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};

var quickSort = {
	quickSort: quickSort_1
};

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */



var ArraySet$1 = arraySet.ArraySet;

var quickSort$1 = quickSort.quickSort;

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
    : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

var SourceMapConsumer_1 = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet$1.fromArray(names.map(String), true);
  this._sources = ArraySet$1.fromArray(sources, true);

  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }

  // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet$1.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet$1.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function (s) {
      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort$1(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64Vlq.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort$1(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort$1(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }

    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

var BasicSourceMapConsumer_1 = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet$1();
  this._names = new ArraySet$1();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort$1(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort$1(this.__originalMappings, util.compareByOriginalPositions);
  };

var IndexedSourceMapConsumer_1 = IndexedSourceMapConsumer;

var sourceMapConsumer = {
	SourceMapConsumer: SourceMapConsumer_1,
	BasicSourceMapConsumer: BasicSourceMapConsumer_1,
	IndexedSourceMapConsumer: IndexedSourceMapConsumer_1
};

var SourceMapConsumer$1 = sourceMapConsumer.SourceMapConsumer;

function get_sourcemap_url(contents) {
    const reversed = contents
        .split('\n')
        .reverse()
        .join('\n');
    const match = /\/[/*]#[ \t]+sourceMappingURL=([^\s'"]+?)(?:[ \t]+|$)/gm.exec(reversed);
    if (match)
        return match[1];
    return undefined;
}
const file_cache = new Map();
function get_file_contents(file_path) {
    if (file_cache.has(file_path)) {
        return file_cache.get(file_path);
    }
    try {
        const data = fs__default['default'].readFileSync(file_path, 'utf8');
        file_cache.set(file_path, data);
        return data;
    }
    catch (_a) {
        return undefined;
    }
}
function sourcemap_stacktrace(stack) {
    const replace = (line) => line.replace(/^ {4}at (?:(.+?)\s+\()?(?:(.+?):(\d+)(?::(\d+))?)\)?/, (input, var_name, file_path, line_num, column) => {
        if (!file_path)
            return input;
        const contents = get_file_contents(file_path);
        if (!contents)
            return input;
        const sourcemap_url = get_sourcemap_url(contents);
        if (!sourcemap_url)
            return input;
        let dir = path__default['default'].dirname(file_path);
        let sourcemap_data;
        if (/^data:application\/json[^,]+base64,/.test(sourcemap_url)) {
            const raw_data = sourcemap_url.slice(sourcemap_url.indexOf(',') + 1);
            try {
                sourcemap_data = Buffer.from(raw_data, 'base64').toString();
            }
            catch (_a) {
                return input;
            }
        }
        else {
            const sourcemap_path = path__default['default'].resolve(dir, sourcemap_url);
            const data = get_file_contents(sourcemap_path);
            if (!data)
                return input;
            sourcemap_data = data;
            dir = path__default['default'].dirname(sourcemap_path);
        }
        let raw_sourcemap;
        try {
            raw_sourcemap = JSON.parse(sourcemap_data);
        }
        catch (_b) {
            return input;
        }
        const consumer = new SourceMapConsumer$1(raw_sourcemap);
        const pos = consumer.originalPositionFor({
            line: Number(line_num),
            column: Number(column),
            bias: SourceMapConsumer$1.LEAST_UPPER_BOUND
        });
        if (!pos.source)
            return input;
        const source_path = path__default['default'].resolve(dir, pos.source);
        const source = `${source_path}:${pos.line || 0}:${pos.column || 0}`;
        if (!var_name)
            return `    at ${source}`;
        return `    at ${var_name} (${source})`;
    });
    file_cache.clear();
    return stack
        .split('\n')
        .map(replace)
        .join('\n');
}

function get_page_handler(manifest, session_getter) {
    const get_build_info =  (assets => () => assets)(JSON.parse(fs__default['default'].readFileSync(path__default['default'].join(build_dir, 'build.json'), 'utf-8')));
    const template =  (str => () => str)(read_template(build_dir));
    const has_service_worker = fs__default['default'].existsSync(path__default['default'].join(build_dir, 'service-worker.js'));
    const { pages, error: error_route } = manifest;
    function bail(res, err) {
        console.error(err);
        const message =  'Internal server error';
        res.statusCode = 500;
        res.end(`<pre>${message}</pre>`);
    }
    function handle_error(req, res, statusCode, error) {
        handle_page({
            pattern: null,
            parts: [
                { name: null, component: { default: error_route } }
            ]
        }, req, res, statusCode, error || 'Unknown error');
    }
    function handle_page(page, req, res, status = 200, error = null) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const is_service_worker_index = req.path === '/service-worker-index.html';
            const build_info = get_build_info();
            res.setHeader('Content-Type', 'text/html');
            // preload main js and css
            // TODO detect other stuff we can preload like fonts?
            let preload_files = Array.isArray(build_info.assets.main) ? build_info.assets.main : [build_info.assets.main];
            if ((_a = build_info === null || build_info === void 0 ? void 0 : build_info.css) === null || _a === void 0 ? void 0 : _a.main) {
                preload_files = preload_files.concat((_b = build_info === null || build_info === void 0 ? void 0 : build_info.css) === null || _b === void 0 ? void 0 : _b.main);
            }
            let es6_preload = false;
            if (build_info.bundler === 'rollup') {
                es6_preload = true;
                const route = page.parts[page.parts.length - 1].file;
                const deps = build_info.dependencies[route];
                if (deps) {
                    preload_files = preload_files.concat(deps);
                }
            }
            else if (!error && !is_service_worker_index) {
                page.parts.forEach(part => {
                    if (!part)
                        return;
                    // using concat because it could be a string or an array. thanks webpack!
                    preload_files = preload_files.concat(build_info.assets[part.name]);
                });
            }
            const link = preload_files
                .filter((v, i, a) => a.indexOf(v) === i) // remove any duplicates
                .filter(file => file && !file.match(/\.map$/)) // exclude source maps
                .map((file) => {
                const as = /\.css$/.test(file) ? 'style' : 'script';
                const rel = es6_preload && as === 'script' ? 'modulepreload' : 'preload';
                return `<${req.baseUrl}/client/${file}>;rel="${rel}";as="${as}"`;
            })
                .join(', ');
            res.setHeader('Link', link);
            let session;
            try {
                session = yield session_getter(req, res);
            }
            catch (err) {
                return bail(res, err);
            }
            let redirect;
            let preload_error;
            const preload_context = {
                redirect: (statusCode, location) => {
                    if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
                        throw new Error('Conflicting redirects');
                    }
                    location = location.replace(/^\//g, ''); // leading slash (only)
                    redirect = { statusCode, location };
                },
                error: (statusCode, message) => {
                    preload_error = { statusCode, message };
                },
                fetch: (url, opts) => {
                    const protocol = req.socket.encrypted ? 'https' : 'http';
                    const parsed = new Url__default['default'].URL(url, `${protocol}://127.0.0.1:${process.env.PORT}${req.baseUrl ? req.baseUrl + '/' : ''}`);
                    opts = Object.assign({}, opts);
                    const include_credentials = (opts.credentials === 'include' ||
                        opts.credentials !== 'omit' && parsed.origin === `${protocol}://127.0.0.1:${process.env.PORT}`);
                    if (include_credentials) {
                        opts.headers = Object.assign({}, opts.headers);
                        const cookies = Object.assign({}, parse_1(req.headers.cookie || ''), parse_1(opts.headers.cookie || ''));
                        const set_cookie = res.getHeader('Set-Cookie');
                        (Array.isArray(set_cookie) ? set_cookie : [set_cookie]).forEach((s) => {
                            const m = /([^=]+)=([^;]+)/.exec(s);
                            if (m)
                                cookies[m[1]] = m[2];
                        });
                        const str = Object.keys(cookies)
                            .map(key => `${key}=${cookies[key]}`)
                            .join('; ');
                        opts.headers.cookie = str;
                        if (!opts.headers.authorization && req.headers.authorization) {
                            opts.headers.authorization = req.headers.authorization;
                        }
                    }
                    return fetch$1(parsed.href, opts);
                }
            };
            let preloaded;
            let match;
            let params;
            try {
                const root_preload = manifest.root_comp.preload || (() => { });
                const root_preloaded = root_preload.call(preload_context, {
                    host: req.headers.host,
                    path: req.path,
                    query: req.query,
                    params: {}
                }, session);
                match = error ? null : page.pattern.exec(req.path);
                let toPreload = [root_preloaded];
                if (!is_service_worker_index) {
                    toPreload = toPreload.concat(page.parts.map(part => {
                        if (!part)
                            return null;
                        // the deepest level is used below, to initialise the store
                        params = part.params ? part.params(match) : {};
                        return part.component.preload
                            ? part.component.preload.call(preload_context, {
                                host: req.headers.host,
                                path: req.path,
                                query: req.query,
                                params
                            }, session)
                            : {};
                    }));
                }
                preloaded = yield Promise.all(toPreload);
            }
            catch (err) {
                if (error) {
                    return bail(res, err);
                }
                preload_error = { statusCode: 500, message: err };
                preloaded = []; // appease TypeScript
            }
            try {
                if (redirect) {
                    const location = Url__default['default'].resolve((req.baseUrl || '') + '/', redirect.location);
                    res.statusCode = redirect.statusCode;
                    res.setHeader('Location', location);
                    res.end();
                    return;
                }
                if (preload_error) {
                    if (!error) {
                        handle_error(req, res, preload_error.statusCode, preload_error.message);
                    }
                    else {
                        bail(res, preload_error.message);
                    }
                    return;
                }
                const segments = req.path.split('/').filter(Boolean);
                // TODO make this less confusing
                const layout_segments = [segments[0]];
                let l = 1;
                page.parts.forEach((part, i) => {
                    layout_segments[l] = segments[i + 1];
                    if (!part)
                        return null;
                    l++;
                });
                if (error instanceof Error && error.stack) {
                    error.stack = sourcemap_stacktrace(error.stack);
                }
                const pageContext = {
                    host: req.headers.host,
                    path: req.path,
                    query: req.query,
                    params,
                    error: error
                        ? error instanceof Error
                            ? error
                            : { message: error, name: 'PreloadError' }
                        : null
                };
                const props = {
                    stores: {
                        page: {
                            subscribe: writable(pageContext).subscribe
                        },
                        preloading: {
                            subscribe: writable(null).subscribe
                        },
                        session: writable(session)
                    },
                    segments: layout_segments,
                    status: error ? status : 200,
                    error: pageContext.error,
                    level0: {
                        props: preloaded[0]
                    },
                    level1: {
                        segment: segments[0],
                        props: {}
                    }
                };
                if (!is_service_worker_index) {
                    let level_index = 1;
                    for (let i = 0; i < page.parts.length; i += 1) {
                        const part = page.parts[i];
                        if (!part)
                            continue;
                        props[`level${level_index++}`] = {
                            component: part.component.default,
                            props: preloaded[i + 1] || {},
                            segment: segments[i]
                        };
                    }
                }
                const { html, head, css } = App.render(props);
                const serialized = {
                    preloaded: `[${preloaded.map(data => try_serialize(data, err => {
                        console.error(`Failed to serialize preloaded data to transmit to the client at the /${segments.join('/')} route: ${err.message}`);
                        console.warn('The client will re-render over the server-rendered page fresh instead of continuing where it left off. See https://sapper.svelte.dev/docs#Return_value for more information');
                    })).join(',')}]`,
                    session: session && try_serialize(session, err => {
                        throw new Error(`Failed to serialize session data: ${err.message}`);
                    }),
                    error: error && serialize_error(props.error)
                };
                let script = `__SAPPER__={${[
                    error && `error:${serialized.error},status:${status}`,
                    `baseUrl:"${req.baseUrl}"`,
                    serialized.preloaded && `preloaded:${serialized.preloaded}`,
                    serialized.session && `session:${serialized.session}`
                ].filter(Boolean).join(',')}};`;
                if (has_service_worker) {
                    script += `if('serviceWorker' in navigator)navigator.serviceWorker.register('${req.baseUrl}/service-worker.js');`;
                }
                const file = [].concat(build_info.assets.main).filter(f => f && /\.js$/.test(f))[0];
                const main = `${req.baseUrl}/client/${file}`;
                // users can set a CSP nonce using res.locals.nonce
                const nonce_value = (res.locals && res.locals.nonce) ? res.locals.nonce : '';
                const nonce_attr = nonce_value ? ` nonce="${nonce_value}"` : '';
                if (build_info.bundler === 'rollup') {
                    if (build_info.legacy_assets) {
                        const legacy_main = `${req.baseUrl}/client/legacy/${build_info.legacy_assets.main}`;
                        script += `(function(){try{eval("async function x(){}");var main="${main}"}catch(e){main="${legacy_main}"};var s=document.createElement("script");try{new Function("if(0)import('')")();s.src=main;s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main",main);}document.head.appendChild(s);}());`;
                    }
                    else {
                        script += `var s=document.createElement("script");try{new Function("if(0)import('')")();s.src="${main}";s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main","${main}")}document.head.appendChild(s)`;
                    }
                }
                else {
                    script += `</script><script${nonce_attr} src="${main}" defer>`;
                }
                let styles;
                // TODO make this consistent across apps
                // TODO embed build_info in placeholder.ts
                if (build_info.css && build_info.css.main) {
                    const css_chunks = new Set(build_info.css.main);
                    page.parts.forEach(part => {
                        if (!part || !build_info.dependencies)
                            return;
                        const deps_for_part = build_info.dependencies[part.file];
                        if (deps_for_part) {
                            deps_for_part.filter(d => d.endsWith('.css')).forEach(chunk => {
                                css_chunks.add(chunk);
                            });
                        }
                    });
                    styles = Array.from(css_chunks)
                        .map(href => `<link rel="stylesheet" href="client/${href}">`)
                        .join('');
                }
                else {
                    styles = (css && css.code ? `<style${nonce_attr}>${css.code}</style>` : '');
                }
                const body = template()
                    .replace('%sapper.base%', () => `<base href="${req.baseUrl}/">`)
                    .replace('%sapper.scripts%', () => `<script${nonce_attr}>${script}</script>`)
                    .replace('%sapper.html%', () => html)
                    .replace('%sapper.head%', () => head)
                    .replace('%sapper.styles%', () => styles)
                    .replace(/%sapper\.cspnonce%/g, () => nonce_value);
                res.statusCode = status;
                res.end(body);
            }
            catch (err) {
                if (error) {
                    bail(res, err);
                }
                else {
                    handle_error(req, res, 500, err);
                }
            }
        });
    }
    return function find_route(req, res, next) {
        const path = req.path === '/service-worker-index.html' ? '/' : req.path;
        const page = pages.find(page => page.pattern.test(path));
        if (page) {
            handle_page(page, req, res);
        }
        else {
            handle_error(req, res, 404, 'Not found');
        }
    };
}
function read_template(dir = build_dir) {
    return fs__default['default'].readFileSync(`${dir}/template.html`, 'utf-8');
}
function try_serialize(data, fail) {
    try {
        return devalue(data);
    }
    catch (err) {
        if (fail)
            fail(err);
        return null;
    }
}
// Ensure we return something truthy so the client will not re-render the page over the error
function serialize_error(error) {
    if (!error)
        return null;
    let serialized = try_serialize(error);
    if (!serialized) {
        const { name, message, stack } = error;
        serialized = try_serialize({ name, message, stack });
    }
    if (!serialized) {
        serialized = '{}';
    }
    return serialized;
}

function middleware(opts = {}) {
    const { session, ignore } = opts;
    let emitted_basepath = false;
    return compose_handlers(ignore, [
        (req, res, next) => {
            if (req.baseUrl === undefined) {
                let originalUrl = req.originalUrl || req.url;
                if (req.url === '/' && originalUrl[originalUrl.length - 1] !== '/') {
                    originalUrl += '/';
                }
                req.baseUrl = originalUrl
                    ? originalUrl.slice(0, -req.url.length)
                    : '';
            }
            if (!emitted_basepath && process.send) {
                process.send({
                    __sapper__: true,
                    event: 'basepath',
                    basepath: req.baseUrl
                });
                emitted_basepath = true;
            }
            if (req.path === undefined) {
                req.path = req.url.replace(/\?.*/, '');
            }
            next();
        },
        fs__default['default'].existsSync(path__default['default'].join(build_dir, 'service-worker.js')) && serve({
            pathname: '/service-worker.js',
            cache_control: 'no-cache, no-store, must-revalidate'
        }),
        fs__default['default'].existsSync(path__default['default'].join(build_dir, 'service-worker.js.map')) && serve({
            pathname: '/service-worker.js.map',
            cache_control: 'no-cache, no-store, must-revalidate'
        }),
        serve({
            prefix: '/client/',
            cache_control:  'max-age=31536000, immutable'
        }),
        get_server_route_handler(manifest.server_routes),
        get_page_handler(manifest, session || noop$1)
    ].filter(Boolean));
}
function compose_handlers(ignore, handlers) {
    const total = handlers.length;
    function nth_handler(n, req, res, next) {
        if (n >= total) {
            return next();
        }
        handlers[n](req, res, () => nth_handler(n + 1, req, res, next));
    }
    return !ignore
        ? (req, res, next) => nth_handler(0, req, res, next)
        : (req, res, next) => {
            if (should_ignore(req.path, ignore)) {
                next();
            }
            else {
                nth_handler(0, req, res, next);
            }
        };
}
function should_ignore(uri, val) {
    if (Array.isArray(val))
        return val.some(x => should_ignore(uri, x));
    if (val instanceof RegExp)
        return val.test(uri);
    if (typeof val === 'function')
        return val(uri);
    return uri.startsWith(val.charCodeAt(0) === 47 ? val : `/${val}`);
}
function serve({ prefix, pathname, cache_control }) {
    const filter = pathname
        ? (req) => req.path === pathname
        : (req) => req.path.startsWith(prefix);
    const cache = new Map();
    const read =  (file) => (cache.has(file) ? cache : cache.set(file, fs__default['default'].readFileSync(path__default['default'].join(build_dir, file)))).get(file);
    return (req, res, next) => {
        if (filter(req)) {
            const type = lite.getType(req.path);
            try {
                const file = path__default['default'].posix.normalize(decodeURIComponent(req.path));
                const data = read(file);
                res.setHeader('Content-Type', type);
                res.setHeader('Cache-Control', cache_control);
                res.end(data);
            }
            catch (err) {
                if (err.code === 'ENOENT') {
                    next();
                }
                else {
                    console.error(err);
                    res.statusCode = 500;
                    res.end('an error occurred while reading a static file from disk');
                }
            }
        }
        else {
            next();
        }
    };
}
function noop$1() { }

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const url = dev ? '/' : 'webdesignninjas'; 

polka__default['default']() // You can also use Express
  .use(
    url,
    compression__default['default']({ threshold: 0 }),
    sirv__default['default']('static', { dev }),
    middleware()
  )
  .listen(PORT, err => {
    if (err) console.log('error', err);
  });
