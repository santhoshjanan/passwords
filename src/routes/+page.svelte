<script>
	import { generate } from 'random-words';
	import { upperCaseFirst } from 'upper-case-first';
	import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';
	import { onMount } from 'svelte';

	const symbols = ['!', '@', '#', '$', '%', '&', '/'];

	onMount(() => createPassword());

	const showToast = () => {
		toasts.add({
			title: 'Success',
			description: 'Password copied to clipboard successfully',
			duration: 3000, // 0 or negative to avoid auto-remove
			placement: 'center-center',
			showProgress: true,
			type: 'success',
			theme: 'light'
		});
	};

	let newPassword = '';
	const createPassword = () => {
		let password;
		password = upperCaseFirst(
			generate({
				exactly: 3,
				maxLength: 3,
				minLength: 3,
				join: '.'
			}) +
				'-' +
				symbols[between(0, symbols.length)] +
				between(10, 99)
		);
		newPassword = password;
		return password;
	};

	const copyPassword = () => {
		let textToCopy = newPassword;
		document.getElementById('txt-pass').select();
		console.log(textToCopy);
		navigator.clipboard.writeText(textToCopy).then(
			() => {
				showToast();
				console.log('Copying to clipboard successful!');
			},
			(err) => {
				console.error('Failed to copy to clipboard:', err);
			}
		);
	};
	const between = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min);
	};
</script>

<div class="flex flex-col">
	<h1 class="flex flex-row mx-auto mt-8 mb-4 text-4xl text-green-700">
		Passwords that you can remember!
	</h1>
	<form class="flex flex-row mx-auto mt-8 mb-4 w-96 lg:mx-auto">
		<input
			type="text"
			id="txt-pass"
			bind:value={newPassword}
			readonly
			class="cursor-not-allowed block w-full p-4 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
			placeholder="Search"
			required
		/>
		<button
			type="button"
			on:click={() => createPassword()}
			class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm mx-1 px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
		>
			<svg
				width="18px"
				height="18px"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
			>
				<path
					fill="#fff"
					fill-rule="evenodd"
					d="M2.945 11.76a1 1 0 101.86-.736c-.892-2.256.024-4.967 2.316-6.29 1.987-1.147 4.354-.879 5.934.45l-2.49.295a1 1 0 10.234 1.986l4.31-.509a1 1 0 00.863-.793l.802-3.927a1 1 0 00-1.96-.4l-.385 1.889c-2.226-1.939-5.573-2.302-8.308-.723C3 4.803 1.675 8.549 2.945 11.76zm14.11-3.52a1 1 0 00-1.86.736c.892 2.256-.024 4.967-2.316 6.29-1.987 1.147-4.355.879-5.934-.45l2.49-.295a1 1 0 00-.234-1.986l-4.31.509a1 1 0 00-.863.793l-.802 3.927a1 1 0 001.96.4l.385-1.889c2.226 1.939 5.573 2.302 8.308.723 3.12-1.801 4.446-5.547 3.176-8.758z"
				/>
			</svg>
		</button>
		<button
			type="button"
			on:click={() => copyPassword()}
			class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm mx-1 px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
		>
			<svg
				width="18px"
				height="18px"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
			>
				<path
					fill="#fff"
					fill-rule="evenodd"
					d="M8 1a2 2 0 00-2 2v2a2 2 0 002 2h4a2 2 0 002-2h1.868l.003.003a.023.023 0 01.005.007v.007C15.728 6.38 15.5 8.75 15.5 10.5c0 1.75.228 4.12.376 5.483a.02.02 0 010 .005v.002a.023.023 0 01-.008.01H4.132l-.003-.003a.021.021 0 01-.004-.007v-.007c.147-1.362.375-3.732.375-5.483 0-1.75-.228-4.12-.376-5.483V5.01A.02.02 0 014.133 5H6V3H4.134a2.014 2.014 0 00-1.998 2.233C2.284 6.596 2.5 8.87 2.5 10.5c0 1.63-.216 3.904-.364 5.267A2.014 2.014 0 004.134 18h11.732a2.014 2.014 0 001.998-2.233c-.148-1.363-.364-3.636-.364-5.267 0-1.63.216-3.904.364-5.267A2.014 2.014 0 0015.866 3H14a2 2 0 00-2-2H8zm0 2h4v2H8V3z"
				/>
			</svg>
		</button>
	</form>
	<ToastContainer let:data>
		<FlatToast {data} />
	</ToastContainer>
</div>

<div class="flex flex-col mx-auto justify-center items-center justify-center p-5">
	<a href="https://github.com/santhoshjanan/passwords">
		<svg
			height="32"
			aria-hidden="true"
			viewBox="0 0 16 16"
			width="32"
			data-view-component="true"
			class="octicon octicon-mark-github v-align-middle color-fg-default"
		>
			<path
				fill="#070"
				d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
			></path>
		</svg>
	</a>
</div>
