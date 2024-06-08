<script>
	import { page } from '$app/stores';
</script>

<nav
	class="flex fixed w-full bottom-[4px] md:relative md:top-0 text-white h-50 md:flex md:justify-between md:items-center z-10 md:rounded-xl md:rounded-t-none"
>
	<div
		class={`flex flex-1 mx-2 bg-brack bottom-[4px] md:bottom-0 md:flex items-center md:flex-row rounded-full md:pb-0 md:static md:filter-none`}
	>
		<a
			href="/home"
			class="flex-1 h-18 md:flex-auto pt-4 md:py-2 px-4 text-sm md:border-0 text-[color:var(--color-text-inactive)] block text-center"
		>
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				class=" w-6 h-6 md:hidden m-auto {$page.url.pathname == '/home'
					? 'text-primary'
					: 'text-white'}"
			>
				<path
					d="M2 18.665H4.79357V17.335H6.19954V15.9963H7.59632V14.6662H9.0023V13.3363H10.3991V11.9975H11.7959V10.6675H13.2018V9.32875H14.5986V7.99875H17.4014V9.32875H18.7982V10.6675H20.2041V11.9975H21.6009V13.3363H22.9977V14.6662H24.4037V15.9963H25.8005V17.335H27.1972V18.665H30V15.9963H28.6032V14.6662H27.1972V13.3363H25.8005V11.9975H24.4037V10.6675H22.9977V9.32875H21.6009V7.99875H20.2041V6.66875H18.7982V5.33H17.4014V4H14.5986V5.33H13.2018V6.66875H11.7959V7.99875H10.3991V9.32875H9.0023V10.6675H7.59632V11.9975H6.19954V13.3363H4.79357V14.6662H3.39678V15.9963H2V18.665Z"
				/>
				<path d="M25.8005 30.67H20.2041V24.0025H18.7982V32H27.1972V19.995H25.8005V30.67Z" />
				<path d="M25.8005 18.665H24.4037V19.995H25.8005V18.665Z" />
				<path d="M24.4037 17.335H22.9977V18.665H24.4037V17.335Z" />
				<path d="M22.9977 15.9963H21.6009V17.335H22.9977V15.9963Z" />
				<path d="M21.6009 14.6663H20.2041V15.9963H21.6009V14.6663Z" />
				<path d="M20.2041 13.3362H18.7982V14.6662H20.2041V13.3362Z" />
				<path d="M18.7982 22.6638H17.4014V24.0025H18.7982V22.6638Z" />
				<path d="M18.7982 11.9975H17.4014V13.3362H18.7982V11.9975Z" />
				<path d="M17.4014 21.3337H14.5986V22.6637H17.4014V21.3337Z" />
				<path d="M17.4014 10.6675H14.5986V11.9975H17.4014V10.6675Z" />
				<path d="M14.5986 22.6638H13.2018V24.0025H14.5986V22.6638Z" />
				<path d="M14.5986 11.9975H13.2018V13.3362H14.5986V11.9975Z" />
				<path d="M13.2018 24.0025H11.7959V30.67H6.19955V19.995H4.79358V32H13.2018V24.0025Z" />
				<path d="M13.2019 13.3362H11.7959V14.6662H13.2019V13.3362Z" />
				<path d="M11.7959 14.6663H10.3991V15.9963H11.7959V14.6663Z" />
				<path d="M10.3991 15.9963H9.00232V17.335H10.3991V15.9963Z" />
				<path d="M9.00229 17.335H7.59631V18.665H9.00229V17.335Z" />
				<path d="M7.59631 18.665H6.19952V19.995H7.59631V18.665Z" />
			</svg>
			<label class="text-[8px]">Home</label>

			<div
				class="{$page.url.pathname == '/home'
					? 'bg-primary'
					: 'bg-brack'} w-5 mb-1 h-1 mx-auto rounded-full"
			></div>
		</a>

		<a
			href="/transactions"
			class="flex-1 md:flex-auto pt-4 md:py-2 px-4 text-sm md:border-0 text-[color:var(--color-text-inactive)] block text-center"
		>
			<svg
				width="28"
				height="28"
				viewBox="0 0 28 28"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				class=" w-6 h-6 md:hidden m-auto {$page.url.pathname == '/transactions'
					? 'text-primary'
					: 'text-white'}"
			>
				<path
					d="M16.21 3.29602H19.1599V4.93863H20.6301V6.59205H22.1099V9.88807H23.58V18.1119H22.1099V21.4079H20.6301V23.0614H19.1599V24.704H16.21V26.3466H8.84009V28H19.1599V26.3466H22.1099V24.704H23.58V23.0614H25.0598V21.4079H26.5299V18.1119H28V9.88807H26.5299V6.59205H25.0598V4.93863H23.58V3.29602H22.1099V1.65342H19.1599V0H8.84009V1.65342H16.21V3.29602Z"
				/>
				<path d="M22.1099 9.88806H20.6301V18.1119H22.1099V9.88806Z" />
				<path d="M20.63 18.1119H19.1599V19.7654H20.63V18.1119Z" />
				<path d="M20.63 8.23462H19.1599V9.88803H20.63V8.23462Z" />
				<path d="M19.1599 19.7653H17.6898V21.4079H19.1599V19.7653Z" />
				<path d="M19.1599 6.59204H17.6898V8.23465H19.1599V6.59204Z" />
				<path d="M17.6898 21.408H16.21V23.0614H17.6898V21.408Z" />
				<path d="M17.6898 4.93866H16.21V6.59208H17.6898V4.93866Z" />
				<path d="M16.21 23.0614H8.84009V24.704H16.21V23.0614Z" />
				<path d="M16.2101 14.8267H14.7399V18.1119H16.2101V14.8267Z" />
				<path d="M16.2101 9.88806H14.7399V11.5307H16.2101V9.88806Z" />
				<path d="M16.21 3.29602H8.84009V4.93863H16.21V3.29602Z" />
				<path
					d="M11.79 19.7653V21.4079H13.2601V19.7653H14.7399V18.1119H13.2601V14.8267H14.7399V13.1733H13.2601V9.88806H14.7399V8.23465H13.2601V6.59204H11.79V8.23465H10.3199V9.88806H11.79V13.1733H10.3199V14.8267H11.79V18.1119H10.3199V19.7653H11.79Z"
				/>
				<path d="M10.3199 16.4694H8.84009V18.112H10.3199V16.4694Z" />
				<path d="M10.3199 9.88806H8.84009V13.1733H10.3199V9.88806Z" />
				<path d="M8.84008 24.704H5.89984V26.3466H8.84008V24.704Z" />
				<path d="M8.84005 21.408H7.36993V23.0614H8.84005V21.408Z" />
				<path d="M8.84005 4.93866H7.36993V6.59208H8.84005V4.93866Z" />
				<path d="M8.84008 1.65344H5.89984V3.29605H8.84008V1.65344Z" />
				<path d="M7.36996 19.7653H5.89984V21.4079H7.36996V19.7653Z" />
				<path d="M7.36996 6.59204H5.89984V8.23465H7.36996V6.59204Z" />
				<path d="M5.89984 23.0614H4.42004V24.704H5.89984V23.0614Z" />
				<path d="M5.89984 18.1119H4.42004V19.7654H5.89984V18.1119Z" />
				<path d="M5.89984 8.23462H4.42004V9.88803H5.89984V8.23462Z" />
				<path d="M5.89984 3.29602H4.42004V4.93863H5.89984V3.29602Z" />
				<path d="M4.42001 21.408H2.94989V23.0614H4.42001V21.408Z" />
				<path d="M4.42001 9.88806H2.94989V18.1119H4.42001V9.88806Z" />
				<path d="M4.42001 4.93866H2.94989V6.59208H4.42001V4.93866Z" />
				<path d="M2.94995 18.1119H1.47015V21.408H2.94995V18.1119Z" />
				<path d="M2.94995 6.59204H1.47015V9.88806H2.94995V6.59204Z" />
				<path d="M1.47012 9.88806H0V18.1119H1.47012V9.88806Z" />
			</svg>

			<label class="text-[8px] text-center">Transactions</label>

			<div
				class="{$page.url.pathname == '/transactions'
					? 'bg-primary'
					: 'bg-brack'} w-5 mb-1 h-1 mx-auto rounded-full"
			></div></a
		>
		<a
			href="/store"
			class="flex-1 w-10 md:flex-auto pt-4 md:py-2 px-4 text-sm md:border-0 text-[color:var(--color-text-inactive)] block text-center"
		>
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				class=" w-6 h-6 md:hidden m-auto {$page.url.pathname == '/store'
					? 'text-primary'
					: 'text-white'}"
			>
				<path
					d="M1.52502 13.72V27.43H3.04502V15.24H22.855V27.43H3.04502V28.95H28.955V27.43H24.385V15.24H28.955V27.43H30.475V7.62H28.955V12.19H27.425V13.72H7.61502V12.19H6.09502V13.72H1.52502Z"
				/>
				<path d="M28.955 6.09998H27.425V7.61998H28.955V6.09998Z" />
				<path d="M27.425 16.76H25.905V25.91H27.425V16.76Z" />
				<path d="M27.425 10.67H25.905V12.19H27.425V10.67Z" />
				<path d="M27.425 4.57001H25.905V6.10001H27.425V4.57001Z" />
				<path d="M25.905 9.14001H24.385V10.67H25.905V9.14001Z" />
				<path d="M25.905 6.09998H24.385V7.61998H25.905V6.09998Z" />
				<path
					d="M13.7151 19.81H12.1851V25.91H19.8051V16.76H13.7151V19.81ZM18.2851 21.33V24.38H13.7151V21.33H18.2851Z"
				/>
				<path d="M12.185 16.76H10.665V18.29H12.185V16.76Z" />
				<path
					d="M9.14507 16.76H4.57507V25.91H10.6651V19.81H9.14507V16.76ZM9.14507 24.38H6.10007V21.33H9.15007L9.14507 24.38Z"
				/>
				<path d="M25.9051 3.04999H4.57507V4.56999H25.9051V3.04999Z" />
				<path d="M6.09507 10.67H4.57507V12.19H6.09507V10.67Z" />
				<path
					d="M24.385 9.13998V7.61998H3.04502V6.09998H1.52502V9.13998H3.04502V10.67H4.57502V9.13998H24.385Z"
				/>
				<path d="M4.57504 4.57001H3.04504V6.10001H4.57504V4.57001Z" />
			</svg>

			<label class="text-[8px]">Store</label>

			<div
				class="{$page.url.pathname == '/store'
					? 'bg-primary'
					: 'bg-brack'} w-5 mb-1 h-1 mx-auto rounded-full"
			></div></a
		>
	</div>
	<!-- <div class="invisible md:visible mx-4">profile</div> -->
</nav>
