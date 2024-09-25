<script>
	$: show_chats = false;
	const TOGGLE_SHOW_CHATS = () => {
		show_chats = !show_chats;
	};
</script>

<div
	class="w-full flex flex-col space-y-0 items-start justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8"
>
	<h1 class="text-3xl font-normal text-primary pb-8">Inbox</h1>
	<div
		class="w-full flex flex-col justify-start items-start lg:flex-row lg:items-stretch border border-stone-300"
	>
		<div
			class="bg-white border-r border-stone-300 h-screen w-full {show_chats
				? 'flex inset-0 fixed lg:relative z-[99]'
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
			class="w-full flex items-center justify-center mx-auto max-w-xs lg:w-2/3 py-24 lg:py-0 {show_chats
				? 'hidden'
				: 'flex'}"
		>
			<div class="w-full flex items-center justify-center flex-col space-y-2">
				<i class="fal fa-comments text-[12rem] text-primary/25"></i>
				<h3 class="text-primary/25 text-xl md:text-2xl font-black">Start a conversation...</h3>
			</div>
		</div>
	</div>
</div>

<div class="{show_chats ? 'hidden' : ''} lg:hidden w-fit h-auto fixed bottom-1/4 right-5">
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
