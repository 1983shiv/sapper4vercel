import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, C as validate_each_argument, v as validate_slots, e as element, b as space, t as text, c as claim_element, f as children, g as detach_dev, h as claim_space, j as claim_text, k as attr_dev, l as add_location, m as insert_dev, n as append_dev, o as noop, p as create_component, q as claim_component, r as mount_component, u as transition_in, w as transition_out, x as destroy_component, D as destroy_each } from './client.b82389fb.js';
import { H as Heading } from './Heading.397f83d9.js';

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

/* src\components\home\Services.svelte generated by Svelte v3.29.4 */
const file = "src\\components\\home\\Services.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[0] = list[i].title;
	child_ctx[1] = list[i].svg;
	child_ctx[2] = list[i].desc;
	return child_ctx;
}

// (17:6) {#each services as { title, svg, desc }}
function create_each_block(ctx) {
	let div2;
	let div1;
	let div0;
	let raw_value = /*svg*/ ctx[1] + "";
	let t0;
	let h2;
	let t1_value = /*title*/ ctx[0] + "";
	let t1;
	let t2;
	let p;
	let t3_value = /*desc*/ ctx[2] + "";
	let t3;
	let t4;

	const block = {
		c: function create() {
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			t0 = space();
			h2 = element("h2");
			t1 = text(t1_value);
			t2 = space();
			p = element("p");
			t3 = text(t3_value);
			t4 = space();
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(div1_nodes);
			h2 = claim_element(div1_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, t1_value);
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			p = claim_element(div1_nodes, "P", { class: true });
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, t3_value);
			p_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t4 = claim_space(div2_nodes);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4");
			add_location(div0, file, 19, 12, 668);
			attr_dev(h2, "class", "text-lg text-gray-900 font-medium title-font mb-2");
			add_location(h2, file, 24, 12, 865);
			attr_dev(p, "class", "leading-relaxed text-justify");
			add_location(p, file, 27, 12, 983);
			attr_dev(div1, "class", "shadow p-6 rounded-lg");
			add_location(div1, file, 18, 10, 619);
			attr_dev(div2, "class", "xl:w-1/3 md:w-1/2 p-4 min-h-48");
			add_location(div2, file, 17, 8, 563);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div1);
			append_dev(div1, div0);
			div0.innerHTML = raw_value;
			append_dev(div1, t0);
			append_dev(div1, h2);
			append_dev(h2, t1);
			append_dev(div1, t2);
			append_dev(div1, p);
			append_dev(p, t3);
			append_dev(div2, t4);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(17:6) {#each services as { title, svg, desc }}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let section;
	let div1;
	let heading;
	let t;
	let div0;
	let current;

	heading = new Heading({
			props: {
				text: "Ninja Services",
				size: "text-4xl sm:text-5xl md:text-6xl",
				heading: "font-heading1 text-center mb-8",
				color: "text-pink-500"
			},
			$$inline: true
		});

	let each_value = services;
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			section = element("section");
			div1 = element("div");
			create_component(heading.$$.fragment);
			t = space();
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { id: true, class: true });
			var section_nodes = children(section);
			div1 = claim_element(section_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(heading.$$.fragment, div1_nodes);
			t = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div0_nodes);
			}

			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 text-center");
			add_location(div0, file, 13, 4, 402);
			attr_dev(div1, "class", "container px-5 py-24 mx-auto");
			add_location(div1, file, 6, 2, 179);
			attr_dev(section, "id", "services");
			attr_dev(section, "class", "text-gray-600 body-font svelte-7cgrzd");
			add_location(section, file, 5, 0, 120);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div1);
			mount_component(heading, div1, null);
			append_dev(div1, t);
			append_dev(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*services*/ 0) {
				each_value = services;
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div0, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(heading.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(heading.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(heading);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Services", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Services> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ services, Heading });
	return [];
}

class Services extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Services",
			options,
			id: create_fragment.name
		});
	}
}

export { Services as S };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZXMuOTgwYmNlZDAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlcy5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2hvbWUvU2VydmljZXMuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXJ2aWNlcyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJVSSBEZXNpZ24gYW5kIGRldmVsb3BtZW50XCIsXHJcbiAgICBzdmc6IGA8c3ZnIGNsYXNzPVwiaC04IHctOCB0ZXh0LXBpbmstNTAwXCIgIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj4gIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiLz4gIDxyZWN0IHg9XCI0XCIgeT1cIjRcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiNFwiIHJ4PVwiMVwiIC8+ICA8cmVjdCB4PVwiNFwiIHk9XCIxMlwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjhcIiByeD1cIjFcIiAvPiAgPGxpbmUgeDE9XCIxNFwiIHkxPVwiMTJcIiB4Mj1cIjIwXCIgeTI9XCIxMlwiIC8+ICA8bGluZSB4MT1cIjE0XCIgeTE9XCIxNlwiIHgyPVwiMjBcIiB5Mj1cIjE2XCIgLz4gIDxsaW5lIHgxPVwiMTRcIiB5MT1cIjIwXCIgeDI9XCIyMFwiIHkyPVwiMjBcIiAvPjwvc3ZnPmAsXHJcbiAgICBkZXNjOiBcIlVJIERlc2lnbiBhbmQgRnJvbnQtZW5kIGRlc2lnbi9kZXZlbG9wbWVudCB1c2luZyBvcGVuIHNvdXJjZSBmcm9udGVuZCBmcmFtZXdvcmsgZm9yIGNyZWF0aW5nIHJpY2gsIG9wdGltaXplZCB3ZWJzaXRlcyBmb3IgZGVsaXZlcmluZyB0aGVtIG9uIGEgYmxhemluZyBmYXN0IHVzZXIgZXhwZXJpZW5jZSBsaWtlIE5leHRqcywgR2F0c2J5anMsIE51eHRqcyBhbmQgU2FwcGVyIChTdmVsdGVqcyBGcmFtZXdvcmspLlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJXZWJzaXRlIERlc2lnbiBhbmQgRGV2ZWxvcG1lbnRcIixcclxuICAgIHN2ZzogYDxzdmcgY2xhc3M9XCJoLTggdy04IHRleHQtcGluay01MDBcIiAgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPiAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIvPiAgPHJlY3QgeD1cIjRcIiB5PVwiNFwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHJ4PVwiMlwiIC8+ICA8Y2lyY2xlIGN4PVwiOVwiIGN5PVwiMTJcIiByPVwiLjVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz4gIDxjaXJjbGUgY3g9XCIxNVwiIGN5PVwiMTJcIiByPVwiLjVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz48L3N2Zz5gLFxyXG4gICAgZGVzYzogXCJXZSBwcm92aWRlIGN1dHRpbmctZWRnZSwgVW5pcXVlLCBIaWdoIHF1YWxpdHksIEZ1bGx5IHdvcmtpbmcgV2Vic2l0ZSBkZXNpZ24gYW5kICBkZXZlbG9wbWVudCBzZXJ2aWNlcyB0byBoZWxwIHlvdXIgYnVzaW5lc3Mgb3BlcmF0aW9uYWwsIG1vcmUgZWZmaWNpZW50LCBjb2xsYWJvcmF0aXZlIGFuZCBtYW5hZ2VhYmxlLiBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiZUNvbW1lcmNlIFdlYnNpdGUgRGVzaWduIGFuZCBEZXZlbG9wbWVudFwiLFxyXG4gICAgc3ZnOiBgPHN2ZyBjbGFzcz1cImgtOCB3LTggdGV4dC1waW5rLTUwMFwiICBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj48cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk0zIDNoMmwuNCAyTTcgMTNoMTBsNC04SDUuNE03IDEzTDUuNCA1TTcgMTNsLTIuMjkzIDIuMjkzYy0uNjMuNjMtLjE4NCAxLjcwNy43MDcgMS43MDdIMTdtMCAwYTIgMiAwIDEwMCA0IDIgMiAwIDAwMC00em0tOCAyYTIgMiAwIDExLTQgMCAyIDIgMCAwMTQgMHpcIi8+PC9zdmc+YCxcclxuICAgIGRlc2M6IFwiV2UgRGVzaWduIEJlc3Bva2UsIGZ1bGx5IGZlYXR1cmVkLCBSZXNwb25zaXZlIGVDb21tZXJjZSB3ZWJzaXRlIHVzaW5nIE1hZ2VudG8sIFNob3BpZnksIFByZXN0YXNob3AgYW5kIFdvb2NvbW1lcmNlIENNUyBmb3IgYWxsIHR5cGUgb2YgYnVzaW5lc3Mgb3duZXJzIHdobyB3YW50IHRvIGdldCBhbiBvbmxpbmUgc2hvcC4gV2UgZXhwZXJ0aXNlIGluIHRoZXNlIENNUyB0byBjdXN0b21pemUgYW5kIGNyZWF0ZSBmdW5jdGlvbmFsIGV4dGVuc2lvbiBhLW5kIHBsdWdpbnMgdG8gbWVldCB5b3VyIGJ1c2luZXNzIHJlcXVpcmVtZW50LlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb2JpbGUgQXBwIGRlc2lnbi9EZXZlbG9wbWVudFwiLFxyXG4gICAgc3ZnOiBgPHN2ZyBjbGFzcz1cImgtOCB3LTggdGV4dC1waW5rLTUwMFwiICB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+ICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIi8+ICA8cmVjdCB4PVwiN1wiIHk9XCI0XCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjE2XCIgcng9XCIxXCIgLz4gIDxsaW5lIHgxPVwiMTFcIiB5MT1cIjVcIiB4Mj1cIjEzXCIgeTI9XCI1XCIgLz4gIDxsaW5lIHgxPVwiMTJcIiB5MT1cIjE3XCIgeDI9XCIxMlwiIHkyPVwiMTcuMDFcIiAvPjwvc3ZnPmAsXHJcbiAgICBkZXNjOiBcIldlIHByb3ZpZGUgYmVhdXRpZnVsIGFuZCB3ZWxsIHRob3VnaHQsIGhpZ2gtcGVyZm9ybWFuY2UsIGN1dHRpbmctZWRnZSBhbmQgQmVzcG9rZSBtb2JpbGUgYXBwcyBkZXNpZ24gYW5kIGRldmVsb3BtZW50IHRoYXQgVGFrZSB5b3VyIGJ1c2luZXNzIGlkZWFzIHRvIGEgbmV3IGxldmVsLiBXZSBleHBlcnRpc2UgaW4gQW5kcm9pZCBhbmQgSU9TIGJhc2VkIGRlc2lnbiBhbmQgZGV2ZWxvcG1lbnQgd2l0aCB0aGUgYmFja2VuZCBhcGkgZGVzaWduIGFuZCBkZXZlbG9wbWVudGYgb3IgdGhlIHNhbWUsIFdlIGFsc28gZG8gSHlicmlkIHRlY2hub2xvZ3kgZGV2ZWxvcG1lbnQgbGlrZSBjb2RpbmcgdGhlIEh5YnJpZCBBcHAgdXNpbmcgUmVhY3QtTmF0aXZlIG9yIE5hdGl2ZS1TY3JpcHQsIHNvIG9uZSBjb2RlIGJhc2Ugd2l0aCBtdWx0aXBsZSBkZXZpY2UgYW5kIE9TLlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJCYWNrZW5kIERldmVsb3BtZW50IChSZXN0IG9yIEdyYXBoUUwgRW5kcG9pbnRzKVwiLFxyXG4gICAgc3ZnOiBgPHN2ZyBjbGFzcz1cImgtOCB3LTggdGV4dC1waW5rLTUwMFwiICB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+ICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIi8+ICAgIDxwYXRoIGQ9XCJNMTAgNGwyIDFsMiAtMW0tMiAtMnY2LjVsMyAxLjcyXCIgLz4gICAgPHBhdGggZD1cIk0xMCA0bDIgMWwyIC0xbS0yIC0ydjYuNWwzIDEuNzJcIiB0cmFuc2Zvcm09XCJyb3RhdGUoNjAgMTIgMTIpXCIgLz4gICAgPHBhdGggZD1cIk0xMCA0bDIgMWwyIC0xbS0yIC0ydjYuNWwzIDEuNzJcIiB0cmFuc2Zvcm09XCJyb3RhdGUoMTIwIDEyIDEyKVwiIC8+ICAgIDxwYXRoIGQ9XCJNMTAgNGwyIDFsMiAtMW0tMiAtMnY2LjVsMyAxLjcyXCIgdHJhbnNmb3JtPVwicm90YXRlKDE4MCAxMiAxMilcIiAvPiAgICA8cGF0aCBkPVwiTTEwIDRsMiAxbDIgLTFtLTIgLTJ2Ni41bDMgMS43MlwiIHRyYW5zZm9ybT1cInJvdGF0ZSgyNDAgMTIgMTIpXCIgLz4gICAgPHBhdGggZD1cIk0xMCA0bDIgMWwyIC0xbS0yIC0ydjYuNWwzIDEuNzJcIiB0cmFuc2Zvcm09XCJyb3RhdGUoMzAwIDEyIDEyKVwiIC8+ICA8L3N2Zz5gLFxyXG4gICAgZGVzYzogXCJXZSBkZXZlbG9wIGNvbXBsZXRlbHkgc2VjdXJlLCBoaWdoLXBlcmZvcm1hbmNlIGFuZCBzY2FsYWJsZSBBUEkgZW5kcG9pbnRzIHVzaW5nIExhcmF2ZWwgZnJhbWV3b3JrIG9yIE5vZGUuanMvRXhwcmVzc2pzIHRlY2hub2xvZ3kgKHdpdGggTW9uZ29kYiwgUG9zdGdyZVNRTCwgTXlTUUwsIGZpcmViYXNlIGV0Yykgd2hpY2ggaGFuZGxlIGEgSlNPTi9YTUwgZGF0YSBiZXR3ZWVuIHlvdXIgc2VydmVyIGFuZCBBcHBsaWNhdGlvbi4gV2UgY2FuIHVzZSBXb3JkUHJlc3MvTWFnZW50by9TaG9waWZ5L1ByZXN0YXNob3AvT2N0b2JlckNNUyBhcyBiYWNrZW5kIGFzIHdlbGwgd2hlcmUgZnJvbnRlbmQgd2lsbCBiZSBkZXNpZ25lZCB1c2luZyBhbnkgb2Ygb3BlbiBzb3VyY2UgZnJvbnQtZW5kIGZyYW1ld29yay5cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiU0VPICYgU0VNIENvbnN1bHRhbnRhbmN5XCIsXHJcbiAgICBzdmc6IGA8c3ZnIGNsYXNzPVwiaC04IHctOCB0ZXh0LXBpbmstNTAwXCIgIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj4gIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiLz4gIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiOVwiIC8+ICA8bGluZSB4MT1cIjEyXCIgeTE9XCIzXCIgeDI9XCIxMlwiIHkyPVwiN1wiIC8+ICA8bGluZSB4MT1cIjEyXCIgeTE9XCIyMVwiIHgyPVwiMTJcIiB5Mj1cIjE4XCIgLz4gIDxsaW5lIHgxPVwiM1wiIHkxPVwiMTJcIiB4Mj1cIjdcIiB5Mj1cIjEyXCIgLz4gIDxsaW5lIHgxPVwiMjFcIiB5MT1cIjEyXCIgeDI9XCIxOFwiIHkyPVwiMTJcIiAvPiAgPGxpbmUgeDE9XCIxMlwiIHkxPVwiMTJcIiB4Mj1cIjEyXCIgeTI9XCIxMi4wMVwiIC8+PC9zdmc+YCxcclxuICAgIGRlc2M6IFwiV2Ugd2lsbCBtYWtlIHlvdXIgd2Vic2l0ZSBzZWFyY2ggZW5naW5lIGZyaWVuZGx5IGFuZCBmdWxseSBvcHRpbWl6ZSB5b3VyIGNvbXBsZXRlIHdlYnNpdGUgdXNpbmcgYWR2YW5jZWQgd2hpdGUgaGF0IFNFTyBtZXRob2RvbG9neS4gT3VyIHNlcnZpY2VzIGluY2x1ZGUgY29tcGxldGUgV2Vic2l0ZSBTRU8gSGVhbHRoIENoZWNrLCBPbiBQYWdlIE9wdGltaXphdGlvbiwgU29jaWFsIE1lZGlhIE1hcmtldGluZywgTG9jYWwgU0VPIE9wdGltaXphdGlvbiBhbmQgQ29udGVudCBNYXJrZXRpbmcgJiBMaW5rIEJ1aWxkaW5nLlwiXHJcbiAgfSxcclxuXTsiLCI8c2NyaXB0PlxyXG4gIGltcG9ydCB7IHNlcnZpY2VzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzXCI7XHJcbiAgaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4uL2NvbW1vbi9IZWFkaW5nLnN2ZWx0ZVwiO1xyXG48L3NjcmlwdD5cclxuXHJcbjxzZWN0aW9uIGlkPVwic2VydmljZXNcIiBjbGFzcz1cInRleHQtZ3JheS02MDAgYm9keS1mb250XCI+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBweC01IHB5LTI0IG14LWF1dG9cIj5cclxuICAgIDxIZWFkaW5nXHJcbiAgICAgIHRleHQ9XCJOaW5qYSBTZXJ2aWNlc1wiXHJcbiAgICAgIHNpemU9XCJ0ZXh0LTR4bCBzbTp0ZXh0LTV4bCBtZDp0ZXh0LTZ4bFwiXHJcbiAgICAgIGhlYWRpbmc9XCJmb250LWhlYWRpbmcxIHRleHQtY2VudGVyIG1iLThcIlxyXG4gICAgICBjb2xvcj1cInRleHQtcGluay01MDBcIlxyXG4gICAgLz5cclxuICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCBzbTotbS00IC1teC00IC1tYi0xMCAtbXQtNCBtZDpzcGFjZS15LTAgc3BhY2UteS02IHRleHQtY2VudGVyXCJcclxuICAgID5cclxuICAgICAgeyNlYWNoIHNlcnZpY2VzIGFzIHsgdGl0bGUsIHN2ZywgZGVzYyB9fVxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ4bDp3LTEvMyBtZDp3LTEvMiBwLTQgbWluLWgtNDhcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGFkb3cgcC02IHJvdW5kZWQtbGdcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwidy0xMCBoLTEwIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctcGluay0xMDAgdGV4dC1waW5rLTUwMCBtYi00XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtAaHRtbCBzdmd9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LWxnIHRleHQtZ3JheS05MDAgZm9udC1tZWRpdW0gdGl0bGUtZm9udCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImxlYWRpbmctcmVsYXhlZCB0ZXh0LWp1c3RpZnlcIj5cclxuICAgICAgICAgICAgICB7ZGVzY31cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIHsvZWFjaH1cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3NlY3Rpb24+XHJcblxyXG48c3R5bGU+XHJcbiAgI3NlcnZpY2VzIHtcclxuICAgIC8qIGhlaWdodDogOTh2aDsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byByaWdodCBib3R0b20sXHJcbiAgICAgICAgcmdiYSgyNDcsIDM5LCAxNjAsIDAuOTk0KSxcclxuICAgICAgICByZ2JhKDI0MywgMTc5LCAyMTcsIDAuOTYpXHJcbiAgICAgICksXHJcbiAgICAgIHVybChcIi4uLy4uLy4uL3N0YXRpYy9UYWllcmkucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuICAgIC8qIFNvdXJjZSA6IGh0dHBzOi8vYmVubmV0dGZlZWx5LmNvbS9jbGlwcHkvICovXHJcbiAgICAvKiB0b3AgbGVmdCh4IHkpLCB0b3AgcmlnaHQgKHggeSksIGJvdHRvbSByaWdodCAoeCB5KSwgYm90dG9tIGxlZnQgKHggeSkqL1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDkwJSwgMCAxMDAlKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICB9XHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBTyxNQUFNLFFBQVEsR0FBRztBQUN4QixFQUFFO0FBQ0YsSUFBSSxLQUFLLEVBQUUsMkJBQTJCO0FBQ3RDLElBQUksR0FBRyxFQUFFLENBQUMsb2NBQW9jLENBQUM7QUFDL2MsSUFBSSxJQUFJLEVBQUUsNE9BQTRPO0FBQ3RQLEdBQUc7QUFDSCxFQUFFO0FBQ0YsSUFBSSxLQUFLLEVBQUUsZ0NBQWdDO0FBQzNDLElBQUksR0FBRyxFQUFFLENBQUMsaVlBQWlZLENBQUM7QUFDNVksSUFBSSxJQUFJLEVBQUUseUxBQXlMO0FBQ25NLEdBQUc7QUFDSCxFQUFFO0FBQ0YsSUFBSSxLQUFLLEVBQUUsMENBQTBDO0FBQ3JELElBQUksR0FBRyxFQUFFLENBQUMsZ1VBQWdVLENBQUM7QUFDM1UsSUFBSSxJQUFJLEVBQUUsK1NBQStTO0FBQ3pULEdBQUc7QUFDSCxFQUFFO0FBQ0YsSUFBSSxLQUFLLEVBQUUsK0JBQStCO0FBQzFDLElBQUksR0FBRyxFQUFFLENBQUMseVdBQXlXLENBQUM7QUFDcFgsSUFBSSxJQUFJLEVBQUUsa2JBQWtiO0FBQzViLEdBQUc7QUFDSCxFQUFFO0FBQ0YsSUFBSSxLQUFLLEVBQUUsaURBQWlEO0FBQzVELElBQUksR0FBRyxFQUFFLENBQUMsdXBCQUF1cEIsQ0FBQztBQUNscUIsSUFBSSxJQUFJLEVBQUUsaVpBQWlaO0FBQzNaLEdBQUc7QUFDSCxFQUFFO0FBQ0YsSUFBSSxLQUFLLEVBQUUsMEJBQTBCO0FBQ3JDLElBQUksR0FBRyxFQUFFLENBQUMsbWRBQW1kLENBQUM7QUFDOWQsSUFBSSxJQUFJLEVBQUUseVNBQXlTO0FBQ25ULEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJDVG9CLEdBQUc7OzswQkFHVCxHQUFLOzs7O3lCQUdMLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQVpOLFFBQVE7Ozs7Z0NBQWIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQkFBQyxRQUFROzs7OytCQUFiLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
