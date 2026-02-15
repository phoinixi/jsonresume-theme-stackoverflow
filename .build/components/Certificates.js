import * as $ from 'svelte/internal/server';
import { t } from '../utils/helpers.js';
import { getDateHelpers } from '../utils/date-helpers.js';

export default function Certificates($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { certificates = [], language = 'en-gb' } = $$props;
		const { MY } = getDateHelpers(language);

		if (certificates?.length) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<section class="section"><header><h2 class="section-title">${$.escape(t('resume.certificates'))} <span class="item-count">(${$.escape(certificates.length)})</span></h2></header> <section id="certificates"><!--[-->`);

			const each_array = $.ensure_array_like(certificates);

			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let cert = each_array[$$index];

				$$renderer.push(`<section class="certificate-item"><header class="clear">`);

				if (cert.date) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div class="date">${$.escape(MY(cert.date))}</div>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> <div class="header-left">`);

				if (cert.name) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div class="name">${$.escape(cert.name)}</div>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (cert.issuer) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div class="issuer">${$.escape(cert.issuer)}</div>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--></div></header> <div class="item">`);

				if (cert.url) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<span class="url"><span class="fa-solid fa-up-right-from-square"></span> <a target="_blank"${$.attr('href', cert.url)}>${$.escape(cert.url)}</a></span>`);
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