<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div
	class="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-sky-300 to-white-300 px-4"
>
	<div class="flex w-[500px] max-w-3xl flex-col rounded-xl bg-brack py-12 px-6 text-slate-200">
		<p class="mb-4 text-center text-5xl">Register</p>
		<div class="flex flex-row items-center mb-10">
			<img class="w-24 h-24" src="./confused-default.png" alt="" />
			<p class="text-center text-xl"><br />PengYou is excited to get to know you!</p>
		</div>

		<div>
			<div class="w-full">
				<form method="POST" use:enhance>
					<div class="">
						<div class="">
							<label for="username" class="inline-block text-xl font-bold mb-4 ml-2">Username</label
							>
							<input
								class="glassEffect shadow appearance-none border-none rounded-3xl w-full py-2 px-3 mb-8 leading-tight focus:outline-none focus:outline-sky-500"
								id="username"
								type="text"
								name="username"
							/>
						</div>
						<div class="">
							<label for="email" class="inline-block text-xl font-bold mb-4 ml-2">Email</label>
							<input
								class="glassEffect shadow appearance-none border-none rounded-3xl w-full py-2 px-3 mb-8 leading-tight focus:outline-none focus:outline-sky-500"
								id="email"
								type="text"
								name="email"
							/>
						</div>
						<div class="">
							<label for="password" class="inline-block text-xl font-bold mb-4 ml-2">Password</label
							>
							<input
								class="glassEffect shadow appearance-none border-none rounded-3xl w-full py-2 px-3 mb-8 leading-tight focus:outline-none focus:outline-sky-500"
								id="password"
								type="password"
								name="password"
							/>
						</div>

						<div class="flex items-center justify-between text-center">
							<button
								class="shadow-[-8px_8px_0px_-1px_rgba(0,0,0,1)] shadow-blue-700 hover:border-blue-500 transition ease-in-out delay-70 bg-primary hover:translate-y-1px active:translate-y-8 hover:scale-110 hover:bg-sky-500 duration-300 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline w-4/5 mx-auto"
								type="submit"
							>
								Register
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
