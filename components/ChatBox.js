import { Box, HStack, Text } from 'native-base';
import React from 'react';
import { useWindowDimensions } from 'react-native';

export default function ChatBox({ item, align }) {
  const { width, height } = useWindowDimensions();
  if (align === 'right') {
    return (
      <HStack justifyContent={'space-between'}>
        <Box />
        <Box
          backgroundColor={item.side === 'left' ? '#373E4E' : 'black'}
          padding={'2'}
          margin={'3'}
          borderTopRadius={'8'}
          borderBottomLeftRadius={item.side === 'left' ? '0' : '8'}
          borderBottomRightRadius={item.side === 'left' ? '8' : '0'}
          width={width * 0.7}
        >
          <Text color={'white'} textAlign={item.side}>
            {item.text}
          </Text>
        </Box>
      </HStack>
    );
  } else {
    return (
      <HStack justifyContent={'space-between'}>
        <Box
          backgroundColor={item.side === 'left' ? '#373E4E' : 'black'}
          padding={'2'}
          margin={'3'}
          borderTopRadius={'8'}
          borderBottomLeftRadius={item.side === 'left' ? '0' : '8'}
          borderBottomRightRadius={item.side === 'left' ? '8' : '0'}
          width={width * 0.7}
        >
          <Text color={'white'} textAlign={item.side}>
            {item.text}
          </Text>
        </Box>
        <Box />
      </HStack>
    );
  }
}
