<script>
	$: show_chats = false;
	const TOGGLE_SHOW_CHATS = () => {
		show_chats = !show_chats;
	};
</script>

<div
	class="w-full flex flex-col space-y-0 items-start justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8"
>
	<h1 class="text-3xl font-normal text-primary pb-8">Messages</h1>
	<div
		class="w-full flex flex-col justify-start items-start lg:flex-row lg:items-stretch border border-stone-300"
	>
		<div
			class="bg-white border-r border-stone-300 h-screen w-full {show_chats
				? 'flex inset-0 fixed lg:relative z-[98]'
				: 'hidden'} lg:w-1/3 lg:flex flex-col space-y-0 divide-y divide-stone-300 overflow-hidden lg:overflow-y-auto scrollbar-hide"
		>
			<button
				type="button"
				on:click={TOGGLE_SHOW_CHATS}
				class="cursor-pointer w-fit ml-auto flex items-end justify-end lg:hidden rounded-lg px-4 py-2 text-md flex-row bg-red-100 text-red-600 hover:bg-red-600 hover:text-red-50 m-2"
			>
				Close
			</button>
			<div class="w-full p-4 flex items-start justify-start">
				<input
					type="text"
					class="w-full bg-transparent text-sm font-normal text-stone-800 outline-none"
					placeholder="Search messages..."
				/>
			</div>
			<a
				href="/user/chat/1"
				on:click={() => (show_chats = false)}
				class="w-full bg-white text-stone-600 p-4 hover:bg-primary hover:text-secondary flex space-x-2 flex-row items-center justify-start"
			>
				<div class="flex items-center flex-none w-12 h-12">
					<img class="w-full rounded-full h-full" src="/seller.png" alt="seller" />
				</div>
				<div class="flex flex-col w-full items-start justify-start space-y-0">
					<div
						class="text-lg font-medium flex flex-row space-x-2 items-center justify-start w-full"
					>
						<span>Tali Nanzing</span>
						<img src="/verify-filled.png" alt="verify-filled" class="w-6 h-6" />
					</div>
					<div class="font-medium text-sm">I prefer the gold one to the silver</div>
				</div>
			</a>
			<a
				href="/user/chat/1"
				on:click={() => (show_chats = false)}
				class="w-full bg-white text-stone-600 p-4 hover:bg-primary hover:text-secondary flex space-x-2 flex-row items-center justify-start"
			>
				<div class="flex items-center flex-none w-12 h-12">
					<img class="w-full rounded-full h-full" src="/seller.png" alt="seller" />
				</div>
				<div class="flex flex-col w-full items-start justify-start space-y-0">
					<div
						class="text-lg font-medium flex flex-row space-x-2 items-center justify-start w-full"
					>
						<span>Tali Nanzing</span>
						<img src="/verify-filled.png" alt="verify-filled" class="w-6 h-6" />
					</div>
					<div class="font-medium text-sm">I prefer the gold one to the silver color if</div>
				</div>
			</a>
			<a
				href="/user/chat/1"
				on:click={() => (show_chats = false)}
				class="w-full bg-white text-stone-600 p-4 hover:bg-primary hover:text-secondary flex space-x-2 flex-row items-center justify-start"
			>
				<div class="flex items-center flex-none w-12 h-12">
					<img class="w-full rounded-full h-full" src="/seller.png" alt="seller" />
				</div>
				<div class="flex flex-col w-full items-start justify-start space-y-0">
					<div
						class="text-lg font-medium flex flex-row space-x-2 items-center justify-start w-full"
					>
						<span>Tali Nanzing</span>
						<img src="/verify-filled.png" alt="verify-filled" class="w-6 h-6" />
					</div>
					<div class="font-medium text-sm">I prefer the gold one to the silver color if</div>
				</div>
			</a>
			<a
				href="/user/chat/1"
				on:click={() => (show_chats = false)}
				class="w-full bg-white text-stone-600 p-4 hover:bg-primary hover:text-secondary flex space-x-2 flex-row items-center justify-start"
			>
				<div class="flex items-center flex-none w-12 h-12">
					<img class="w-full rounded-full h-full" src="/seller.png" alt="seller" />
				</div>
				<div class="flex flex-col w-full items-start justify-start space-y-0">
					<div
						class="text-lg font-medium flex flex-row space-x-2 items-center justify-start w-full"
					>
						<span>Tali Nanzing</span>
						<img src="/verify-filled.png" alt="verify-filled" class="w-6 h-6" />
					</div>
					<div class="font-medium text-sm">I prefer the gold one to the silver color if</div>
				</div>
			</a>
		</div>
		<div
			class="w-full lg:flex flex-col items-start justify-start space-y-2 lg:w-2/3 {show_chats
				? 'hidden'
				: 'flex'}"
		>
			<div
				class="w-full shadow-lg drop-shadow-lg rounded-b-xl flex flex-row items-center justify-between space-x-4 p-4"
			>
				<div class="w-full flex flex-col space-y-1 items-start justify-start">
					<div class="flex items-center flex-wrap justify-start">
						<div
							class="text-primary text-md font-black flex flex-row space-x-1 items-center justify-start"
						>
							<span>Tali Nanzing</span>
							<img class="w-6 rounded-full h-6" src="/verify-filled.png" alt="verify filled" />
						</div>
						<span class="font-normal text-sm text-stone-600">M324H779876HJJB545</span>
					</div>
					<div class="flex items-center flex-wrap font-normal text-stone-600">
						<div class="w-fit border-r">
							<span class="text-sm px-3 mr-4">2hr ago</span>
						</div>
						<div class="w-fit border-r-2">
							<span class="text-sm px-3 mr-4">Batch Spring Dalax.</span>
						</div>
						<div class="w-auto space-x-2 px-3 text-md">
							<span class="fa fa-star text-primary"></span>
							<span class="fa fa-star text-primary"></span>
							<span class="fa fa-star text-primary"></span>
							<span class="fa fa-star text-primary"></span>
							<span class="fa fa-star text-primary"></span>
						</div>
						<div class="text-sm">5.0</div>
					</div>
				</div>
				<div class="w-fit flex-none">
					<button class="fal fa-3x fa-ellipsis-h text-stone-600"></button>
				</div>
			</div>
			<div class="w-full flex flex-col sm:flex-row item-start p-4 justify-start">
				<div class="w-full h-full sm:w-3/5 lg:w-3/4 pr-0 md:pr-8">
					<div class="flex items-start justify-start flex-col space-y-4 w-full">
						<div class="w-full flex justify-start items-start space-x-2">
							<div class="flex-none w-8">
								<img
									class="w-8 h-8 shadow-md rounded-full bg-white border"
									src="/seller.png"
									alt="seller"
								/>
							</div>
							<div class="flex w-full flex-col items-start justify-start">
								<div class="flex justify-start flex-wrap flex-row items-center mb-1 pt-1">
									<a href="#" class="flex justify-start flex-row space-x-1 items-center">
										<span class="text-primary text-md font-bold">Tali Nanzing</span>
										<img src="/verify-filled.png" alt="verify" class="w-6 h-6 mx-1" />
									</a>
									<span class="font-medium text-xs text-stone-600">Sep 08, 2024, 9:23AM</span>
								</div>
								<p class="text-sm font-normal text-stone-800 w-full max-w-[80%]">
									I prefer the gold one to the silver color if... Lorem ipsum dolor sit amet
									consectetur adipisicing elit. Libero excepturi suscipit iure incidunt nesciunt?.
								</p>
							</div>
						</div>

						<div class="w-full flex justify-start items-start space-x-2">
							<div class="flex-none w-8">
								<img
									class="w-8 h-8 shadow-md rounded-full bg-white border"
									src="/seller.png"
									alt="seller"
								/>
							</div>
							<div class="flex w-full flex-col items-start justify-start">
								<div class="flex justify-start flex-wrap flex-row items-center mb-1 pt-1">
									<a href="#" class="flex justify-start flex-row space-x-1 items-center">
										<span class="text-primary text-md font-bold">Me</span>
										<img src="/verify-filled.png" alt="verify" class="w-6 h-6 mx-1" />
									</a>
									<span class="font-medium text-xs text-stone-600">Sep 08, 2024, 9:23AM</span>
								</div>
								<p class="text-sm font-normal text-stone-800 w-full max-w-[80%]">
									I prefer the gold one to the silver color if... Lorem ipsum dolor sit amet
									consectetur adipisicing elit. Libero excepturi suscipit iure incidunt nesciunt?.
								</p>
							</div>
						</div>
					</div>
					<div
						class=" bottom-0 py-6 flex space-x-2 px-0 sm:pr-2 items-stretch justify-center"
					>
						<div
							class="flex items-center bg-stone-100 w-auto px-2 lg:px-4 rounded-xl border border-stone-300 flex-none"
						>
							<span class="fal fa-link text-stone-600 text-md lg:text-xl px-2"></span>
						</div>
						<div
							class="border px-2 py-1 rounded-lg flex items-center justify-between space-x-0 w-full"
						>
							<input
								type="text"
								class="outline-none border-none bg-transparent w-full py-2 text-xs text-stone-600 font-normal"
								placeholder="Send Message"
							/>
							<button
								class="bg-stone-100 p-2 lg:px-4 text-md lg:text-xl text-stone-600 rounded-xl border border-stone-300"
							>
								<span class="flex items-center justify-center mx-auto px-2">
									<i class="fal fa-arrow-right text-xl"></i>
								</span>
							</button>
						</div>
					</div>
				</div>
				<div class="w-full flex sm:w-2/5 lg:w-1/4 p-2 rounded-lg border border-stone-300">
					<div
						class="flex flex-col space-y-4 py-12 items-center justify-center mx-auto w-full max-w-[320px] sm:max-w-[240px]"
					>
						<img class="w-full h-auto" src="/grape.png" alt="grapes" />
						<a
							class="text-primary w-full flex items-center mx-auto justify-center space-x-2"
							href="#"
						>
							<span class="fal fa-eye"></span>
							<span class="underline underline-offset-2 text-lg">View details</span>
						</a>
						<h2 class="text-lg text-primary text-center font-bold">
							Montana Quited leather bag for women
						</h2>
						<div class="flex justify-center flex-row items-center space-x-4">
							<button class="border rounded-lg p-2 w-16 h-16">
								<img class="w-full h-full" src="/grape.png" alt="" />
							</button>
							<button class="border rounded-lg p-2 w-16 h-16">
								<img class="w-full h-full" src="/grape.png" alt="" />
							</button>
						</div>
						<button
							class="w-full rounded-full hover:bg-primary hover:text-secondary hover:border-secondary border-2 border-primary/25 text-primary font-medium text-md p-3 bg-secondary"
							>Buy for $107</button
						>
						<button
							class="w-full hover:bg-light hover:border-primary border-2 border-secondary rounded-full text-primary font-medium text-md p-3"
							>Add to cart</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="{show_chats ? 'hidden' : ''} lg:hidden w-fit h-auto fixed bottom-10 right-5">
	<button
		on:click={TOGGLE_SHOW_CHATS}
		class="z-[100] bg-secondary text-primary border-2 border-primary/25 text-center text-4xl w-16 h-16 rounded-full p-2 mx-auto flex items-center justify-center flex-col"
	>
		<i class="fa fa-comment text-primary/50"></i>
		<span
			class="w-6 h-6 rounded-full items-center flex mx-auto justify-center bg-red-600 text-red-50 font-black text-[10px] absolute right-0 top-0"
		>
			10
		</span>
	</button>
</div>
