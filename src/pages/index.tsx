import type { Sample } from "@/reducers/global";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { useReducer } from "react";
import { Flex, HStack } from "@chakra-ui/react";

import AddSample from "@/components/AddSample";
import BpmSlider from "@/components/BpmSlider";
import MediaControls from "@/components/MediaControls";
import Page from "@/components/Page";
import SampleList from "@/components/SampleList";
import { globalReducer, initialState } from "@/reducers/global";
import indexSchema from "@/schemas/index.json";
import env from "@/utils/environment";
import { validate } from "@/utils/json";

export const getStaticProps: GetStaticProps = async () => {
  const indexUrl = env.SAMPLES_REPOSITORY_INDEX;
  const res = await fetch(indexUrl);
  const json = await res.json();

  if (!validate(json, indexSchema))
    return {
      notFound: true,
    };

  return {
    props: {
      files: json.files,
    },
    revalidate: 86400,
  };
};

function DrumMaker({ files }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  function handleChangeBpm(bpm: number) {
    dispatch({ type: "set_bpm", bpm });
  }

  function handleAddSample(file: string) {
    dispatch({ type: "added_sample", file });
  }

  function handleChangeSample(sample: Sample) {
    dispatch({ type: "changed_sample", sample });
  }

  function handleDeleteSample(id: number) {
    dispatch({ type: "removed_sample", id });
  }

  return (
    <Page>
      <Flex
        as="main"
        maxWidth="4xl"
        marginX="auto"
        flexDirection="column"
        gap={4}
        boxShadow="xl"
        p={8}
        borderRadius={8}
        backgroundColor="Background"
      >
        <HStack>
          <MediaControls />
          <BpmSlider bpm={state.bpm} onChange={handleChangeBpm} />
        </HStack>
        {state.samples.length > 0 && (
          <SampleList
            samples={state.samples}
            onChangeSample={handleChangeSample}
            onDeleteSample={handleDeleteSample}
          />
        )}
        <AddSample onAddSample={handleAddSample} options={files} />
        BPM: {state.bpm} <br></br>
        Samples: {JSON.stringify(state.samples)}
      </Flex>
    </Page>
  );
}

export default DrumMaker;
