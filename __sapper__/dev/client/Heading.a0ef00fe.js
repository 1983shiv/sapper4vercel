import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, c as claim_element, f as children, j as claim_text, g as detach_dev, k as attr_dev, l as add_location, m as insert_dev, n as append_dev, A as set_data_dev, o as noop } from './client.260c2afc.js';

/* src\components\common\Heading.svelte generated by Svelte v3.29.4 */

const file = "src\\components\\common\\Heading.svelte";

function create_fragment(ctx) {
	let h2;
	let t;
	let h2_class_value;

	const block = {
		c: function create() {
			h2 = element("h2");
			t = text(/*text*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			h2 = claim_element(nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t = claim_text(h2_nodes, /*text*/ ctx[0]);
			h2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", h2_class_value = "" + (/*heading*/ ctx[2] + " " + /*size*/ ctx[3] + " " + /*color*/ ctx[1]));
			add_location(h2, file, 7, 0, 138);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h2, anchor);
			append_dev(h2, t);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*text*/ 1) set_data_dev(t, /*text*/ ctx[0]);

			if (dirty & /*heading, size, color*/ 14 && h2_class_value !== (h2_class_value = "" + (/*heading*/ ctx[2] + " " + /*size*/ ctx[3] + " " + /*color*/ ctx[1]))) {
				attr_dev(h2, "class", h2_class_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(h2);
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
	validate_slots("Heading", slots, []);
	let { text } = $$props;
	let { color = "text-pink-500" } = $$props;
	let { heading } = $$props;
	let { size = "text-4xl" } = $$props;
	const writable_props = ["text", "color", "heading", "size"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Heading> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("text" in $$props) $$invalidate(0, text = $$props.text);
		if ("color" in $$props) $$invalidate(1, color = $$props.color);
		if ("heading" in $$props) $$invalidate(2, heading = $$props.heading);
		if ("size" in $$props) $$invalidate(3, size = $$props.size);
	};

	$$self.$capture_state = () => ({ text, color, heading, size });

	$$self.$inject_state = $$props => {
		if ("text" in $$props) $$invalidate(0, text = $$props.text);
		if ("color" in $$props) $$invalidate(1, color = $$props.color);
		if ("heading" in $$props) $$invalidate(2, heading = $$props.heading);
		if ("size" in $$props) $$invalidate(3, size = $$props.size);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [text, color, heading, size];
}

class Heading extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { text: 0, color: 1, heading: 2, size: 3 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Heading",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*text*/ ctx[0] === undefined && !("text" in props)) {
			console.warn("<Heading> was created without expected prop 'text'");
		}

		if (/*heading*/ ctx[2] === undefined && !("heading" in props)) {
			console.warn("<Heading> was created without expected prop 'heading'");
		}
	}

	get text() {
		throw new Error("<Heading>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set text(value) {
		throw new Error("<Heading>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get color() {
		throw new Error("<Heading>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set color(value) {
		throw new Error("<Heading>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get heading() {
		throw new Error("<Heading>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set heading(value) {
		throw new Error("<Heading>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get size() {
		throw new Error("<Heading>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set size(value) {
		throw new Error("<Heading>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Heading as H };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGluZy5hMGVmMDBmZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0hlYWRpbmcuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGxldCB0ZXh0O1xyXG4gIGV4cG9ydCBsZXQgY29sb3IgPSBcInRleHQtcGluay01MDBcIjtcclxuICBleHBvcnQgbGV0IGhlYWRpbmc7XHJcbiAgZXhwb3J0IGxldCBzaXplID0gXCJ0ZXh0LTR4bFwiO1xyXG48L3NjcmlwdD5cclxuXHJcbjxoMiBjbGFzcz1cIntoZWFkaW5nfSB7c2l6ZX0ge2NvbG9yfVwiPnt0ZXh0fTwvaDI+XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztxQkFPc0MsR0FBSTs7Ozs7O3FDQUFKLEdBQUk7Ozs7OzREQUE5QixHQUFPLHFCQUFHLEdBQUksc0JBQUcsR0FBSzs7Ozs7Ozs7b0RBQUksR0FBSTs7cUdBQTlCLEdBQU8scUJBQUcsR0FBSSxzQkFBRyxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BTnJCLElBQUk7T0FDSixLQUFLLEdBQUcsZUFBZTtPQUN2QixPQUFPO09BQ1AsSUFBSSxHQUFHLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
