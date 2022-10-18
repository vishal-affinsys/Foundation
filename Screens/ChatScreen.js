import {
  Box,
  VStack,
  HStack,
  Text,
  Input,
  NativeBaseProvider,
} from 'native-base';
import React from 'react';

export default function ChatScreen() {
  return (
    <NativeBaseProvider>
      <Box>
        <Text>Welcome This is chat screen!</Text>
      </Box>
    </NativeBaseProvider>
  );
}
