<script lang="ts">
	let testimonials: {
		testimonial: string;
		author: string;
		position: string;
	}[] = [
		{
			testimonial:
				'Working with BrandBik has been an amazing experience. Their team is highly skilled and delivered exceptional results.',
			author: 'John Smith',
			position: 'CEO, ABC Company'
		},
		{
			testimonial:
				'I am extremely satisfied with the services provided by BrandBik. They understood my requirements perfectly and delivered a top-notch solution.',
			author: 'Jane Doe',
			position: 'Marketing Manager, XYZ Corporation'
		},
		{
			testimonial:
				'BrandBik exceeded my expectations in every aspect. Their attention to detail and commitment to quality is commendable.',
			author: 'David Johnson',
			position: 'CTO, PQR Enterprises'
		}
	];

	let currentTestimonial = 0;
</script>

<div class="relative bg-black pb-16 pt-20">
	<div class="container flex flex-col items-center">
		<span class="text-center text-2xl text-white/70">
			"{testimonials[currentTestimonial].testimonial}"
		</span>
		<img src="" alt="" class="h-16 w-16 rounded-full" />
	</div>
</div>
