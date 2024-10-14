<script></script>

<div class="w-full bg-stone-50/50 flex justify-center">
	<div class=" w-full md:w-5/6 bg-white p-3">
		<div class="w-full flex justify-between items-center py-3 border-b">
			<div class="text-primary text-2xl font-semibold">Wallet</div>
			<button>
				<img class="w-6 h-6" src="/group1631.png" alt="" />
			</button>
		</div>
		<div class="bg-primary w-full rounded-xl p-5 flex justify-between text-white">
			<div class="flex flex-col space-y-10">
				<div class="flex items-center justify-start space-x-3">
					<img class="w-8 h-8" src="/frame4534760.png" alt="" />
					<div class="flex flex-col">
						<span class="text-stone-200 font-bold sm:text-xl">USDT</span>
					</div>
				</div>
				<div class="text-2xl sm:text-4xl">0.458</div>
			</div>
			<div class="flex flex-col space-y-4">
				<button class="flex text-stone-300 space-x-3">
					<span class="text-sm sm:text-xl">Transaction History </span>
					<span class="fa fa-angle-right text-stone-300"></span>
				</button>
				<div class="flex space-x-2 justify-end items-center">
					<span class="text-stone-500 text-xs sm:text-lg">10, 678 USDT</span>
					<span class="text-white">MAX</span>
				</div>
				<div class="text-2xl sm:text-4xl text-end sm:text-start text-stone-300">~ $75</div>
			</div>
		</div>
		<div class="flex flex-col space-y-10">
			<div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:justify-between pb-2 items-center my-3 border-b">
				<div class="w-full flex items-center justify-start space-x-3">
					<img class="w-14 h-14" src="/group4534767.png" alt="" />
					<div class="flex flex-col">
						<span class="text-stone-600 text-sm font-bold">0.678 USDT</span>
						<span class="text-stone-500 text-sm">Jul 20th, 8:12 am</span>
					</div>
				</div>
				<div class="w-full flex flex-col justify-end">
					<div class="flex justify-end">
						<div class="flex space-x-2">
							<span class="text-sm text-stone-500 text-ellipsis whitespace-nowrap overflow-hidden w"
								>Trans_23BC545jko1pcashroute....</span
							>
							<img src="/file-download.png" alt="sheet" />
						</div>
					</div>
					<div class="flex justify-end w-full">
						<div class="w-fit bg-primary/20 text-primary px-2 rounded-full">success</div>
					</div>
				</div>
			</div>
			<div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:justify-between pb-2 items-center my-3 border-b">
				<div class="w-full flex items-center justify-start space-x-3">
					<img class="w-14 h-14" src="/group4534767.png" alt="" />
					<div class="flex flex-col">
						<span class="text-stone-600 text-sm font-bold">0.678 USDT</span>
						<span class="text-stone-500 text-sm">Jul 20th, 8:12 am</span>
					</div>
				</div>
				<div class="w-full flex flex-col justify-end">
					<div class="flex justify-end">
						<div class="flex space-x-2">
							<span class="text-sm text-stone-500 text-ellipsis whitespace-nowrap overflow-hidden w"
								>Trans_23BC545jko1pcashroute....</span
							>
							<img src="/file-download.png" alt="sheet" />
						</div>
					</div>
					<div class="flex justify-end w-full">
						<div class="w-fit bg-primary/20 text-primary px-2 rounded-full">success</div>
					</div>
				</div>
			</div>
		</div>
		<div class="border rounded-xl mt-10 mx-5">
			<div class="w-full p-7">
				<h1 class="font-black text-xl">Wallet Adress</h1>
			</div>
			<div class="flex justify-center items-center py-4">
				<div class="w-5/6 border-2 rounded-lg p-2">
					<div class="flex justify-center my-2">
						<div>
							<h1 class="text-stone-600 text-center">Scan QR code</h1>
							<img src="/qr_code.png" alt="" />
						</div>
					</div>
					<div class="px-5 space-y-5">
						<div>
							<label class="text-stone-600" for="adrdess">Network address</label>
							<div class=" border-2 p-2 rounded-lg">
								<select class="w-full bg-white" name="address" id="address" placeholder="networl">
									<option value="">TRC-20</option>
									<option value="">Ton</option>
									<option value="">Linear</option>
								</select>
							</div>
						</div>
						<div>
							<label class="text-stone-600" for="amount">Wallet address</label>
							<div class="flex w-full space-x-2 border-2 p-2 rounded-lg items-center justify-between">
								<div class="text-sm w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
									3hfhYUhkg7960Hjfk80883
								</div>
								<button class="text-stone-500 text-sm fa fa-copy"></button>
							</div>
						</div>
						<div>
							<div class="w-full my-2 md:flex md:justify-center">
								<button
									type="button"
									class="w-full md:w-3/5 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
									>I have made payment</button
								>
							</div>
							<div class="w-full my-2">
								<button type="button" class="w-full py-2 bg-white text-red-600 rounded-lg"
									>Cancle Payment</button
								>
							</div>
							<div class="w-full my-2">
								<div
									class="w-full py-2 bg-white text-primary flex justify-center items-center rounded-lg text-sm space-x-1 md:text-md"
								>
									<span class="fa fa-lock-alt"></span>
									<span>Safely secure a encrypted</span>
								</div>
							</div>
				
							<div class="md:flex md:justify-center">
								<a href="./payment/payment_history" class="md:w-3/5 w-full text-center border rounded-xl bg-white text-sm my-5 text-primary py-2"
									>View History</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

