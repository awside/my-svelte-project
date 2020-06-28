import App from './App.svelte';
import WordList from './WordList.svelte';

const app = new WordList({
	target: document.body,
	props: {}
});

export default app;