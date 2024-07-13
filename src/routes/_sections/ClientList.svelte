<script lang="ts">
	let logoPaths = [
		'/logos/logo1.png',
		'/logos/logo2.png',
		'/logos/logo3.png',
		'/logos/logo4.png',
		'/logos/logo5.png',
		'/logos/logo6.png',
		'/logos/logo7.png',
		'/logos/logo8.png',
		'/logos/logo9.png',
		'/logos/logo10.png',
		'/logos/logo11.png',
		'/logos/logo12.png',
		'/logos/logo13.png',
		'/logos/logo14.png',
		'/logos/logo15.png',
		'/logos/logo16.png'
	];
</script>

{#each logoPaths as item}
	<img src={item} alt="logo" class="h-12 grayscale" />
{/each}
