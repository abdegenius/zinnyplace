<script>
	import Footer from '$lib/components/Footer.svelte';
	import UserHeader from '../../lib/components/UserHeader.svelte';
</script>

<main class="w-full min-h-screen m-0 p-0 bg-white">
	<UserHeader />
	<slot />
	<Footer />
</main>
