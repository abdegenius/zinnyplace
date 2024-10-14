<script>
    import UserHeader_2 from "../../lib/components/UserHeader_2.svelte";
    import CategoryNav_3 from "../../lib/components/CategoryNav_3.svelte";
    import Footer from "../../lib/components/Footer.svelte";
</script>
<main class="">
    <UserHeader_2 />
    <CategoryNav_3 />
    <slot />
    <Footer />
</main>