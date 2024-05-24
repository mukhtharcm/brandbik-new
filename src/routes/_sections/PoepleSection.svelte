<script lang="ts">
	import PeopleList from '../_components/PeopleList.svelte';
</script>

<div class="bg-red relative py-20">
	<div
		class="pre-services-container container flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end lg:gap-20"
	>
		<span
			class="pre-services-heading font-unbounded flex-1 text-4xl font-medium leading-snug lg:text-7xl"
		>
			<span class="inline-block font-light">The</span>
			<span class="inline-block"
				>BrandBik
				<span class="font-light">Team</span>
			</span>
		</span>
		<span class="pre-services-sub font-satoshi inline-block flex-1 text-2xl font-light lg:w-1/3">
			The Team that makes it all happen. Meet the people behind the magic.
		</span>
	</div>
</div>

<PeopleList />
