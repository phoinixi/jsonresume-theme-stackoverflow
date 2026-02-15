import * as $ from 'svelte/internal/server';
import { normalizeLevel, t } from '../utils/helpers.js';

export default function Languages($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { languages = [] } = $$props;

		if (languages?.length) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<section class="section"><header><h2 class="section-title">${$.escape(t('resume.languages'))} <span class="item-count">(${$.escape(languages.length)})</span></h2></header> <section id="languages"><!--[-->`);

			const each_array = $.ensure_array_like(languages);

			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let lang = each_array[$$index];

				$$renderer.push(`<div class="display">`);

				if (lang.language) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<h3 class="language">${$.escape(lang.language)}</h3>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> <div class="item">`);

				if (lang.fluency) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div${$.attr_class(`level fluency ${$.stringify(normalizeLevel(lang.fluency))}`)}>`);

					if (lang.fluencyDisplay) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<em>${$.escape(lang.fluencyDisplay)}</em>`);
					} else {
						$$renderer.push('<!--[!-->');
						$$renderer.push(`<em>${$.escape(lang.fluency)}</em>`);
					}

					$$renderer.push(`<!--]--> <div class="bar"></div></div>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--></div></div>`);
			}

			$$renderer.push(`<!--]--></section></section>`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]-->`);
	});
}