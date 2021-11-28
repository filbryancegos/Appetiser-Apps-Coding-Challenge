<template>
	<div>
		<Nav />
		<div class="px-10 py-8 min-h-screen">
			<router-view></router-view>
		</div>
		<Footer />
	</div>
</template>

<script>
import Nav from './components/Nav'
import Footer from './components/Footer'
export default {
	components: {
		Nav,
		Footer
	}
}
</script>

<style>

</style>