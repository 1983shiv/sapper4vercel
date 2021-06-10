import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, G as create_slot, v as validate_slots, e as element, c as claim_element, f as children, g as detach_dev, k as attr_dev, l as add_location, m as insert_dev, H as update_slot, u as transition_in, w as transition_out, C as validate_each_argument, p as create_component, b as space, q as claim_component, h as claim_space, n as append_dev, r as mount_component, x as destroy_component, t as text, j as claim_text, I as toggle_class, J as listen_dev, y as empty, D as destroy_each, z as set_style, o as noop } from './client.260c2afc.js';
import { H as Heading } from './Heading.a0ef00fe.js';

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
				keyword: "Informational",
				descr: ""
		}, 
		{
				name: "www.bannerbuzz.co.uk",
				url: "portfolio/bannerbuzz-co-uk.jpg",
				keyword: "Custom Dev",
				descr: ""
		}, 
		{
				name: "www.latofieldsestate.com",
				url: "portfolio/latofieldsestate.jpg",
				keyword: "eCommerce",
				descr: ""
		},
	];

const categories = ["eCommerce", "Informational", "Custom Dev"];

/* src\components\portfolio\ButtonContainer.svelte generated by Svelte v3.29.4 */

const file = "src\\components\\portfolio\\ButtonContainer.svelte";

function create_fragment(ctx) {
	let div;
	let current;
	const default_slot_template = /*#slots*/ ctx[1].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[0], null);

	const block = {
		c: function create() {
			div = element("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { id: true, class: true });
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "id", "myBtnContainer");
			attr_dev(div, "class", "svelte-wbc52w");
			add_location(div, file, 7, 0, 61);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 1) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[0], dirty, null, null);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (default_slot) default_slot.d(detaching);
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
	validate_slots("ButtonContainer", slots, ['default']);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ButtonContainer> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
	};

	return [$$scope, slots];
}

class ButtonContainer extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ButtonContainer",
			options,
			id: create_fragment.name
		});
	}
}

/* src\components\portfolio\Gallery.svelte generated by Svelte v3.29.4 */

const file$1 = "src\\components\\portfolio\\Gallery.svelte";

function create_fragment$1(ctx) {
	let div;
	let current;
	const default_slot_template = /*#slots*/ ctx[1].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[0], null);

	const block = {
		c: function create() {
			div = element("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "row svelte-1wlxmmf");
			add_location(div, file$1, 9, 0, 77);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 1) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[0], dirty, null, null);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Gallery", slots, ['default']);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Gallery> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
	};

	return [$$scope, slots];
}

class Gallery extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Gallery",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src\components\portfolio\Portfoliogaller.svelte generated by Svelte v3.29.4 */
const file$2 = "src\\components\\portfolio\\Portfoliogaller.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i].name;
	child_ctx[3] = list[i].url;
	child_ctx[4] = list[i].keyword;
	child_ctx[5] = list[i].descr;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
	return child_ctx;
}

// (24:4) {#each categories as category}
function create_each_block_1(ctx) {
	let button;
	let t0_value = /*category*/ ctx[8] + "";
	let t0;
	let t1;
	let button_data_name_value;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			t0 = text(t0_value);
			t1 = space();
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { class: true, "data-name": true });
			var button_nodes = children(button);
			t0 = claim_text(button_nodes, t0_value);
			t1 = claim_space(button_nodes);
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "btn svelte-12mssip");
			attr_dev(button, "data-name", button_data_name_value = /*category*/ ctx[8]);
			toggle_class(button, "active", /*selected*/ ctx[0] === /*category*/ ctx[8]);
			add_location(button, file$2, 24, 6, 639);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t0);
			append_dev(button, t1);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*filterSelection*/ ctx[1], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*selected, categories*/ 1) {
				toggle_class(button, "active", /*selected*/ ctx[0] === /*category*/ ctx[8]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(24:4) {#each categories as category}",
		ctx
	});

	return block;
}

// (23:2) <ButtonContainer>
function create_default_slot_1(ctx) {
	let each_1_anchor;
	let each_value_1 = categories;
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*categories, selected, filterSelection*/ 3) {
				each_value_1 = categories;
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}
		},
		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(23:2) <ButtonContainer>",
		ctx
	});

	return block;
}

// (48:6) {:else}
function create_else_block(ctx) {
	let div1;
	let div0;
	let img;
	let img_src_value;
	let img_alt_value;
	let t0;
	let a;
	let t1_value = /*name*/ ctx[2] + "";
	let t1;
	let a_href_value;
	let a_alt_value;
	let t2;
	let p;
	let t3_value = /*descr*/ ctx[5] + "";
	let t3;
	let t4;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			img = element("img");
			t0 = space();
			a = element("a");
			t1 = text(t1_value);
			t2 = space();
			p = element("p");
			t3 = text(t3_value);
			t4 = space();
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			img = claim_element(div0_nodes, "IMG", {
				src: true,
				alt: true,
				style: true,
				class: true
			});

			t0 = claim_space(div0_nodes);
			a = claim_element(div0_nodes, "A", { href: true, alt: true, class: true });
			var a_nodes = children(a);
			t1 = claim_text(a_nodes, t1_value);
			a_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, t3_value);
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*url*/ ctx[3])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*name*/ ctx[2]);
			set_style(img, "width", "100%");
			attr_dev(img, "class", "svelte-12mssip");
			add_location(img, file$2, 50, 12, 1377);
			attr_dev(a, "href", a_href_value = /*name*/ ctx[2]);
			attr_dev(a, "alt", a_alt_value = /*name*/ ctx[2]);
			attr_dev(a, "class", "btn svelte-12mssip");
			add_location(a, file$2, 51, 12, 1438);
			attr_dev(p, "class", "svelte-12mssip");
			add_location(p, file$2, 52, 12, 1501);
			attr_dev(div0, "class", "content svelte-12mssip");
			add_location(div0, file$2, 49, 10, 1342);
			attr_dev(div1, "class", "column svelte-12mssip");
			toggle_class(div1, "show", /*keyword*/ ctx[4] === /*selected*/ ctx[0]);
			add_location(div1, file$2, 48, 8, 1276);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, img);
			append_dev(div0, t0);
			append_dev(div0, a);
			append_dev(a, t1);
			append_dev(div0, t2);
			append_dev(div0, p);
			append_dev(p, t3);
			append_dev(div1, t4);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*images, selected*/ 1) {
				toggle_class(div1, "show", /*keyword*/ ctx[4] === /*selected*/ ctx[0]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(48:6) {:else}",
		ctx
	});

	return block;
}

// (40:6) {#if selected === "all"}
function create_if_block(ctx) {
	let div1;
	let div0;
	let img;
	let img_src_value;
	let img_alt_value;
	let t0;
	let a;
	let t1_value = /*name*/ ctx[2] + "";
	let t1;
	let a_href_value;
	let a_alt_value;
	let t2;
	let p;
	let t3_value = /*descr*/ ctx[5] + "";
	let t3;
	let t4;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			img = element("img");
			t0 = space();
			a = element("a");
			t1 = text(t1_value);
			t2 = space();
			p = element("p");
			t3 = text(t3_value);
			t4 = space();
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			img = claim_element(div0_nodes, "IMG", {
				src: true,
				alt: true,
				style: true,
				class: true
			});

			t0 = claim_space(div0_nodes);
			a = claim_element(div0_nodes, "A", { href: true, alt: true, class: true });
			var a_nodes = children(a);
			t1 = claim_text(a_nodes, t1_value);
			a_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, t3_value);
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*url*/ ctx[3])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*name*/ ctx[2]);
			set_style(img, "width", "100%");
			attr_dev(img, "class", "svelte-12mssip");
			add_location(img, file$2, 42, 12, 1079);
			attr_dev(a, "href", a_href_value = /*name*/ ctx[2]);
			attr_dev(a, "alt", a_alt_value = /*name*/ ctx[2]);
			attr_dev(a, "class", "btn svelte-12mssip");
			add_location(a, file$2, 43, 12, 1140);
			attr_dev(p, "class", "svelte-12mssip");
			add_location(p, file$2, 44, 12, 1203);
			attr_dev(div0, "class", "content svelte-12mssip");
			add_location(div0, file$2, 41, 10, 1044);
			attr_dev(div1, "class", "show column svelte-12mssip");
			add_location(div1, file$2, 40, 8, 1007);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, img);
			append_dev(div0, t0);
			append_dev(div0, a);
			append_dev(a, t1);
			append_dev(div0, t2);
			append_dev(div0, p);
			append_dev(p, t3);
			append_dev(div1, t4);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(40:6) {#if selected === \\\"all\\\"}",
		ctx
	});

	return block;
}

// (39:4) {#each images as { name, url, keyword, descr }}
function create_each_block(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*selected*/ ctx[0] === "all") return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		d: function destroy(detaching) {
			if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(39:4) {#each images as { name, url, keyword, descr }}",
		ctx
	});

	return block;
}

// (38:2) <Gallery>
function create_default_slot(ctx) {
	let each_1_anchor;
	let each_value = images;
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*images, selected*/ 1) {
				each_value = images;
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(38:2) <Gallery>",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let main;
	let div;
	let heading;
	let t0;
	let buttoncontainer;
	let t1;
	let gallery;
	let current;

	heading = new Heading({
			props: {
				text: "Portfolio",
				size: "text-4xl sm:text-5xl md:text-6xl",
				heading: "font-heading1 border-b-2",
				color: "text-pink-500"
			},
			$$inline: true
		});

	buttoncontainer = new ButtonContainer({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	gallery = new Gallery({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			main = element("main");
			div = element("div");
			create_component(heading.$$.fragment);
			t0 = space();
			create_component(buttoncontainer.$$.fragment);
			t1 = space();
			create_component(gallery.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			div = claim_element(main_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(heading.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			t0 = claim_space(main_nodes);
			claim_component(buttoncontainer.$$.fragment, main_nodes);
			t1 = claim_space(main_nodes);
			claim_component(gallery.$$.fragment, main_nodes);
			main_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "my-10");
			add_location(div, file$2, 14, 2, 381);
			attr_dev(main, "class", "svelte-12mssip");
			add_location(main, file$2, 13, 0, 371);
		},
		m: function mount(target, anchor) {
			insert_dev(target, main, anchor);
			append_dev(main, div);
			mount_component(heading, div, null);
			append_dev(main, t0);
			mount_component(buttoncontainer, main, null);
			append_dev(main, t1);
			mount_component(gallery, main, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const buttoncontainer_changes = {};

			if (dirty & /*$$scope, selected*/ 2049) {
				buttoncontainer_changes.$$scope = { dirty, ctx };
			}

			buttoncontainer.$set(buttoncontainer_changes);
			const gallery_changes = {};

			if (dirty & /*$$scope, selected*/ 2049) {
				gallery_changes.$$scope = { dirty, ctx };
			}

			gallery.$set(gallery_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(heading.$$.fragment, local);
			transition_in(buttoncontainer.$$.fragment, local);
			transition_in(gallery.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(heading.$$.fragment, local);
			transition_out(buttoncontainer.$$.fragment, local);
			transition_out(gallery.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(main);
			destroy_component(heading);
			destroy_component(buttoncontainer);
			destroy_component(gallery);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Portfoliogaller", slots, []);
	let selected = "eCommerce";
	const filterSelection = e => $$invalidate(0, selected = e.target.dataset.name);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Portfoliogaller> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		images,
		categories,
		Heading,
		ButtonContainer,
		Gallery,
		selected,
		filterSelection
	});

	$$self.$inject_state = $$props => {
		if ("selected" in $$props) $$invalidate(0, selected = $$props.selected);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [selected, filterSelection];
}

class Portfoliogaller extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Portfoliogaller",
			options,
			id: create_fragment$2.name
		});
	}
}

/* src\routes\case-studies.svelte generated by Svelte v3.29.4 */
const file$3 = "src\\routes\\case-studies.svelte";

function create_fragment$3(ctx) {
	let section;
	let div1;
	let div0;
	let portfoliogaller;
	let current;
	portfoliogaller = new Portfoliogaller({ $$inline: true });

	const block = {
		c: function create() {
			section = element("section");
			div1 = element("div");
			div0 = element("div");
			create_component(portfoliogaller.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div1 = claim_element(section_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(portfoliogaller.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "flex flex-wrap m-12");
			add_location(div0, file$3, 6, 4, 213);
			attr_dev(div1, "class", "container px-5 py-24 mx-auto");
			add_location(div1, file$3, 5, 2, 165);
			attr_dev(section, "class", "text-gray-600 body-font overflow-hidden");
			add_location(section, file$3, 4, 0, 104);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div1);
			append_dev(div1, div0);
			mount_component(portfoliogaller, div0, null);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(portfoliogaller.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(portfoliogaller.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(portfoliogaller);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$3.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$3($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Case_studies", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Case_studies> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Portfoliogaller });
	return [];
}

class Case_studies extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Case_studies",
			options,
			id: create_fragment$3.name
		});
	}
}

export default Case_studies;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZS1zdHVkaWVzLjkyYTQwN2U3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wb3J0Zm9saW8vaW1nRGF0YS5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BvcnRmb2xpby9Qb3J0Zm9saW9nYWxsZXIuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbWFnZXMgPSBbIFxuXHRcdHtcblx0XHRcdFx0bmFtZTogXCJ3d3cuemVlYW5kY28uY28udWtcIixcblx0XHRcdFx0dXJsOiBcInBvcnRmb2xpby96ZWVhbmRjby1jby11ay5qcGdcIixcblx0XHRcdFx0a2V5d29yZDogXCJlQ29tbWVyY2VcIixcblx0XHRcdFx0ZGVzY3I6IFwiXCJcblx0XHR9LCBcblx0XHR7XG5cdFx0XHRcdG5hbWU6IFwid3d3LmJhc2ljbGlmZS5jb21cIixcblx0XHRcdFx0dXJsOiBcInBvcnRmb2xpby9iYXNpY3NsaWZlLmpwZ1wiLFxuXHRcdFx0XHRrZXl3b3JkOiBcImVDb21tZXJjZVwiLFxuXHRcdFx0XHRkZXNjcjogXCJcIlxuXHRcdH0sIFxuXHRcdHtcblx0XHRcdFx0bmFtZTogXCJ3d3cubHlubmt3YWduZXIuY29tXCIsXG5cdFx0XHRcdHVybDogXCJwb3J0Zm9saW8vbHlubmt3YWduZXIuanBnXCIsXG5cdFx0XHRcdGtleXdvcmQ6IFwiSW5mb3JtYXRpb25hbFwiLFxuXHRcdFx0XHRkZXNjcjogXCJcIlxuXHRcdH0sIFxuXHRcdHtcblx0XHRcdFx0bmFtZTogXCJ3d3cuc21hcnRoZWFydHdvcmtzaG9wcy5jby51a1wiLFxuXHRcdFx0XHR1cmw6IFwicG9ydGZvbGlvL3NtYXJ0aGVhcnR3b3Jrc2hvcHMtY28tdWsuanBnXCIsXG5cdFx0XHRcdGtleXdvcmQ6IFwiSW5mb3JtYXRpb25hbFwiLFxuXHRcdFx0XHRkZXNjcjogXCJcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XHRuYW1lOiBcInd3dy5hZGFtc3dlZGRpbmdwaG90b2dyYXBoeS5jby51a1wiLFxuXHRcdFx0XHR1cmw6IFwicG9ydGZvbGlvL2FkYW1zd2VkZGluZ3Bob3RvZ3JhcGh5LmpwZ1wiLFxuXHRcdFx0XHRrZXl3b3JkOiBcIkluZm9ybWF0aW9uYWxcIixcblx0XHRcdFx0ZGVzY3I6IFwiXCJcblx0XHR9LCBcblx0XHR7XG5cdFx0XHRcdG5hbWU6IFwid3d3LmFyaWFjaGFpcnMuY29tXCIsXG5cdFx0XHRcdHVybDogXCJwb3J0Zm9saW8vYXJpYWNoYWlycy5qcGdcIixcblx0XHRcdFx0a2V5d29yZDogXCJlQ29tbWVyY2VcIixcblx0XHRcdFx0ZGVzY3I6IFwiXCJcblx0XHR9LCBcblx0XHR7XG5cdFx0XHRcdG5hbWU6IFwid3d3LmF6bmV1cm8uY29tXCIsXG5cdFx0XHRcdHVybDogXCJwb3J0Zm9saW8vYXpuZXVyby5qcGdcIixcblx0XHRcdFx0a2V5d29yZDogXCJJbmZvcm1hdGlvbmFsXCIsXG5cdFx0XHRcdGRlc2NyOiBcIlwiXG5cdFx0fSwgXG5cdFx0e1xuXHRcdFx0XHRuYW1lOiBcInd3dy5iYW5uZXJidXp6LmNvLnVrXCIsXG5cdFx0XHRcdHVybDogXCJwb3J0Zm9saW8vYmFubmVyYnV6ei1jby11ay5qcGdcIixcblx0XHRcdFx0a2V5d29yZDogXCJDdXN0b20gRGV2XCIsXG5cdFx0XHRcdGRlc2NyOiBcIlwiXG5cdFx0fSwgXG5cdFx0e1xuXHRcdFx0XHRuYW1lOiBcInd3dy5sYXRvZmllbGRzZXN0YXRlLmNvbVwiLFxuXHRcdFx0XHR1cmw6IFwicG9ydGZvbGlvL2xhdG9maWVsZHNlc3RhdGUuanBnXCIsXG5cdFx0XHRcdGtleXdvcmQ6IFwiZUNvbW1lcmNlXCIsXG5cdFx0XHRcdGRlc2NyOiBcIlwiXG5cdFx0fSxcblx0XTtcblxuZXhwb3J0IGNvbnN0IGNhdGVnb3JpZXMgPSBbXCJlQ29tbWVyY2VcIiwgXCJJbmZvcm1hdGlvbmFsXCIsIFwiQ3VzdG9tIERldlwiXTtcbiIsIjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHsgaW1hZ2VzIH0gZnJvbSBcIi4vaW1nRGF0YS5qc1wiO1xyXG4gIGltcG9ydCB7IGNhdGVnb3JpZXMgfSBmcm9tIFwiLi9pbWdEYXRhLmpzXCI7XHJcbiAgaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4uL2NvbW1vbi9IZWFkaW5nLnN2ZWx0ZVwiO1xyXG5cclxuICBpbXBvcnQgQnV0dG9uQ29udGFpbmVyIGZyb20gXCIuL0J1dHRvbkNvbnRhaW5lci5zdmVsdGVcIjtcclxuICBpbXBvcnQgR2FsbGVyeSBmcm9tIFwiLi9HYWxsZXJ5LnN2ZWx0ZVwiO1xyXG5cclxuICBsZXQgc2VsZWN0ZWQgPSBcImVDb21tZXJjZVwiO1xyXG5cclxuICBjb25zdCBmaWx0ZXJTZWxlY3Rpb24gPSAoZSkgPT4gKHNlbGVjdGVkID0gZS50YXJnZXQuZGF0YXNldC5uYW1lKTtcclxuPC9zY3JpcHQ+XHJcblxyXG48bWFpbj5cclxuICA8ZGl2IGNsYXNzPVwibXktMTBcIj5cclxuICAgIDxIZWFkaW5nXHJcbiAgICAgIHRleHQ9XCJQb3J0Zm9saW9cIlxyXG4gICAgICBzaXplPVwidGV4dC00eGwgc206dGV4dC01eGwgbWQ6dGV4dC02eGxcIlxyXG4gICAgICBoZWFkaW5nPVwiZm9udC1oZWFkaW5nMSBib3JkZXItYi0yXCJcclxuICAgICAgY29sb3I9XCJ0ZXh0LXBpbmstNTAwXCJcclxuICAgIC8+XHJcbiAgPC9kaXY+XHJcbiAgPEJ1dHRvbkNvbnRhaW5lcj5cclxuICAgIHsjZWFjaCBjYXRlZ29yaWVzIGFzIGNhdGVnb3J5fVxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3M6YWN0aXZlPXtzZWxlY3RlZCA9PT0gY2F0ZWdvcnl9XHJcbiAgICAgICAgY2xhc3M9XCJidG5cIlxyXG4gICAgICAgIGRhdGEtbmFtZT17Y2F0ZWdvcnl9XHJcbiAgICAgICAgb246Y2xpY2s9e2ZpbHRlclNlbGVjdGlvbn1cclxuICAgICAgPlxyXG4gICAgICAgIHtjYXRlZ29yeX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICB7L2VhY2h9XHJcbiAgPC9CdXR0b25Db250YWluZXI+XHJcblxyXG4gIDwhLS0gUG9ydGZvbGlvIEdhbGxlcnkgR3JpZCAtLT5cclxuXHJcbiAgPEdhbGxlcnk+XHJcbiAgICB7I2VhY2ggaW1hZ2VzIGFzIHsgbmFtZSwgdXJsLCBrZXl3b3JkLCBkZXNjciB9fVxyXG4gICAgICB7I2lmIHNlbGVjdGVkID09PSBcImFsbFwifVxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaG93IGNvbHVtblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3VybH0gYWx0PXtuYW1lfSBzdHlsZT1cIndpZHRoOjEwMCVcIiAvPlxyXG4gICAgICAgICAgICA8YSBocmVmPXtuYW1lfSBhbHQ9e25hbWV9IGNsYXNzPVwiYnRuXCI+e25hbWV9IDwvYT5cclxuICAgICAgICAgICAgPHA+e2Rlc2NyfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB7OmVsc2V9XHJcbiAgICAgICAgPGRpdiBjbGFzczpzaG93PXtrZXl3b3JkID09PSBzZWxlY3RlZH0gY2xhc3M9XCJjb2x1bW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXt1cmx9IGFsdD17bmFtZX0gc3R5bGU9XCJ3aWR0aDoxMDAlXCIgLz5cclxuICAgICAgICAgICAgPGEgaHJlZj17bmFtZX0gYWx0PXtuYW1lfSBjbGFzcz1cImJ0blwiPntuYW1lfSA8L2E+XHJcbiAgICAgICAgICAgIDxwPntkZXNjcn08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgey9pZn1cclxuICAgIHsvZWFjaH1cclxuICA8L0dhbGxlcnk+XHJcbjwvbWFpbj5cclxuXHJcbjxzdHlsZT5cclxuICAvKiBDZW50ZXIgd2Vic2l0ZSAqL1xyXG5cclxuICBtYWluIHtcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8qIFx0YmFja2dyb3VuZC1jb2xvcjogcmVkOyAqL1xyXG4gIH1cclxuICBwIHtcclxuICAgIG1hcmdpbjogMCAwIDAuNXJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvbHVtbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICB3aWR0aDogOTJ2dztcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuY29sdW1uIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgd2lkdGg6IDQ2dnc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgICAuY29sdW1uIHtcclxuICAgICAgd2lkdGg6IDMzJTtcclxuICAgIH1cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgd2lkdGg6IDMwdnc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiBDcmVhdGUgdGhyZWUgZXF1YWwgY29sdW1ucyAqL1xyXG4gIC5jb2x1bW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG5cclxuICAvKiBDb250ZW50ICovXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCBibGFjaztcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuXHJcbiAgLyogVGhlIFwic2hvd1wiIGNsYXNzIGlzIGFkZGVkIHRvIHRoZSBmaWx0ZXJlZCBlbGVtZW50cyAqL1xyXG4gIC5zaG93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAvKiBTdHlsZSB0aGUgYnV0dG9ucyAqL1xyXG4gIC5idG4ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcGluaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAvKiBBZGQgYSBkYXJrIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIGFjdGl2ZSBidXR0b24gKi9cclxuICAuYnRuOmFjdGl2ZSxcclxuICAuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxNQUFNLEdBQUc7QUFDdEIsRUFBRTtBQUNG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
