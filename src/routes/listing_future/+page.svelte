<script></script>

<div class="flex flex-col md:flex-row p-2">
	<div class="md:flex flex-col space-y-20 hidden">
		<div class="flex flex-col space-y-2">
			<h1 class="text-lg">Overview</h1>
			<div class="text-start text-sm text-stone-500">
				Craft a compelling and attention-grabbing title for your gig
			</div>
		</div>
		<div class="flex flex-col space-y-2">
			<h1 class="text-lg">Pricing</h1>
			<div class="text-start text-sm text-stone-500">
				Set prices for your three service packages, define the services included in each, and offer
				additional extras to increase your earnings.
			</div>
		</div>
		<div class="flex flex-col space-y-2">
			<h1 class="text-lg">Gallery</h1>
			<div class="text-start text-sm text-stone-500">
				Upload images, an introductory video, or PDFs that effectively showcase your service.
			</div>
		</div>
	</div>
	<div class="border p-2 bg-stone-50">
		<h1 class="text-lg font-semibold mb-3">Overview</h1>
		<h5 class="font-black text-sm my-2">Service title</h5>
		<p class="text-sx text-stone-500 my-2 text-sm">
			Think of it as your shop window—it's crucial because it's the first thing people see. Be sure
			to include keywords that potential buyers typically search for when looking for a service like
			yours.
		</p>
		<div>
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
		<div>
			<h1 class="font-black space-y-2">Describe your gig briefly</h1>
			<div class="w-full border rounded-lg bg-stone-100 py-3 px-2 mt-4 text-sm">
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
			<div class="flex flex-col sm:flex-row space-y-2 sm:space-x-2">
				<select
					class="w-full outline-none py-1 border bg-stone-100 rounded-lg text-stone-500 text-sm px-3"
					name=""
					id=""
				>
					<option value="">Choose category</option>
				</select>
				<select
					class="w-full outline-none py-1 border bg-stone-100 rounded-lg text-stone-500 text-sm px-3"
					name=""
					id=""
				>
					<option value="">Choose category</option>
				</select>
				<select
					class="w-full outline-none py-1 border bg-stone-100 rounded-lg text-stone-500 text-sm px-3"
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
		<div class="flex justify-between space-x-3 my-8">
			<button class="w-full border text-xs rounded-lg py-2">back</button>
			<button class="w-full bg-primary text-white border text-xs rounded-lg py-2">Next</button>
		</div>
	</div>
</div>
<!-- Pricing -->
<div class="flex justify-between">
	<h1 class="text-lg font-black">Pricing</h1>
	<div class="flex space-x-4 items-center">
		<div class="text-sm">Offer Packages</div>
		<div class="flex -space-x-1 justify-between p-1 bg-secondary w-14 rounded-full">
			<button class="w-8 h-6 rounded-full bg-inherit focus:bg-white"></button>
			<button class="w-8 h-6 rounded-full focus:bg-primary"></button>
		</div>
	</div>
</div>
<div class="bg-stone-50">
	<table class="w-full border p-2">
		<tr class="text-sm font-black text-start bg-stone-200/50">
			<th class="border-r pb-12 pt-2 px-2 text-start border-b">Item</th>
			<th class="border-r pb-12 pt-2 px-2 text-start border-b">Basic</th>
			<th class="border-r pb-12 pt-2 px-2 text-start border-b">Standard</th>
			<th class="border-r pb-12 pt-2 px-2 text-start border-b">Premium</th>
		</tr>
		<tr class=" text-start">
			<td class="border-r pb-12 pt-2 px-2 border-b">Title</td>
			<td class="border-r pb-12 pt-2 px-2 border-b">Basic</td>
			<td class="border-r pb-12 pt-2 px-2 border-b">Standard</td>
			<td class="border-r pb-12 pt-2 px-2 border-b">Premium</td>
		</tr>
		<tr>
			<td class="border-r text-sm pb-12 pt-2 px-2 border-b text-center">Description</td>
			<td class="border-r text-sm pb-12 pt-2 px-2 border-b text-stone-500"
				>Provde a concise price description</td
			>
			<td class="border-r text-sm pb-12 pt-2 px-2 border-b text-stone-500"
				>Provde a concise price description</td
			>
			<td class="border-r text-sm pb-12 pt-2 px-2 border-b text-stone-500"
				>Provde a concise price description</td
			>
		</tr>
		<tr>
			<td class="border-r pb-12 pt-2 px-2 border-b text-center">Delivery Time</td>
			<td class="border-r border-b text-stone-500"
				><select class="text-sm p-2 bg-stone-50 outline-none flex w-full" name="" id="">
					<option value="">Select- delivery period</option>
				</select></td
			>
			<td class="border-r border-b text-stone-500"
				><select class="text-sm p-2 bg-stone-50 outline-none flex w-full" name="" id="">
					<option value="">Select- delivery period</option>
				</select></td
			>
			<td class="border-r border-b text-stone-500"
				><select class="text-sm p-2 bg-stone-50 outline-none flex w-full" name="" id="">
					<option value="">Select- delivery period</option>
				</select></td
			>
		</tr>
		<tr>
			<td class="border-r pb-12 pt-2 px-2 border-b text-center">Rivision</td>
			<td class="border-r border-b text-stone-500"
				><select class="text-sm p-2 bg-stone-50 outline-none flex w-full" name="" id="">
					<option value="">Select- rivision period</option>
				</select></td
			>
			<td class="border-r border-b text-stone-500"
				><select class="text-sm p-2 bg-stone-50 outline-none flex w-full" name="" id="">
					<option value="">Select- rivision period</option>
				</select></td
			>
			<td class="border-r border-b text-stone-500"
				><select class="text-sm p-2 bg-stone-50 outline-none flex w-full" name="" id="">
					<option value="">Select- rivision period</option>
				</select></td
			>
		</tr>
		<tr>
			<td class="border-r text-sm pb-12 pt-2 px-2 border-b text-center">Description</td>
			<td class="border-r text-sm pb-12 pt-2 px-2 border-b text-stone-500"
				><div class="flex justify-between items-center">
					<span class="text-sm">Enter price range</span>
					<img class="w-4 h-4" src="/dollar-circle.png" alt="" />
				</div></td
			>
			<td class="border-r text-sm pb-12 pt-2 px-2 border-b text-stone-500"
				><div class="flex justify-between items-center">
					<span class="text-sm">Enter price range</span>
					<img class="w-4 h-4" src="/dollar-circle.png" alt="" />
				</div></td
			>
			<td class="border-r text-sm pb-12 pt-2 px-2 border-b text-stone-500"
				><div class="flex justify-between items-center">
					<span class="text-sm">Enter price range</span>
					<img class="w-4 h-4" src="/dollar-circle.png" alt="" />
				</div></td
			>
		</tr>
	</table>
	<div class="flex justify-between space-x-32 my-8">
		<button class="w-full border text-xs rounded-lg py-2">back</button>
		<button class="w-full bg-primary text-white border text-xs rounded-lg py-2">Next</button>
	</div>
</div>
<!-- gallery -->
<div class="w-full p-2">
	<div class="flex bg-secondary space-x-3 items-center p-2 border border-primary rounded-xl">
		<img src="/icon-park-solid_attention.png" class="w-8 h-8 rounded-full" alt="" />
		<p class="text-sm text-primary">
			Click here to read Zinny’splace terms and conditions: Upload only content that you own or have
			permission to use.
		</p>
	</div>
	<h1 class="font-black text-lg my-4">Gallery</h1>
	<div class="my-2 text-sm">3 images max</div>
	<div class="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-3">
		<button class=" w-full">
			<img
				src="addfeaturedimage.png"
				class="w-fullborder border-dashed rounded-lg border-primary"
				alt=""
			/>
		</button>
		<button class=" w-full">
			<img
				src="addfeaturedimage.png"
				class="w-fullborder border-dashed rounded-lg border-primary"
				alt=""
			/>
		</button>
		<button class=" w-full">
			<img
				src="addfeaturedimage.png"
				class="w-fullborder border-dashed rounded-lg border-primary"
				alt=""
			/>
		</button>
	</div>
	<div class="my-2 text-sm flex">
		Document (2 pdf only) <span class="text-stone-400 text-xs">(optional)</span>
	</div>
	<div class="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-3">
		<button class=" w-full">
			<img
				src="addfeaturedimage.png"
				class="w-fullborder border-dashed rounded-lg border-primary"
				alt=""
			/>
		</button>
		<button class=" w-full">
			<img
				src="addfeaturedimage.png"
				class="w-fullborder border-dashed rounded-lg border-primary"
				alt=""
			/>
		</button>
		<button class=" w-full">
			<img
				src="addfeaturedimage.png"
				class="w-fullborder border-dashed rounded-lg border-primary"
				alt=""
			/>
		</button>
	</div>
    <div class="my-2 text-sm">
        Video (up to 2) <span class="text-stone-400 text-xs">(optional)</span>
    </div>
    <div class="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        <button class=" w-full">
            <img
                src="addfeaturedimage.png"
                class="w-fullborder border-dashed rounded-lg border-primary"
                alt=""
            />
        </button>
        <button class=" w-full">
            <img
                src="addfeaturedimage.png"
                class="w-fullborder border-dashed rounded-lg border-primary"
                alt=""
            />
        </button>
        <button class=" w-full">
            <img
                src="addfeaturedimage.png"
                class="w-fullborder border-dashed rounded-lg border-primary"
                alt=""
            />
        </button>
    </div>

    <div class="my-10 ">
        <div class="flex items-center space-x-2">
            <input type="checkBox" name="" id="check">
            <label for="check" class="text-xs text-stone-500"> I certify that these materials were created by me or my team and do not violate any third-party rights. I understand that the illegal use of digital assets is against Zinny’splace Terms of Service and may result in my account being blocked.</label>
        </div>
    </div>
    <div class="flex justify-between space-x-32 my-8">
		<button class="w-full border text-xs rounded-lg py-2">back</button>
		<button class="w-full bg-primary text-white border text-xs rounded-lg py-2">Save and publish</button>
	</div>
</div>
