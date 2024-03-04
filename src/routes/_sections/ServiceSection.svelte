<script lang="ts">
	import { browser } from '$app/environment';
	import { quintOut } from 'svelte/easing';
	import { fade, scale } from 'svelte/transition';

	let services = [
		{
			title: 'Creative Maestroes',
			url: 'https://images.pexels.com/photos/910193/pexels-photo-910193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
		},
		{
			title: 'Supafaast Delivery',
			url: 'https://images.pexels.com/photos/760728/pexels-photo-760728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
		},
		{
			title: 'Product Design',
			url: 'https://images.pexels.com/photos/4033702/pexels-photo-4033702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
		},
		{
			title: 'Digital Marketing',
			url: 'https://images.pexels.com/photos/3826681/pexels-photo-3826681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
		}
	];

	let imageVisible = false;

	$: console.log(imageVisible);
	$: console.log(hoveredService);

	let top = 0;
	let left = 0;
	// let hoveredService = null;
	let hoveredService: { title: string; url: string } | null = null;

	function handleMouseOver(event: { clientY: number; clientX: number }) {
		// only in browser and screens above tailwindcss md size
		if (browser && window.innerWidth > 768) {
			console.log(event);
			top = event.clientY - 20;
			left = event.clientX + 10;
			imageVisible = true;

			// let's modify this to only show on the right side of the screen, and not at the exact location of the pointer, but a few pixels right of the
		}
	}
</script>

<div class="relative bg-black py-20">
	<div class="container flex flex-col">
		<span class="font-sub text-xs uppercase tracking-widest opacity-50">Services</span>
	</div>

	<div class="container mt-10 flex cursor-default flex-col md:mt-16">
		{#each services as item, index}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="relative flex flex-col items-start space-y-2 border-b border-white/30 border-b-white/10 py-10 text-white/30 transition-all duration-300 hover:border-b-white/30 hover:text-white md:flex-row md:items-end md:space-x-14"
				on:mousemove={(event) => {
					hoveredService = item;
					handleMouseOver(event);
					console.log('mouse entered');
				}}
				on:mouseleave={() => {
					imageVisible = false;
					console.log('mouse left');
				}}
			>
				<span class="text-xs font-extralight">
					0{index + 1}.
				</span>
				<h2 class="text-3xl font-light tracking-tight md:text-4xl">{item.title}</h2>
				<img
					class="aspect-square rounded-lg object-cover md:hidden"
					src={item.url + index}
					alt=""
				/>
			</div>
		{/each}
	</div>

	{#if imageVisible && hoveredService}
		<div
			class="pointer-events-none fixed left-0 top-0 flex h-full w-full items-center justify-center"
		>
			<img
				transition:scale={{ duration: 1000, start: 0.5, delay: 0, easing: quintOut }}
				class="pointer-events-none fixed h-96 w-96 rounded-3xl object-cover"
				src={hoveredService.url}
				alt=""
				style="top: {top}px; left: {left}px;"
			/>
		</div>
	{/if}
</div>
