<template>
    <div>
        <IndexSection/>
        <a id="boost-your-sales"></a>
        <WhySection/>
        <a id="turn-your-ideas-into-reality"></a>
        <HowSection/>
    </div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import IndexSection from './Index';
	import HowSection from './How';
	import WhySection from './Why';

	/**
     * @component Sections
     * root element that contains all sections
	 */
	export default Vue.extend({
		components: {
			IndexSection,
			HowSection,
			WhySection
		}
	});
</script>