<script>
  let ta = "";
  let ls = "";
  let rows = 5;

  let clear = () => {
    ta = "";
    ls = "";
    rows = 5;
  };

  let paste = () => {
    clear();
    document.getElementById("textarea-input").select();
    document.execCommand("paste");
  };

  let format = () => {
    ls = "";
    rows = 5;
    ta.split(/\s+/).forEach(w => {
      rows++;
      ls += `${w}\n`;
    });
  };

  let copy = () => {
    document.getElementById("textarea-format").select();
    document.execCommand("copy");
  };
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .input {
    width: 100%;
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
  <h1>Lister</h1>
  <textarea
    on:click={paste}
    id="textarea-input"
    class="input"
    rows="10"
    bind:value={ta} />
  <button on:click={format}>Format</button>
  <textarea
    on:click={copy}
    id="textarea-format"
    class="output"
    {rows}
    bind:value={ls} />
</main>
