<script>
	import { onMount } from "svelte";
	import config from "../config.json";
	import { goto } from "$app/navigation";

	let noButton;
	let container;

	function handleYes() {
		goto("/yes");
	}

	// Function to "move away" the button
	function moveNoButton() {
		if (!container || !noButton) return;
		const rect = container.getBoundingClientRect();

		// Calculate new position
		const newX = Math.random() * (rect.width - noButton.offsetWidth);
		const newY = Math.random() * (rect.height - noButton.offsetHeight);

		noButton.style.position = "absolute";
		noButton.style.left = `${newX}px`;
		noButton.style.top = `${newY}px`;
	}

	function handleNo() {
		// Clicking the "No" button also triggers the move
		moveNoButton();
	}

	onMount(() => {
		// Add event listener for mouseover on the "No" button
		noButton.addEventListener("mouseover", moveNoButton);
	});
</script>

<div class="container" bind:this={container}>
	<img src="/assets/Top_picture/Cute_pic2.jpg" alt="Yes" loading="lazy" />
	<h1>Привет, {config.girlName}!</h1>
	<p>{config.mainQuestion}</p>
	<div style="display: flex; justify-content: center; gap: 20px;">
		<button bind:this={noButton} on:click={handleNo}>
			{config.noOption}
		</button>
		<button on:click={handleYes}>
			{config.yesOption}
		</button>
	</div>
</div>
