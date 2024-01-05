<script>
  import "../app.css";

  import { afterNavigate } from "$app/navigation";
 

 
// const { afterNavigate } = await import("$app/navigation");

   

afterNavigate(() => {
    window.HSStaticMethods.autoInit(); 
  }); 


</script>



<slot />
