import { createSignal, onCleanup, onMount } from "solid-js";

export default function ToTop() {
	const [isActive, setIsActive] = createSignal(false);

	function toggleActive() {
		const scroll =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;

		setIsActive(scroll >= window.innerHeight / 2);
		// or window.scrollY > 300?
	};

	function scrollTop() {
		window.scrollTo({ top: 0 });
	}

	onMount(() => {
		window.addEventListener("scroll", toggleActive);

		onCleanup(() => {
			window.removeEventListener("scroll", toggleActive);
		});
	});


	return (
		<aside>
			<button class={`fixed z-10 btn p-0 right-6 h-10 w-10 rounded-full bottom-20 flex justify-center items-center  ${isActive() ? "visible opacity-100" : "invisible opacity-0 scale-90"}`} onClick={scrollTop}>
				<span class="icon-[iconamoon--arrow-up-2] iconify-large"></span>
			</button>
		</aside>
	);
};
