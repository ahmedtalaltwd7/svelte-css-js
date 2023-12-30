<head>

  <meta
  name="description"
  content="Mary's simple recipe for maple bacon donuts
           makes a sticky, sweet treat with just a hint
           of salt that you'll keep coming back for.">

           <title>ary's simple recipe</title>

</head>









<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div class="min-h-screen flex justify-center items-center bg-sea1 bg-fixed bg-no-repeat bg-cover bg-center">
    <h1 class="font-black text-6xl">Parallax</h1>
  </div>
  <section class="scroll-reveal bg-lime-950">
    <div class="p-10">
   
        <h2 class="font-bold text-4xl">Sample Section</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam eveniet molestias veniam, inventore sint voluptates nam provident impedit laborum ipsa vel quos amet laboriosam dolorum suscipit! Nihil eos repellendus blanditiis repellat laboriosam veniam quod maxime ab! Ea eveniet doloremque, excepturi totam, et molestias dicta accusamus quibusdam quas sunt inventore!</p>
      </div>

  </section>
  <div class="bg-sea2 min-h-screen bg-center bg-no-repeat bg-cover bg-fixed"></div>

  <div class="bg-sea3 min-h-screen bg-fixed bg-no-repeat bg-cover"></div>

  <section class="scroll-reveal bg-amber-950">
    <div class="p-10">
   
        <h2 class="font-bold text-4xl">Sample Section</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam eveniet molestias veniam, inventore sint voluptates nam provident impedit laborum ipsa vel quos amet laboriosam dolorum suscipit! Nihil eos repellendus blanditiis repellat laboriosam veniam quod maxime ab! Ea eveniet doloremque, excepturi totam, et molestias dicta accusamus quibusdam quas sunt inventore!</p>
      </div>

  </section>
  <div class="bg-sea3 min-h-screen bg-fixed bg-no-repeat bg-cover"></div>
<style>
  .scroll-reveal > * {
    color: hsl(0 0% 100% / 0.2);  
    background-clip: text;
    background-repeat: no-repeat;
    background-size: 0% 100%;
    background-image: linear-gradient(90deg, rgb(255, 255, 255), rgb(225, 244, 216));
    animation: scroll-reveal linear forwards;
    animation-timeline: view();
    animation-range: contain;
    animation-range-start: cover 25vh;
    animation-range-end: cover 60vh;
  }

  @keyframes scroll-reveal {
    to {
    scale: 0.9;font-size: 22px;  background-size: 100% 100%;
    }
  }
</style>  

