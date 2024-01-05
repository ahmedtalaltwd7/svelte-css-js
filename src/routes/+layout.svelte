<script>
    import "../app.css";

  import "$app/navigation";
  import { onMount } from "svelte";
onMount(() => {
  window.HSStaticMethods.autoInit();
});
 

  // afterNavigate(() => {
  //   window.HSStaticMethods.autoInit();
  // });


  </script>
  
  <slot />