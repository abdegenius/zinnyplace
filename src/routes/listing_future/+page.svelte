<script>
	import Overview from "$lib/components/Overview.svelte";
	import Pricing from "../../lib/components/Pricing.svelte";
	import Gallery from "../../lib/components/Gallery.svelte";

	let currentView = 'Overview';
	function changeView(view){
		currentView = view;
	}
</script>


	<div class="flex flex-col w-full h-full md:flex-row p-2 relative">
		<div class="flex md:w-[320px] fixed bg-white z-10 flex-row md:flex-col border-r md:space-x-0 overflow-y-auto h-auto md:h-screen scrollbar-hide">
			<button on:click={() => changeView('Overview')}  class:bg-secondary={currentView === 'Overview'}
				 class="w-full flex flex-col space-y-2 py-2 text-stone-600 transition-all duration-300 md:py-8 px-4 border md:border hover:bg-secondary/50 hover:text-primary">
				<h1 id="overview" class="text-lg font-semibold">Overview</h1>
				<div id="overviewContent" class="text-start hidden text-sm sm:block">
					Craft a compelling and attention-grabbing title for your gig
				</div>
			</button>
			<button on:click={() => changeView('Pricing')} class:bg-secondary={currentView === 'Pricing'}
				class="w-full flex flex-col space-y-2 py-2 text-stone-600 transition-all duration-300 md:py-8 px-4 border md:border hover:bg-secondary/50 hover:text-primary">
				<h1 id="pricing" class="text-lg font-semibold">Pricing</h1>
				<div id="pricingContent" class="text-start hidden text-sm sm:block">
					Set prices for your three service packages, define the services included in each, and offer
					additional extras to increase your earnings.
				</div>
			</button>
			<button on:click={() => changeView('Gallery')}  class:bg-secondary={currentView === 'Gallery'}
				class="w-full flex flex-col space-y-2 py-2 tmd:py-16  py-2ext-stone-600 transition-all duration-300 md:py-8 px-4 border md:border hover:bg-secondary/50 hover:text-primary">
				<h1 id="gallery" class="text-lg font-semibold">Gallery</h1>
				<div id="galleryContent" class="text-start hidden text-sm sm:block">
					Upload images, an introductory video, or PDFs that effectively showcase your service.
				</div>
			</button>
		</div>
		<div class="flex flex-col space-y-10  w-full mt-[154px] md:mt-0 md:w-full md:ml-[320px] border p-5">
			<div class="">
				{#if currentView === 'Overview'}
				<Overview />
				{:else if currentView === 'Pricing'}
				<Pricing />
				{:else if currentView === 'Gallery'}
				<Gallery />
				{/if}
			</div>
			<div class="flex justify-between space-x-32 my-8">
				<button class="w-full border text-xs rounded-lg py-2">back</button>
				<button class="w-full bg-primary text-white border text-xs rounded-lg py-2">
				{#if currentView === 'Overview' }
					Next
					{:else if currentView === 'Pricing'}
					Next
					{:else if currentView === 'Gallery'}
					Save and Publish
				{/if}
				</button>
			</div>
		</div>
	</div>              
	