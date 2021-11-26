<script>
    import { blur } from "svelte/transition";

    let count = 20;
</script>

<svelte:head>
    <title>Muhammad Izza Alfiansyah - Galeri</title>
</svelte:head>

<style>
    img:hover {
        filter: grayscale(1);
    }
</style>

<div class="py-4 px-3 lg:px-0">
    <div class="flex flex-wrap">
        {#each Array(count) as item, i}
            <a target="_blank" href="img/gallery/{count - i}.jpeg" class="p-1 lg:p-2 {(i + 1) % 4 ? 'w-1/3' : 'w-full'}" in:blur={{ duration: 1000 }}>
                <img src="img/gallery/{count - i}.jpeg" alt="" class="lg:h-80 md:h-60 h-40 object-cover object-center block w-full transition hover:shadow-lg rounded">
            </a>
        {/each}
        <a target="_blank" href="img/gallery/0.jpeg" class="p-1 lg:p-2 {(count + 1) % 4 ? 'w-1/3' : 'w-full'}" in:blur={{ duration: 1000 }}>
            <img src="img/gallery/0.jpeg" alt="" class="lg:h-80 md:h-60 h-40 object-cover object-center block w-full transition hover:shadow-lg rounded">
        </a>
    </div>
</div>