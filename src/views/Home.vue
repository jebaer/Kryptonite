<template>
    <div class="flex flex-col justify-center w-full items-center">
        <h1
            class="text-3xl text-custom-white
         font-bold font-title"
        >
            KRYPTONITE
        </h1>
        <h2 class="text-xl text-custom-primary font-title">
            LIVE STREAM THE CRYPTOCURRENCIES MARKET
        </h2>
        <Hello />
    </div>
</template>

<script>
import Hello from 'Components/Hello.vue';

export default {
    name: 'Home',
    components: {
        Hello,
    },
};
</script>
