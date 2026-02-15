import * as $ from 'svelte/internal/server';
import Basics from './Basics.js';
import Skills from './Skills.js';
import Work from './Work.js';
import Projects from './Projects.js';
import Volunteer from './Volunteer.js';
import Education from './Education.js';
import Awards from './Awards.js';
import Certificates from './Certificates.js';
import Publications from './Publications.js';
import Languages from './Languages.js';
import Interests from './Interests.js';
import References from './References.js';

export default function Resume($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { resume, language = 'en-gb' } = $$props;

		$$renderer.push(`<div id="resume">`);
		Basics($$renderer, { basics: resume.basics });
		$$renderer.push(`<!----> `);
		Skills($$renderer, { skills: resume.skills });
		$$renderer.push(`<!----> `);
		Work($$renderer, { work: resume.work, language });
		$$renderer.push(`<!----> `);
		Projects($$renderer, { projects: resume.projects, language });
		$$renderer.push(`<!----> `);
		Volunteer($$renderer, { volunteer: resume.volunteer, language });
		$$renderer.push(`<!----> `);
		Education($$renderer, { education: resume.education, language });
		$$renderer.push(`<!----> `);
		Awards($$renderer, { awards: resume.awards, language });
		$$renderer.push(`<!----> `);
		Certificates($$renderer, { certificates: resume.certificates, language });
		$$renderer.push(`<!----> `);
		Publications($$renderer, { publications: resume.publications, language });
		$$renderer.push(`<!----> `);
		Languages($$renderer, { languages: resume.languages });
		$$renderer.push(`<!----> `);
		Interests($$renderer, { interests: resume.interests });
		$$renderer.push(`<!----> `);
		References($$renderer, { references: resume.references });
		$$renderer.push(`<!----></div>`);
	});
}