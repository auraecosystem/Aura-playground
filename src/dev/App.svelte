<script lang="ts">
	import Logo from "./assets/logo.png";

	const entries = [
		{
			name: "Native App",
			description: "Run the WebView application",
			url: "/entry-app-webview.html",
			icon: "📱"
		},
		{
			name: "Action Popup",
			description: "Preview browser popup",
			url: "/entry-ext-action-popup.html",
			icon: "🧩"
		},
		{
			name: "Extension Page",
			description: "Open extension dashboard",
			url: "/entry-ext-extension-page.html",
			icon: "⚡"
		}
	];

	const version = "0.1.0";
	const project = "Aura Playground";
	const environment = "Development";
</script>

<svelte:head>
	<title>Aura Playground</title>
	<meta
		name="description"
		content="Aura Playground Developer Environment"
	/>
</svelte:head>

<main class="dashboard">

	<header class="hero glass">

		<a
			href="https://github.com/auraecosystem/aura-playground"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img src={Logo} alt="Aura Logo" class="logo" />
		</a>

		<div>

			<h1>{project}</h1>

			<p class="subtitle">
				Developer Preview Environment
			</p>

			<div class="badges">

				<span>🚀 {environment}</span>

				<span>📦 v{version}</span>

				<span>⚙️ Svelte</span>

			</div>

		</div>

	</header>

	<section class="grid">

		{#each entries as item}

			<a
				class="card glass"
				href={item.url}
				target="_blank"
				rel="noopener noreferrer"
			>

				<div class="icon">
					{item.icon}
				</div>

				<h2>{item.name}</h2>

				<p>{item.description}</p>

				<span class="launch">
					Launch →
				</span>

			</a>

		{/each}

	</section>

	<footer class="glass footer">

		<p>
			Aura Playground • Userscripts Development Environment
		</p>

	</footer>

</main>

<style>

:global(body){
	margin:0;
	font-family:Inter,system-ui,sans-serif;
	background:
		radial-gradient(circle at top,#1f2a44,#0d1117);
	color:white;
}

.dashboard{
	max-width:1200px;
	margin:auto;
	padding:2rem;
}

.hero{
	display:flex;
	align-items:center;
	gap:2rem;
	margin-bottom:2rem;
	padding:2rem;
	border-radius:24px;
}

.logo{
	width:110px;
	transition:.3s;
}

.logo:hover{
	transform:rotate(6deg) scale(1.08);
	filter:drop-shadow(0 0 30px #7f5cff);
}

.subtitle{
	opacity:.7;
	margin-top:.3rem;
}

.badges{
	display:flex;
	gap:.75rem;
	margin-top:1rem;
	flex-wrap:wrap;
}

.badges span{
	padding:.45rem .9rem;
	border-radius:999px;
	background:rgba(255,255,255,.08);
}

.grid{
	display:grid;
	grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
	gap:1.5rem;
}

.card{
	padding:1.5rem;
	border-radius:20px;
	text-decoration:none;
	color:inherit;
	transition:.3s;
}

.card:hover{
	transform:translateY(-6px);
}

.icon{
	font-size:2rem;
	margin-bottom:1rem;
}

.launch{
	display:inline-block;
	margin-top:1rem;
	font-weight:600;
}

.footer{
	margin-top:2rem;
	padding:1rem;
	text-align:center;
	border-radius:20px;
}

.glass{
	background:rgba(255,255,255,.08);
	backdrop-filter:blur(20px);
	-webkit-backdrop-filter:blur(20px);
	border:1px solid rgba(255,255,255,.12);
	box-shadow:
		0 8px 32px rgba(0,0,0,.25);
}

</style>
