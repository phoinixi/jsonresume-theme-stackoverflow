import * as $ from 'svelte/internal/server';
import { paragraphSplit, t } from '../utils/helpers.js';
import DateRange from './DateRange.js';

export default function Projects($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { projects = [], language = 'en-gb' } = $$props;

		if (projects?.length) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<section class="section"><header><h2 class="section-title">${$.escape(t('resume.projects'))} <span class="item-count">(${$.escape(projects.length)})</span></h2></header> <section id="projects"><!--[-->`);

			const each_array = $.ensure_array_like(projects);

			for (let index = 0, $$length = each_array.length; index < $$length; index++) {
				let project = each_array[index];

				$$renderer.push(`<section class="project-item">`);

				if (project.summary) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<label${$.attr('for', `project-item-${$.stringify(index)}`)}></label>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (project.name) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<header class="clear">`);

					DateRange($$renderer, {
						startDate: project.startDate,
						endDate: project.endDate,
						language
					});

					$$renderer.push(`<!----> `);

					if (project.name) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<div class="position">${$.escape(project.name)}</div>`);
					} else {
						$$renderer.push('<!--[!-->');
					}

					$$renderer.push(`<!--]--></header>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (project.location) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<span class="location"><span class="fa-solid fa-location-dot"></span> `);

					if (project.location.city) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<span class="city">${$.escape(project.location.city)},</span>`);
					} else {
						$$renderer.push('<!--[!-->');
					}

					$$renderer.push(`<!--]--> `);

					if (project.location.countryCode) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<span class="countryCode">(${$.escape(project.location.countryCode)})</span>`);
					} else {
						$$renderer.push('<!--[!-->');
					}

					$$renderer.push(`<!--]--> `);

					if (project.location.region) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<span class="region">${$.escape(project.location.region)}</span>`);
					} else {
						$$renderer.push('<!--[!-->');
					}

					$$renderer.push(`<!--]--></span>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (project.url) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<span class="website"><span class="fa-solid fa-up-right-from-square"></span> <a target="_blank"${$.attr('href', project.url)}>${$.escape(project.url)}</a></span>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (project.keywords?.length) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<ul class="keywords"><!--[-->`);

					const each_array_1 = $.ensure_array_like(project.keywords);

					for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
						let keyword = each_array_1[$$index];

						$$renderer.push(`<li>${$.escape(keyword)}</li>`);
					}

					$$renderer.push(`<!--]--></ul>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> <div class="item">`);

				if (project.description) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div class="summary">${$.html(paragraphSplit(project.description))}</div>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (project.highlights?.length) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<ul class="highlights"><!--[-->`);

					const each_array_2 = $.ensure_array_like(project.highlights);

					for (let $$index_1 = 0, $$length = each_array_2.length; $$index_1 < $$length; $$index_1++) {
						let highlight = each_array_2[$$index_1];

						$$renderer.push(`<li>${$.html(paragraphSplit(highlight))}</li>`);
					}

					$$renderer.push(`<!--]--></ul>`);
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