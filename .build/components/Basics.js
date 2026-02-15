import * as $ from 'svelte/internal/server';
import { paragraphSplit, spaceToDash, birthDateHtml, t } from '../utils/helpers.js';

export default function Basics($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { basics } = $$props;

		if (basics) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<header id="header" class="clear">`);

			if (basics.image) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<img class="image"${$.attr('src', basics.image)}${$.attr('alt', basics.name)}/> <div class="middle"><h1 class="name">${$.escape(basics.name)}</h1> <h2 class="label">${$.escape(basics.label)}</h2></div>`);
			} else {
				$$renderer.push('<!--[!-->');
				$$renderer.push(`<div><h1 class="name">${$.escape(basics.name)}</h1> <h2 class="label">${$.escape(basics.label)}</h2></div>`);
			}

			$$renderer.push(`<!--]--> `);

			if (basics.location) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<span class="location">`);

				if (basics.location.address) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<span class="address">${$.escape(basics.location.address)},</span>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (basics.location.postalCode) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<span class="postalCode">${$.escape(basics.location.postalCode)},</span>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (basics.location.city) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<span class="city">${$.escape(basics.location.city)},</span>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (basics.location.region) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<span class="region">${$.escape(basics.location.region)}</span>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (basics.location.countryCode) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<span class="countryCode">(${$.escape(basics.location.countryCode)})</span>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--></span>`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]--> ${$.html(birthDateHtml(basics.birth))} <div id="contact">`);

			if (basics.website) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<div class="website"><span class="fa-solid fa-up-right-from-square"></span> <a class="hide-href-print" target="_blank"${$.attr('href', basics.website)}>${$.escape(basics.website)}</a></div>`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]--> `);

			if (basics.email) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<div class="email"><span class="fa-regular fa-envelope"></span> <a class="hide-href-print"${$.attr('href', `mailto:${$.stringify(basics.email)}`)}>${$.escape(basics.email)}</a></div>`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]--> `);

			if (basics.phone) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<div class="phone"><span class="fa-solid fa-mobile-screen-button"></span> <a class="hide-href-print"${$.attr('href', `tel:${$.stringify(basics.phone)}`)}>${$.escape(basics.phone)}</a></div>`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]--></div> `);

			if (basics.profiles?.length) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<div id="profiles"><!--[-->`);

				const each_array = $.ensure_array_like(basics.profiles);

				for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
					let profile = each_array[$$index];

					$$renderer.push(`<div class="item">`);

					if (profile.network) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<div class="username"><span${$.attr_class(`fa-brands fa-${$.stringify(spaceToDash(profile.network))} ${$.stringify(spaceToDash(profile.network))} social`)}></span> `);

						if (profile.url) {
							$$renderer.push('<!--[-->');
							$$renderer.push(`<span class="url"><a target="_blank"${$.attr('href', profile.url)}><span class="show-only-url-print">${$.escape(profile.username)}</span></a></span>`);
						} else {
							$$renderer.push('<!--[!-->');
							$$renderer.push(`<span>${$.escape(profile.username)}</span>`);
						}

						$$renderer.push(`<!--]--></div>`);
					} else {
						$$renderer.push('<!--[!-->');
					}

					$$renderer.push(`<!--]--></div>`);
				}

				$$renderer.push(`<!--]--></div>`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]--></header> `);

			if (basics.summary) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<section class="section summary"><header><h2 class="section-title">${$.escape(t('resume.summary'))}</h2></header> <section class="main-summary"><div>${$.html(paragraphSplit(basics.summary))}</div></section></section>`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]-->`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]-->`);
	});
}