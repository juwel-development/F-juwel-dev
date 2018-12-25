<template>
    <div class="app">
        <IndexSection/>
        <a id="boost-your-sales"></a>
        <WhySection/>
        <a id="turn-your-ideas-into-reality"></a>
        <HowSection/>
    </div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import IndexSection from './sections/Index';
	import HowSection from './sections/How';
	import WhySection from './sections/Why';

	export default Vue.extend({
		components: {
			IndexSection,
			HowSection,
			WhySection
		}
	});
</script>