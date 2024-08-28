<script setup></script>

<template>
	<nav>
		<div class="toprow">
			<div>Search</div>
			<div id="genders">
				<a href="/">Men</a> <a href="/">Women</a> <a href="/">Children</a>
			</div>
			<div>Logo</div>
		</div>
		<div class="botrow">
			<div>Categories</div>
		</div>
	</nav>
</template>

<style scoped>
nav {
	width: 100%;
	height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;

	padding: 0 10rem;
}
.toprow {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.botrow {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

#genders {
	display: flex;
	gap: 2rem;
}
</style>
