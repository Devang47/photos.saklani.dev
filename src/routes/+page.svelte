<script lang="ts">
	import FullScreenImage from '$lib/components/FullScreenImage.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../lib/css/app.scss';
</script>

<FullScreenImage />

<section class="">
	<Header />

	<div class="images">
		{#each new Array(40) as _}
			<div class="image" />
		{/each}
	</div>
</section>

<style lang="postcss">
	section {
		@apply md:pl-[300px];
	}

	.images {
		@apply grid grid-cols-2 lg:grid-cols-3 gap-3 px-4 md:px-6 py-4 md:py-6 pb-20;
	}

	.image {
		@apply bg-gray-800 rounded-md w-full aspect-[1.25/1];
	}
</style>
