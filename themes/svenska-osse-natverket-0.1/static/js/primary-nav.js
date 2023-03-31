const breakpoint = window.matchMedia('(min-width: 40em)');
const mainToggle = document.querySelector('button[aria-controls="primary-nav-list"]');
window.addEventListener('load', () => {
	if (breakpoint.matches) {
		mainToggle.setAttribute('aria-expanded', 'true');
	}
});

const navToggles = document.querySelectorAll('button[aria-controls="primary-nav-list"], button[aria-controls$="-sublist"]');

navToggles.forEach( (toggle) => {
	toggle.addEventListener('click', () => {
		const toggleState = toggle.getAttribute('aria-expanded') == 'true';
		toggle.setAttribute('aria-expanded', !toggleState);
	});
});
const subToggles = document.querySelectorAll('button[aria-controls$="-sublist"]');

breakpoint.addEventListener('change', () => {
	subToggles.forEach( (toggle) => {
		toggle.setAttribute('aria-expanded', 'false');
	});
	breakpoint.matches
		? mainToggle.setAttribute('aria-expanded', 'true')
		: mainToggle.setAttribute('aria-expanded', 'false');
});