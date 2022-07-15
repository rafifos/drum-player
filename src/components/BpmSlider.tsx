import { useState } from "react";
import {
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from "@chakra-ui/react";

interface BpmSliderProps {
  bpm: number;
  onChange: (value: number) => void;
}

function BpmSlider({ bpm, onChange }: BpmSliderProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const bpmPresets = [80, 120, 140];

  return (
    <Slider
      aria-label="BPM slider"
      id="bpm-slider"
      defaultValue={bpm}
      min={40}
      max={160}
      colorScheme="teal"
      onChange={(value) => onChange(value)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {bpmPresets.map((preset) => (
        <SliderMark
          key={preset}
          value={preset}
          mt="1"
          ml="-2.5"
          fontSize="sm"
        >{`${preset} bpm`}</SliderMark>
      ))}

      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>

      <Tooltip
        hasArrow
        bg="teal.500"
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={`${bpm} bpm`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  );
}

export default BpmSlider;
