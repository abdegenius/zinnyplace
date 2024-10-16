<script>
</script>

<div
	class="w-full flex flex-col space-y-6 items-start justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8"
>
	<div class="w-full flex flex-row space-x-4 items-center justify-between">
		<div class="flex flex-row space-x-2 items-center justify-start">
			<i class="fal fa-chevron-left text-lg text-stone-600"></i>
			<span class="text-xl font-normal text-stone-600">List a product</span>
		</div>
		<button
			class="px-12 py-2 rounded-full bg-secondary text-primary font-black text-lg"
			type="button">Save</button
		>
	</div>

	<div class="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start rounded-xl bg-stone-100 px-4 py-16 sm:px-8 lg:px-16">
		<div class="w-full col-span-1 flex flex-col space-y-10">
			<div class="w-full flex flex-col space-y-1 items-start justify-start">
				<div class="text-xl font-bold text-primary">Title</div>
				<input
					type="text"
					class="w-full border border-stone-300 bg-white rounded-xl p-4 outline-none placeholder:text-stone-500 text-stone-800 text-lg font-normal"
					placeholder="Short sleeve"
				/>
			</div>
			<div class="w-full flex flex-col space-y-1 items-start justify-start">
				<div class="text-xl font-bold text-primary">Component</div>
				<textarea
					class="w-full border border-stone-300 bg-white min-h-[75px] rounded-xl p-4 outline-none placeholder:text-stone-500 text-stone-800 text-lg font-normal"
					placeholder="Short sleeve"
				>
				</textarea>
				<p class="text-right w-full text-sm font-normal">0/250</p>
			</div>
			<div
				class="w-full flex flex-col space-y-1 items-center mx-auto justify-center border-2 border-stone-300 border-dashed text-center h-[200px] bg-white rounded-xl"
			>
				<i class="fal fa-camera text-primary text-4xl"></i>
				<h3 class="text-xl font-bold text-primary">Upload featured image</h3>
				<p class="text-sm font-normal text-stone-800">
					This image will be displayed on the listing category
				</p>
			</div>
		</div>
		<div class="w-full col-span-1 flex flex-col space-y-12">
			<div class="w-full flex flex-col space-y-1 items-start justify-start">
				<div class="text-xl font-bold text-primary">Status</div>
				<select
					class="w-full border border-stone-300 bg-white rounded-xl p-4 outline-none placeholder:text-stone-500 text-stone-800 text-lg font-normal"
				>
					<option value="">Active</option>
				</select>
			</div>
            <div class="w-full flex flex-col space-y-1 items-start justify-start">
				<div class="text-xl font-bold text-primary">Category</div>
				<select
					class="w-full border border-stone-300 bg-white rounded-xl p-4 outline-none placeholder:text-stone-500 text-stone-800 text-lg font-normal"
				>
					<option value="">General</option>
				</select>
			</div>
			<div class="w-full flex flex-col space-y-1 items-start justify-start">
				<div class="text-xl font-bold text-primary">Price</div>
				<input
					type="number"
					class="w-full border border-stone-300 bg-white rounded-xl p-4 outline-none placeholder:text-stone-500 text-stone-800 text-lg font-normal"
					placeholder="$100"
				/>
			</div>
			<div class="w-full flex flex-col space-y-1 items-start justify-start">
				<div class="text-xl font-bold text-primary">Shipping price</div>
				<input
					type="number"
					class="w-full border border-stone-300 bg-white rounded-xl p-4 outline-none placeholder:text-stone-500 text-stone-800 text-lg font-normal"
					placeholder="$10"
				/>
			</div>
		</div>
	</div>
</div>
