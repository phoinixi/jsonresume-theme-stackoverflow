import * as $ from 'svelte/internal/server';
import { paragraphSplit, t } from '../utils/helpers.js';
import { getDateHelpers } from '../utils/date-helpers.js';

export default function Awards($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { awards = [], language = 'en-gb' } = $$props;
		const { MY } = getDateHelpers(language);

		if (awards?.length) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<section class="section"><header><h2 class="section-title">${$.escape(t('resume.awards'))} <span class="item-count">(${$.escape(awards.length)})</span></h2></header> <section id="awards"><!--[-->`);

			const each_array = $.ensure_array_like(awards);

			for (let index = 0, $$length = each_array.length; index < $$length; index++) {
				let award = each_array[index];

				$$renderer.push(`<section class="award-item">`);

				if (award.summary) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<label${$.attr('for', `award-item-${$.stringify(index)}`)}></label>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> <header class="clear">`);

				if (award.date) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div class="date">${$.escape(MY(award.date))}</div>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> <div class="header-left">`);

				if (award.title) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div class="title">${$.escape(award.title)}</div>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (award.awarder) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div class="awarder">${$.escape(award.awarder)}</div>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--></div></header> <div class="item">`);

				if (award.summary) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div class="summary">${$.html(paragraphSplit(award.summary))}</div>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--></div></section>`);
			}

			$$renderer.push(`<!--]--></section></section>`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]-->`);
	});
}