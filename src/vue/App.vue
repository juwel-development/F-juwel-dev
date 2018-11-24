<template>
    <div class="app">
        <IndexSection/>
        <a id="why"></a>
        <WhySection/>
    </div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import IndexSection from './sections/Index';
	import WhySection from './sections/Why';

	export default Vue.extend({
		components: {
			IndexSection,
			WhySection
		}
	});
</script>