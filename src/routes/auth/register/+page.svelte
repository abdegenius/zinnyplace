<script>
</script>

<div class="hidden lg:w-1/2 h-full rounded-3xl lg:flex flex-col justify-start items-start relative">
	<div class="w-full h-full">
		<img class="w-full h-full rounded-3xl" src="/register-bg.png" alt="register bg" />
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
		<h1 class="text-2xl sm:text-3xl text-right font-bold text-stone-800">
			<span class="text-primary">Zinny's Place</span>
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
			<div class=" mb-4 w-full flex flex-col space-y-1 items-start justify-start">
				<label for="password" class="w-full font-normal text-stone-600 text-xs">Password</label>
				<div
					class="flex flex-row space-x-6 items-center justify-between w-full p-4 border border-stone-200 rounded-xl"
				>
					<div class="flex-none w-fit">
						<i class="text-xl text-stone-400 fal fa-lock"></i>
					</div>

					<input
						class="outline-none w-full text-lg font-normal text-stone-600 placeholder:text-stone-300"
						type="password"
						id="password"
						placeholder="Password"
					/>
				</div>
			</div>
			<div class=" mb-4 w-full flex flex-col space-y-1 items-start justify-start">
				<label for="password" class="w-full font-normal text-stone-600 text-xs"
					>Password Again</label
				>
				<div
					class="flex flex-row space-x-6 items-center justify-between w-full p-4 border border-stone-200 rounded-xl"
				>
					<div class="flex-none w-fit">
						<i class="text-xl text-stone-400 fal fa-lock"></i>
					</div>

					<input
						class="outline-none w-full text-lg font-normal text-stone-600 placeholder:text-stone-300"
						type="password"
						id="password"
						placeholder="Password Again"
					/>
				</div>
			</div>

			<div
				class="w-full flex flex-col space-y-4 items-center justify-start space-x-0 lg:space-x-4 lg:space-y-0 lg:flex-row lg:justify-between mb-6"
			>
				<button
					type="button"
					class="flex-none w-full lg:w-1/2 py-4 rounded-2xl border-2 border-green-600 bg-primary hover:bg-secondary hover:text-primary text-center flex flex-row items-center justify-center space-x-2 text-white font-medium text-md"
				>
					<div><i class="fal fa-user-plus"></i></div>
					<div>Create Account</div>
				</button>
				<div class="w-full lg:w-1/2 space-x-2 items-center flex justify-between">
					<div class="text-center text-stone-600">or using</div>
					<div class="flex justify-center items-center space-x-2">
						<a class="w-10 h-10" href=""
							><img src="/google.png" alt="google" class="w-full h-full" /></a
						>
						<a class="w-10 h-10" href=""
							><img src="/facebook.png" alt="facebook" class="w-full h-full" /></a
						>
					</div>
				</div>
			</div>
			<div class="flex justify-center items-center w-full">
				<a class="text-lg font-semibold text-primary" href="/auth/login"> Log into your account</a>
			</div>
		</form>
	</div>
</div>
