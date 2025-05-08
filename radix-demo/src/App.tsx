import React from "react";
import { Flex, Text, Button } from "@radix-ui/themes";

const App = () => {
  return (
    <div>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Let's go</Button>
      </Flex>
    </div>
  );
};

export default App;
