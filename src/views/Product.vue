<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const productId = route.params.id;
const productData = ref(null); // Product Data goes here.

/*
Fetch data yada yada!
*/

const route = useRoute();
</script>

<template>
	<div>
		<h1>Product Details for {{ productId }}</h1>
	</div>
</template>
