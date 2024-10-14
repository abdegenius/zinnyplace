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
		<a href="/" class="flex items-start justify-start w-3/4 sm:w-4/5 md:w-1/4 lg:w-1/5 xl:w-1/6">
			<img src="/logo.png" class="w-48 h-10" alt="Zinny'splace" />
		</a>
		<div class="w-1/4 sm:w-1/5 md:w-3/4 lg:w-4/5 xl:w-5/6">
			<div class="w-full flex items-center justify-between space-x-8">
				<div
					class="hidden md:flex items-center justify-between space-x-2 w-full lg:w-4/12 xl:w-3/12 border border-stone-300 rounded-full px-2 py-1"
				>
					<input
						type="text"
						class="text-md font-normal text-stone-600 placeholder:text-stone-400 w-full outline-none"
						placeholder="Search for anything..."
					/>
					<a href="/seller/seller_search" class="fal fa-search cursor-pointer text-2xl px-2 text-stone-400"></a>
				</div>
			

				<div
					class="hidden xl:flex xl:flex-none xl:w-6/12 w-full items-center justify-end space-x-4"
				>
					<div
						class="flex flex-none items-center space-x-2 justify-start rounded-lg bg-transparent hover:border hover:border-secondary/50 hover:bg-stone-50 px-3 py-1"
					>
						<a href="/listing_future" class="text-lg font-normal text-stone-800">List Item</a>
					</div>
					<div class=" relative rounded-full bg-transparent">
                        Orders
                    </div>
					<a href="/user/chat" class=" relative rounded-full bg-transparent">
                        Portfolio
                    </a>
					<a href="/user/chat" class=" relative rounded-full bg-transparent">
                        Messages
                    </a>
					<a href="/user/chat" class=" relative rounded-full bg-transparent flex flex-none">
                        Earning $2000
                    </a>
					
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
		<a href="/seller/seller_search" class="fal fa-search cursor-pointer text-2xl px-2 text-stone-400"></a>
	</div>
	<div class="flex xl:hidden flex-none w-full items-start flex-col justify-start space-y-4">
		<div
			class="flex flex-none w-full items-center space-x-2 justify-between rounded-lg bg-transparent border border-secondary/50 hover:bg-stone-50 p-4"
		>
			<div class="w-full items-center space-x-4 justify-between flex">
				<span class="text-lg font-normal text-stone-800">My project</span>
                <div class="w-fit flex-none">
                    <div
                        class="w-8 h-8 text-xs font-bold rounded-full mx-auto items-center flex justify-center text-center bg-primary text-secondary"
                    >
                        0
                    </div>
                </div>
			</div>
		</div>
		<div
			class="flex flex-none w-full items-center space-x-4 justify-between rounded-lg bg-transparent border border-secondary/50 hover:bg-stone-50 p-4"
		>
        <div class="w-full items-center space-x-4 justify-start flex">
            <span class="text-lg font-normal text-stone-800">Orders</span>
        </div>
        <div class="w-fit flex-none">
				<div
					class="w-8 h-8 text-xs font-bold rounded-full mx-auto items-center flex justify-center text-center bg-stone-300 text-stone-600"
				>
					0
				</div>
			</div>
		</div>
		<a href="/user/chat"
			class="flex flex-none w-full items-center space-x-2 justify-between rounded-lg bg-transparent border border-secondary/50 hover:bg-stone-50 p-4"
		>
			<div class="w-full items-center space-x-4 justify-start flex">
				<img src="/message.png" alt="message" class="w-10 h-10" />
				<span class="text-lg font-normal text-stone-800">Messages</span>
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
				<img src="/cart.png" alt="cart" class="w-8 h-8" />
				<span class="text-lg font-normal text-stone-800">Portfolio</span>
			</div>
			<div class="w-fit flex-none">
				<div
					class="w-8 h-8 text-xs font-bold rounded-full mx-auto items-center flex justify-center text-center bg-primary text-secondary"
				>
					0
				</div>
			</div>
		</div>
		<div
			class="flex flex-none w-full items-center space-x-2 justify-between rounded-lg bg-transparent border border-secondary/50 hover:bg-stone-50 p-4"
		>
			<div class="w-full items-center space-x-4 justify-start flex">
				<img src="/notification.png" alt="notification" class="w-8 h-8" />
				<span class="text-lg font-normal text-stone-800">Earnings</span>
			</div>
			<div class="w-fit flex-none">
				<div
					class=" px-2  font-bold rounded-full mx-auto items-center flex justify-center text-center bg-red-600 text-red-50"
				>
					$2000
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
