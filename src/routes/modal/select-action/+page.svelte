<script>
	$: type = '';
	const CHANGE_ACTION = (value) => {
		type = value;
	};
</script>

<div class="w-full inset-0  border border-stone-300 rounded-xl mx-auto max-w-5xl flex flex-col space-y-4 justify-start items-start py-8 px-4">
	<h1 class="text-center mx-auto text-xl sm:text-2xl md:text-4xl font-medium text-stone-800">
		Select Your Action
	</h1>
	<div
		class="flex w-full flex-col justify-center items-stretch space-x-0 space-y-8 lg:flex-row lg:justify-between lg:items-stretch lg:space-x-4 lg:space-y-0 py-6"
	>
		<div
			on:click={() => CHANGE_ACTION('shopper')}
			class="w-full lg:w-1/2 hover:bg-light cursor-pointer border border-stone-300 px-4 sm:px-8 py-8 flex flex-col space-y-4 justify-start items-start rounded-xl"
		>
			<div class="w-full flex flex-row items-center justify-between">
				<h2 class="text-stone-800 w-full font-bold text-xl sm:text-2xl">Become a shopper</h2>
				<div class="w-8 h-8 flex-none flex items-end justify-end">
					{#if type == 'shopper'}
						<img src="/check-square.png" alt="Check square" class="w-full h-full rounded-lg" />
					{:else}
						<div class="bg-transparent w-full h-full rounded-lg border border-stone-300"></div>
					{/if}
				</div>
			</div>
			<div
				class="w-full mx-auto flex items-center justify-center p-4 max-w-[240px] h-full max-h-[300px]"
			>
				<img src="/shopper.png" alt="Shopper" class="w-full h-auto" />
			</div>
			<p class="text-md font-normal w-full text-center text-stone-600">
				Become a Personal Shopper. Assist buyers, earn commissions, and build your reputation.
				Create a profile, connect with buyers, and start shopping on their behalf
			</p>
		</div>

		<div
			on:click={() => CHANGE_ACTION('create-order')}
			class="w-full lg:w-1/2 hover:bg-light cursor-pointer border border-stone-300 px-4 sm:px-8 py-8 flex flex-col space-y-4 justify-start items-start rounded-xl"
		>
			<div class="w-full flex flex-row items-center justify-between">
				<h2 class="text-stone-800 w-full font-bold text-xl sm:text-2xl">Create order</h2>
				<div class="w-8 h-8 flex-none flex items-end justify-end">
					{#if type == 'create-order'}
						<img src="/check-square.png" alt="Check square" class="w-full h-full rounded-lg" />
					{:else}
						<div class="bg-transparent w-full h-full rounded-lg border border-stone-300"></div>
					{/if}
				</div>
			</div>
			<div
				class="w-full mx-auto flex items-center justify-center p-4 max-w-[240px] h-full max-h-[300px]"
			>
				<img src="/create-order.png" alt="create order" class="w-full h-auto" />
			</div>
			<p class="text-md font-normal w-full text-center text-stone-600">
				Find a personal shopper to assist you. Get personalized shopping experience
			</p>
		</div>
	</div>
	<div class="w-full flex flex-row items-center justify-center">
		<button
			class="w-auto {type
				? 'bg-primary text-secondary'
				: 'bg-stone-200 text-stone-50'} px-8 py-4 rounded-xl text-lg sm:text-xl font-medium"
			type="button">Continue</button
		>
	</div>
</div>
