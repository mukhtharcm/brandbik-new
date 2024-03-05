<script lang="ts">
	import { dev } from '$app/environment';
	import { inview } from 'svelte-inview';
	import { quintOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';

	let isInView = false;
</script>

<div
	use:inview={{
		threshold: 0.5,
		unobserveOnEnter: true
	}}
	on:inview_change={(event) => {
		console.log(event.detail);
		const { inView, entry, scrollDirection, observer, node } = event.detail;
		isInView = inView;
	}}
	class="mt-20 bg-gradient-to-b from-black to-blue-800 pb-20 md:mt-40 md:h-[80svh]"
>
	<div class="container max-w-4xl">
		{#if isInView}
			<div
				transition:scale={{ duration: 1000, start: 0.5, easing: quintOut }}
				class="isolate flex flex-col items-start justify-between rounded-3xl bg-white/5 p-8 ring-1 ring-white/30 md:p-16"
			>
				<div class="flex flex-col items-start md:flex-row md:justify-between">
					<span class="text-2xl font-light tracking-wider md:text-3xl">
						Don't want to miss anything?
					</span>
					<div class="hidden w-1/2 md:flex">
						<!--  -->
					</div>
					<span class="mt-4 font-light text-white/80">
						Sign up for our newsletter to stay updated on the winning trends before they go viral
					</span>
				</div>
				<div class="mt-12 flex w-full flex-col justify-between gap-4 md:mt-20 md:flex-row">
					<input
						type="text"
						placeholder="Enter your email address"
						class="mr-4 w-full border-0 border-b border-b-white/80 bg-transparent px-0 focus:border-b focus:border-b-white/80 focus:ring-0"
					/>
					<button class="rounded-full px-6 py-3 ring-1 ring-white/30">Subscribe</button>
				</div>
			</div>
		{/if}
	</div>
</div>
