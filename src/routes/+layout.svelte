<script>
  import "../app.css";
  import "$lib/preline.js";
  import { afterNavigate } from "$app/navigation";
 

 
// const { afterNavigate } = await import("$app/navigation");

   

afterNavigate(() => {
    window.HSStaticMethods.autoInit(); 
  }); 


</script>



<slot />
