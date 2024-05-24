<script lang="ts">
	import { ArrowRight, ArrowRightCircle, Menu } from 'lucide-svelte';

	import { inview } from 'svelte-inview';
	import { quintInOut, quintOut } from 'svelte/easing';
	import { fade, fly, scale, slide } from 'svelte/transition';
	import ServiceSection from './_sections/ServiceSection.svelte';
	import FeaturedClients from './_sections/FeaturedClients.svelte';
	import TestimonialsSection from './_sections/TestimonialsSection.svelte';
	import NewsLetterSection from './_sections/NewsLetterSection.svelte';
	import ContactForm from './_sections/ContactForm.svelte';
	import Footer from './_sections/Footer.svelte';
	import PeopleList from './_components/PeopleList.svelte';
	import PoepleSection from './_sections/PoepleSection.svelte';

	let isHeaderInView: boolean = false;
	let introTextInView: boolean = false;
	let isAchievementsInView: boolean = false;
</script>

<div class="relative flex h-screen flex-col">
	<div
		class="relative flex flex-1 flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-black to-indigo-900"
	>
		<div class="container mt-4 flex h-full flex-col">
			<div class="container fixed inset-x-0 top-8 z-10 flex flex-row items-center justify-between">
				<span class="text-2xl font-semibold uppercase tracking-widesttt">Outd</span>
				<div class="flex flex-row items-center space-x-2">
					<span class="hidden text-sm font-light md:block"> Contact Us </span>
					<Menu size={24} />
				</div>
			</div>

			<div
				use:inview={{
					threshold: 0.5,
					unobserveOnEnter: true
				}}
				on:inview_change={(event) => {
					console.log(event.detail);
					const { inView, entry, scrollDirection, observer, node } = event.detail;
					isHeaderInView = inView;
				}}
				class="my-10 flex h-full flex-col items-center justify-center space-y-12 md:space-y-16"
			>
				{#if isHeaderInView}
					<span
						in:fly={{
							delay: 0,
							duration: 1000,
							// x: 100,
							y: -100,
							opacity: 0.5,
							easing: quintOut
						}}
						class="font-sub text-xs font-light uppercase tracking-widesttt md:text-sm"
					>
						Digital Creative
					</span>
					<h1
						in:fly={{
							delay: 0,
							duration: 2000,
							// x: 100,
							y: 150,
							opacity: 0.5,
							easing: quintOut
						}}
						class="max-w-3xl text-center text-5xl font-light leading-tight tracking-tighter md:text-7xl md:leading-snug"
					>
						<span
							class="bg-contain bg-right bg-no-repeat pr-24 md:pr-40"
							style="background-image: url(/header-span.png);">Where</span
						>
						Imagination
						<span
							style="background-image: url(/header-span.png);"
							class="bg-contain bg-left bg-no-repeat pl-24 md:pl-40"
						>
							Meet</span
						> Strategy
					</h1>
					<button
						class="flex flex-row items-center justify-center gap-2 rounded-full px-6 py-3 text-sm ring-1 ring-white/30"
					>
						Start Collaboration
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-6 w-6"
						>
							<path
								fill-rule="evenodd"
								d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				{/if}
			</div>
		</div>
	</div>
	<div
		class="absolute bottom-0 left-0 right-0 h-[30svh] bg-gradient-to-t from-black to-transparent"
	></div>
</div>
<div class="mx-auto grid max-w-5xl place-items-center bg-black py-32 md:py-60">
	<div
		use:inview={{
			threshold: 0.5,
			unobserveOnEnter: true
		}}
		on:inview_change={(event) => {
			console.log(event.detail);
			const { inView, entry, scrollDirection, observer, node } = event.detail;
			introTextInView = inView;
		}}
		class="container text-start text-2xl font-light md:text-center md:text-4xl"
	>
		{#if introTextInView}
			<span
				in:scale={{
					delay: 400,
					duration: 2000,
					opacity: 0.0,
					easing: quintOut,
					start: 0.5
				}}
			>
				&nbsp; &nbsp; We're more than just a marketing agency – we're your partners in propelling
				your brand forward. With innovative strategies and tireless dedication, we navigate the
				digital landscape, helping your brand ride smoothly towards its goals.
			</span>
		{/if}
	</div>
</div>
<div class="relative">
	<div class="relative flex flex-col bg-gradient-to-br from-blue-800 via-black to-purple-800 py-60">
		<div
			use:inview={{
				threshold: 0.5,
				unobserveOnEnter: true
			}}
			on:inview_change={(event) => {
				console.log(event.detail);
				const { inView, entry, scrollDirection, observer, node } = event.detail;
				isAchievementsInView = inView;
				console.log(event.detail);
			}}
			class="container flex flex-col"
		>
			<span class="z-10 text-center font-sub text-2xs uppercase tracking-widesttt text-white/50">
				Our Achievement
			</span>
		</div>
		<div class="container z-10 mt-20 grid gap-8 md:grid-cols-3">
			{#if isAchievementsInView}
				<div
					in:fly={{
						delay: 0,
						duration: 1000,
						// x: 100,
						y: 300,
						opacity: 0.5,
						easing: quintOut
					}}
					class="isolate flex flex-col justify-between rounded-xl bg-white/5 p-4 ring-1 ring-white/30 md:aspect-square"
				>
					<h2 class="mb-16 text-lg font-normal">Projects Completed</h2>
					<span class="text-7xl font-extralight"> 242+ </span>
					<hr class="mb-4 mt-8 h-0.5 rounded-full border-white/20" />
					<span class="text-xs leading-snug"
						>Successful liftoffs into the digital cosmos, each leaving a trail of satisfied clients</span
					>
				</div>
				<div
					in:fly={{
						delay: 0,
						duration: 1000,
						// x: 100,
						y: 300,
						opacity: 0.5,
						easing: quintOut
					}}
					class="isolate flex flex-col justify-between rounded-xl bg-white/5 p-4 ring-1 ring-white/30 md:aspect-square"
				>
					<h2 class="mb-16 text-lg font-normal">Brands Associated</h2>
					<span class="text-7xl font-extralight"> 126+ </span>
					<hr class="mb-4 mt-8 h-0.5 rounded-full border-white/20" />
					<span class="text-xs leading-snug"
						>Successful liftoffs into the digital cosmos, each leaving a trail of satisfied clients</span
					>
				</div>
				<div
					in:fly={{
						delay: 0,
						duration: 1000,
						// x: 100,
						y: 300,
						opacity: 0.5,
						easing: quintOut
					}}
					class="isolate flex flex-col justify-between rounded-xl bg-white/5 p-4 ring-1 ring-white/30 md:aspect-square"
				>
					<h2 class="mb-16 text-lg font-normal">Startups we worked with</h2>
					<span class="text-7xl font-extralight"> 59+ </span>
					<hr class="mb-4 mt-8 h-0.5 rounded-full border-white/20" />
					<span class="text-xs leading-snug"
						>Successful liftoffs into the digital cosmos, each leaving a trail of satisfied clients</span
					>
				</div>
			{/if}
		</div>
	</div>
	<div
		class="absolute left-0 right-0 top-0 h-[80svh] bg-gradient-to-b from-black to-transparent"
	></div>
</div>

<ServiceSection />

<FeaturedClients />

<TestimonialsSection />

<NewsLetterSection />

<PoepleSection />

<ContactForm />

<Footer />
