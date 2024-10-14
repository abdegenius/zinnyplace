<script>
    export let title = "Pricing";
    const off = document.getElementById('off');
    const on = document.getElementById('on');
    
    let active = 'off';

    function currentStatus(toggle){
        active = toggle;
    }
</script>

<div class="p-5">
	<div class="flex justify-between py-2">
		<h1 class="text-lg font-black">{title}</h1>
		<div class="flex space-x-4 items-center">
			<div class="text-sm">Offer Packages</div>
			<div class="flex -space-x-1 justify-between p-1 bg-secondary w-14 rounded-full">
				<button on:click={ () => currentStatus('off')} id="off" class="w-8 h-6 rounded-full focus:bg-white" class:bg-white={currentStatus === 'off'}></button>
				<button on:click={ () => currentStatus('on')} id="on" class="w-8 h-6 rounded-full focus:bg-primary" class:bg-primary={currentStatus === 'on'}></button>
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
	</div>
</div>