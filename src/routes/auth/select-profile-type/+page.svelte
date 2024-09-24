<script>
	$: type = '';
	const CHANGE_TYPE = (value) => {
		type = value;
	};
</script>

<div class="w-full flex flex-col space-y-4 justify-start items-start py-12 px-4">
	<h1 class="text-center mx-auto text-xl sm:text-2xl md:text-4xl font-medium text-stone-800">
		Hi, Luis your account have been created! What brings you to zinny'splace
	</h1>
	<p class="text-lg md:text-xl text-center mx-auto max-w-3xl text-stone-600 w-full pb-8">
		We want to tailor your experience so you’ll feel right at home
	</p>
	<div
		class="flex w-full flex-col justify-center items-stretch space-x-0 space-y-8 lg:flex-row lg:justify-between lg:items-stretch lg:space-x-8 lg:space-y-0 py-6"
	>
		<div
			on:click={() => CHANGE_TYPE('user')}
			class="w-full lg:w-1/2 hover:bg-light cursor-pointer border border-stone-300 px-4 sm:px-8 py-8 flex flex-col space-y-4 justify-start items-start rounded-xl"
		>
			<div class="w-full flex flex-row items-center justify-between">
				<h2 class="text-stone-800 w-full font-bold text-xl sm:text-2xl">A user</h2>
				<div class="w-8 h-8 flex-none flex items-end justify-end">
					{#if type == 'user'}
						<img src="/check-square.png" alt="Check square" class="w-full h-full rounded-lg" />
					{:else}
						<div class="bg-transparent w-full h-full rounded-lg border border-stone-300"></div>
					{/if}
				</div>
			</div>
			<div
				class="w-full mx-auto flex items-center justify-center p-4 max-w-[240px] h-full max-h-[300px]"
			>
				<img src="/user-vector.png" alt="User vector" class="w-full h-auto" />
			</div>
			<div
				class="w-full flex flex-row space-x-4 items-center justify-between border border-stone-300 rounded-xl bg-white"
			>
				<select class="w-full border-none bg-transparent outline-none appearance-none p-4">
					<option value="">No business purposes</option>
				</select>
				<div class="w-fit flex-none pr-2">
					<i class="fal text-xl fa-chevron-down text-stone-400"></i>
				</div>
			</div>
			<p class="text-md font-normal text-stone-600">
				As a non business person i have the ability to buy, sell & list a product. whoa!!!
			</p>
		</div>

		<div
			on:click={() => CHANGE_TYPE('provider')}
			class="w-full lg:w-1/2 hover:bg-light cursor-pointer border border-stone-300 px-4 sm:px-8 py-8 flex flex-col space-y-4 justify-start items-start rounded-xl"
		>
			<div class="w-full flex flex-row items-center justify-between">
				<h2 class="text-stone-800 w-full font-bold text-xl sm:text-2xl">Service provider</h2>
				<div class="w-8 h-8 flex-none flex items-end justify-end">
					{#if type == 'provider'}
						<img src="/check-square.png" alt="Check square" class="w-full h-full rounded-lg" />
					{:else}
						<div class="bg-transparent w-full h-full rounded-lg border border-stone-300"></div>
					{/if}
				</div>
			</div>
			<div
				class="w-full mx-auto flex items-center justify-center p-4 max-w-[240px] h-full max-h-[300px]"
			>
				<img src="/provider-vector.png" alt="provider vector" class="w-full h-auto" />
			</div>
			<p class="text-md font-normal text-stone-600">
				As a service provider you can offer a wide range of services, from selling digital assets,
				graphics design, barbing etc.
			</p>
		</div>
	</div>
	<div class="w-full flex flex-row items-end justify-end">
		<button
			class="w-auto {type
				? 'bg-primary text-secondary'
				: 'bg-stone-200 text-stone-50'} px-8 py-4 rounded-xl text-lg sm:text-xl font-medium"
			type="button">Get Started</button
		>
	</div>
</div>
