<script>
  import { loading } from "../lib/loading";
</script>

{#if $loading}
  <div />
{/if}
 


 
<style>
  div {
    /* --size: 100px;
      position: fixed;
      top: 0;
      left: 0;
      inset: calc(7% - calc(var(--size)/3));
      background: purple;
      border-radius: var(--size);
      height:20px;
      width: var(--size);
      animation: moveLoader 1s infinite alternate; */
    top: 0;
    left: 0;
    position: fixed;
    height: 10px;

    background: red;
    animation-name: square;
    animation-duration: 5s;
  }

  @keyframes square {
    from {
      background: red;
      width: 0%;
    }
    to {
      background: blue;
      width: 100%;
    }
  }
</style>

 
