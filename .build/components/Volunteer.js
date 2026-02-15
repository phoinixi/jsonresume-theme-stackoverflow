import * as $ from 'svelte/internal/server';
import { paragraphSplit, t } from '../utils/helpers.js';
import DateRange from './DateRange.js';

export default function Volunteer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { volunteer = [], language = 'en-gb' } = $$props;

		if (volunteer?.length) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<section class="section"><header><h2 class="section-title">${$.escape(t('resume.volunteer'))} <span class="item-count">(${$.escape(volunteer.length)})</span></h2></header> <section id="volunteer"><!--[-->`);

			const each_array = $.ensure_array_like(volunteer);

			for (let index = 0, $$length = each_array.length; index < $$length; index++) {
				let vol = each_array[index];

				$$renderer.push(`<section class="volunteer-item">`);

				if (vol.organization) {
					$$renderer.push('<!--[-->');

					if (vol.summary) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<label${$.attr('for', `volunteer-item-${$.stringify(index)}`)}></label>`);
					} else {
						$$renderer.push('<!--[!-->');
					}

					$$renderer.push(`<!--]--> <header class="clear">`);
					DateRange($$renderer, { startDate: vol.startDate, endDate: vol.endDate, language });
					$$renderer.push(`<!----> <div class="header-left">`);

					if (vol.position) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<div class="position">${$.escape(vol.position)}</div>`);
					} else {
						$$renderer.push('<!--[!-->');
					}

					$$renderer.push(`<!--]--> <div class="organization">`);

					if (vol.url) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<a target="_blank"${$.attr('href', vol.url)}>${$.escape(vol.organization)}</a>`);
					} else if (vol.website) {
						$$renderer.push('<!--[1-->');
						$$renderer.push(`<a target="_blank"${$.attr('href', vol.website)}>${$.escape(vol.organization)}</a>`);
					} else {
						$$renderer.push('<!--[!-->');
						$$renderer.push(`${$.escape(vol.organization)}`);
					}

					$$renderer.push(`<!--]--></div></div></header>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (vol.location) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<span class="location"><span class="fa-solid fa-location-dot"></span> `);

					if (vol.location.city) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<span class="city">${$.escape(vol.location.city)},</span>`);
					} else {
						$$renderer.push('<!--[!-->');
					}

					$$renderer.push(`<!--]--> `);

					if (vol.location.countryCode) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<span class="countryCode">(${$.escape(vol.location.countryCode)})</span>`);
					} else {
						$$renderer.push('<!--[!-->');
					}

					$$renderer.push(`<!--]--> `);

					if (vol.location.region) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<span class="region">${$.escape(vol.location.region)}</span>`);
					} else {
						$$renderer.push('<!--[!-->');
					}

					$$renderer.push(`<!--]--></span>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (vol.keywords?.length) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<ul class="keywords"><!--[-->`);

					const each_array_1 = $.ensure_array_like(vol.keywords);

					for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
						let keyword = each_array_1[$$index];

						$$renderer.push(`<li>${$.escape(keyword)}</li>`);
					}

					$$renderer.push(`<!--]--></ul>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> <div class="item">`);

				if (vol.summary) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div class="summary">${$.html(paragraphSplit(vol.summary))}</div>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (vol.highlights?.length) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<ul class="highlights"><!--[-->`);

					const each_array_2 = $.ensure_array_like(vol.highlights);

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