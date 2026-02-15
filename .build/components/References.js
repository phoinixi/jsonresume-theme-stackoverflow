import * as $ from 'svelte/internal/server';
import { t } from '../utils/helpers.js';

export default function References($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { references = [] } = $$props;

		if (references?.length) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<section class="section"><header><h2 class="section-title">${$.escape(t('resume.references'))} <span class="item-count">(${$.escape(references.length)})</span></h2></header> <section id="references"><!--[-->`);

			const each_array = $.ensure_array_like(references);

			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let ref = each_array[$$index];

				$$renderer.push(`<div class="item">`);

				if (ref.reference) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<blockquote class="reference">“ ${$.escape(ref.reference)} ”</blockquote>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (ref.name) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div class="name">${$.escape(ref.name)}</div>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--></div>`);
			}

			$$renderer.push(`<!--]--></section></section>`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]-->`);
	});
}