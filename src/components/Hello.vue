<template>
    <section class="m-12">
        <div v-if="!display" class="input-group">
            <input
                v-model="name"
                type="text"
                placeholder="What's your name?"
                class="bg-transparent text-main-base border-0 focus:border-0 border-b-2 min-w-full
                     placeholder-custom-blue"
                :class="{
                    'border-main-base ': !name,
                    'border-red-400': isInvalid,
                    'border-green-400': !isInvalid,
                }"
                @keyup="validate"
            />
            <button
                class="bg-custom-yellow hover:bg-custom-red border-solid border-2
                 border-custom-blue text-lg font-semibold min-w-full mt-3 rounded-sm"
                @click="handleClick"
            >
                &#128640; SEND
            </button>
        </div>
        <p v-if="display" class="text-xl text-main-base font-bold">
            &#128075; Hello {{ getName.toUpperCase() }} ! &#128075;
        </p>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import validation from 'Mixins/validation';

export default {
    name: 'Hello',
    mixins: [validation],
    data() {
        return {
            name: null,
            display: false,
            isInvalid: null,
        };
    },
    computed: {
        ...mapGetters(['getName']),
    },
    methods: {
        handleClick() {
            if (this.name && this.nameValidation()) {
                this.display = true;
                this.setName({ name: this.name });
            }
        },
        validate() {
            this.isInvalid = !this.nameValidation();
        },
        ...mapActions({
            setName: 'SET_NAME',
        }),
    },
};
</script>
