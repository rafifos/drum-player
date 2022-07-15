import type { ReactEventHandler } from "react";

import { useState } from "react";
import { Plus } from "react-feather";
import { Flex, IconButton, Select } from "@chakra-ui/react";

interface AddSampleProps {
  options: string[];
  onAddSample: (sample: string) => void;
}

function AddSample({ options, onAddSample }: AddSampleProps) {
  const [selected, setSelected] = useState("");

  const parsedOptions = options.map((option) =>
    option.replaceAll(/^data\/|.wav$/g, "")
  );

  const handleClick = () => onAddSample(selected);
  const handleChange: ReactEventHandler<HTMLSelectElement> = (e) =>
    e.currentTarget.value !== "" && setSelected(e.currentTarget.value);

  return (
    <Flex gap={1}>
      <IconButton
        aria-label="Adicionar arquivo"
        icon={<Plus />}
        onClick={handleClick}
      />
      <Select
        placeholder="Selecione um arquivo"
        defaultValue=""
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <option value={option} key={index}>
            {parsedOptions[index]}
          </option>
        ))}
      </Select>
    </Flex>
  );
}

export default AddSample;
