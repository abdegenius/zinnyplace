<script>
    import Header_2 from "../../lib/components/Header_2.svelte";
    import CategoryNav_3 from "../../lib/components/CategoryNav_3.svelte";
    import Footer from "../../lib/components/Footer.svelte"
</script>

<main>
    <Header_2 />
    <CategoryNav_3 />
    <slot />
    <Footer />
</main>