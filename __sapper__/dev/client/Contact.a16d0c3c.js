import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, E as onMount, F as Socialbutton, e as element, t as text, b as space, c as claim_element, f as children, j as claim_text, g as detach_dev, h as claim_space, k as attr_dev, l as add_location, m as insert_dev, n as append_dev, o as noop } from './client.260c2afc.js';

/* src\components\Contact.svelte generated by Svelte v3.29.4 */
const file = "src\\components\\Contact.svelte";

function create_fragment(ctx) {
	let section;
	let div12;
	let div0;
	let h1;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let div1;
	let h2;
	let t4;
	let div1_class_value;
	let t5;
	let div11;
	let form;
	let div9;
	let div3;
	let div2;
	let label0;
	let t6;
	let t7;
	let input0;
	let t8;
	let div5;
	let div4;
	let label1;
	let t9;
	let t10;
	let input1;
	let t11;
	let div7;
	let div6;
	let label2;
	let t12;
	let t13;
	let textarea;
	let t14;
	let div8;
	let button;
	let t15;
	let t16;
	let div10;
	let a;
	let t17;
	let div11_class_value;
	let section_class_value;

	const block = {
		c: function create() {
			section = element("section");
			div12 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t0 = text("Let's Talk");
			t1 = space();
			p = element("p");
			t2 = text("Let's have a discussion regarding your new job requriement. please send\r\n        us your name, email and your job description with time availability and\r\n        skype id, so we can discuss in detail.");
			t3 = space();
			div1 = element("div");
			h2 = element("h2");
			t4 = text("Thanking you for Contact us, we will get back to you very soon.");
			t5 = space();
			div11 = element("div");
			form = element("form");
			div9 = element("div");
			div3 = element("div");
			div2 = element("div");
			label0 = element("label");
			t6 = text("Name");
			t7 = space();
			input0 = element("input");
			t8 = space();
			div5 = element("div");
			div4 = element("div");
			label1 = element("label");
			t9 = text("Email");
			t10 = space();
			input1 = element("input");
			t11 = space();
			div7 = element("div");
			div6 = element("div");
			label2 = element("label");
			t12 = text("Message");
			t13 = space();
			textarea = element("textarea");
			t14 = space();
			div8 = element("div");
			button = element("button");
			t15 = text("Submit");
			t16 = space();
			div10 = element("div");
			a = element("a");
			t17 = text("Skype: srivastava.shiv");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div12 = claim_element(section_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			div0 = claim_element(div12_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Let's Talk");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "Let's have a discussion regarding your new job requriement. please send\r\n        us your name, email and your job description with time availability and\r\n        skype id, so we can discuss in detail.");
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div12_nodes);
			div1 = claim_element(div12_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h2 = claim_element(div1_nodes, "H2", {});
			var h2_nodes = children(h2);
			t4 = claim_text(h2_nodes, "Thanking you for Contact us, we will get back to you very soon.");
			h2_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t5 = claim_space(div12_nodes);
			div11 = claim_element(div12_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			form = claim_element(div11_nodes, "FORM", { id: true, action: true, method: true });
			var form_nodes = children(form);
			div9 = claim_element(form_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			div3 = claim_element(div9_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			label0 = claim_element(div2_nodes, "LABEL", { for: true, class: true });
			var label0_nodes = children(label0);
			t6 = claim_text(label0_nodes, "Name");
			label0_nodes.forEach(detach_dev);
			t7 = claim_space(div2_nodes);

			input0 = claim_element(div2_nodes, "INPUT", {
				type: true,
				id: true,
				name: true,
				class: true
			});

			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t8 = claim_space(div9_nodes);
			div5 = claim_element(div9_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			label1 = claim_element(div4_nodes, "LABEL", { for: true, class: true });
			var label1_nodes = children(label1);
			t9 = claim_text(label1_nodes, "Email");
			label1_nodes.forEach(detach_dev);
			t10 = claim_space(div4_nodes);

			input1 = claim_element(div4_nodes, "INPUT", {
				type: true,
				id: true,
				name: true,
				class: true
			});

			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t11 = claim_space(div9_nodes);
			div7 = claim_element(div9_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			label2 = claim_element(div6_nodes, "LABEL", { for: true, class: true });
			var label2_nodes = children(label2);
			t12 = claim_text(label2_nodes, "Message");
			label2_nodes.forEach(detach_dev);
			t13 = claim_space(div6_nodes);
			textarea = claim_element(div6_nodes, "TEXTAREA", { id: true, name: true, class: true });
			children(textarea).forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			t14 = claim_space(div9_nodes);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			button = claim_element(div8_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = children(button);
			t15 = claim_text(button_nodes, "Submit");
			button_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			t16 = claim_space(div11_nodes);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			a = claim_element(div10_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t17 = claim_text(a_nodes, "Skype: srivastava.shiv");
			a_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "sm:text-3xl text-2xl font-2xl font-bold title-font mb-4 text-gray-900");
			add_location(h1, file, 26, 6, 902);
			attr_dev(p, "class", "lg:w-2/3 mx-auto leading-relaxed text-base");
			add_location(p, file, 31, 6, 1042);
			attr_dev(div0, "class", "flex flex-col text-center w-full mb-12");
			add_location(div0, file, 25, 4, 842);
			add_location(h2, file, 42, 6, 1457);
			attr_dev(div1, "class", div1_class_value = "flex flex-col text-center w-full mb-12 " + (/*messageSent*/ ctx[1] ? "" : "hidden"));
			add_location(div1, file, 37, 4, 1336);
			attr_dev(label0, "for", "name");
			attr_dev(label0, "class", "leading-7 text-sm text-gray-600");
			add_location(label0, file, 53, 14, 1894);
			attr_dev(input0, "type", "text");
			attr_dev(input0, "id", "fullname");
			attr_dev(input0, "name", "fullname");
			attr_dev(input0, "class", "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out");
			add_location(input0, file, 56, 14, 2014);
			attr_dev(div2, "class", "relative");
			add_location(div2, file, 52, 12, 1856);
			attr_dev(div3, "class", "p-2 w-1/2");
			add_location(div3, file, 51, 10, 1819);
			attr_dev(label1, "for", "email");
			attr_dev(label1, "class", "leading-7 text-sm text-gray-600");
			add_location(label1, file, 66, 14, 2515);
			attr_dev(input1, "type", "email");
			attr_dev(input1, "id", "email");
			attr_dev(input1, "name", "email");
			attr_dev(input1, "class", "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out");
			add_location(input1, file, 69, 14, 2637);
			attr_dev(div4, "class", "relative");
			add_location(div4, file, 65, 12, 2477);
			attr_dev(div5, "class", "p-2 w-1/2");
			add_location(div5, file, 64, 10, 2440);
			attr_dev(label2, "for", "message");
			attr_dev(label2, "class", "leading-7 text-sm text-gray-600");
			add_location(label2, file, 79, 14, 3134);
			attr_dev(textarea, "id", "message");
			attr_dev(textarea, "name", "message");
			attr_dev(textarea, "class", "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out");
			add_location(textarea, file, 82, 14, 3260);
			attr_dev(div6, "class", "relative");
			add_location(div6, file, 78, 12, 3096);
			attr_dev(div7, "class", "p-2 w-full");
			add_location(div7, file, 77, 10, 3058);
			attr_dev(button, "type", "submit");
			attr_dev(button, "class", "flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg");
			add_location(button, file, 90, 12, 3713);
			attr_dev(div8, "class", "p-2 w-full");
			add_location(div8, file, 89, 10, 3675);
			attr_dev(div9, "class", "flex flex-wrap -m-2");
			add_location(div9, file, 50, 8, 1774);
			attr_dev(form, "id", "contact-form");
			attr_dev(form, "action", "https://getform.io/f/3d8af4d6-d4dc-41e1-b2ea-43bb410a81a5");
			attr_dev(form, "method", "POST");
			add_location(form, file, 45, 6, 1624);
			attr_dev(a, "href", "#srivastava.shiv");
			attr_dev(a, "class", "text-pink-500");
			add_location(a, file, 99, 8, 4064);
			attr_dev(div10, "class", "p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center");
			add_location(div10, file, 98, 6, 3983);
			attr_dev(div11, "class", div11_class_value = "lg:w-1/2 md:w-2/3 mx-auto " + (/*messageSent*/ ctx[1] ? "hidden" : ""));
			add_location(div11, file, 44, 4, 1547);
			attr_dev(div12, "class", "container px-5 py-24 mx-auto");
			add_location(div12, file, 24, 2, 794);
			attr_dev(section, "class", section_class_value = "text-gray-600 body-font relative " + /*contactbg*/ ctx[0]);
			add_location(section, file, 23, 0, 728);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div12);
			append_dev(div12, div0);
			append_dev(div0, h1);
			append_dev(h1, t0);
			append_dev(div0, t1);
			append_dev(div0, p);
			append_dev(p, t2);
			append_dev(div12, t3);
			append_dev(div12, div1);
			append_dev(div1, h2);
			append_dev(h2, t4);
			append_dev(div12, t5);
			append_dev(div12, div11);
			append_dev(div11, form);
			append_dev(form, div9);
			append_dev(div9, div3);
			append_dev(div3, div2);
			append_dev(div2, label0);
			append_dev(label0, t6);
			append_dev(div2, t7);
			append_dev(div2, input0);
			append_dev(div9, t8);
			append_dev(div9, div5);
			append_dev(div5, div4);
			append_dev(div4, label1);
			append_dev(label1, t9);
			append_dev(div4, t10);
			append_dev(div4, input1);
			append_dev(div9, t11);
			append_dev(div9, div7);
			append_dev(div7, div6);
			append_dev(div6, label2);
			append_dev(label2, t12);
			append_dev(div6, t13);
			append_dev(div6, textarea);
			append_dev(div9, t14);
			append_dev(div9, div8);
			append_dev(div8, button);
			append_dev(button, t15);
			append_dev(div11, t16);
			append_dev(div11, div10);
			append_dev(div10, a);
			append_dev(a, t17);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*messageSent*/ 2 && div1_class_value !== (div1_class_value = "flex flex-col text-center w-full mb-12 " + (/*messageSent*/ ctx[1] ? "" : "hidden"))) {
				attr_dev(div1, "class", div1_class_value);
			}

			if (dirty & /*messageSent*/ 2 && div11_class_value !== (div11_class_value = "lg:w-1/2 md:w-2/3 mx-auto " + (/*messageSent*/ ctx[1] ? "hidden" : ""))) {
				attr_dev(div11, "class", div11_class_value);
			}

			if (dirty & /*contactbg*/ 1 && section_class_value !== (section_class_value = "text-gray-600 body-font relative " + /*contactbg*/ ctx[0])) {
				attr_dev(section, "class", section_class_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
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
	let messageSent = false;
	let { contactbg } = $$props;

	onMount(() => {
		const formElement = document.querySelector("#contact-form");

		formElement.addEventListener("submit", event => {
			event.preventDefault();
			const data = new URLSearchParams(new FormData(formElement));
			fetch("https://getform.io/f/3d8af4d6-d4dc-41e1-b2ea-43bb410a81a5", { method: "POST", body: data });
			$$invalidate(1, messageSent = true);
		});
	});

	const writable_props = ["contactbg"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Contact> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("contactbg" in $$props) $$invalidate(0, contactbg = $$props.contactbg);
	};

	$$self.$capture_state = () => ({
		onMount,
		Socialbutton,
		messageSent,
		contactbg
	});

	$$self.$inject_state = $$props => {
		if ("messageSent" in $$props) $$invalidate(1, messageSent = $$props.messageSent);
		if ("contactbg" in $$props) $$invalidate(0, contactbg = $$props.contactbg);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [contactbg, messageSent];
}

class Contact extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { contactbg: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Contact",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*contactbg*/ ctx[0] === undefined && !("contactbg" in props)) {
			console.warn("<Contact> was created without expected prop 'contactbg'");
		}
	}

	get contactbg() {
		throw new Error("<Contact>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set contactbg(value) {
		throw new Error("<Contact>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Contact as C };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdC5hMTZkMGMzYy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQ29udGFjdC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSA8Zm9ybSBhY3Rpb249XCJodHRwczovL2dldGZvcm0uaW8vZi8zZDhhZjRkNi1kNGRjLTQxZTEtYjJlYS00M2JiNDEwYTgxYTVcIiBtZXRob2Q9XCJQT1NUXCI+IC0tPlxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XHJcbiAgaW1wb3J0IFNvY2lhbGJ1dHRvbiBmcm9tIFwiLi9jb21tb24vU29jaWFsYnV0dG9uLnN2ZWx0ZVwiO1xyXG4gIGxldCBtZXNzYWdlU2VudCA9IGZhbHNlO1xyXG4gIGV4cG9ydCBsZXQgY29udGFjdGJnO1xyXG5cclxuICBvbk1vdW50KCgpID0+IHtcclxuICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LWZvcm1cIik7XHJcbiAgICBmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhuZXcgRm9ybURhdGEoZm9ybUVsZW1lbnQpKTtcclxuICAgICAgZmV0Y2goXCJodHRwczovL2dldGZvcm0uaW8vZi8zZDhhZjRkNi1kNGRjLTQxZTEtYjJlYS00M2JiNDEwYTgxYTVcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICAgIG1lc3NhZ2VTZW50ID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG48L3NjcmlwdD5cclxuXHJcbjwhLS0gQ29udGFjdCBmb3JtIEVuZCBQb2ludCA6ICAtLT5cclxuXHJcbjxzZWN0aW9uIGNsYXNzPVwidGV4dC1ncmF5LTYwMCBib2R5LWZvbnQgcmVsYXRpdmUge2NvbnRhY3RiZ31cIj5cclxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHB4LTUgcHktMjQgbXgtYXV0b1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXIgdy1mdWxsIG1iLTEyXCI+XHJcbiAgICAgIDxoMVxyXG4gICAgICAgIGNsYXNzPVwic206dGV4dC0zeGwgdGV4dC0yeGwgZm9udC0yeGwgZm9udC1ib2xkIHRpdGxlLWZvbnQgbWItNCB0ZXh0LWdyYXktOTAwXCJcclxuICAgICAgPlxyXG4gICAgICAgIExldCdzIFRhbGtcclxuICAgICAgPC9oMT5cclxuICAgICAgPHAgY2xhc3M9XCJsZzp3LTIvMyBteC1hdXRvIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWJhc2VcIj5cclxuICAgICAgICBMZXQncyBoYXZlIGEgZGlzY3Vzc2lvbiByZWdhcmRpbmcgeW91ciBuZXcgam9iIHJlcXVyaWVtZW50LiBwbGVhc2Ugc2VuZFxyXG4gICAgICAgIHVzIHlvdXIgbmFtZSwgZW1haWwgYW5kIHlvdXIgam9iIGRlc2NyaXB0aW9uIHdpdGggdGltZSBhdmFpbGFiaWxpdHkgYW5kXHJcbiAgICAgICAgc2t5cGUgaWQsIHNvIHdlIGNhbiBkaXNjdXNzIGluIGRldGFpbC5cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwiZmxleCBmbGV4LWNvbCB0ZXh0LWNlbnRlciB3LWZ1bGwgbWItMTIge21lc3NhZ2VTZW50XHJcbiAgICAgICAgPyAnJ1xyXG4gICAgICAgIDogJ2hpZGRlbid9XCJcclxuICAgID5cclxuICAgICAgPGgyPlRoYW5raW5nIHlvdSBmb3IgQ29udGFjdCB1cywgd2Ugd2lsbCBnZXQgYmFjayB0byB5b3UgdmVyeSBzb29uLjwvaDI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJsZzp3LTEvMiBtZDp3LTIvMyBteC1hdXRvIHttZXNzYWdlU2VudCA/ICdoaWRkZW4nIDogJyd9XCI+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgaWQ9XCJjb250YWN0LWZvcm1cIlxyXG4gICAgICAgIGFjdGlvbj1cImh0dHBzOi8vZ2V0Zm9ybS5pby9mLzNkOGFmNGQ2LWQ0ZGMtNDFlMS1iMmVhLTQzYmI0MTBhODFhNVwiXHJcbiAgICAgICAgbWV0aG9kPVwiUE9TVFwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXdyYXAgLW0tMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInAtMiB3LTEvMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiIGNsYXNzPVwibGVhZGluZy03IHRleHQtc20gdGV4dC1ncmF5LTYwMFwiXHJcbiAgICAgICAgICAgICAgICA+TmFtZTwvbGFiZWxcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImZ1bGxuYW1lXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJmdWxsbmFtZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbCBiZy1ncmF5LTEwMCBiZy1vcGFjaXR5LTUwIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBmb2N1czpib3JkZXItcGluay01MDAgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcGluay0yMDAgdGV4dC1iYXNlIG91dGxpbmUtbm9uZSB0ZXh0LWdyYXktNzAwIHB5LTEgcHgtMyBsZWFkaW5nLTggdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInAtMiB3LTEvMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIiBjbGFzcz1cImxlYWRpbmctNyB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIlxyXG4gICAgICAgICAgICAgICAgPkVtYWlsPC9sYWJlbFxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbCBiZy1ncmF5LTEwMCBiZy1vcGFjaXR5LTUwIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBmb2N1czpib3JkZXItcGluay01MDAgZm9jdXM6Ymctd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcGluay0yMDAgdGV4dC1iYXNlIG91dGxpbmUtbm9uZSB0ZXh0LWdyYXktNzAwIHB5LTEgcHgtMyBsZWFkaW5nLTggdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInAtMiB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1lc3NhZ2VcIiBjbGFzcz1cImxlYWRpbmctNyB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIlxyXG4gICAgICAgICAgICAgICAgPk1lc3NhZ2U8L2xhYmVsXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIGJnLWdyYXktMTAwIGJnLW9wYWNpdHktNTAgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGZvY3VzOmJvcmRlci1waW5rLTUwMCBmb2N1czpiZy13aGl0ZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1waW5rLTIwMCBoLTMyIHRleHQtYmFzZSBvdXRsaW5lLW5vbmUgdGV4dC1ncmF5LTcwMCBweS0xIHB4LTMgcmVzaXplLW5vbmUgbGVhZGluZy02IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLTIgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXggbXgtYXV0byB0ZXh0LXdoaXRlIGJnLXBpbmstNTAwIGJvcmRlci0wIHB5LTIgcHgtOCBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctcGluay02MDAgcm91bmRlZCB0ZXh0LWxnXCJcclxuICAgICAgICAgICAgICA+U3VibWl0PC9idXR0b25cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPGRpdiBjbGFzcz1cInAtMiB3LWZ1bGwgcHQtOCBtdC04IGJvcmRlci10IGJvcmRlci1ncmF5LTIwMCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjc3JpdmFzdGF2YS5zaGl2XCIgY2xhc3M9XCJ0ZXh0LXBpbmstNTAwXCJcclxuICAgICAgICAgID5Ta3lwZTogc3JpdmFzdGF2YS5zaGl2PC9hXHJcbiAgICAgICAgPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3NlY3Rpb24+XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyR0FzQ3FELEdBQVcsTUFDdEQsRUFBRSxHQUNGLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dHQUl5QixHQUFXLE1BQUcsUUFBUSxHQUFHLEVBQUU7Ozs7d0dBckJwQixHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswSUFlTixHQUFXLE1BQ3RELEVBQUUsR0FDRixRQUFROzs7OytIQUl5QixHQUFXLE1BQUcsUUFBUSxHQUFHLEVBQUU7Ozs7cUlBckJwQixHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBbkJyRCxXQUFXLEdBQUcsS0FBSztPQUNaLFNBQVM7O0NBRXBCLE9BQU87UUFDQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlOztFQUMxRCxXQUFXLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFHLEtBQUs7R0FDM0MsS0FBSyxDQUFDLGNBQWM7U0FDZCxJQUFJLE9BQU8sZUFBZSxLQUFLLFFBQVEsQ0FBQyxXQUFXO0dBQ3pELEtBQUssQ0FBQywyREFBMkQsSUFDL0QsTUFBTSxFQUFFLE1BQU0sRUFDZCxJQUFJLEVBQUUsSUFBSTttQkFFWixXQUFXLEdBQUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
