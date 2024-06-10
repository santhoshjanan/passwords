<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Passwords</title>
</svelte:head>

<div class="font-mono">
	<slot />
</div>
<footer class="fixed bottom-0 left-0 w-full bg-green-500 text-white p-4">
	<div class="flex w-full justify-between">
		<p>
			<span class="font-mono">2024 &copy; Made in New Jersey with </span>❤️
			<span class="font-mono"> and Svelte!</span>
		</p>
		<p
			class="transition duration-300 ease-in-out hover:ease-out hover:scale-105 hover:italics hover:underline font-mono"
		>
			<a href="mailto:eagles_jokers0o@icloud.com">Do you want another feature? Reach Me!</a>
		</p>
	</div>
</footer>
