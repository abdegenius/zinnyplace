<script>
</script>

<div
	class="w-full flex flex-col space-y-6 items-start justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8 relative"
>
	<div class="w-full flex flex-row space-x-4 items-center justify-start mt-24">
		<i class="fal fa-chevron-left text-2xl text-stone-600"></i>
		<span class="text-xl font-normal text-stone-600">Orders</span>
	</div>

	<div
		class="w-full flex flex-col items-start space-y-4 py-8 px-8 border border-stone-300 rounded-xl"
	>
		<div class="w-full flex flex-row flex-wrap items-center justify-between">
			<h1 class="w-auto text-3xl font-normal mb-4 text-stone-600 mr-4">Micheal's Order</h1>
			<button
				class="w-fit flex-none px-12 py-2 mb-4 rounded-full bg-secondary text-primary font-black text-lg"
				type="button">Download list</button
			>
		</div>
		<div
			class="w-full flex flex-col space-y-6 items-start justify-start rounded-xl border border-stone-300 p-4"
		>
			<div
				class="w-full flex flex-col space-y-4 space-x-0 justify-start items-start md:flex-row md:space-y-0 md:space-x-2 lg:space-x-8 md:items-center"
			>
				<div
					class="relative w-full flex flex-col justify-center items-center py-8 px-4 space-y-8 space-x-0 md:flex-row md:justify-start md:space-y-0 md:space-x-8"
				>
					<div
						class="w-fit p-2 lg:p-4 bg-secondary absolute top-0 right-0 text-primary flex flex-col items-center justify-center mx-auto text-center rounded-tr-xl"
					>
						<div class="flex flex-row space-x-1 items-center justify-center font-black">
							<span class="text-xs lg:text-sm">$</span>
							<span class="text-lg lg:text-xl">45.00</span>
						</div>
						<div class="text-xs lg:text-sm text-primary font-bold">Total price</div>
					</div>

					<div
						class="border border-stone-300 rounded-lg bg-transparent hover:bg-light flex flex-col space-y-2 items-center justify-center p-8 w-32 h-32 flex-none"
					>
						<img
							class="w-full h-full mx-auto rounded-full"
							src="/walmart.png"
							alt=""
						/>
						<span class="text-sm text-primary text-center font-semibold">Walmart</span>
					</div>
					<div
						class="px-8 w-full flex flex-col space-y-4 items-center justify-center mx-auto md:mx-0 md:items-start md:justify-start"
					>
						<div class="w-full flex flex-row flex-wrap items-center justify-start">
							<h3 class="text-xl font-semibold text-stone-600 pr-4">Micheal's order</h3>
							<p class="text-sm font-normal text-primary">Web, Dec 27 (3 days ago)</p>
						</div>
						<div class="w-full flex flex-row space-x-0 flex-wrap items-center justify-start">
							<div class="w-fit flex-none flex flex-row space-x-2 items-center justify-start pr-4">
								<i class="fal fa-car text-primary text-md"></i>
								<span class="text-sm text-stone-800 font-medium">23 miles</span>
							</div>
							<div class="w-fit flex-none flex flex-row space-x-2 items-center justify-start pr-4">
								<i class="fal fa-shopping-cart text-primary text-md"></i>
								<span class="text-sm text-stone-800 font-medium">32 items</span>
							</div>
							<div class="w-fit flex-none flex flex-row space-x-2 items-center justify-start">
								<i class="fal fa-map-marker text-primary text-md"></i>
								<span class="text-sm text-stone-800 font-medium">
									3402 Oak Street Apartment 3B Springfield IL 62704</span
								>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="my-24 w-full block bg-stone-300 h-[1px]"></div>
			<h2 class="text-3xl text-primary font-normal">Items</h2>
			<div
				class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-stretch"
			>
				<div
					class="shadow-xl relative border border-stone-100 drop-shadow-sm w-full bg-white col-span-1 rounded-xl flex flex-col space-y-2 items-start justify-start h-auto"
				>
					<div class="w-full h-48 border-b border-stone-200">
						<img src="/grape.png" alt="grape" class="w-full h-full p-4 max-w-xs mx-auto" />
					</div>
					<div class="text-center mx-auto truncate text-md font-medium text-stone-600 pb-4 pt-2">
						1 Packs of Grapes
					</div>
					<div class="absolute top-2 right-2 flex flex-row space-x-2 items-center justify-center">
						<div
							class="w-10 h-10 bg-white z-10 rounded-lg mx-auto flex items-center justify-center border border-stone-300 shadow-md"
						>
							<i class="fal fa-pen text-lg text-primary"></i>
						</div>
						<div
							class="w-10 h-10 bg-white z-10 rounded-lg mx-auto flex items-center justify-center border border-stone-300 shadow-md"
						>
							<i class="fal fa-trash text-lg text-red-600"></i>
						</div>
					</div>
				</div>
				<div
					class="shadow-xl relative border border-stone-100 drop-shadow-sm w-full bg-white col-span-1 rounded-xl flex flex-col space-y-2 items-start justify-start h-auto"
				>
					<div class="w-full h-48 border-b border-stone-200">
						<img src="/grape.png" alt="grape" class="w-full h-full p-4 max-w-xs mx-auto" />
					</div>
					<div class="text-center mx-auto truncate text-md font-medium text-stone-600 pb-4 pt-2">
						1 Packs of Grapes
					</div>
					<div class="absolute top-2 right-2 flex flex-row space-x-2 items-center justify-center">
						<div
							class="w-10 h-10 bg-white z-10 rounded-lg mx-auto flex items-center justify-center border border-stone-300 shadow-md"
						>
							<i class="fal fa-pen text-lg text-primary"></i>
						</div>
						<div
							class="w-10 h-10 bg-white z-10 rounded-lg mx-auto flex items-center justify-center border border-stone-300 shadow-md"
						>
							<i class="fal fa-trash text-lg text-red-600"></i>
						</div>
					</div>
				</div>
				<div
					class="shadow-xl relative border border-stone-100 drop-shadow-sm w-full bg-white col-span-1 rounded-xl flex flex-col space-y-2 items-start justify-start h-auto"
				>
					<div class="w-full h-48 border-b border-stone-200">
						<img src="/grape.png" alt="grape" class="w-full h-full p-4 max-w-xs mx-auto" />
					</div>
					<div class="text-center mx-auto truncate text-md font-medium text-stone-600 pb-4 pt-2">
						1 Packs of Grapes
					</div>
					<div class="absolute top-2 right-2 flex flex-row space-x-2 items-center justify-center">
						<div
							class="w-10 h-10 bg-white z-10 rounded-lg mx-auto flex items-center justify-center border border-stone-300 shadow-md"
						>
							<i class="fal fa-pen text-lg text-primary"></i>
						</div>
						<div
							class="w-10 h-10 bg-white z-10 rounded-lg mx-auto flex items-center justify-center border border-stone-300 shadow-md"
						>
							<i class="fal fa-trash text-lg text-red-600"></i>
						</div>
					</div>
				</div>
				<div
					class="shadow-xl relative border border-stone-100 drop-shadow-sm w-full bg-white col-span-1 rounded-xl flex flex-col space-y-2 items-start justify-start h-auto"
				>
					<div class="w-full h-48 border-b border-stone-200">
						<img src="/grape.png" alt="grape" class="w-full h-full p-4 max-w-xs mx-auto" />
					</div>
					<div class="text-center mx-auto truncate text-md font-medium text-stone-600 pb-4 pt-2">
						1 Packs of Grapes
					</div>
					<div class="absolute top-2 right-2 flex flex-row space-x-2 items-center justify-center">
						<div
							class="w-10 h-10 bg-white z-10 rounded-lg mx-auto flex items-center justify-center border border-stone-300 shadow-md"
						>
							<i class="fal fa-pen text-lg text-primary"></i>
						</div>
						<div
							class="w-10 h-10 bg-white z-10 rounded-lg mx-auto flex items-center justify-center border border-stone-300 shadow-md"
						>
							<i class="fal fa-trash text-lg text-red-600"></i>
						</div>
					</div>
				</div>
				<div
					class="shadow-xl relative border border-stone-100 drop-shadow-sm w-full bg-white col-span-1 rounded-xl flex flex-col space-y-2 items-start justify-start h-auto"
				>
					<div class="w-full h-48 border-b border-stone-200">
						<img src="/grape.png" alt="grape" class="w-full h-full p-4 max-w-xs mx-auto" />
					</div>
					<div class="text-center mx-auto truncate text-md font-medium text-stone-600 pb-4 pt-2">
						1 Packs of Grapes
					</div>
					<div class="absolute top-2 right-2 flex flex-row space-x-2 items-center justify-center">
						<div
							class="w-10 h-10 bg-white z-10 rounded-lg mx-auto flex items-center justify-center border border-stone-300 shadow-md"
						>
							<i class="fal fa-pen text-lg text-primary"></i>
						</div>
						<div
							class="w-10 h-10 bg-white z-10 rounded-lg mx-auto flex items-center justify-center border border-stone-300 shadow-md"
						>
							<i class="fal fa-trash text-lg text-red-600"></i>
						</div>
					</div>
				</div>
				<div
					class="shadow-xl relative border border-stone-100 drop-shadow-sm w-full bg-white col-span-1 rounded-xl flex flex-col space-y-2 items-start justify-start h-auto"
				>
					<div class="w-full h-48 border-b border-stone-200">
						<img src="/grape.png" alt="grape" class="w-full h-full p-4 max-w-xs mx-auto" />
					</div>
					<div class="text-center mx-auto truncate text-md font-medium text-stone-600 pb-4 pt-2">
						1 Packs of Grapes
					</div>
					<div class="absolute top-2 right-2 flex flex-row space-x-2 items-center justify-center">
						<div
							class="w-10 h-10 bg-white z-10 rounded-lg mx-auto flex items-center justify-center border border-stone-300 shadow-md"
						>
							<i class="fal fa-pen text-lg text-primary"></i>
						</div>
						<div
							class="w-10 h-10 bg-white z-10 rounded-lg mx-auto flex items-center justify-center border border-stone-300 shadow-md"
						>
							<i class="fal fa-trash text-lg text-red-600"></i>
						</div>
					</div>
				</div>
				<div
					class="shadow-xl relative border border-stone-100 drop-shadow-sm w-full bg-white col-span-1 rounded-xl flex flex-col space-y-2 items-start justify-start h-auto"
				>
					<div class="w-full h-48 border-b border-stone-200">
						<img src="/grape.png" alt="grape" class="w-full h-full p-4 max-w-xs mx-auto" />
					</div>
					<div class="text-center mx-auto truncate text-md font-medium text-stone-600 pb-4 pt-2">
						1 Packs of Grapes
					</div>
					<div class="absolute top-2 right-2 flex flex-row space-x-2 items-center justify-center">
						<div
							class="w-10 h-10 bg-white z-10 rounded-lg mx-auto flex items-center justify-center border border-stone-300 shadow-md"
						>
							<i class="fal fa-pen text-lg text-primary"></i>
						</div>
						<div
							class="w-10 h-10 bg-white z-10 rounded-lg mx-auto flex items-center justify-center border border-stone-300 shadow-md"
						>
							<i class="fal fa-trash text-lg text-red-600"></i>
						</div>
					</div>
				</div>
				<div
					class="shadow-xl relative border border-stone-100 drop-shadow-sm w-full bg-white col-span-1 rounded-xl flex flex-col space-y-2 items-start justify-start h-auto"
				>
					<div class="w-full h-48 border-b border-stone-200">
						<img src="/grape.png" alt="grape" class="w-full h-full p-4 max-w-xs mx-auto" />
					</div>
					<div class="text-center mx-auto truncate text-md font-medium text-stone-600 pb-4 pt-2">
						1 Packs of Grapes
					</div>
					<div class="absolute top-2 right-2 flex flex-row space-x-2 items-center justify-center">
						<div
							class="w-10 h-10 bg-white z-10 rounded-lg mx-auto flex items-center justify-center border border-stone-300 shadow-md"
						>
							<i class="fal fa-pen text-lg text-primary"></i>
						</div>
						<div
							class="w-10 h-10 bg-white z-10 rounded-lg mx-auto flex items-center justify-center border border-stone-300 shadow-md"
						>
							<i class="fal fa-trash text-lg text-red-600"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="w-full h-screen max-h-screen inset-0 fixed z-[999] overflow-hidden">
    <div class="w-full h-full relative flex flex-col items-center justify-center p-4">
        <div class="bg-primary/30 absolute w-full h-full"></div>
        <div class="bg-white rounded-xl absolute flex items-center justify-center mx-auto max-w-md w-full p-8 flex-col space-y-2">
            <i class="fal fa-trash text-4xl text-red-600"></i>
            <h2 class="text-2xl text-red-600 font-bold">Remove Item</h2>
            <p class="text-md font-normal text-stone-600">You are about to delete this item from the list</p>
            <div class="pt-4 flex w-full flex-row space-x-4 items-center justify-between">
                <button type="button" class="w-1/2 p-4 text-center text-md font-bold text-red-50 bg-red-600 rounded-xl shadow-sm">Yes, Delete</button>
                <button type="button" class="w-1/2 p-4 text-center text-md font-bold text-red-600 bg-red-50 rounded-xl shadow-sm">Back</button>
            </div>
        </div>
    </div>
</div>
