import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, p as create_component, q as claim_component, r as mount_component, o as noop, u as transition_in, w as transition_out, x as destroy_component } from './client.7d5fdb98.js';
import { C as Contact } from './Contact.188a372a.js';

/* src\routes\contact.svelte generated by Svelte v3.29.4 */

function create_fragment(ctx) {
	let contact;
	let current;
	contact = new Contact({ $$inline: true });

	const block = {
		c: function create() {
			create_component(contact.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(contact.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(contact, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(contact.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(contact.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
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
	validate_slots("Contact", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Contact> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Contact });
	return [];
}

class Contact_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Contact_1",
			options,
			id: create_fragment.name
		});
	}
}

export default Contact_1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5lMmNhYWQ0Zi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
