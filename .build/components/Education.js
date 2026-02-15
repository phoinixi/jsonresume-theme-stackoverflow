import * as $ from 'svelte/internal/server';
import { paragraphSplit, t } from '../utils/helpers.js';
import DateRange from './DateRange.js';

export default function Education($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { education = [], language = 'en-gb' } = $$props;

		if (education?.length) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<section class="section"><header><h2 class="section-title">${$.escape(t('resume.education'))} <span class="item-count">(${$.escape(education.length)})</span></h2></header> <section id="education"><!--[-->`);

			const each_array = $.ensure_array_like(education);

			for (let index = 0, $$length = each_array.length; index < $$length; index++) {
				let edu = each_array[index];

				$$renderer.push(`<section class="education-item">`);

				if (edu.summary) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<label${$.attr('for', `education-item-${$.stringify(index)}`)}></label>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> <header class="clear">`);
				DateRange($$renderer, { startDate: edu.startDate, endDate: edu.endDate, language });
				$$renderer.push(`<!----> <div class="header-left">`);

				if (edu.studyType) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div class="studyType">${$.escape(edu.studyType)}</div>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (edu.area) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div class="area">${$.escape(edu.area)}</div>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (edu.institution) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div class="institution">`);

					if (edu.url) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<a target="_blank"${$.attr('href', edu.url)}>${$.escape(edu.institution)}</a>`);
					} else {
						$$renderer.push('<!--[!-->');
						$$renderer.push(`${$.escape(edu.institution)}`);
					}

					$$renderer.push(`<!--]--></div>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--></div></header> `);

				if (edu.location) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<span class="location"><span class="fa-solid fa-location-dot"></span> `);

					if (edu.location.city) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<span class="city">${$.escape(edu.location.city)}</span>`);
					} else {
						$$renderer.push('<!--[!-->');
					}

					$$renderer.push(`<!--]--> `);

					if (edu.location.countryCode) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<span class="countryCode">(${$.escape(edu.location.countryCode)})</span>`);
					} else {
						$$renderer.push('<!--[!-->');
					}

					$$renderer.push(`<!--]--> `);

					if (edu.location.region) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<span class="region">${$.escape(edu.location.region)}</span>`);
					} else {
						$$renderer.push('<!--[!-->');
					}

					$$renderer.push(`<!--]--></span>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (edu.courses?.length) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<ul class="courses"><!--[-->`);

					const each_array_1 = $.ensure_array_like(edu.courses);

					for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
						let course = each_array_1[$$index];

						$$renderer.push(`<li>${$.escape(course)}</li>`);
					}

					$$renderer.push(`<!--]--></ul>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> <div class="item">`);

				if (edu.gpa) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div class="gpa"><strong>Grade:</strong> <span>${$.escape(edu.gpa)}</span></div>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (edu.summary) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div class="summary">${$.html(paragraphSplit(edu.summary))}</div>`);
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