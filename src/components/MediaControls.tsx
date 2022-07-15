import { PlayCircle, StopCircle } from "react-feather";
import { Flex, IconButton } from "@chakra-ui/react";

function MediaControls() {
  return (
    <Flex maxWidth="md" gap={2}>
      <IconButton aria-label="Play" icon={<PlayCircle />} />
      <IconButton aria-label="Play" icon={<StopCircle />} />
    </Flex>
  );
}

export default MediaControls;
