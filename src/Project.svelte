<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { projects } from "./data.js";
    import { link } from "svelte-navigator";

    let data = [];
    let limit = 6;

    function get() {
        data = projects.filter((item, i) => { return i < limit });
    }

    onMount(async() => {
        await get();
    })
    
    document.onscroll = function() {
        const { offsetHeight, clientHeight, scrollTop } = document.documentElement;
        const footerHeight = document.getElementById('footer').clientHeight;
        
        if (offsetHeight <= clientHeight + scrollTop + footerHeight) {
            limit += 6;
            get();
        }
    }
</script>

<svelte:head>
    <title>Muhammad Izza Alfiansyah - Projek</title>
</svelte:head>

<style>
    .link-project:hover img {
        filter: grayscale(.75);
    }
</style>

<div class="py-4 px-3 lg:px-0 flex flex-wrap">
    {#each data as item, i}
        <a href="/project/{i}" class="link-project w-full xl:w-1/3 md:w-1/2 p-2 lg:p-4 text-none transition" use:link>
            <div class="bg-white shadow transition hover:shadow-lg dark:bg-gray-900 dark:text p-6 rounded-lg" in:fly={{ y: 200, duration: 500 }}>
                <img class="h-40 rounded w-full object-cover object-center mb-6 w-full" src="img/project/{item.photo ? item.photo[0] : 'default.PNG'}" alt="">
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.team ? 'Team' : 'Individual'}</h3>
                <h2 class="text-lg font-medium title-font mb-4">{item.name}</h2>
            </div>
        </a>
    {/each}
</div>