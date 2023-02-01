import { writable } from 'svelte/store';

export let selectedImage = writable<string>('');
