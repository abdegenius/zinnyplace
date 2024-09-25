<script>
	import Footer from '$lib/components/Footer.svelte';
	import CategoryNav from '$lib/components/CategoryNav.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<main class="w-full min-h-screen m-0 p-0 bg-white">
	<Header />
	<CategoryNav />
	<slot />
	<Footer />
</main>
