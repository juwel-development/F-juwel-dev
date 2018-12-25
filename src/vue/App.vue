<template>
    <div class="app">
        <router-view></router-view>
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