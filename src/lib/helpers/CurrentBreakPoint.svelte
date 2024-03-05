<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let currentBreakpoint = '';

	const updateBreakpoint = () => {
		const breakpoints = {
			sm: '(min-width: 640px)',
			md: '(min-width: 768px)',
			lg: '(min-width: 1024px)',
			xl: '(min-width: 1280px)',
			'2xl': '(min-width: 1536px)'
		};

		const update = () => {
			for (const breakpoint in breakpoints) {
				if (window.matchMedia(breakpoints[breakpoint as keyof typeof breakpoints]).matches) {
					currentBreakpoint = breakpoint;
				}
			}
		};

		const mediaQueryList = Object.values(breakpoints).map((breakpoint) =>
			window.matchMedia(breakpoint)
		);
		mediaQueryList.forEach((mediaQuery) => mediaQuery.addListener(update));

		update();

		onDestroy(() => {
			mediaQueryList.forEach((mediaQuery) => mediaQuery.removeListener(update));
		});
	};

	onMount(updateBreakpoint);
</script>

<div class="fixed bottom-0 left-0 bg-gray-800 p-2 text-white">
	<span>{currentBreakpoint}</span>
</div>

<style>
	div {
		z-index: 9999;
	}
</style>
