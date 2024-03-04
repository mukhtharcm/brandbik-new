<script lang="ts">
	let logoPaths = [
		'/sample-logo.png',
		'/samplelogo2.png',
		'/samplelogo3.png',
		'/samplelogo4.png',
		'/samplelogo5.png'
	];
</script>

{#each logoPaths as item}
	<img src={item} alt="logo" class="grayscale" />
{/each}
