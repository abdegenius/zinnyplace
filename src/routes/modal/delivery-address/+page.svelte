<div
	class="w-full inset-0 border border-stone-300 rounded-xl mx-auto max-w-5xl flex flex-col space-y-4 justify-start items-start py-8 px-4"
>
	<h1 class="text-center mx-auto text-xl sm:text-2xl md:text-4xl font-medium text-stone-800">
		Confirm Delivery Address
	</h1>

	<div
		class="p-4 w-full flex flex-col items-center justify-center mx-auto space-y-2 rounded-xl border border-stone-300 pb-8"
	>
		<div class="w-full flex flex-row space-x-4 items-center justify-center flex-wrap">
			<div class="text-lg font-medium text-stone-800">
				<i class="fal fa-map-marked pr-3"></i>
				<span>234 Oak Street, No 101 Boulder, CO 80302</span>
			</div>
			<button
				type="button"
				class="w-fit px-3 py-1 text-md font-normal text-stone-800 border-2 border-stone-300 rounded-md"
			>
				Edit
			</button>
		</div>
		<p class="p-4 w-full flex">
			<button
				type="button"
				class="bg-primary w-full text-light p-4 rounded-xl text-lg font-semibold text-center"
				>Confirm</button
			>
		</p>
	</div>

	<div class="w-full py-8">
		<div class="w-full flex bg-stone-300 h-[1px]"></div>
	</div>

	<div class="w-full flex flex-col space-y-4 items-start justify-start pb-8">
		<h1 class="text-3xl font-normal text-stone-800">Delivery Period</h1>
		<div class="w-full grid gap-4 grid-cols-2 md:grid-cols-4 items-stretch h-full">
			<div
				class="w-full h-auto flex-none flex flex-col space-y-4 items-center justify-center mx-auto py-2 px-4 sm:py-4 sm:px-8 border border-stone-300 rounded-md"
			>
				<h3 class="font-bold text-stone-800 text-sm sm:text-lg">Mon or Tue</h3>
				<p class="text-xs sm:text-md font-medium text-stone-600">2:30pm - 3:00pm</p>
			</div>
			<div
				class="w-full h-auto flex-none flex flex-col space-y-4 items-center justify-center mx-auto py-2 px-4 sm:py-4 sm:px-8 border border-stone-300 rounded-md"
			>
				<h3 class="font-bold text-stone-800 text-sm sm:text-lg">Wed or Thu</h3>
				<p class="text-xs sm:text-md font-medium text-stone-600">2:30pm - 3:00pm</p>
			</div>
			<div
				class="w-full h-auto flex-none flex flex-col space-y-4 items-center justify-center mx-auto py-2 px-4 sm:py-4 sm:px-8 border border-stone-300 rounded-md"
			>
				<h3 class="font-bold text-stone-800 text-sm sm:text-lg">Fri or Sat</h3>
				<p class="text-xs sm:text-md font-medium text-stone-600">2:30pm - 3:00pm</p>
			</div>
			<div
				class="w-full h-auto flex-none flex flex-col space-y-4 items-center justify-center mx-auto py-2 px-4 sm:py-4 sm:px-8 border border-stone-300 rounded-md"
			>
				<h3 class="font-bold text-stone-800 text-sm sm:text-lg">Urgent</h3>
				<p class="text-xs sm:text-md font-medium text-stone-600">Set Time</p>
			</div>
		</div>
	</div>

	<div class="w-full flex flex-col space-y-4 items-start justify-start pb-8">
		<h1 class="text-3xl font-normal text-stone-800">Contact Details</h1>

		<div class="w-full flex flex-col space-y-1 items-start justify-start">
			<div class="text-xl font-light text-stone-600">Enter number for order purposes</div>
			<input
				type="text"
				class="w-full border border-stone-300 bg-white rounded-xl p-4 outline-none placeholder:text-stone-500 text-stone-800 text-lg font-normal"
				placeholder=""
			/>
		</div>
	</div>

	<div class="w-full flex flex-col space-y-4 items-start justify-start pb-8">
		<h1 class="text-3xl font-normal text-stone-800">Tip</h1>

		<div class="w-full flex flex-col space-y-1 items-start justify-start">
			<div class="text-xl font-light text-stone-600">
				Shoppers save you time and energy (Optional)
			</div>
			<select
				class="w-full border border-stone-300 bg-white rounded-xl p-4 outline-none placeholder:text-stone-500 text-stone-800 text-lg font-normal"
			>
				<option value="20">$20</option></select
			>
		</div>
	</div>

	<button
		type="button"
		class="bg-primary w-full text-light p-4 rounded-xl text-lg font-semibold text-center"
		>Checkout $45.00</button
	>
</div>
