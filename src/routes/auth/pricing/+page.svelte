<script>
	$: type = 'annually';
	$: plan = '';
	const TOGGLE_TYPE = () => {
		type = type == 'annually' ? 'monthly' : 'annually';
	};
	const CHANGE_PLAN = (value) => {
		plan = value;
	};
</script>

<div class="w-full flex flex-col space-y-4 justify-start items-start py-12 px-4">
	<h1 class="text-center mx-auto text-xl sm:text-2xl md:text-4xl font-medium text-primary">
		Secure Your Spot in Our Marketplace
	</h1>
	<p class="text-lg md:text-xl text-center mx-auto max-w-3xl text-stone-600 w-full pb-8">
		To ensure a smooth and secure experience for all users, we require service providers to pay a
		small fee before accessing our platform. This payment helps us maintain the highest quality
		standards and provides a trusted environment for all transactions.
	</p>
	<div
		class="mx-auto w-fit bg-white border rounded-full p-0 shadow-sm drop-shadow-sm border-secondary/25 flex flex-row items-center justify-between space-x-2"
	>
		<button
			type="button"
			on:click={TOGGLE_TYPE}
			class="{type == 'annually'
				? 'bg-primary text-secondary'
				: 'bg-transparent text-primary'} p-4 rounded-full text-xl font-medium text-center"
			>Annually</button
		>
		<button
			type="button"
			on:click={TOGGLE_TYPE}
			class="{type == 'monthly'
				? 'bg-primary text-secondary'
				: 'bg-transparent text-primary'} p-4 rounded-full text-xl font-medium text-center"
			>Monthly</button
		>
	</div>
	<div
		class="{type == 'annually'
			? 'flex'
			: 'hidden'} w-full flex-col justify-center items-center space-x-0 space-y-12 lg:flex-row lg:justify-between lg:items-stretch lg:space-x-12 lg:space-y-0 py-12"
	>
		<div
			on:click={() => CHANGE_PLAN('annual-basic')}
			class="w-full lg:w-1/2 hover:bg-light cursor-pointer {plan == 'annual-basic'
				? 'border border-stone-300'
				: ''} px-4 sm:px-8 py-12 flex flex-col space-y-4 justify-start items-start rounded-xl"
		>
			<h1 class="text-stone-800 w-full font-bold text-xl sm:text-2xl">Basic Plan</h1>
			<div class="flex w-full justify-start space-x-3 items-center">
				<div class="text-2xl sm:text-3xl text-stone-800 font-bold">$30</div>
				<div class="w-1 h-10 sm:h-12 bg-stone-300 rotate-12"></div>
				<div class="w-full flex flex-col space-y-0 text-md sm:text-lg font-normal text-stone-400">
					<span class="w-full">(0.02 USDT)</span>
					<span class="w-full">Per month</span>
				</div>
			</div>
			<ul class="w-full flex flex-col space-y-1 items-start justify-start py-4">
				<li class="flex items-center w-full justify-start space-x-3">
					<img src="/pricing-check.png" alt="pricing check" class="flex-none w-5 h-5" />
					<div
						class="w-full py-2.5 border-b border-stone-200 text-sm sm:text-md font-medium text-stone-500"
					>
						Lorem ipsum, dolor sit amet consectetur
					</div>
				</li>
				<li class="flex items-center w-full justify-start space-x-3">
					<img src="/pricing-check.png" alt="pricing check" class="flex-none w-5 h-5" />
					<div
						class="w-full py-2.5 border-b border-stone-200 text-sm sm:text-md font-medium text-stone-500"
					>
						Lorem ipsum, dolor sit amet consectetur
					</div>
				</li>
				<li class="flex items-center w-full justify-start space-x-3">
					<img src="/pricing-check.png" alt="pricing check" class="flex-none w-5 h-5" />
					<div
						class="w-full py-2.5 border-b border-stone-200 text-sm sm:text-md font-medium text-stone-500"
					>
						Lorem ipsum, dolor sit amet consectetur
					</div>
				</li>
				<li class="flex items-center w-full justify-start space-x-3">
					<img src="/pricing-check.png" alt="pricing check" class="flex-none w-5 h-5" />
					<div
						class="w-full py-2.5 border-b border-stone-200 text-sm sm:text-md font-medium text-stone-500"
					>
						Lorem ipsum, dolor sit amet consectetur
					</div>
				</li>
			</ul>
			<button
				class="w-full {plan == 'annual-basic'
					? 'bg-primary text-secondary'
					: 'bg-stone-200 text-stone-50'}  p-2.5 sm:p-4 rounded-xl text-lg sm:text-xl font-medium"
				type="button">Get Started</button
			>
		</div>

		<div
			on:click={() => CHANGE_PLAN('annual-pro')}
			class="w-full lg:w-1/2 hover:bg-light cursor-pointer {plan == 'annual-pro'
				? 'border border-stone-300'
				: ''} px-4 sm:px-8 py-12 flex flex-col space-y-4 justify-start items-start rounded-xl"
		>
			<h1 class="text-stone-800 w-full font-bold text-xl sm:text-2xl">Pro Plan</h1>
			<div class="flex w-full justify-start space-x-3 items-center">
				<div class="text-2xl sm:text-3xl text-stone-800 font-bold">$70</div>
				<div class="w-1 h-10 sm:h-12 bg-stone-300 rotate-12"></div>
				<div class="w-full flex flex-col space-y-0 text-md sm:text-lg font-normal text-stone-400">
					<span class="w-full">(0.02 USDT)</span>
					<span class="w-full">Per month</span>
				</div>
			</div>
			<ul class="w-full flex flex-col space-y-1 items-start justify-start py-4">
				<li class="flex items-center w-full justify-start space-x-3">
					<img src="/pricing-check.png" alt="pricing check" class="flex-none w-5 h-5" />
					<div
						class="w-full py-2.5 border-b border-stone-200 text-sm sm:text-md font-medium text-stone-500"
					>
						Lorem ipsum, dolor sit amet consectetur
					</div>
				</li>
				<li class="flex items-center w-full justify-start space-x-3">
					<img src="/pricing-check.png" alt="pricing check" class="flex-none w-5 h-5" />
					<div
						class="w-full py-2.5 border-b border-stone-200 text-sm sm:text-md font-medium text-stone-500"
					>
						Lorem ipsum, dolor sit amet consectetur
					</div>
				</li>
				<li class="flex items-center w-full justify-start space-x-3">
					<img src="/pricing-check.png" alt="pricing check" class="flex-none w-5 h-5" />
					<div
						class="w-full py-2.5 border-b border-stone-200 text-sm sm:text-md font-medium text-stone-500"
					>
						Lorem ipsum, dolor sit amet consectetur
					</div>
				</li>
				<li class="flex items-center w-full justify-start space-x-3">
					<img src="/pricing-check.png" alt="pricing check" class="flex-none w-5 h-5" />
					<div
						class="w-full py-2.5 border-b border-stone-200 text-sm sm:text-md font-medium text-stone-500"
					>
						Lorem ipsum, dolor sit amet consectetur
					</div>
				</li>
			</ul>
			<button
				class="w-full {plan == 'annual-pro'
					? 'bg-primary text-secondary'
					: 'bg-stone-200 text-stone-50'} p-2.5 sm:p-4 rounded-xl text-lg sm:text-xl font-medium"
				type="button">Get Started</button
			>
		</div>
	</div>

	<div
		class="{type == 'monthly'
			? 'flex'
			: 'hidden'} w-full flex-col justify-center items-center space-x-0 space-y-12 lg:flex-row lg:justify-between lg:items-stretch lg:space-x-12 lg:space-y-0 py-12"
	>
		<div
			on:click={() => CHANGE_PLAN('month-basic')}
			class="w-full lg:w-1/2 hover:bg-light cursor-pointer {plan == 'month-basic'
				? 'border border-stone-300'
				: ''} px-4 sm:px-8 py-12 flex flex-col space-y-4 justify-start items-start rounded-xl"
		>
			<h1 class="text-stone-800 w-full font-bold text-xl sm:text-2xl">Basic Plan</h1>
			<div class="flex w-full justify-start space-x-3 items-center">
				<div class="text-2xl sm:text-3xl text-stone-800 font-bold">$40</div>
				<div class="w-1 h-10 sm:h-12 bg-stone-300 rotate-12"></div>
				<div class="w-full flex flex-col space-y-0 text-md sm:text-lg font-normal text-stone-400">
					<span class="w-full">(0.02 USDT)</span>
					<span class="w-full">Per month</span>
				</div>
			</div>
			<ul class="w-full flex flex-col space-y-1 items-start justify-start py-4">
				<li class="flex items-center w-full justify-start space-x-3">
					<img src="/pricing-check.png" alt="pricing check" class="flex-none w-5 h-5" />
					<div
						class="w-full py-2.5 border-b border-stone-200 text-sm sm:text-md font-medium text-stone-500"
					>
						Lorem ipsum, dolor sit amet consectetur
					</div>
				</li>
				<li class="flex items-center w-full justify-start space-x-3">
					<img src="/pricing-check.png" alt="pricing check" class="flex-none w-5 h-5" />
					<div
						class="w-full py-2.5 border-b border-stone-200 text-sm sm:text-md font-medium text-stone-500"
					>
						Lorem ipsum, dolor sit amet consectetur
					</div>
				</li>
				<li class="flex items-center w-full justify-start space-x-3">
					<img src="/pricing-check.png" alt="pricing check" class="flex-none w-5 h-5" />
					<div
						class="w-full py-2.5 border-b border-stone-200 text-sm sm:text-md font-medium text-stone-500"
					>
						Lorem ipsum, dolor sit amet consectetur
					</div>
				</li>
				<li class="flex items-center w-full justify-start space-x-3">
					<img src="/pricing-check.png" alt="pricing check" class="flex-none w-5 h-5" />
					<div
						class="w-full py-2.5 border-b border-stone-200 text-sm sm:text-md font-medium text-stone-500"
					>
						Lorem ipsum, dolor sit amet consectetur
					</div>
				</li>
			</ul>
			<button
				class="w-full {plan == 'month-basic'
					? 'bg-primary text-secondary'
					: 'bg-stone-200 text-stone-50'}  p-2.5 sm:p-4 rounded-xl text-lg sm:text-xl font-medium"
				type="button">Get Started</button
			>
		</div>

		<div
			on:click={() => CHANGE_PLAN('month-pro')}
			class="w-full lg:w-1/2 hover:bg-light cursor-pointer {plan == 'month-pro'
				? 'border border-stone-300'
				: ''} px-4 sm:px-8 py-12 flex flex-col space-y-4 justify-start items-start rounded-xl"
		>
			<h1 class="text-stone-800 w-full font-bold text-xl sm:text-2xl">Pro Plan</h1>
			<div class="flex w-full justify-start space-x-3 items-center">
				<div class="text-2xl sm:text-3xl text-stone-800 font-bold">$80</div>
				<div class="w-1 h-10 sm:h-12 bg-stone-300 rotate-12"></div>
				<div class="w-full flex flex-col space-y-0 text-md sm:text-lg font-normal text-stone-400">
					<span class="w-full">(0.02 USDT)</span>
					<span class="w-full">Per month</span>
				</div>
			</div>
			<ul class="w-full flex flex-col space-y-1 items-start justify-start py-4">
				<li class="flex items-center w-full justify-start space-x-3">
					<img src="/pricing-check.png" alt="pricing check" class="flex-none w-5 h-5" />
					<div
						class="w-full py-2.5 border-b border-stone-200 text-sm sm:text-md font-medium text-stone-500"
					>
						Lorem ipsum, dolor sit amet consectetur
					</div>
				</li>
				<li class="flex items-center w-full justify-start space-x-3">
					<img src="/pricing-check.png" alt="pricing check" class="flex-none w-5 h-5" />
					<div
						class="w-full py-2.5 border-b border-stone-200 text-sm sm:text-md font-medium text-stone-500"
					>
						Lorem ipsum, dolor sit amet consectetur
					</div>
				</li>
				<li class="flex items-center w-full justify-start space-x-3">
					<img src="/pricing-check.png" alt="pricing check" class="flex-none w-5 h-5" />
					<div
						class="w-full py-2.5 border-b border-stone-200 text-sm sm:text-md font-medium text-stone-500"
					>
						Lorem ipsum, dolor sit amet consectetur
					</div>
				</li>
				<li class="flex items-center w-full justify-start space-x-3">
					<img src="/pricing-check.png" alt="pricing check" class="flex-none w-5 h-5" />
					<div
						class="w-full py-2.5 border-b border-stone-200 text-sm sm:text-md font-medium text-stone-500"
					>
						Lorem ipsum, dolor sit amet consectetur
					</div>
				</li>
			</ul>
			<button
				class="w-full {plan == 'month-pro'
					? 'bg-primary text-secondary'
					: 'bg-stone-200 text-stone-50'} p-2.5 sm:p-4 rounded-xl text-lg sm:text-xl font-medium"
				type="button">Get Started</button
			>
		</div>
	</div>
</div>
