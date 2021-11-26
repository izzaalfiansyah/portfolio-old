<script>
    import { social_media } from '../data.js'
</script>

<div class="w-full bg-white shadow border-t-2 dark:border-gray-600 dark:bg-gray-900" align="center" id="footer">
    <div class="xl:px-40 pb-9 lg:px-20 md:px-10 sm:px-5 px-10">
        <div class="w-full pt-9 flex flex-row space-y-2 justify-center">
            <div class="w-full">
                <div class="flex justify-center flex-row space-x-5">
                    {#each social_media as item}
                        <a href={item.link} target="_blank" class="hover:text-blue-500 dark:text-gray-300">
                            <i class={item.icon} />
                        </a>
                    {/each}
                </div>
            </div>
        </div>
        <div class="opacity-60 pt-2 dark:text-gray-300">
            <p>&copy; Muhammad Izza Alfiansyah.</p>
        </div>
    </div>
</div>