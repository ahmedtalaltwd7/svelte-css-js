export const ssr = false;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  export async function load() {
    
    await sleep(2000);

    return {
      status: 200
    } 
  }
