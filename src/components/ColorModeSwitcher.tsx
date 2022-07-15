import type { IconButtonProps } from "@chakra-ui/react";

import { Moon, Sun } from "react-feather";
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

function ColorModeSwitcher(props: ColorModeSwitcherProps) {
  const { toggleColorMode } = useColorMode();
  const theme = useColorModeValue("Escuro", "Claro");

  const SwitchIcon = useColorModeValue(Moon, Sun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="gray.900"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Trocar para o tema ${theme}`}
      _hover={{ backgroundColor: "teal.100" }}
      {...props}
    />
  );
}

export default ColorModeSwitcher;
