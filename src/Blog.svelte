<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { link } from "svelte-navigator";
    import { blogs } from "./data.js";

    let data = [];
    let limit = 4;

    function get() {
        data = blogs.filter((item, i) => { return i < limit });
    }

    onMount(async() => {
        await get();
    })
    
    document.onscroll = function() {
        const { offsetHeight, clientHeight, scrollTop } = document.documentElement;
        const footerHeight = document.getElementById('footer').clientHeight;
        
        if (offsetHeight <= clientHeight + scrollTop + footerHeight) {
            limit += 4;
            get();
        }
    }
</script>

<svelte:head>
    <title>Muhammad Izza Alfiansyah - Postingan</title>
</svelte:head>

<style>
    .text-truncate {
        text-overflow: ellipsis;
        overflow-y: hidden;
    }
</style>

<div class="py-4 px-3 lg:px-0">
    <div class="flex flex-wrap">
        {#each data as item, i}
            <div class="w-full">
                <div class="flex relative pt-5 pb-5 sm:items-center w-full">
                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-200 dark:bg-gray-500 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex shadow-lg items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">{i + 1}</div>
                    <div class="flex-grow w-full w-16 md:pl-8 pl-6 bg-white shadow transition hover:shadow-lg dark:bg-gray-900 ml-2 lg:ml-5 py-10 flex sm:items-center items-start flex-col sm:flex-row" in:fly={{ y: 200, duration: 500 }}>
                        <img src="img/blog/{item.cover}" alt="" class="w-24 h-24 rounded-full flex-shrink-0 object-center object-cover">
                        <div class="flex-grow lg:p-5 mt-6 sm:mt-0">
                            <h2 class="font-medium title-font mb-1 text-xl">{item.title}</h2>
                            <div class="h-8 text-truncate">
                                <p class="leading-relaxed">{@html item.text}</p>
                            </div>
                            <a href="/blog/{i}" use:link class="bg-blue-600 px-4 py-1 text-xs rounded hover:bg-blue-500 transition shadow text-white focus:outline-none">
                                Selengkapnya
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>