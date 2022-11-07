<script setup>
import { computed } from "@vue/reactivity";
import { reactive, ref } from "vue";

const notes = reactive([
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
]);

const customNotes = reactive([0,1,10,11]);

let step = ref();

/* const tranposedNotes = computed(() => {
  let newNotes = [];
  let consolidatedStep;

  for (let index = 0; index < notes.length; index++) {
    consolidatedStep = index + step.value;

    if (step.value > 0 && index + step.value > 11) {
      consolidatedStep = index + step.value - 12;
    }

    if (step.value < 0 && index + step.value < 0) {
      consolidatedStep = index + step.value + 12;
    }

    newNotes.push(notes[consolidatedStep]);
  }
  return newNotes;
}); */

const tranposedCustomNotes = computed(() => {
  let newNotes = [];
  for (let index = 0; index < customNotes.length; index++) {
    newNotes.push(notes[customNotes[index]])
    console.log(newNotes);
    
  }
  let consolidatedStep;

  for (let index = 0; index < customNotes.length; index++) {
    consolidatedStep = customNotes[index] + step.value;

    if (step.value > 0 && customNotes[index] + step.value > 11) {
      consolidatedStep = customNotes[index] + step.value - 12;
    }

    if (step.value < 0 && index + step.value < 0) {
      consolidatedStep = index + step.value + 12;
    }

    newNotes.push(notes[consolidatedStep]);
  }
  return newNotes;
});


</script>

<template>
  {{ notes }}
  <br />
  {{ tranposedNotes }}
  <br />
  <input type="number" min="-12" max="12" v-model.number="step" />
  <br />
  {{ step }}
  <br>
  {{customNotes}}
  <br>
  {{tranposedCustomNotes}}
</template>

<style></style>
