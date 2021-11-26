<script>
    import { onMount } from 'svelte'
    import { paths } from '../data.js'
    import { link } from 'svelte-navigator'

    let showNav = false
    let dark = localStorage.getItem('dark-mode')

    function toggleNavMobile() {
        const width = document.body.clientWidth
        if (width <= 770) {
            showNav = !showNav
        }
    }

    function toggleDark() {
        dark = !dark
        checkMode()
    }

    function checkMode() {
        if (dark) {
            localStorage.setItem('dark-mode', true)
            document.documentElement.classList.add('dark')
        } else {
            localStorage.removeItem('dark-mode')
            document.documentElement.classList.remove('dark')
        }
    }

    onMount(async () => {
        await checkMode()
    })
</script>

<div class="sticky top-0 left-0 right-0 bg-white dark:bg-gray-900 z-20 shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div class="flex justify-start lg:w-0 lg:flex-1">
                <a use:link href="/">
                    <span class="sr-only">Iansyah</span>
                    <img class="h-8 w-auto sm:h-10" src="/img/logo.png" alt="" />
                </a>
            </div>
            <div class="-mr-2 -my-2 md:hidden">
                <button type="button" on:click={toggleNavMobile} class="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                    <span class="sr-only">Open menu</span>
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            <nav class="hidden md:flex space-x-10">
                {#each paths as item}
                    <a use:link href={item.link} class="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                        <i class="{item.icon} w-6 text-indigo-600" />
                        {item.name}
                    </a>
                {/each}
                <button on:click={toggleDark} class="focus:outline-none text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
                    {dark ? '🌙' : '☀️'}
                </button>
            </nav>
        </div>
    </div>

    <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-900 divide-y-2 divide-gray-50 {showNav ? '' : 'hidden'}">
            <div class="pt-5 pb-6 px-5">
                <div class="flex items-center justify-between">
                    <div>
                        <img class="h-8 w-auto" src="/img/logo.png" alt="Workflow" />
                    </div>
                    <div class="-mr-2">
                        <button type="button" on:click={toggleNavMobile} class="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span class="sr-only">Close menu</span>
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="mt-6">
                    <nav class="grid gap-y-8">
                        {#each paths as item}
                            <a use:link href={item.link} on:click={toggleNavMobile} class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                                <i class="flex-shrink-0 h6 w-6 text-indigo-600 {item.icon}" />
                                <span class="ml-3 text-base font-medium text-gray-900 dark:text-gray-300">
                                    {item.name}
                                </span>
                            </a>
                        {/each}
                        <button on:click={toggleDark} class="focus:outline-none text-base text-center font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
                            {dark ? '🌙' : '☀️'}
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>