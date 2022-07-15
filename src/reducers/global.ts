type Sample = {
  id: number;
  file: string;
  name: string;
  rhythm: Array<boolean[]>;
};

type GlobalState = {
  bpm: number;
  samples: Sample[];
};

type Action = {
  type: "set_bpm" | "added_sample" | "changed_sample" | "removed_sample";
  sample: Sample;
} & Sample &
  GlobalState;

function createBlankRhythm() {
  const rhythm = [];

  for (let i = 0; i < 4; i++) {
    rhythm.push(Array(4).fill(false));
  }

  return rhythm;
}

const initialState = {
  bpm: 80,
  samples: [],
};

let nextId = 0;

function globalReducer(state: GlobalState, action: Action) {
  switch (action.type) {
    case "set_bpm":
      return { ...state, bpm: action.bpm };

    case "added_sample": {
      const id = nextId;
      nextId++;

      if (state.samples.find((sample) => sample.file === action.file))
        return state;

      return {
        ...state,
        samples: [
          ...(state.samples as Sample[]),
          {
            id,
            file: action.file,
            name: action.file.replaceAll(/^data\/|.wav$/g, ""),
            rhythm: createBlankRhythm(),
          },
        ],
      };
    }

    case "changed_sample": {
      return {
        ...state,
        samples: state.samples?.map((sample) =>
          sample.id === action.sample?.id ? action.sample : sample
        ),
      };
    }

    case "removed_sample": {
      return {
        ...state,
        samples: state.samples?.filter((sample) => sample.id !== action.id),
      };
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export type { Action, GlobalState, Sample };
export { globalReducer, initialState };
