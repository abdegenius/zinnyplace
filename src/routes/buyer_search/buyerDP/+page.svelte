<script>
</script>
<div class="w-full pt-5 bg-stone-50/50">
	<div class="w-5/6 mx-auto ">
		<div class="flex justify-between">
			<div class="text-sm">Personal info</div>
			<div class="text-sm">professional info</div>
			<div class="text-sm">Account security</div>
		</div>
		<div class="w-full flex justify-between my-6">
			<div class="w-full flex flex-col">
				<h1>personal info</h1>
				<p class="text-xs">
					Here's a chance to introduce yourself and make a fantastic first impression with your
					profile.
				</p>
			</div>
			<div class="flex justify-end items-end w-32">
				<span class="text-xs">* Mandatory field</span>
			</div>
		</div>
		<div class="flex flex-col text-sm">
			<h1>1.1 Display Name *</h1>
			<p>
				Build trust with customers by using your first name and last initial for a friendly, authentic
				touch.
			</p>
		</div>
		<div class="flex flex-col sm:flex-row justify-between sm:space-x-20 text-stone-500">
			<div class="w-full flex px-2 bg-stone-100 rounded-lg text-xs my-3 items-center border">
				<input
					class="w-full p-2 bg-inherit rounded-md outline-none"
					type="text"
					placeholder="First Name"
				/>
				<span>0/50</span>
			</div>
			<div class="w-full flex px-2 bg-stone-100 rounded-lg text-xs my-3 items-center border">
				<input
					class="w-full p-2 bg-inherit rounded-md outline-none"
					type="text"
					placeholder="Second Name"
				/>
				<span>0/50</span>
			</div>
		</div>
		<div class="w-full flex flex-col space-y-3">
			<label for="description">1.2 Description *</label>
			<div class="w-full p-3 border bg-stone-100 min-h-32 text-sm text-stone-500 rounded-md">
				<textarea
					class="text-sm w-3/4 bg-inherit text-start min-h-32 outline-none"
					name=""
					id="description"
					placeholder=" Example: As a UI Designer, i am dedicated to creating seamless and engaging user experiences. With a keen eye for detail and a knack for blending aesthetics with functionality, I transform complex ideas into elegant, user-friendly interfaces. Let's design something amazing together!"
				></textarea>
			</div>
			<div class="flex justify-end my-3 text-xm text-stone-500">
				<p class="w-fit">0/1000</p>
			</div>
		</div>
		<div class="flex flex-col text-sm">
			<h1>1.3 Location *</h1>
			<p>
				Chosoe your country and region
			</p>
		</div>
		<div class="flex flex-col sm:flex-row justify-between sm:space-x-20 my-4 text-stone-500 space-y-3 sm:space-y-0">
			<div class="w-full flex px-2 bg-stone-100 rounded-lg text-xs  items-center border">
				<select class="w-full p-2 bg-inherit outline-none rounded-md" name="" id="country">
					<option value="">country</option>
				</select>
			</div>
			<div class="w-full flex px-2 bg-stone-100 rounded-lg text-xs  items-center border">
				<select class="w-full p-2 bg-inherit outline-none rounded-md" name="" id="region">
					<option value="">Region</option>
				</select>
			</div>
		</div>
		<div class="flex flex-col text-sm mt-6 mb-3">
			<h1>1.4 Languages *</h1>
			<p>
				Build trust with customers by using your first name and last initial for a friendly, authentic
				touch.
			</p>
		</div>
		<div class="flex flex-col sm:flex-row justify-between sm:space-x-20 text-stone-500 border rounded-md p-3 space-y-3 sm:space-y-0">
			<div class="w-full flex px-2 bg-stone-100 rounded-lg text-xs  items-center border">
				<select class="w-full p-2 bg-inherit outline-none rounded-md" name="" id="language">
					<option value="">Choose your language</option>
				</select>
			</div>
			<div class=" flex px-2 w-44 bg-stone-100 rounded-lg text-xs  items-center border">
				<button class=" w-44 text-center bg-stone-100 rounded-md p-2">Add</button>
			</div>
		</div>
		<div class="w-full flex justify-between my-10 border-b">
			<div class="w-full flex flex-col space-y-3 pb-3">
				<h1>personal info</h1>
				<p class="text-xs">
					Highlight your strengths! Share what you're best at, including your skills, certifications, and the experience you've accumulated.
				</p>
			</div>
			<div class="flex justify-end items-end w-32">
				<span class="text-xs">* Mandatory field</span>
			</div>
		</div>
		<div class=" text-sm py-3">
			<h1>2.1 Your occupation *</h1>
		
		</div>
		<div class="flex flex-col sm:flex-row justify-between sm:space-x-20 text-stone-500">
			<div class="w-full flex px-2 bg-stone-100 rounded-lg text-xs my-3 items-center border">
				<input
					class="w-full p-2 bg-inherit rounded-md outline-none"
					type="text"
					placeholder="Occupation"
				/>
				<span>0/50</span>
			</div>
		</div>
		<div class="flex flex-col mb-3 mt-6 text-sm">
			<h1>2.2 Skills *</h1>
			<p>
				Detail your skills and their corresponding experience levels. This will help highlight what you bring to the table.
			</p>
		</div>
		<div class="flex flex-col sm:flex-row justify-between sm:space-x-20 text-stone-500 border rounded-md p-3 space-y-3 sm:space-y-0">
			<div class="w-full flex px-2 bg-stone-100 rounded-lg text-xs  items-center border">
				<select class="w-full p-2 bg-inherit rounded-md outline-none" name="" id="language">
					<option value="">Add Skills</option>
				</select>
			</div>
			<div class=" flex px-2 w-44 bg-stone-100 rounded-lg text-xs  items-center border">
				<button class=" w-44 text-center bg-stone-100 rounded-md p-2">Add</button>
			</div>
		</div>
		<div class="flex flex-col text-sm mb-3 mt-6">
			<h1>2.3 Education *</h1>
			<p>
				Provide your educational background to give customers a better understanding of your qualifications.</p>
		</div>
		<div class="flex w-full flex-col md:flex-row mt-2 border rounded-lg px-2">
			<div class="w-full grid md:grid-rows-2 md:grid-cols-2 gap-3">
				<div class="w-full flex px-2 bg-stone-100 rounded-lg text-xs my-3 items-center border">
					<select class="w-full outline-none bg-inherit text-stone-500 p-2" name="" id="">
						<option value="">Country of College</option>
					</select>
					</div>
				<div class="w-full flex px-2 bg-stone-100 rounded-lg text-xs my-3 items-center border">
					<input
						class="w-full p-2 bg-inherit rounded-md outline-none"
						type="text"
						placeholder="College/University Name"
					/>
				</div>
				<div class="w-full flex px-2 bg-stone-100 rounded-lg text-xs my-3 items-center border">
					<input
						class="w-full p-2 bg-inherit rounded-md outline-none"
						type="text"
						placeholder="Major"
					/>
				</div>
				<div class="w-full flex px-2 bg-stone-100 rounded-lg text-xs my-3 items-center border">
					<input
						class="w-full p-2 bg-inherit rounded-md outline-none"
						type="text"
						placeholder="Year"
					/>
				</div>
			</div>
			<div class="flex text-xs py-3 md:px-3">
				<button class=" w-44 h-9 border rounded-lg text-center bg-stone-100 p-2">Add</button>
			</div>
		</div>
	
		<div class="w-full flex justify-between my-10">
			<div class="w-full flex flex-col">
				<h1>Account security</h1>
				<p class="text-xs">
					Trust and safety are important. Secure your account by verifying your email.			</p>
			</div>
			<div class="flex justify-end items-end w-32">
				<span class="text-xs">Mandatory field</span>
			</div>
		</div>
		<div class="flex flex-col sm:flex-row justify-between sm:space-x-20 text-stone-500">
			<div class="flex flex-col w-full">
				<label for="email">3.1 Email</label>
				<div class="w-full flex px-2 bg-stone-100 rounded-lg text-xs my-3 items-center border">
					<input
						class="w-full p-2 bg-inherit rounded-md outline-none"
						type="text"
						placeholder="Enter email"
						id="email"
					/>
					<span>0/50</span>
				</div>
			</div>
			<div class="flex flex-col w-full">
				<label for="Number">3.1 Mobile Number</label>
				<div class="w-full flex px-2 bg-stone-100 rounded-lg text-xs my-3 items-center border">
					<input
						class="w-full p-2 bg-inherit rounded-md outline-none"
						type="text"
						placeholder="Enter Phone Number"
						id="number"
					/>
					<span>0/50</span>
				</div>
			</div>
		</div>
		<div class="w-full flex justify-end text-sm text-stone-500 my-4">
			<button class="w-full sm:w-40 rounded-md py-1 bg-stone-100">Finish</button>
		</div>
	</div>
</div>
	