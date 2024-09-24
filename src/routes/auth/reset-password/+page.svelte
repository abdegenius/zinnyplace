<script>
</script>

<div class="hidden lg:w-1/2 h-full rounded-3xl lg:flex flex-col justify-start items-start relative">
	<div class="w-full h-full">
		<img class="w-full h-full rounded-3xl" src="/reset-password-bg.png" alt="reset password bg" />
	</div>
	<div
		class="w-full h-auto bg-black/50 absolute bottom-0 rounded-3xl flex justify-center items-center"
	>
		<ul class="flex flex-col space-y-4 items-start justify-start py-12 px-4">
			<li class="flex flex-row justify-start space-x-4 items-center">
				<img src="/auth-check.png" class="w-8 h-8 rounded-full" alt="auth check" />
				<div class="font-bold text-stone-50 text-md">Lorem ipsum, dolor sit amet consectetur</div>
			</li>
			<li class="flex flex-row justify-start space-x-4 items-center">
				<img src="/auth-check.png" class="w-8 h-8 rounded-full" alt="auth check" />
				<div class="font-bold text-stone-50 text-md">Lorem ipsum, dolor sit amet consectetur</div>
			</li>
			<li class="flex flex-row justify-start space-x-4 items-center">
				<img src="/auth-check.png" class="w-8 h-8 rounded-full" alt="auth check" />
				<div class="font-bold text-stone-50 text-md">Lorem ipsum, dolor sit amet consectetur</div>
			</li>
			<li class="flex flex-row justify-start space-x-4 items-center">
				<img src="/auth-check.png" class="w-8 h-8 rounded-full" alt="auth check" />
				<div class="font-bold text-stone-50 text-md">Lorem ipsum, dolor sit amet consectetur</div>
			</li>
		</ul>
	</div>
</div>
<div class="w-full lg:w-1/2 py-12 flex items-center justify-center">
	<div class="w-full flex flex-col space-y-6 justify-start p-4 items-center h-auto">
		<h1 class="text-2xl sm:text-3xl font-bold text-stone-800">
			Reset
			<span class="text-primary">Password</span>
		</h1>
		<form class="w-full px-4 sm:px-8" action="">
			<div class="mb-4 w-full flex flex-col space-y-1 items-start justify-start">
				<label for="email" class="w-full font-normal text-stone-600 text-xs">Email Address</label>
				<div
					class="flex flex-row space-x-6 items-center justify-between w-full p-4 border border-stone-200 rounded-xl"
				>
					<div class="flex-none w-fit">
						<i class="text-xl text-stone-400 fal fa-envelope"></i>
					</div>

					<input
						class="outline-none w-full text-lg font-normal text-stone-600 placeholder:text-stone-300"
						type="email"
						id="email"
						placeholder="Email address"
					/>
				</div>
			</div>

			<div class="w-full flex flex-col space-y-4 items-center justify-center">
				<button
					type="button"
					class="flex-none w-full py-4 rounded-2xl border-2 border-green-600 hover:bg-secondary hover:text-primary bg-primary text-center flex items-center justify-center space-x-2 text-white font-medium text-md"
				>
					<div>Continue</div>
					<div><i class="fal fa-arrow-right"></i></div>
				</button>
				<div class="flex justify-center items-center w-full">
					<a class="text-lg font-semibold text-primary" href="/auth/login"> Back to login</a>
				</div>
			</div>
		</form>
	</div>
</div>
