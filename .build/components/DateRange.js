import * as $ from 'svelte/internal/server';
import { getDateHelpers } from '../utils/date-helpers.js';

export default function DateRange($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { startDate, endDate, language = 'en-gb' } = $$props;
		const { MY } = getDateHelpers(language);

		if (startDate) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<div class="date"><span class="startDate">${$.escape(MY(startDate))}</span> `);

			if (endDate) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<span class="endDate">- ${$.escape(MY(endDate))}</span>`);
			} else {
				$$renderer.push('<!--[!-->');
				$$renderer.push(`<span class="endDate">- Current</span>`);
			}

			$$renderer.push(`<!--]--></div>`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]-->`);
	});
}