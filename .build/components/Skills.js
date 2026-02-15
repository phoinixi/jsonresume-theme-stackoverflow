import * as $ from 'svelte/internal/server';
import { normalizeLevel, t } from '../utils/helpers.js';

export default function Skills($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { skills = [] } = $$props;

		if (skills?.length) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<section class="section"><header><h2 class="section-title">${$.escape(t('resume.skills'))}</h2></header> <section id="skills"><!--[-->`);

			const each_array = $.ensure_array_like(skills);

			for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
				let skill = each_array[$$index_1];

				$$renderer.push(`<div class="item">`);

				if (skill.name) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<h3 class="name">${$.escape(skill.name)}</h3>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (skill.level) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div${$.attr_class(`level ${$.stringify(normalizeLevel(skill.level))}`)}>`);

					if (skill.levelDisplay) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<em>${$.escape(skill.levelDisplay)}</em>`);
					} else {
						$$renderer.push('<!--[!-->');
						$$renderer.push(`<em>${$.escape(skill.level)}</em>`);
					}

					$$renderer.push(`<!--]--> <div class="bar"></div></div>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (skill.keywords?.length) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<ul class="keywords"><!--[-->`);

					const each_array_1 = $.ensure_array_like(skill.keywords);

					for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
						let keyword = each_array_1[$$index];

						$$renderer.push(`<li>${$.escape(keyword)}</li>`);
					}

					$$renderer.push(`<!--]--></ul>`);
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