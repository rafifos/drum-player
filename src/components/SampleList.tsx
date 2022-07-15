import { Minus } from "react-feather";
import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";

import { Sample } from "@/reducers/global";

interface SampleProps extends Sample {
  onDeleteSample: (id: number) => void;
}

function Sample({ id, name, rhythm, onDeleteSample }: SampleProps) {
  const handleDelete = () => onDeleteSample(id);

  return (
    <Flex gap={4} alignItems="center">
      <IconButton
        aria-label="Remover amostra"
        icon={<Minus />}
        onClick={handleDelete}
      />

      <Text
        as="span"
        size="sm"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
      >
        {name}
      </Text>

      <Spacer />

      <Flex alignItems="center" gap={2}>
        {rhythm.map((beat, index) => (
          <ButtonGroup
            key={index}
            size="sm"
            variant="outline"
            isAttached
            colorScheme="teal"
          >
            {beat.map((note, index) => (
              <Button key={index} variant={note ? "solid" : "outline"} />
            ))}
          </ButtonGroup>
        ))}
      </Flex>
    </Flex>
  );
}

interface SampleListProps {
  samples: Sample[];
  onDeleteSample: (id: number) => void;
}

function SampleList({ samples, onDeleteSample }: SampleListProps) {
  return (
    <Flex display="flex" flexDirection="column" gap={1}>
      {samples.map((sample, index) => (
        <Sample key={index} onDeleteSample={onDeleteSample} {...sample} />
      ))}
    </Flex>
  );
}

export default SampleList;
