import * as $ from 'svelte/internal/server';
import { paragraphSplit, t } from '../utils/helpers.js';
import DateRange from './DateRange.js';

export default function Work($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { work = [], language = 'en-gb' } = $$props;

		if (work?.length) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<section class="section"><header><h2 class="section-title">${$.escape(t('resume.workExperience'))} <span class="item-count">(${$.escape(work.length)})</span></h2></header> <section id="work"><!--[-->`);

			const each_array = $.ensure_array_like(work);

			for (let index = 0, $$length = each_array.length; index < $$length; index++) {
				let job = each_array[index];

				$$renderer.push(`<section class="work-item">`);

				if (job.summary) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<label${$.attr('for', `work-item-${$.stringify(index)}`)}></label>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> <header class="clear">`);
				DateRange($$renderer, { startDate: job.startDate, endDate: job.endDate, language });
				$$renderer.push(`<!----> `);

				if (job.position) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div class="position">${$.escape(job.position)}</div>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (job.url) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<span class="company"><a target="_blank"${$.attr('href', job.url)}>${$.escape(job.name)}</a></span>`);
				} else if (job.website) {
					$$renderer.push('<!--[1-->');
					$$renderer.push(`<span class="company"><a target="_blank"${$.attr('href', job.website)}>${$.escape(job.name)}</a></span>`);
				} else {
					$$renderer.push('<!--[!-->');
					$$renderer.push(`<div class="company">${$.escape(job.name)}</div>`);
				}

				$$renderer.push(`<!--]--></header> `);

				if (job.location) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<span class="location"><span class="fa-solid fa-location-dot"></span> ${$.escape(job.location)}</span>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (job.keywords?.length) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<ul class="keywords"><!--[-->`);

					const each_array_1 = $.ensure_array_like(job.keywords);

					for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
						let keyword = each_array_1[$$index];

						$$renderer.push(`<li>${$.escape(keyword)}</li>`);
					}

					$$renderer.push(`<!--]--></ul>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> <div class="item" id="work-item">`);

				if (job.summary) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div class="summary">${$.html(paragraphSplit(job.summary))}</div>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (job.highlights?.length) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<ul class="highlights"><!--[-->`);

					const each_array_2 = $.ensure_array_like(job.highlights);

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