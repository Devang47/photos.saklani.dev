<section class="">
	<div class="container">
		<div class="image" />
	</div>
</section>

<style>
	:global(body) {
		@apply h-screen overflow-hidden;
	}

	section {
		@apply bg-black/80 fixed inset-0 w-full h-full flex items-center justify-center z-30;
	}

	.container {
		@apply w-10/12 max-w-2xl aspect-[1.25/1] max-h-[90vh] bg-white rounded-md;
	}
</style>
