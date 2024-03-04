<script>
	import ClientList from './ClientList.svelte';
</script>

<div class="flex flex-col bg-black py-40">
	<span
		class="mb-10 mt-20 text-center font-sub text-xs uppercase leading-tight tracking-widesttt text-white/50"
	>
		Featured Clients
	</span>

	<div class="relative flex overflow-x-hidden">
		<div
			class="animate-marquee flex flex-row items-center space-x-20 whitespace-nowrap py-12 pl-20"
		>
			<ClientList />
		</div>

		<div
			class="animate-marquee2 absolute top-0 flex flex-row items-center space-x-20 whitespace-nowrap py-12 pl-20"
		>
			<ClientList />
		</div>

		<div class="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent"></div>
		<div class="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent"></div>
	</div>
</div>
