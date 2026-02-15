import * as $ from 'svelte/internal/server';
import { paragraphSplit, t } from '../utils/helpers.js';
import { getDateHelpers } from '../utils/date-helpers.js';

export default function Publications($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { publications = [], language = 'en-gb' } = $$props;
		const { MY } = getDateHelpers(language);

		if (publications?.length) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<section class="section"><header><h2 class="section-title">${$.escape(t('resume.publications'))} <span class="item-count">(${$.escape(publications.length)})</span></h2></header> <section id="publications"><!--[-->`);

			const each_array = $.ensure_array_like(publications);

			for (let index = 0, $$length = each_array.length; index < $$length; index++) {
				let pub = each_array[index];

				$$renderer.push(`<section class="publication-item">`);

				if (pub.summary) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<label${$.attr('for', `publication-item-${$.stringify(index)}`)}></label>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> <header class="clear">`);

				if (pub.releaseDate) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<span class="date">${$.escape(MY(pub.releaseDate))}</span>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> <div class="header-left">`);

				if (pub.name) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<span class="name">`);

					if (pub.website) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<span class="website"><span class="fa-solid fa-up-right-from-square"></span> <a target="_blank"${$.attr('href', pub.website)}>${$.escape(pub.name)}</a></span>`);
					} else {
						$$renderer.push('<!--[!-->');
						$$renderer.push(`${$.escape(pub.name)}`);
					}

					$$renderer.push(`<!--]--></span>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (pub.publisher) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<span class="publisher">in ${$.escape(pub.publisher)}</span>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--></div></header> `);

				if (pub.keywords?.length) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<ul class="keywords"><!--[-->`);

					const each_array_1 = $.ensure_array_like(pub.keywords);

					for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
						let keyword = each_array_1[$$index];

						$$renderer.push(`<li>${$.escape(keyword)}</li>`);
					}

					$$renderer.push(`<!--]--></ul>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> <div class="item">`);

				if (pub.summary) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div class="summary">${$.html(paragraphSplit(pub.summary))}</div>`);
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