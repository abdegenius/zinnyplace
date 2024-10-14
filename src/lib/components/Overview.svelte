<script>
    export let title = "Overview";
</script>


<div class="border p-5 bg-stone-50">
	<h1 class="text-lg font-semibold mb-3">{title}</h1>
	<h5 class="font-black text-sm my-2">Service title</h5>
	<p class="text-sx text-stone-500 my-2 text-sm">
		Think of it as your shop window—it's crucial because it's the first thing people see. Be sure to
		include keywords that potential buyers typically search for when looking for a service like
		yours.
	</p>
	<div class="pt-3">
		<div class="w-full border rounded-lg bg-stone-100 py-3 px-2 mt-4 text-sm">
			<textarea
				class="w-full bg-inherit min-h-20 max-h-48 outline-none"
				name=""
				id=""
				placeholder="I will deliver my service perfectly"
			></textarea>
			<div class="w-full flex justify-end p-2">
				<span class="text-sm text-stone-500">0/60</span>
			</div>
		</div>
	</div>
	<div class="pt-8">
		<h1 class="font-black space-y-2">Describe your gig briefly</h1>
		<div class="w-full border rounded-lg bg-stone-100 py-3 px-2 mt-2 text-sm">
			<textarea
				class="w-full bg-inherit min-h-20 max-h-80 outline-none"
				name=""
				id=""
				placeholder="I will deliver my service perfectly"
			></textarea>
			<div class="w-full flex justify-end p-2">
				<span class="text-sm text-stone-500">0/1100</span>
			</div>
		</div>
	</div>
	<div>
		<h1 class="font-black space-y-2 mt-5">Category</h1>
		<p class="text-sm text-stone-500 mb-3">
			Select the appropriate category and sub-category. This ensures the right people can find you
			easily.
		</p>
		<div class="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-2">
			<select
				class="w-full outline-none py-3 border bg-stone-100 rounded-lg text-stone-500 text-sm px-3"
				name=""
				id=""
			>
				<option value="">Choose category</option>
			</select>
			<select
				class="w-full outline-none py-3 border bg-stone-100 rounded-lg text-stone-500 text-sm px-3"
				name=""
				id=""
			>
				<option value="">Choose category</option>
			</select>
			<select
				class="w-full outline-none py-3 border bg-stone-100 rounded-lg text-stone-500 text-sm px-3"
				name=""
				id=""
			>
				<option value="">Choose category</option>
			</select>
		</div>
	</div>
	<div class="w-full my-5">
		<h1 class="font-black">Add search tag</h1>
		<div class="w-full my-2 py-3 border rounded-lg bg-stone-100"></div>
		<div class="flex justify-end">
			<span class="text-xs text-stone-500">5 max</span>
		</div>
	</div>
</div>