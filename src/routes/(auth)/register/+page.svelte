<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div class="flex min-h-screen w-full items-center justify-center bg-amogus px-4">
	<div class="flex w-[500px] max-w-3xl flex-col rounded-xl bg-brack py-12 px-6 text-slate-200">
		<h1 class="text-come text-center text-5xl">Register</h1>
		<div>
			<div class="w-full">
				<form method="POST" class="shadow-md rounded px-8 pt-6 pb-8 mb-4" use:enhance>
					<div class="mb-6">
						<label class="text-sm font-bold mb-2" for="username"> Username </label>
						<input
							class="shadow appearance-none border black rounded-3xl w-full py-2 px-3 bg-bracker mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="username"
							type="text"
							name="username"
						/>
						<div class="mb-4">
							<label class="text-come text-sm font-bold mb-2" for="email"> E-mail </label>
							<input
								class="shadow appearance-none border rounded-3xl w-full py-2 px-3 bg-bracker leading-tight focus:outline-none focus:shadow-outline"
								id="email"
								type="text"
								name="email"
							/>
						</div>
						<div class="mb-6">
							<label class="text-come text-sm font-bold mb-2" for="password"> Password </label>
							<input
								class="shadow appearance-none border black rounded-3xl w-full py-2 px-3 bg-bracker mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="password"
								type="password"
								name="password"
							/>
						</div>

						<div class="flex items-center justify-between text-center">
							<button
								class="bg-amogus text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline w-full"
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
