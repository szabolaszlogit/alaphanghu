<script setup>
import { computed } from "@vue/reactivity";
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
const customNotes = reactive([]);

const selectedNote = ref();

let step = ref(0);

watch(selectedNote, (newNote) => {
  customNotes.push(newNote);
});

const tranposedCustomNotes = computed(() => {
  let newNotes = [];
  let consolidatedStep;

  for (let index = 0; index < customNotes.length; index++) {
    consolidatedStep = customNotes[index].number + step.value;
    if (step.value > 0 && customNotes[index].number + step.value > 11) {
      consolidatedStep = customNotes[index].number + step.value - 12;
    }
    if (step.value < 0 && customNotes[index].number + step.value < 0) {
      consolidatedStep = customNotes[index].number + step.value + 12;
    }
    newNotes.push(notes[consolidatedStep]);
  }

  return newNotes;
});

function removeCustomNote(index) {
  console.log(index);
  customNotes.splice(index, 1);
}
</script>

<template>
  <h1>Hasznos eszközök</h1>
  <h2>Transzponáló</h2>
  <p>
    Gyakran előfordul, hogy egy dal valamiért túl mély, vagy magas az eredeti
    akkordok alapján. Főleg az énekesek szoktak ezen fennakadni, érthető
    okokból. Ilyenkor meg lehet próbálni a dalt mélyebben vagy magasabban, azaz
    másik hangnemben eljátszani.
  </p>
  <p>1. Add meg a dal akkordjait. Itt nem számít, hogy dúr vagy moll. </p>
  <p>2. Add meg, hány félhanggal szeretnéd feljebb, vagy lejebb transzponálni</p>
  <p>3. Az akkordokat úgy tudod törölni, ha rájuk kattintasz</p>
  <label for="cars">Akkord hozzáaádsa:</label>
  <select v-model="selectedNote">
    <option v-for="note in notes" :value="note">
      {{ note.name }}
    </option>
  </select>

  <br />
  <input type="number" min="-12" max="12" v-model.number="step" />
  <br />
  {{ step }}
  <br />

  <div>
    <span
      v-for="(note, index) in customNotes"
      v-on:click="removeCustomNote(index)"
      >{{ note.name }}</span
    >
  </div>

  <div v-if="tranposedCustomNotes.length">
    <span v-for="note in tranposedCustomNotes">{{ note.name }}</span>
  </div>
</template>

<style></style>
