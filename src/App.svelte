<script>
  let word = "مرحبا كيف حالك";
  let count = 0;
  let currentChar = "";
  let userWord = "";
  let errorChar = "";

  function setup() {
    count = 0;
    currentChar = word.charAt(count);
    userWord = "";
    errorChar = "";
  }

  function getNextCharacter() {
    count++;
    if (count == word.length) {
      console.log("Word Completed");
      setup();
      return;
    }
    currentChar = word.charAt(count);
  }

  function testInput(char) {
    if (char === currentChar) {
      userWord += char;
      getNextCharacter();
      errorChar = "";
    } else {
      errorChar = char;
    }
  }

  setup();
  document.onkeypress = e => {
    testInput(e.key);
  };
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
  }

  .text {
    color: #ff3e00;
    font-size: 2em;
    font-weight: 300;
  }

  .error {
    color: red;
  }
</style>

<main>
  <h1 class="text">{word}</h1>
  <h1 class="text">
    {userWord}
    <strong class="error">{errorChar}</strong>
  </h1>
</main>
