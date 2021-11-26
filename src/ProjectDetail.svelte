<script>
    import { onMount } from 'svelte'
    import { projects } from './data.js'
    import { fly, blur } from 'svelte/transition'
    // import { link } from 'svelte-navigator'

    export let id

    let project = {
        description: '',
        language: [],
        photo: []
    }

    onMount(async () => {
        project = projects[id]
    })
</script>

<svelte:head>
    <title>Muhammad Izza Alfiansyah - Projek - {project.name}</title>
</svelte:head>

<div class="px-3 lg:px-0 w-full">
    <div class="text-center bg-white relative w-full dark:bg-gray-900 rounded shadow p-3 py-10" in:fly={{ duration: 500, y: 200 }}>
        <div class="absolute top-2 right-2">
            <div class="span bg-green-500 px-3 rounded shadow py-1 text-sm text-white">{project.team ? 'Team' : 'Individual'}</div>
        </div>
        <div class="w-full text-center">
            <h1 class="title-font sm:text-4xl text-3xl font-medium">
                {project.name}
            </h1>
            <div class="mt-1 mb-10">
                {#each project.language as item}
                    <div class="shadow rounded bg-gradient-to-r from-blue-400 to-blue-500 text-white text-center text-sm mx-1 inline-block w-32">
                        {item}
                    </div>
                {/each}
            </div>
        </div>
        
        <div>
            Deskripsi:
            <p class="leading-relaxed mb-3">{project.description}</p>
            Demo:
            <p class="leading-relaxed mb-3">
                {@html project.link ? '<a href=' + project.link + ' target="_blank" class="text-blue-500 hover:text-blue-600">' + project.link + '</a>' : '-'}
            </p>
        </div>

        <div class="flex flex-row flex-wrap justify-center w-full mt-10">
            {#each project.photo as photo}
                <div class="w-full md:w-1/2 p-1 md:p-2">
                    <img class="rounded shadow object-center object-cover lg:h-80 md:h-60 h-40 w-full" alt="" src="/img/project/{photo}" in:blur={{ duration: 1000 }} />
                </div>
            {:else}
                <div class="w-full md:w-1/2 p-1 md:p-2">
                    <img class="rounded shadow object-center object-cover lg:h-80 md:h-60 h-40 w-full" alt="" src="/img/project/default.PNG" in:blur={{ duration: 1000 }} />
                </div>
            {/each}
        </div>
    </div>
</div>
