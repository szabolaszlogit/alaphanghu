<script setup>
import { reactive, ref, watch } from "vue";

const notes = reactive([
  { name: "A", number: 0 },
  { name: "A#/Bb", number: 1 },
  { name: "B", number: 2 },
  { name: "C", number: 3 },
  { name: "C#/Db", number: 4 },
  { name: "D", number: 5 },
  { name: "D#/Eb", number: 6 },
  { name: "E", number: 7 },
  { name: "F", number: 8 },
  { name: "F#/Gb", number: 9 },
  { name: "G", number: 10 },
  { name: "G#/Ab", number: 11 },
]);

const selectedNote = ref();

const progressions = reactive([
  { name: "a", steps: [0, 1, 2, ] },
]);

let generatedProgressions =reactive([])

function generateProgression() { 
 
    let arr = progressions[0].steps.map((step)=>parseInt(selectedNote.value.number) +parseInt(progressions.steps)  )
console.log(arr);

 

  function myFunction(item, index, arr) {

    let i = index + selectedNote.value.number
    console.log(i);
   
    
    if (index + selectedNote.value.number > 12) {
        i = index + selectedNote.value.number -12
    }
    arr[index] = notes[arr[i]].name;
  }
}

 
</script>

<template>
  <p>Key</p>
  <p>moll/dur</p>
  <label for="note">Hangnem:</label>
  <select
    class="select"
    name="note"
    v-model="selectedNote" 
    v-on:change="generateProgression()"
  >
    <option v-for="note in notes" :value="note">
      {{ note.name }}
    </option>
  </select>
{{selectedNote}}
  <label for="selectedPogression">Akkordmenet:</label>
  {{generatedProgressions}}
</template>

<style></style>
