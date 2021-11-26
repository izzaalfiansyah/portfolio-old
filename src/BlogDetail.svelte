<script>
    import { onMount } from "svelte";
    import { blogs } from "./data.js";
    import { fly, blur } from "svelte/transition";
    import { link } from "svelte-navigator";

    export let id;

    let blog = {
        text: ''
    };

    onMount(async() => {
        blog = blogs[id];
    })
</script>

<svelte:head>
    <title>Muhammad Izza Alfiansyah - Postingan - {blog.title}</title>
</svelte:head>

<div class="py-4 px-3 lg:px-0 w-full">
    <div class="flex items-center justify-center flex-col">
        <img class="lg:h-80 h-60 mb-10 object-cover object-center rounded" alt="" src="/img/blog/{blog.cover}" in:blur={{ duration: 1000 }}>
        <div class="text-center w-full bg-white dark:bg-gray-900 rounded shadow p-3" in:fly={{ y: 200, duration: 500 }}>
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">{blog.title}</h1>
            <div class="mb-8 leading-relaxed sm:text-sm text-left">
                {@html blog.text.replace(/<td>/gi, '<td class="p-1 border-2 border-gray-200 dark:border-gray-700" style="min-width: 100px;">') }
            </div>
            <div class="flex flex-row text-sm">
                <div class="flex-1 text-left">
                    <span class="text-green-500">{blog.date}</span>
                </div>
                <div class="flex-1 text-right">
                    <a href="/blog" class="text-blue-500 hover:text-blue-700" use:link>Kembali</a>
                </div>
            </div>
        </div>
    </div>
</div>