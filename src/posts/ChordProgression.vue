<script setup>
import { reactive, ref, watch } from "vue";

const notes = reactive([
  { name: "A", number: 0 },
  { name: "A#", number: 1 },
  { name: "B", number: 2 },
  { name: "C", number: 3 },
  { name: "C#", number: 4 },
  { name: "D", number: 5 },
  { name: "D#", number: 6 },
  { name: "E", number: 7 },
  { name: "F", number: 8 },
  { name: "F#", number: 9 },
  { name: "G", number: 10 },
  { name: "G#", number: 11 },
  { name: "A", number: 0 },
  { name: "A#", number: 1 },
  { name: "B", number: 2 },
  { name: "C", number: 3 },
  { name: "C#", number: 4 },
  { name: "D", number: 5 },
  { name: "D#", number: 6 },
  { name: "E", number: 7 },
  { name: "F", number: 8 },
  { name: "F#", number: 9 },
  { name: "G", number: 10 },
  { name: "G#", number: 11 },
]);
const progressions = [
  {
    name: "1-4-5",
    steps: [1, 5, 6, 4],
    dsc: "dkjasdsh  jhdakjd daskjd hsd jsd",
  },
  {
    name: "1-2-5",
    steps: [6, 4, 1, 5],
    dsc: "dkjasdsh  jhdakjd daskjd hsd jsd",
  },
  {
    name: "1-3-5",
    steps: [2, 5, 1, 6],
    dsc: "dkjasdsh  jhdakjd daskjd hsd jsd",
  },
];
const selectedNote = ref({ name: "C", number: 3 });
let scale = reactive([]);
let generatedProgressions = reactive([]);
const mode = ref("Dúr");

function generateProgression() {
  scale.length = 0;
  let s = [];
  let generatedScale = [];
  if (mode.value === "Dúr") {
    generatedScale.push(notes[0 + selectedNote.value.number].name + " -dúr");
    generatedScale.push(notes[2 + selectedNote.value.number].name + " -moll");
    generatedScale.push(notes[4 + selectedNote.value.number].name + " -moll");
    generatedScale.push(notes[5 + selectedNote.value.number].name + " -dúr");
    generatedScale.push(notes[7 + selectedNote.value.number].name + " -dúr");
    generatedScale.push(notes[9 + selectedNote.value.number].name + " -moll");
    generatedScale.push(notes[11 + selectedNote.value.number].name + " -dim");
    generatedScale.push(notes[12 + selectedNote.value.number].name + " -dúr");
  }
  if (mode.value === "Moll") {
    generatedScale.push(notes[0 + selectedNote.value.number].name + " -moll");
    generatedScale.push(notes[2 + selectedNote.value.number].name + " -dim");
    generatedScale.push(notes[3 + selectedNote.value.number].name + " -dúr");
    generatedScale.push(notes[5 + selectedNote.value.number].name + " -moll");
    generatedScale.push(notes[7 + selectedNote.value.number].name + " -moll");
    generatedScale.push(notes[8 + selectedNote.value.number].name + " -dúr");
    generatedScale.push(notes[10 + selectedNote.value.number].name + " -dúr");
    generatedScale.push(notes[12 + selectedNote.value.number].name + " -moll");
  }

  scale.push(...generatedScale);

  generatedProgressions.length = 0;

  for (let index = 0; index < progressions.length; index++) {
    let progression = [];
    progression.length = 0;

    for (let i = 0; i < progressions[index].steps.length; i++) {
      progression.push(generatedScale[progressions[index].steps[i] - 1]);
    }
    generatedProgressions.push(progression);
  }

  console.log(generatedProgressions);
}
generateProgression();
</script>

<template>
  <input
    type="radio"
    id="dur"
    value="Dúr"
    v-model="mode"
    v-on:change="generateProgression()"
  />
  <label for="dur">Dúr</label>

  <input
    type="radio"
    id="moll"
    value="Moll"
    v-model="mode"
    v-on:change="generateProgression()"
  />
  <label for="two">Moll</label>

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

  <label for="selectedPogression">Akkordmenet:</label> 

  <div class="info info-grey" v-if="scale.length">
    <p>Skála:</p>
    <span class="note note-green" v-for="note in scale">{{ note }}</span>
  </div>

  <div class="info info-grey" v-if="scale.length">
    <p>Akkordmenetek:</p>

    <div v-for="progression in generatedProgressions">
      {{ progression.name }}
      <span class="note note-green" v-for="note in progression">{{
        note
      }}</span>
    </div>
  </div>
</template>

<style scoped>
.note {
  min-width: 8ch;
}
</style>
