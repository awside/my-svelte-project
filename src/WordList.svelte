<script>
  let ls = "";
  let rows = 5;

  let format = () => {
    navigator.clipboard
      .readText()
      .then(text => {
        ls = "";
        rows = 5;
        text.split(/\s+/).forEach(w => {
          rows++;
          ls += `${w}\n`;
        });
      })
      .then(() => {
        navigator.clipboard.writeText(ls);
      });
  };
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  button {
    padding: 5px 20px;
    border: 2px solid gray;
    border-radius: 8px;
    font-weight: 500;
    font-size: 2em;
  }

  .output {
    border: solid 3px black;
    border-radius: 8px;
    padding: 20px;
    min-width: 200px;
    display: flex;
    justify-content: center;
  }
</style>

<main>
  <button on:click={format}>Lister</button>
  <textarea class="output" {rows} bind:value={ls} />
</main>
