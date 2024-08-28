<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const productId = route.params.id;
</script>

<template>
	<div>
		<h1>Product Details for {{ productId }}</h1>
	</div>
</template>
