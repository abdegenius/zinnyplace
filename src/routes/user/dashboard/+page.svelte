<script>
</script>

<div
	class="w-full flex flex-col space-y-6 items-start justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8"
>
	<div class="w-full flex flex-row space-x-4 items-center justify-start mt-24">
		<i class="fal fa-chevron-left text-2xl text-stone-600"></i>
		<span class="text-xl font-normal text-stone-600">Dashboard</span>
	</div>

	<div
		class="w-full flex flex-col items-start space-y-4 py-8 px-8 border border-stone-300 rounded-xl"
	>
		<div
			class="w-full flex flex-col space-y-4 space-x-0 justify-start items-start md:flex-row md:space-y-0 md:space-x-2 lg:space-x-8 md:items-center"
		>
			<div class="w-full md:w-1/2">
				<div
					class="w-full flex flex-col space-y-4 justify-center space-x-0 sm:flex-row sm:space-x-4 items-center sm:justify-start"
				>
					<div class="w-32 h-32 lg:w-40 lg:h-40 flex flex-none">
						<img src="/seller.png" alt="seller" class="w-full h-full rounded-full" />
					</div>
					<div
						class="w-full flex flex-col space-y-1 items-center justify-center sm:items-start sm:justify-start"
					>
						<div
							class="w-full flex flex-row items-center justify-center sm:justify-start space-x-2"
						>
							<h3 class="text-xl lg:t2 text-primary">John Doe</h3>
							<img src="/verify-filled.png" alt="verify-filled" class="w-8 h-8" />
						</div>
						<p class="text-stone-600 font-normal text-lg md:text-md lg:text-xl">
							Joined since May 2019
						</p>
						<p class="text-stone-600 font-normal text-lg md:text-md lg:text-xl">
							<i class="fal fa-map-marked-alt pr-2"></i> Houston, Texas US
						</p>

						<div
							class="w-full flex flex-row flex-wrap items-center justify-center sm:justify-start"
						>
							<div class="flex flex-none space-x-1 w-auto mr-4">
								<span class="fal text-sm lg:text-lg fa-star text-primary"> </span>
								<span class="fal text-sm lg:text-lg fa-star text-primary"> </span>
								<span class="fal text-sm lg:text-lg fa-star text-primary"> </span>
								<span class="fal text-sm lg:text-lg fa-star text-primary"> </span>
								<span class="fal text-sm lg:text-lg fa-star text-primary"> </span>
							</div>
							<span class="text-sm lg:text-lg font-normal text-stone-600">5.0 (530 sold )</span>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full md:w-1/2 flex justify-end items-end flex-col space-y-4 mr-auto max-w-md">
				<div class="w-full flex flex-row items-center justify-start space-x-2">
					<img src="/verify-filled.png" alt="verify-filled" class="w-8 h-8" />
					<h3 class="text-xl font-normal text-primary">Phone number verified</h3>
				</div>
				<div class="w-full flex flex-row items-center justify-start space-x-2">
					<img src="/verify-filled.png" alt="verify-filled" class="w-8 h-8" />
					<h3 class="text-xl font-normal text-primary">Email address verified</h3>
				</div>
				<div class="w-full flex flex-row items-center justify-start space-x-2">
					<i class="fal fa-edit"></i>
					<span class="text-xl font-normal text-primary">Avg. Response time: 1hr</span>
				</div>
			</div>
		</div>

		<div class="block w-full h-[2px] border-dashed border-[1.5px] border-stone-300"></div>

		<div class="w-full flex flex-col space-y-4 space-x-0 justify-start items-start">
			<h3 class="w-full text-2xl font-bold text-primary">Analytics</h3>
			<p class="w-full text-lg font-normal text-stone-800">
				This section will be updated every 24hrs
			</p>
			<div class="w-full flex flex-row space-x-4 items-start">
				<button
					type="button"
					class="w-fit px-4 py-2 border border-stone-300 rounded-xl flex flex-row items-center space-x-2 bg-white"
				>
					<i class="fal fa-sort"></i>
					<span class="text-md font-normal text-stone-800">Filters</span>
				</button>
				<button
					type="button"
					class="w-fit px-4 py-2 border border-stone-300 rounded-xl flex flex-row items-center space-x-2 bg-white"
				>
					<i class="fal fa-calendar"></i>
					<span class="text-md font-normal text-stone-800">Select dates</span>
				</button>
			</div>
			<div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
				<div class="w-full col-span-1 flex flex-col space-y-4 items-start justify-start">
					<div class="w-full flex flex-row space-x-4 items-center justify-between">
						<h3 class="text-lg xl:text-xl text-primary font-black">Sale Summary</h3>
						<div class="flex flex-row space-x-2 items-center">
							<span class="underline text-primary text-sm xl:text-md font-normal underline-offset-2"
								>Go to store
							</span>
						</div>
					</div>
					<div
						class="w-full flex flex-col justify-start items-start p-6 rounded-xl border border-stone-300"
					>
						<div class="flex flex-row space-x-2 w-full items-center justify-between">
							<div class="w-full flex items-start flex-col space-y-2 justify-start">
								<h3 class="text-md font-normal text-stone-800">Overall Sales</h3>
								<h1 class="text-xl font-black text-primary">$108,560.93</h1>
							</div>
							<div
								class="w-fit flex-none text-sm px-4 py-2 bg-stone-200 border border-stone-300 rounded-lg flex items-center justify-center"
							>
								This month
							</div>
						</div>
						<div class="p-4 w-full relative h-auto max-h-[200px]"></div>
					</div>
				</div>
				<div class="w-full col-span-1 flex flex-col space-y-4 items-start justify-start">
					<div class="w-full flex flex-row space-x-4 items-center justify-between">
						<h3 class="text-lg xl:text-xl text-primary font-black">My Performance</h3>
						<div class="flex flex-row space-x-2 items-center">
							<span class="underline text-primary text-sm xl:text-md font-normal underline-offset-2"
								>Share profile
							</span>
						</div>
					</div>
					<div
						class="w-full flex flex-col justify-start items-start p-6 rounded-xl border border-stone-300"
					>
						<div class="flex flex-col space-y-2 w-full items-start justify-start">
							<div class="w-full text-md font-normal text-stone-800 text-left">Friendly</div>
							<div
								class="w-full relative rounded-full bg-stone-300 h-2 flex flex-col items-start justify-start"
							>
								<div class="w-[50%] absolute p-0 h-full bg-primary rounded-full"></div>
							</div>
							<div class="w-full text-md font-normal text-stone-800 text-right">
								50% overall time
							</div>
						</div>

						<div class="flex flex-col space-y-2 w-full items-start justify-start">
							<div class="w-full text-md font-normal text-stone-800 text-left">Trust</div>
							<div
								class="w-full relative rounded-full bg-stone-300 h-2 flex flex-col items-start justify-start"
							>
								<div class="w-[50%] absolute p-0 h-full bg-primary rounded-full"></div>
							</div>
							<div class="w-full text-md font-normal text-stone-800 text-right">
								50% overall time
							</div>
						</div>

						<div class="flex flex-col space-y-2 w-full items-start justify-start">
							<div class="w-full text-md font-normal text-stone-800 text-left">Communicative</div>
							<div
								class="w-full relative rounded-full bg-stone-300 h-2 flex flex-col items-start justify-start"
							>
								<div class="w-[50%] absolute p-0 h-full bg-primary rounded-full"></div>
							</div>
							<div class="w-full text-md font-normal text-stone-800 text-right">
								50% overall time
							</div>
						</div>
					</div>
				</div>
				<div class="w-full col-span-1 flex flex-col space-y-4 items-start justify-start">
					<div class="w-full flex flex-row space-x-4 items-center justify-between">
						<h3 class="text-lg xl:text-xl text-primary font-black">Total sales</h3>
					</div>
					<div
						class="w-full flex flex-col space-y-4 justify-start items-start p-6 rounded-xl border border-stone-300"
					>
						<div class="flex flex-row space-x-2 w-full items-center justify-between">
							<div
								class="w-16 h-16 bg-stone-200 border border-stone-300 rounded-lg flex items-center justify-center"
							>
								<img src="/total-sales.png" class="w-9 h-9" alt="total sales" />
							</div>
							<div
								class="w-10 h-10 bg-stone-200 border border-stone-300 rounded-lg flex items-center justify-center"
							>
								<i class="fal fa-ellipsis-h text-3xl text-stone-600"></i>
							</div>
						</div>

						<h3 class="text-lg font-bold text-stone-800">Total Sales</h3>

						<h1 class="text-2xl font-black text-primary">$108,560.93</h1>

						<div class="flex mx-auto w-full items-center justify-center">
							<a href="#" class="text-primary text-md font-medium p-2 underline">View history</a>
						</div>
					</div>
				</div>
				<div class="w-full col-span-1 flex flex-col space-y-4 items-start justify-start">
					<div class="w-full flex flex-row space-x-4 items-center justify-between">
						<h3 class="text-lg xl:text-xl text-primary font-black">My commissions</h3>
					</div>
					<div
						class="w-full flex flex-col space-y-4 justify-start items-start p-6 rounded-xl border border-stone-300"
					>
						<div class="flex flex-row space-x-2 w-full items-center justify-between">
							<div
								class="w-16 h-16 bg-stone-200 border border-stone-300 rounded-lg flex items-center justify-center"
							>
								<img src="/wallet.svg" class="w-9 h-9" alt="wallet" />
							</div>
							<div
								class="w-10 h-10 bg-stone-200 border border-stone-300 rounded-lg flex items-center justify-center"
							>
								<i class="fal fa-ellipsis-h text-3xl text-stone-600"></i>
							</div>
						</div>

						<h3 class="text-lg font-bold text-stone-800">Conversion Rate</h3>

						<h1 class="text-2xl font-black text-primary">$108,560.93</h1>

						<div class="flex mx-auto w-full items-center justify-center">
							<a
								href="#"
								class="text-primary text-md font-medium bg-stone-200 text-center p-2 rounded-full w-full block"
								>Request payment</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="w-full flex flex-col space-y-4 space-x-0 justify-start items-start py-8">
			<div class="w-full flex flex-row space-x-4 justify-between items-center">
				<div class="text-2xl font-black text-stone-800">Selling products</div>
				<button
					type="button"
					class="w-fit px-4 py-2 border border-stone-300 rounded-xl flex flex-row items-center space-x-2 bg-white"
				>
					<i class="fal fa-sort"></i>
					<span class="text-md font-normal text-stone-800">Filters</span>
				</button>
			</div>
			<table class="w-full flex flex-col space-y-2 items-start justify-start overflow-x-auto scrollbar-hide rounded-xl border border-stone-300">
				<tr
					class="w-full flex flex-row items-center bg-stone-100 border-b border-stone-300"
				>
					<th
						class="flex justify-start items-start p-4 w-full min-w-[200px] md:min-w-[50%] text-stone-800 text-lg font-medium"
						>Product Name</th
					>
					<th
						class="flex flex-none justify-end items-end p-4 w-fit md:min-w-[15%] text-stone-800 text-lg font-medium"
						>Price</th
					>
					<th
						class="flex flex-none justify-end items-end p-4 w-fit md:min-w-[15%] text-stone-800 text-lg font-medium"
						>Sold</th
					>
					<th
						class="flex flex-none justify-end items-end p-4 w-fit md:min-w-[20%] text-stone-800 text-lg font-medium"
						>Status</th
					>
				</tr>

				<tr class="w-full flex flex-row items-center">
					<td
						class="flex justify-start items-center space-x-2 p-4 w-full min-w-[200px] md:min-w-[50%]"
					>
						<img src="/shoe.png" alt="shoe" class="rounded-xl w-12 h-12" />
						<span class="truncate text-stone-800 text-md font-normal">Wolf lining sneaker</span>
					</td>
					<td
						class="flex flex-none justify-end items-end p-4 w-fit md:min-w-[15%] text-stone-800 text-md font-normal"
						>$1,203.00</td
					>
					<td
						class="flex flex-none justify-end items-end p-4 w-fit md:min-w-[15%] text-stone-800 text-md font-normal"
						>1,203</td
					>
					<td
						class="flex flex-none space-x-2 justify-end items-center p-4 w-fit md:min-w-[20%] text-stone-800 text-md font-normal"
					>
						<div class="w-2.5 h-2.5 rounded-full bg-red-600"></div>
						<span>Out of stock</span>
					</td>
				</tr>
			</table>
		</div>
	</div>
</div>
