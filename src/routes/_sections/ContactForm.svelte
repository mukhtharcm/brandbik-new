<script lang="ts">
	import { inview } from 'svelte-inview';
	import { fly, scale } from 'svelte/transition';

	let isInView = false;
</script>

<div
	use:inview={{
		threshold: 0.5,
		unobserveOnEnter: false
	}}
	on:inview_change={(event) => {
		console.log(event.detail);
		const { inView, entry, scrollDirection, observer, node } = event.detail;
		isInView = inView;
	}}
	class="bg-black py-20 md:py-32"
>
	<div class="container flex max-w-6xl flex-col md:flex-row">
		<div class="mb-8 flex-1 md:mb-0">
			<span class="text-4xl font-light md:text-7xl"> Let's Talk </span>
		</div>
		{#if isInView}
			<form transition:fly={{ x: 300, duration: 1000 }} class="flex flex-[2] flex-col gap-2">
				<div class="flex flex-col gap-2 md:flex-row">
					<input
						type="text"
						class="w-full rounded border-none bg-white/5 p-4 ring-0 focus:ring-0"
						placeholder="Name"
					/>
					<input
						type="text"
						class="w-full rounded border-none bg-white/5 p-4 ring-0 focus:ring-0"
						placeholder="Company"
					/>
				</div>
				<div class="flex flex-col gap-2 md:flex-row">
					<input
						type="email"
						class="w-full rounded border-none bg-white/5 p-4 ring-0 focus:ring-0"
						placeholder="Email"
					/>
					<input
						type="tel"
						class="w-full rounded border-none bg-white/5 p-4 ring-0 focus:ring-0"
						placeholder="Phone"
					/>
				</div>
				<textarea
					class="h-40 w-full rounded border-none bg-white/5 p-4 ring-0 focus:ring-0 md:h-60"
					placeholder="Your Message"
				>
				</textarea>
				<button
					class="mt-4 flex w-fit flex-row items-center justify-center gap-2 rounded-full px-6 py-3 text-sm ring-1 ring-white/30 transition-all duration-300 hover:bg-white/10"
				>
					Submit
				</button>
			</form>
		{/if}
	</div>
</div>
