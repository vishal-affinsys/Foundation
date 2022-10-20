import { Box, Text, HStack, Image, Pressable } from 'native-base';
import { Dimensions } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';
const fontScale = Dimensions.get('window').fontScale;
function ChatListItem({ item }) {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate('Chat', item)}>
      <Box paddingY={'2'} marginLeft={'4'}>
        <HStack width={'100%'}>
          <Image
            source={{ uri: item.picture }}
            alt="chat-list"
            height="50"
            rounded="full"
            width="50"
          />
          <HStack flex={'1'} justifyContent={'space-evenly'}>
            <Box marginLeft={'3'} width={'4/5'}>
              <Text
                color={'white'}
                fontWeight={'bold'}
                fontSize={(fontScale * 20).toString()}
              >
                {item.name}
              </Text>
              <Text color={'#B3B9C9'} fontSize={'12'}>
                {item.lastChat}
              </Text>
            </Box>
            <Text marginRight={'4'} color={'#B3B9C979'} fontSize={'12'}>
              {item.latest_timestamp}
            </Text>
          </HStack>
        </HStack>
      </Box>
    </Pressable>
  );
}

export default ChatListItem;
