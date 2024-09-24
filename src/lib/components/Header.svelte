<script>
	$: mobile_menu = false;
	const TOGGLE_MENU = () => {
		mobile_menu = !mobile_menu;
	};
</script>

<header
	class="w-full fixed top-0 h-[90px] z-[9998] bg-white border-b border-stone-300 flex items-center justify-start"
>
	<nav
		class="w-full px-4 sm:px-8 md:px-8 lg:px-12 xl:px-24 flex items-center justify-between space-x-6"
	>
		<div class="flex items-start justify-start w-3/4 sm:w-4/5 md:w-1/4 lg:w-1/5 xl:w-1/6">
			<img src="/logo.png" class="w-48 h-10" alt="Zinny'splace" />
		</div>
		<div class="w-1/4 sm:w-1/5 md:w-3/4 lg:w-4/5 xl:w-5/6">
			<div class="w-full flex items-center justify-start space-x-8">
				<div
					class="hidden md:flex items-center justify-between space-x-2 w-full lg:w-4/12 xl:w-3/12 border border-stone-300 rounded-full px-2 py-1"
				>
					<input
						type="text"
						class="text-md font-normal text-stone-600 placeholder:text-stone-400 w-full outline-none"
						placeholder="Search for anything..."
					/>
					<i class="fal fa-search text-2xl px-2 text-stone-400"></i>
				</div>
				<div class="hidden lg:flex items-center justify-start space-x-2 lg:w-7/12 xl:w-3/12 w-full  py-2 px-4 rounded-lg bg-transparent hover:border hover:border-secondary/50 hover:bg-stone-50">
					<img src="/location-user.png" alt="user location" class="w-6 h-7" />
					<span class="text-md font-normal text-stone-600 truncate"
						>Michigan: 17 north main street.</span
					>
				</div>

				<div class="hidden xl:flex items-center justify-start space-x-2 xl:w-4/12 w-full">
					<a href="#" class="text-md font-normal text-primary py-2 px-4 rounded-lg bg-transparent hover:border hover:border-secondary/50 hover:bg-stone-50">About Us</a>
					<a href="#" class="text-md font-normal text-primary py-2 px-4 rounded-lg bg-transparent hover:border hover:border-secondary/50 hover:bg-stone-50">Sign Up</a>
					<a href="#" class="text-md font-normal text-primary py-2 px-4 rounded-lg bg-transparent hover:border hover:border-secondary/50 hover:bg-stone-50">Log In</a>
				</div>
				<div
					class="hidden xl:flex flex-none items-center justify-end px-3 py-2 bg-light border-2 border-primary/5 rounded-md space-x-4 xl:w-2/12 max-w-[120px] hover:bg-secondary/50"
				>
					<a href="#" class="text-md font-normal text-primary">Sell</a>
					<a href="#" class="px-4 py-1 text-md font-normal text-secondary bg-primary rounded-lg">
						<i class="fal fa-arrow-right"></i>
					</a>
				</div>

				<div
					on:click={TOGGLE_MENU}
					class="w-fit flex-none flex items-end justify-end lg:w-1/12 xl:hidden"
				>
					<button
						type="button"
						class="w-10 h-10 p-2 rounded-lg bg-secondary mx-auto flex items-center justify-center text-center cursor-pointer text-primary text-lg"
					>
						<i class="fal fa-bars"></i>
					</button>
				</div>
			</div>
		</div>
	</nav>
</header>

<div
	class="{mobile_menu
		? 'flex justify-start items-start space-y-6 flex-col'
		: 'hidden'} xl:hidden fixed bg-white inset-0 w-full h-screen z-[9999] p-8 overflow-y-auto"
>
	<button
		type="button"
		on:click={TOGGLE_MENU}
		class="w-fit px-6 py-2.5 mb-2 rounded-lg bg-red-100/50 ml-auto flex items-center justify-end space-x-6 cursor-pointer text-red-400 hover:bg-red-600 hover:text-red-50 text-lg"
	>
		<span>Close</span>
		<i class="fal fa-times"></i>
	</button>

	<div
		class="flex md:hidden items-center justify-between space-x-2 w-full border border-stone-300 rounded-full px-4 py-2"
	>
		<input
			type="text"
			class="text-md bg-transparent font-normal text-stone-600 placeholder:text-stone-400 w-full outline-none"
			placeholder="Search for anything..."
		/>
		<i class="fal fa-search text-2xl px-2 text-stone-400"></i>
	</div>

	<div
		class="flex lg:hidden items-center justify-start space-x-2 w-full rounded-lg p-4 bg-stone-50 border-2 border-secondary/50 hover:bg-secondary/25"
	>
		<img src="/location-user.png" alt="user location" class="w-6 h-7" />
		<span class="text-xl md:text-2xl font-light text-stone-600 truncate"
			>Michigan: 17 north main street.</span
		>
	</div>

	<div class="flex xl:hidden items-start flex-col justify-start rounded-lg space-y-0 w-full border-2 border-secondary/50">
		<a
			href="#"
			class="text-xl rounded-t-lg md:text-2xl font-light text-primary bg-stone-50 w-full border-b border-secondary/50 hover:bg-secondary/25 p-4"
			>About Us</a
		>
		<a
			href="#"
			class="text-xl md:text-2xl font-light text-primary bg-stone-50 w-full border-b border-secondary/50 hover:bg-secondary/25 p-4"
			>Sign Up</a
		>
		<a
			href="#"
			class="text-xl rounded-b-lg md:text-2xl font-light text-primary bg-stone-50 w-full border-b border-secondary/50 hover:bg-secondary/25 p-4"
			>Log In</a
		>
	</div>

	<div
		class="xl:hidden w-full flex flex-none items-center justify-start bg-stone-50 border-2 border-secondary/50 rounded-lg space-x-8 hover:bg-secondary/25"
	>
		<a href="#" class="w-full py-1 px-6 text-xl md:text-2xl font-normal text-primary">Sell</a>
		<a
			href="#"
			class="w-fit px-8 py-4 text-xl md:text-2xl font-normal text-secondary bg-primary rounded-lg"
		>
			<i class="fal fa-arrow-right"></i>
		</a>
	</div>
</div>
