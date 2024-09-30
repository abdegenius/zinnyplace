<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<main class="w-full min-h-screen m-0 p-0 bg-white">
	<Header />
	<div class="w-full block mt-[90px]"></div>
	<div
		class="w-full bg-secondary py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center justify-center space-x-0 space-y-12 lg:flex-row lg:justify-between lg:space-x-12 lg:space-y-0"
	>
		<div class="w-full lg:w-1/2 max-w-xl flex flex-col space-y-10 items-start justify-start">
			<div
				class="w-full text-primary text-3xl lg:text-4xl xl:text-5xl font-bold max-w-2xl leading-tighter tracking-wide"
			>
				Shop with Heart.<br />
				Earn with ease. <br />
				Make a difference.
			</div>
			<div
				class="w-full text-sm text-primary font-medium md:text-md lg:text-lg leading-relaxed tracking-wide max-w-2xl"
			>
				Join our community of personal shoppers and experience the joy of making a difference in
				people's lives.
			</div>
			<div class="w-full">
				<button
					class="w-auto py-3 px-12 flex items-center justify-between space-x-2 bg-white border-2 border-dashed border-primary rounded-full"
				>
					<span class=" text-primary font-semibold text-xl"> Sign up below </span>
				</button>
			</div>
		</div>
		<div class="w-full lg:w-1/2 flex-none flex flex-col space-y-2 justify-end items-end">
			<img
				class="w-full h-auto mx-auto md:max-w-lg lg:max-w-[600px] lg:mx-0"
				src="/shopper-hero.png"
				alt="hero"
			/>
			<!-- <div class="w-full absolute flex items-start justify-start top-[60%] lg:top-[70%] -left-[0%]">
				<div
					class="w-fit h-auto flex-none p-2 rounded-full bg-white flex items-center justify-betweeen space-x-1 sm:space-x-2"
				>
					<div
						class="text-secondary font-semibold text-xs sm:text-md lg:text-xl bg-primary py-2 px-4 md:px-6 md:py-3 rounded-full flex items-center flex-row justify-center space-x-2"
					>
						<span>Verified shopper</span>
						<img src="/verify-filled.png" alt="verify" class="w-6 h-6" />
					</div>
					<div
						class="text-primary font-semibold text-xs sm:text-md lg:text-xl bg-transparent py-2 px-4 md:px-6 md:py-3 rounded-full"
					>
						Sit tight
					</div>
				</div>
			</div> -->

			<!-- <div
			class="w-full absolute flex items-center justify-center lg:items-end lg:justify-end top-[96%] lg:right-12"
		>
			<div
				class="w-fit h-auto flex-none p-2 rounded-full bg-white flex items-center justify-betweeen space-x-1 sm:space-x-2"
			>
				<div
					class="text-primary font-semibold text-xs sm:text-md lg:text-xl bg-secondary py-2 px-4 md:px-6 md:py-3 rounded-full"
				>
					Secure Payout
				</div>
				<div
					class="text-primary font-semibold text-xs sm:text-md lg:text-xl bg-transparent py-2 px-4 md:px-6 md:py-3 rounded-full"
				>
					List Items
				</div>
			</div>
		</div> -->
		</div>
	</div>
	<div class="w-full bg-stone-200 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24 mx-auto">
		<div class="w-full bg-white shadow-xl drop-shadow-sm rounded-xl py-8 px-4 md:px-8">
			<div class="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
				<div class="w-full col-span-1 flex flex-col space-y-4">
					<div class="w-full flex flex-col space-y-1 items-start justify-start">
						<div class="text-xl font-light text-stone-600">Firstname</div>
						<input
							type="text"
							class="w-full border border-stone-300 bg-white rounded-xl p-4 outline-none placeholder:text-stone-500 text-stone-800 text-lg font-normal"
							placeholder="John"
						/>
					</div>
					<div class="w-full flex flex-col space-y-1 items-start justify-start">
						<div class="text-xl font-light text-stone-600">Lastname</div>
						<input
							type="text"
							class="w-full border border-stone-300 bg-white rounded-xl p-4 outline-none placeholder:text-stone-500 text-stone-800 text-lg font-normal"
							placeholder="Doe"
						/>
					</div>
					<div class="w-full flex flex-col space-y-1 items-start justify-start">
						<div class="text-xl font-light text-stone-600">Country</div>
						<input
							type="text"
							class="w-full border border-stone-300 bg-white rounded-xl p-4 outline-none placeholder:text-stone-500 text-stone-800 text-lg font-normal"
							placeholder="Austria"
						/>
					</div>
				</div>
				<div class="w-full col-span-1 flex flex-col space-y-4">
					<div class="w-full flex flex-col space-y-1 items-start justify-start">
						<div class="text-xl font-light text-stone-600">Email Address</div>
						<input
							type="text"
							class="w-full border border-stone-300 bg-white rounded-xl p-4 outline-none placeholder:text-stone-500 text-stone-800 text-lg font-normal"
							placeholder="john@doe.com"
						/>
					</div>
					<div class="w-full flex flex-col space-y-1 items-start justify-start">
						<div class="text-xl font-light text-stone-600">Postal Code</div>
						<input
							type="text"
							class="w-full border border-stone-300 bg-white rounded-xl p-4 outline-none placeholder:text-stone-500 text-stone-800 text-lg font-normal"
							placeholder="123245"
						/>
					</div>
					<div class="w-full flex flex-col space-y-1 items-start justify-start">
						<div class="text-xl font-light text-stone-600">Phone Number</div>
						<input
							type="text"
							class="w-full border border-stone-300 bg-white rounded-xl p-4 outline-none placeholder:text-stone-500 text-stone-800 text-lg font-normal"
							placeholder="+4323345943"
						/>
					</div>
				</div>
			</div>
			<div class="w-full mr-auto flex items-end justify-end pt-4">
				<button
					class="px-12 py-4 rounded-full bg-secondary text-primary font-black text-lg"
					type="button">Continue</button
				>
			</div>
		</div>
	</div>
	<div
		class="w-full bg-transparent px-2 sm:px-8 md:px-8 lg:px-12 xl:px-24 py-12 lg:py-24 flex flex-col items-center justify-center md:flex-row md:justify-between md:items-stretch bg-white"
	>
		<div class="w-full flex flex-col space-y-6 h-full mb-12 md:mb-0">
			<div class="p-8 rounded-xl border border-stone-300 shadow-md drop-shadow-sm max-w-xl">
				<h3 class="text-2xl text-primary font-black mb-4">Eligibility</h3>
				<p class="text-lg font-normal text-stone-600">
					You must be at least 20 years old to create an account. By signing up, you accept Zinny's
					Terms and Conditions and acknowledge that you have read the Privacy Policy. You also
					consent to receive text messages from Zinny'splace, and agree that message and data rates
					may apply.
				</p>
			</div>
			<div class="w-full flex flex-col space-y-4 items-start justify-start max-w-xl">
				<h3 class="text-2xl text-primary font-medium">Shop from your neighbourhood</h3>
				<div
					class="w-full flex flex-row justify-start items-start space-x-2 flex-wrap overflow-auto scrollbar-hide"
				>
					<button
						class="border border-stone-300 rounded-lg bg-transparent hover:bg-light flex flex-col space-y-2 items-center mb-4 justify-center p-4 w-[100px] flex-none"
						><img
							class="w-10 h-10 mx-auto rounded-full"
							src="/walmart.png"
							alt=""
						/>
						<span class="text-sm text-primary text-center font-semibold">Walmart</span></button
					>
					<button
						class="border border-stone-300 rounded-lg bg-transparent hover:bg-light flex flex-col space-y-2 items-center mb-4 justify-center p-4 w-[100px] flex-none"
						><img
							class="w-10 h-10 mx-auto rounded-full"
							src="/walmart.png"
							alt=""
						/>
						<span class="text-sm text-primary text-center font-semibold">Walmart</span></button
					>
					<button
						class="border border-stone-300 rounded-lg bg-transparent hover:bg-light flex flex-col space-y-2 items-center mb-4 justify-center p-4 w-[100px] flex-none"
						><img
							class="w-10 h-10 mx-auto rounded-full"
							src="/walmart.png"
							alt=""
						/>
						<span class="text-sm text-primary text-center font-semibold">Walmart</span></button
					>
					<button
						class="border border-stone-300 rounded-lg bg-transparent hover:bg-light flex flex-col space-y-2 items-center mb-4 justify-center p-4 w-[100px] flex-none"
						><img
							class="w-10 h-10 mx-auto rounded-full"
							src="/walmart.png"
							alt=""
						/>
						<span class="text-sm text-primary text-center font-semibold">Walmart</span></button
					>
					<button
						class="border border-stone-300 rounded-lg bg-transparent hover:bg-light flex flex-col space-y-2 items-center mb-4 justify-center p-4 w-[100px] flex-none"
						><img
							class="w-10 h-10 mx-auto rounded-full"
							src="/walmart.png"
							alt=""
						/>
						<span class="text-sm text-primary text-center font-semibold">Walmart</span></button
					>
					<button
						class="border border-stone-300 rounded-lg bg-transparent hover:bg-light flex flex-col space-y-2 items-center mb-4 justify-center p-4 w-[100px] flex-none"
						><img
							class="w-10 h-10 mx-auto rounded-full"
							src="/walmart.png"
							alt=""
						/>
						<span class="text-sm text-primary text-center font-semibold">Walmart</span></button
					>
					<button
						class="border border-stone-300 rounded-lg bg-transparent hover:bg-light flex flex-col space-y-2 items-center mb-4 justify-center p-4 w-[100px] flex-none"
						><img
							class="w-10 h-10 mx-auto rounded-full"
							src="/walmart.png"
							alt=""
						/>
						<span class="text-sm text-primary text-center font-semibold">Walmart</span></button
					>
				</div>
			</div>
		</div>
		<div class="w-full h-auto flex items-end justify-end">
			<img src="/pos.png" alt="pos" class="w-full max-w-xl h-full pl-0 md:pl-32" />
		</div>
	</div>
	<Footer />
</main>
