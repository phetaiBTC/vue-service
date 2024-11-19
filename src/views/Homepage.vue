<template>
    <div>
        <button>hello world</button>
        <div class="border p-10 w-[100vh] flex flex-wrap gap-10 rounded-[20px]">
            <div class="flex-col p-5 border rounded-[10px]">
                <span>Watchers</span>
                <div class="flex items-center justify-center mt-4">
                    <input v-model="count" type="number" class="w-[100px] mr-[10px]" />
                    <p>Current Count: {{ count }}</p>
                </div>
            </div>
            <div class="flex-col p-5 border rounded-[10px]">
                <span>Computed Properties</span>
                <div class="flex items-center justify-center mt-4">
                    <input type="checkbox" v-model="check" class="mr-2">
                    <span :style="{ color: color }">select</span>
                </div>
            </div>
            <div class="flex-col p-5 border rounded-[10px]">
                <span>Class and Style bindings</span>
                <div class="flex items-center justify-center mt-4">
                    <input type="checkbox" v-model="classBinding" class="mr-2">
                    <span :class="classBinding === true ? 'Border' : 'Radius'"></span>
                </div>
            </div>
            <div class="flex-col p-5 border rounded-[10px]">
                <span>Conditional Rendering</span>
                <div class="flex items-center justify-center mt-4">
                    <button @click="isVisible = !isVisible" class="mr-6">click</button>
                    <p v-if="isVisible">visible!</p>
                    <p v-else>hidden!</p>
                </div>
            </div>
            <div class="flex-col p-5 border rounded-[10px]">
                <span>Event Handling</span>
                <div class="flex items-center justify-center mt-4">
                    <button @click="handleClick">Click Me!</button>
                </div>
            </div>
            <div class="flex-col p-5 border rounded-[10px]">
                <span>Lifecycle Hooks</span>
                <div class="flex items-center justify-center mt-4">
                    <h1>{{ onMoun }}</h1>
                </div>
            </div>
            <a-button>Add</a-button>
            <a-button type="primary">Primary Button</a-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';

const check = ref<boolean>();
const classBinding = ref<boolean>();
const isVisible = ref<boolean>();
const onMoun = ref<string>();
const count = ref<number>(0);

const color = computed(() => {
    return check.value ? "green" : "red";
});
const handleClick = () => {
    alert('Button clicked!');
};

onMounted(() => {
    onMoun.value = "Hi"
})

watch(count, (newValue, oldValue) => {
    console.log(`Count changed from ${oldValue} to ${newValue}`);
});

</script>

<style scoped>
.Border {
    border: 2px solid red;
    width: 100px;
    height: 20px;
}

.Radius {
    border-radius: 20px;
    border: 2px solid red;
    width: 100px;
    height: 20px;
}
</style>