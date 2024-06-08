<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div
	class="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-sky-300 to-white-300 px-4"
>
	<div class="flex w-[500px] max-w-3xl flex-col rounded-xl bg-brack py-12 px-6 text-slate-200">
		<h1 class="text-come text-center text-5xl">Log In</h1>
		<div>
			<div class="w-full">
				<form method="POST" use:enhance>
					<div class="mb-6">
						<div class="mb-4">
							<label class="text-xl font-bold mb-2" for="email"> E-mail </label>
							<input
								class="shadow appearance-none border-none rounded-3xl w-full py-2 px-3 bg-bracker leading-tight focus:outline-none focus:shadow-outline"
								id="email"
								type="text"
								name="email"
							/>
						</div>
						<div class="mb-6">
							<label class="text-xl font-bold mb-2" for="password"> Password </label>
							<input
								class="shadow appearance-none border-none black rounded-3xl w-full py-2 px-3 bg-bracker mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="password"
								type="password"
								name="password"
							/>
						</div>
						<div>
							<div class="flex justify-between items-center">
								<p class="text-come text-s italic">Forgot Password?</p>
								<a class="text-come text-s italic ml-4" href="##">
									<p class="text-amogus">Reset password</p>
								</a>
							</div>
							<br />
							<div class="flex items-center justify-between text-center">
								<button
									class="shadow-[-8px_8px_0px_-1px_rgba(0,0,0,1)] shadow-blue-700 hover:border-blue-500 transition ease-in-out delay-70 bg-primary hover:translate-y-1px active:translate-y-8 hover:scale-110 hover:bg-sky-500 duration-300 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline w-full"
									type="submit"
								>
									Login
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
