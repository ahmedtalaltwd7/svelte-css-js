<script>
  import "../app.css";
  import "$lib/preline.js";
  import { afterNavigate } from "$app/navigation";
  import { navigating } from "$app/stores";

  import { loading } from "$lib/loading";
  import Loading from "$lib/loading.svelte";

  $: $loading = !!$navigating;

  // const { afterNavigate } = await import("$app/navigation");

  afterNavigate(() => {
    window.HSStaticMethods.autoInit(); 
  });
</script>

<slot />
<button on:click={() => ($loading = true)}>Set Loading</button>
<button on:click={() => ($loading = false)}>Stop Loading</button>

<Loading />
