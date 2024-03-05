<script lang="ts">
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { elasticInOut, quintOut } from 'svelte/easing';
	import { fly, slide } from 'svelte/transition';

	let testimonials: {
		testimonial: string;
		author: string;
		position: string;
	}[] = [
		{
			testimonial:
				'Working with BrandBik has been an amazing experience. Their team is highly skilled and delivered exceptional results. They went above and beyond to understand our business needs and provided tailored solutions that helped us achieve our goals. I highly recommend BrandBik for their professionalism, expertise, and dedication to client satisfaction.',
			author: 'Cameron Williamson',
			position: 'Marketing Coordinator, Sample Inc.'
		},
		{
			testimonial:
				'I am extremely satisfied with the services provided by BrandBik. They understood my requirements perfectly and delivered a top-notch solution. The team at BrandBik is not only talented but also very responsive and proactive. They kept me updated throughout the project and ensured that all my concerns were addressed promptly. I would definitely choose BrandBik for any future projects.',
			author: 'Jane Doe',
			position: 'Marketing Manager, XYZ Corporation'
		},
		{
			testimonial:
				'BrandBik exceeded my expectations in every aspect. Their attention to detail and commitment to quality is commendable. From the initial consultation to the final delivery, they demonstrated professionalism and expertise. The team at BrandBik is passionate about what they do and it reflects in their work. I am impressed with their ability to deliver innovative solutions that drive results. I highly recommend BrandBik for any digital marketing or web development needs.',
			author: 'David Johnson',
			position: 'CTO, PQR Enterprises'
		}
	];

	let currentTestimonial = 0;

	onMount(() => {
		const interval = setInterval(() => {
			currentTestimonial =
				currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1;
		}, 10000);

		return () => clearInterval(interval);
	});
</script>

<div class="container relative h-[60svh] bg-black pb-16 pt-20">
	{#key currentTestimonial}
		<div class="container flex max-w-3xl flex-col items-start md:items-center">
			<span class="mb-10 text-lg text-white/70 md:text-center md:text-2xl">
				"{testimonials[currentTestimonial].testimonial}"
			</span>
			<img src="https://placehold.co/36x36/red/black" alt="" class="h-12 w-12 rounded-full" />
			<span class="mt-4 text-xl text-white">{testimonials[currentTestimonial].author}</span>
			<span class="text-base tracking-wide text-white"
				>{testimonials[currentTestimonial].position}</span
			>
			<div class="mt-8 flex flex-row space-x-2">
				<button
					class="rounded-full p-4 ring-1 ring-white/30 focus:outline-none md:absolute md:left-0 md:top-1/2 md:my-auto"
					on:click={() => {
						currentTestimonial =
							currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1;
					}}
				>
					<ArrowLeft size={24} />
				</button>
				<button
					class="rounded-full p-4 ring-1 ring-white/30 focus:outline-none md:absolute md:right-0 md:top-1/2 md:my-auto"
					on:click={() => {
						currentTestimonial =
							currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1;
					}}
				>
					<ArrowRight size={24} />
				</button>
			</div>
		</div>
	{/key}
</div>
