<script>
	$: mobile_menu = false;
	const TOGGLE_MENU = () => {
		mobile_menu = !mobile_menu;
	};
</script>

<header
	class="w-full fixed top-0 h-[90px] z-[98] bg-white border-b border-stone-300 flex items-center justify-start"
>
	<nav
		class="w-full px-4 sm:px-8 md:px-8 lg:px-12 xl:px-24 flex items-center justify-between space-x-6"
	>
		<div class="flex items-start justify-start w-3/4 sm:w-4/5 md:w-1/4 lg:w-1/5 xl:w-1/6">
			<img src="/logo-black.png" class="w-48 h-10" alt="Zinny'splace" />
		</div>
		<div class="w-1/4 sm:w-1/5 md:w-3/4 lg:w-4/5 xl:w-5/6">
			<div class="w-full flex items-center justify-start space-x-8">
				<div
					class="hidden md:flex items-center justify-between space-x-2 w-full xl:w-5/12 border border-stone-300 rounded-full px-2 py-1"
				>
					<input
						type="text"
						class="text-md font-normal text-stone-600 placeholder:text-stone-400 w-full outline-none"
						placeholder="Search for anything..."
					/>
					<i class="fal fa-search text-2xl px-2 text-stone-400"></i>
				</div>

				<div
					class="hidden xl:flex xl:flex-none xl:w-7/12 w-full items-center justify-end space-x-4"
				>
					<div
						class="flex flex-none items-center space-x-2 justify-start rounded-lg bg-transparent hover:border hover:border-secondary/50 hover:bg-stone-50 px-3 py-1"
					>
						<span class="text-lg font-normal text-stone-600">Orders</span>
					</div>
					<div
						class="flex flex-none items-center space-x-2 justify-start rounded-lg bg-transparent hover:border hover:border-secondary/50 hover:bg-stone-50 px-3 py-1"
					>
						<span class="text-lg font-normal text-stone-600">Message</span>
					</div>
					<div
						class="flex flex-none items-center space-x-2 justify-start rounded-lg bg-transparent hover:border hover:border-secondary/50 hover:bg-stone-50 px-3 py-1"
					>
						<span class="text-lg font-normal text-stone-600">Dashboard</span>
					</div>
					<div class="w-8 h-8 relative rounded-full bg-transparent hover:bg-secondary">
						<img src="/notification.png" alt="heart" class="w-full h-full" />
						<div
							class="w-5 h-5 -top-2 -right-2 text-[10px] font-bold absolute rounded-full mx-auto items-center flex justify-center text-center bg-red-600 text-red-50"
						>
							10
						</div>
					</div>
					<div
						class="flex-row flex-none w-auto space-x-4 items-center flex justify-between rounded-full"
					>
						<img src="/seller.png" alt="seller" class="w-16 h-16 rounded-full" />
						<span
							class="flex items-center justify-center mx-auto p-2 w-6 h-6 rounded-full bg-stone-300"
						>
							<i class="fal fa-chevron-down text-md text-stone-600"></i>
						</span>
					</div>
				</div>

				<div
					on:click={TOGGLE_MENU}
					class="w-fit flex-none flex items-end justify-end mr-auto lg:w-fit xl:hidden"
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
		: 'hidden'} xl:hidden fixed bg-white inset-0 w-full h-screen z-[99] p-8 overflow-y-auto"
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

	<div class="flex xl:hidden flex-none w-full items-start flex-col justify-start space-y-4">
		<div
			class="flex flex-none w-full items-center space-x-2 justify-between rounded-lg bg-transparent border border-secondary/50 hover:bg-stone-50 p-4"
		>
			<div class="w-full items-center space-x-4 justify-start flex">
				<i class="fal fa-home text-3xl text-stone-600"></i>
				<span class="text-lg font-normal text-stone-600">Dashboard</span>
			</div>
		</div>
		<div
			class="flex flex-none w-full items-center space-x-4 justify-between rounded-lg bg-transparent border border-secondary/50 hover:bg-stone-50 p-4"
		>
			<div class="w-full items-center space-x-4 justify-start flex">
				<img src="/cart.png" alt="cart" class="w-8 h-8" />
				<span class="text-lg font-normal text-stone-600">Orders</span>
			</div>
			<div class="w-fit flex-none">
				<div
					class="w-8 h-8 text-xs font-bold rounded-full mx-auto items-center flex justify-center text-center bg-stone-300 text-stone-600"
				>
					0
				</div>
			</div>
		</div>
		<a
			href="/user/chat"
			class="flex flex-none w-full items-center space-x-2 justify-between rounded-lg bg-transparent border border-secondary/50 hover:bg-stone-50 p-4"
		>
			<div class="w-full items-center space-x-4 justify-start flex">
				<img src="/message.png" alt="message" class="w-10 h-10" />
				<span class="text-lg font-normal text-stone-600">Messages</span>
			</div>
			<div class="w-fit flex-none">
				<div
					class="w-8 h-8 text-xs font-bold rounded-full mx-auto items-center flex justify-center text-center bg-stone-300 text-stone-600"
				>
					0
				</div>
			</div>
		</a>
		<div
			class="flex flex-none w-full items-center space-x-2 justify-between rounded-lg bg-transparent border border-secondary/50 hover:bg-stone-50 p-4"
		>
			<div class="w-full items-center space-x-4 justify-start flex">
				<img src="/notification.png" alt="notification" class="w-8 h-8" />
				<span class="text-lg font-normal text-stone-800">Notifications</span>
			</div>
			<div class="w-fit flex-none">
				<div
					class="w-8 h-8 text-xs font-bold rounded-full mx-auto items-center flex justify-center text-center bg-red-600 text-red-50"
				>
					0
				</div>
			</div>
		</div>
	</div>

	<div
		class="xl:hidden flex-row flex-none w-auto mr-auto space-x-4 items-center flex justify-between rounded-full"
	>
		<img src="/seller.png" alt="seller" class="w-24 h-24 rounded-full" />
		<span class="flex items-center justify-center mx-auto p-2 w-8 h-8 rounded-full bg-stone-300">
			<i class="fal fa-chevron-down text-md text-stone-600"></i>
		</span>
	</div>
</div>

<div class="hidden w-full h-screen max-h-screen inset-0 fixed z-[999] overflow-hidden p-0 m-0">
	<div
		class="w-full h-full relative flex flex-col items-start justify-start md:items-end md:justify-end"
	>
		<div class="bg-primary/30 absolute w-full h-full"></div>
		<div
			class="bg-white absolute h-full overflow-auto scrollbar-hide flex items-start justify-start md:max-w-md w-full flex-col"
		>
			<div class="w-full flex justify-end p-4">
				<button
					type="button"
					class="bg-red-100 text-red-600 p-4 rounded-xl text-sm font-semibold text-center"
					>CLOSE</button
				>
			</div>

			<ul
				class="w-full flex flex-col space-y-4 items-start justify-start divide-y divide-stone-300"
			>
				<li class="w-full"></li>

				<li class="flex items-start justify-start w-full pt-4 pb-1 px-4 flex-col space-y-2">
					<div class="w-full flex flex-row items-start justify-start space-x-4">
						<div
							class="w-16 h-16 flex flex-none items-center justify-center mx-auto bg-primary rounded-full"
						>
							<i class="fal fa-shopping-cart text-xl text-light"></i>
						</div>
						<div class="w-full flex flex-col space-y-2">
							<div class="w-full text-sm font-normal text-stone-600">
								<b class="text-stone-800 font-bold">New Order Alert!</b>
								You have been assigned a new shopping order for Tony Baptiste.
								<a href="#" class="text-primary font-bold underline-offset-2 underline"
									>Check the details here</a
								>
							</div>
							<div class="flex w-full flex-row space-x-4 items-center justify-start">
								<button
									type="button"
									class="px-6 py-2 border border-primary/50 text-center text-sm font-bold text-primary bg-light rounded-xl shadow-sm"
									>Decline</button
								>
								<button
									type="button"
									class="px-6 py-2 border border-primary/50 text-center text-sm font-bold text-light bg-primary rounded-xl shadow-sm"
									>Accept</button
								>
							</div>
						</div>
					</div>
				</li>

				<li class="flex items-start justify-start w-full pt-4 pb-1 px-4 flex-col space-y-2">
					<div class="w-full flex flex-row items-start justify-start space-x-4">
						<div
							class="w-16 h-16 flex flex-none items-center justify-center mx-auto bg-primary rounded-full"
						>
							<i class="fal fa-shopping-cart text-xl text-light"></i>
						</div>
						<div class="w-full flex flex-col space-y-2">
							<div class="w-full text-sm font-normal text-stone-600">
								<b class="text-stone-800 font-bold">New Order Alert!</b>
								You have been assigned a new shopping order for Tony Baptiste.
								<a href="#" class="text-primary font-bold underline-offset-2 underline"
									>Check the details here</a
								>
							</div>
							<div class="flex w-full flex-row space-x-4 items-center justify-start">
								<button
									type="button"
									class="px-6 py-2 border border-primary/50 text-center text-sm font-bold text-primary bg-light rounded-xl shadow-sm"
									>Decline</button
								>
								<button
									type="button"
									class="px-6 py-2 border border-primary/50 text-center text-sm font-bold text-light bg-primary rounded-xl shadow-sm"
									>Accept</button
								>
							</div>
						</div>
					</div>
				</li>

				<li class="flex items-start justify-start w-full pt-4 pb-1 px-4 flex-col space-y-2">
					<div class="w-full flex flex-row items-start justify-start space-x-4">
						<div
							class="w-16 h-16 flex flex-none items-center justify-center mx-auto bg-primary rounded-full"
						>
							<i class="fal fa-check text-xl text-light"></i>
						</div>
						<div class="w-full flex flex-col space-y-2">
							<div class="w-full text-sm font-normal text-stone-600">
								<b class="text-stone-800 font-bold">Order Completed!</b>
								You have been assigned a new shopping order for Tony Baptiste.
							</div>
							<div class="flex w-full flex-row space-x-4 items-center justify-start">
								<button
									type="button"
									class="px-6 py-2 border border-primary/50 text-center text-sm font-bold text-primary bg-light rounded-xl shadow-sm"
									>Decline</button
								>
								<button
									type="button"
									class="px-6 py-2 border border-primary/50 text-center text-sm font-bold text-light bg-primary rounded-xl shadow-sm"
									>Accept</button
								>
							</div>
						</div>
					</div>
				</li>

				<li class="w-full"></li>
			</ul>
		</div>
	</div>
</div>

<div class="hidden w-full h-screen max-h-screen inset-0 fixed z-[999] overflow-hidden p-0 m-0">
	<div
		class="w-full h-full relative flex flex-col items-start justify-start md:items-end md:justify-end"
	>
		<div class="bg-primary/30 absolute w-full h-full"></div>
		<div
			class="bg-white absolute h-full overflow-auto scrollbar-hide flex items-start justify-start md:max-w-md w-full flex-col"
		>
			<div class="w-full flex justify-end p-4">
				<button
					type="button"
					class="bg-red-100 text-red-600 p-4 rounded-xl text-sm font-semibold text-center"
					>CLOSE</button
				>
			</div>

			<ul
				class="w-full flex flex-col space-y-4 items-start justify-start divide-y divide-stone-300"
			>
				<li class="w-full">
					<p class="text-xl font-bold text-primary p-4">Cart (4)</p>
				</li>

				<li class="flex items-start justify-start w-full pt-4 pb-1 px-4 flex-col space-y-2">
					<div class="w-full flex flex-row items-start justify-start space-x-4">
						<div
							class="w-24 h-24 border-2 border-dashed border-secondary rounded-xl flex-none relative"
						>
							<img src="/grape.png" alt="grape" class="w-full h-full" />
							<div
								class="absolute top-2 right-2 flex flex-row space-x-4 items-center justify-center"
							>
								<div
									class="w-8 h-8 bg-white z-10 rounded-lg mx-auto flex items-center justify-center border border-stone-300 shadow-md"
								>
									<i class="fal fa-pen text-sm text-primary"></i>
								</div>
								<div
									class="w-8 h-8 bg-white z-10 rounded-lg mx-auto flex items-center justify-center border border-stone-300 shadow-md"
								>
									<i class="fal fa-trash text-sm text-red-600"></i>
								</div>
							</div>
						</div>
						<div class="w-full flex flex-col items-start justify-start space-y-2">
							<div class="text-center truncate text-lg font-bold text-primary">
								1 Packs of Grapes &nbsp; <span class="text-stone-600 font-medium">(3 pieces)</span>
							</div>
							<div class="text-center text-lg font-bold text-stone-800">$45.00</div>
						</div>
					</div>
				</li>
				<p class="p-4 w-full flex">
				<button
					type="button"
					class="bg-primary w-full text-light p-4 rounded-xl text-lg font-semibold text-center"
					>Continue</button
				>
				</p>
			</ul>
		</div>
	</div>
</div>
