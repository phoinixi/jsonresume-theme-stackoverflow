import * as $ from 'svelte/internal/server';
import { paragraphSplit, t } from '../utils/helpers.js';

export default function Interests($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { interests = [] } = $$props;

		if (interests?.length) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<section class="section"><header><h2 class="section-title">${$.escape(t('resume.interests'))} <span class="item-count">(${$.escape(interests.length)})</span></h2></header> <section id="interests"><!--[-->`);

			const each_array = $.ensure_array_like(interests);

			for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
				let interest = each_array[$$index_1];

				$$renderer.push(`<div class="item">`);

				if (interest.name) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<h3 class="name">${$.escape(interest.name)}</h3>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (interest.keywords?.length) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<ul class="keywords"><!--[-->`);

					const each_array_1 = $.ensure_array_like(interest.keywords);

					for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
						let keyword = each_array_1[$$index];

						$$renderer.push(`<li>${$.escape(keyword)}</li>`);
					}

					$$renderer.push(`<!--]--></ul>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (interest.summary) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div class="summary">${$.html(paragraphSplit(interest.summary))}</div>`);
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