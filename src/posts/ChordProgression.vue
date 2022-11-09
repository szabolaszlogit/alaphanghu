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
    name: "1-5",
    steps: [1, 5],
    dsc: "Van ettől egyszerűbb?",
  },
  {
    name: "1-4-5",
    steps: [1, 4, 5],
    dsc: "Az egyik legegyszerűbb, legalapvetőbb forma, a rock, a pop alapja..",
  },
  {
    name: "1-5-6-4",
    steps: [1, 5, 6, 4],
    dsc: "A nyugati zene egyik legtöbbet használt akkordmenete. Gyakran más sorrendben, de ugyanazeket az akkordokat használják.",
  },
  {
    name: "6-4-1-5",
    steps: [6, 4, 1, 5],
    dsc: "Kicsit melankolikus akkordmenet.",
  },
  {
    name: "2-5-1-(6)",
    steps: [2, 5, 1, 6],
    dsc: "Színtén szélés körben elterjedt, kicsit már jazzes akkordmenet.",
  },
  {
    name: "1-6-4-5",
    steps: [1, 6, 4, 5],
    dsc: "50-es évek, és Mozart.",
  },
  {
    name: "Blues",
    steps: [1, 1, 1, 1, 4, 4, 1, 1, 5, 4, 1, 5],
    dsc: "A blues tipikusan 12 ütemből áll (3 x 4 ütem), 1-4-5 fokokat variáljuk néhány minta alapján.",
  },
  {
    name: "Blues - gyors váltás",
    steps: [1, 4, 1, 1, 4, 4, 1, 1, 5, 4, 1, 5],
    dsc: "1-4-1-1 / 4-4-1-1 / 5-4-1-5",
  },
  {
    name: "Blues - lassú váltás",
    steps: [1, 1, 1, 1, 4, 4, 1, 1, 5, 5, 1, 1],
    dsc: "1-1-1-1 / 4-4-1-1 / 5-5-1-1",
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
    progression.push({ name: progressions[index].name });
    progression.push({ dsc: progressions[index].dsc });
    let chords = [];
    for (let i = 0; i < progressions[index].steps.length; i++) {
      chords.push(generatedScale[progressions[index].steps[i] - 1]);
    }
    progression.push({ chords: chords });
    generatedProgressions.push(progression);
  }

  console.log(generatedProgressions);
}
generateProgression();
</script>

<template>
  <h1>Akkordmenet-generator</h1>
  <p>
    Egy adott hangnemben többféle sorrendben használhatjuk az akkordokat. Vannak
    jellegzetes, jól bevált, vagy éppen egy stilushoz köthető akkordmenetek. Itt
    ezeket tekintheted meg.
  </p>
  <p>
    Válaszd ki a hangnemet, és azt, hogy a dúr vagy a moll skálát szeretnéd
    használni.
  </p>
  <p>A számok azt jelentik, az akkord a skála hanyadik hangjára épül.</p>
  <div class="info info-blue">
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
    <label for="moll">Moll</label>
  </div>

  <div class="info info-grey" v-if="scale.length">
    <p>Skála:</p>
    <span class="note note-green" v-for="note in scale">{{ note }}</span>
  </div>

  <div class="info info-grey" v-if="scale.length">
    <h2>Akkordmenetek</h2>

    <div class="prog" v-for="progression in generatedProgressions">
      <div>{{ progression[0].name }}</div>
      <div>{{ progression[1].dsc }}</div>

      <div class="parent">
        <span
          class="note note-green child"
          v-for="note in progression[2].chords"
        >
          {{ note }}
        </span>
      </div>
    </div>
    <br />
  </div>
</template>

<style scoped>
.note {
  min-width: 8ch;
  font-size: 0.9rem;
  padding: 0.5rem;
  margin: 0.2rem;
}
.prog {
  margin-bottom: 1rem;
  background-color: var(--blue-light);
  padding: 0.5rem;
}
/* 4 item in a row  */
.parent {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}

.child {
  width: 20%;
  box-sizing: border-box;
}
</style>
