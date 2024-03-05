<script lang="ts">
	let currentYear = new Date().getFullYear();
</script>

<footer class="bg-gradient-to-r from-purple-800 via-black to-blue-800 py-20 md:pb-20 md:pt-32">
	<div class="container flex flex-col">
		<div class="flex flex-col gap-4 md:flex-row md:gap-12">
			{#each Array(3) as item}
				<div class="flex flex-col">
					<span class="text-2xs font-light text-white/50"> General Enquiries </span>
					<span class="text-base font-light">
						<a href="mailto:blabla@mail.co" class="hover:underline"> blabla@mail.co </a>
					</span>
				</div>
			{/each}
		</div>

		<span
			class="mt-4 w-full overflow-hidden text-justify text-7xl font-bold uppercase tracking-widesttt text-white/10 sm:text-8xl md:text-8xl lg:text-9xl xl:text-11xl"
		>
			BrandBik
		</span>

		<hr class="my-10 border-white/30" />

		<p class="text-xs font-light text-white/30 transition-all duration-300 hover:text-white/90">
			<span class="uppercase tracking-wider"> BrandBik </span>
			&copy; {currentYear} All rights reserved
		</p>
	</div>
</footer>
