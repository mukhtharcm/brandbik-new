<script lang="ts">
	// array of 3 objects
	let people = [
		{
			name: 'John Doe',
			role: 'CEO',
			image:
				'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
		},
		{
			name: 'Jane Smith',
			role: 'CTO',
			image:
				'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
		},
		{
			name: 'Alex Johnson',
			role: 'CFO',
			image:
				'https://images.pexels.com/photos/6899935/pexels-photo-6899935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
		}
	];
</script>

<div class="bg-black pb-20">
	<div class="container">
		<div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
			{#each people as person, index}
				<div class=" relative h-[500px]">
					<div class="relative h-full w-full">
						<img src={person.image} alt="" class="h-full w-full object-cover" />
					</div>

					<div
						class="bg-custom-dark font-satoshi absolute inset-x-0 bottom-0 bg-opacity-80 py-4 text-center text-white"
					>
						<h3 class="text-2xl font-medium">{person.name}</h3>
						<p class="text-lg font-light">{person.role}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
