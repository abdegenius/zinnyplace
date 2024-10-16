<script>
	import Footer from '$lib/components/Footer.svelte';
	import ShopperHeader from '$lib/components/ShopperHeader.svelte';
</script>

<main class="w-full min-h-screen m-0 p-0 bg-white">
	<ShopperHeader />
	<slot />
	<Footer />
</main>
