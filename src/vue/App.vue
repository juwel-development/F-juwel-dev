<template>
    <div class="app">
        <IndexSection />
    </div>
</template>

<script lang="ts">
	import Vue from 'vue';
    import IndexSection from './sections/Index'


	export default Vue.extend({
        components:{
        	IndexSection
        }
    });
</script>