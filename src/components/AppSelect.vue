<script setup>
    import AppButton from '@/components/AppButton.vue';
    import { XMarkIcon } from '@heroicons/vue/24/outline';
    import { validateSelectOptions } from '../validators';
    
    const props = defineProps({
        options: {
            required: true,
            type: Array,
            validator: validateSelectOptions
        }, 
        placeholder: {
            default: 'Rest',
            type: String,
        },
        selected: Number
    })
</script>

<template>
    <div class="flex gap-2">
        <AppButton>
            <XMarkIcon class="h-8"/>
        </AppButton>            
        <select class="w-full truncate rounded bg-gray py-1 px-2 text-2xl">
            <option selected disabled value="">{{ placeholder }}</option>
            <option 
                v-for="{value, label} in options" 
                :key="value" 
                :value="value"
                :selected="value === selected"
            >
                {{ label }}
            </option>                
        </select>
    </div>
</template>
