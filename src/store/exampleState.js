import { createState, useState } from "@hookstate/core";

const state = createState({ A: 0, B: 0 });

export function useExampleState() {
  return useState(state);
}
