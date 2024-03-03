<script>
	import '../app.pcss';

	// Supports weights 100-900
	import '@fontsource-variable/inter-tight';
	// Supports weights 400-700
	import '@fontsource-variable/arimo';
</script>

<div class="bg-black text-gray-100">
	<slot />
</div>

<svelte:head>
	<title>Outd</title>
</svelte:head>
