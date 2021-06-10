import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, p as create_component, b as space, q as claim_component, h as claim_space, r as mount_component, m as insert_dev, o as noop, u as transition_in, w as transition_out, x as destroy_component, g as detach_dev } from './client.b82389fb.js';
import { S as Services } from './Services.980bced0.js';
import './Heading.397f83d9.js';
import { C as Contact } from './Contact.d6af94aa.js';

/* src\routes\services.svelte generated by Svelte v3.29.4 */

function create_fragment(ctx) {
	let services;
	let t;
	let contact;
	let current;
	services = new Services({ $$inline: true });

	contact = new Contact({
			props: {
				contactbg: "bg-gradient-to-r from-gray-100 via-gray-50 to-gray-0"
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(services.$$.fragment);
			t = space();
			create_component(contact.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(services.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(contact.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(services, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(contact, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(services.$$.fragment, local);
			transition_in(contact.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(services.$$.fragment, local);
			transition_out(contact.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(services, detaching);
			if (detaching) detach_dev(t);
			destroy_component(contact, detaching);
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

	$$self.$capture_state = () => ({ Services, Contact });
	return [];
}

class Services_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Services_1",
			options,
			id: create_fragment.name
		});
	}
}

export default Services_1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuZmU4ZDI4YTMuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
