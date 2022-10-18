import { Box, Text, VStack, HStack, Image, FlatList } from 'native-base';
import React from 'react';
import { Link } from 'react-router-native';

function ChatList({ UserChatList }) {
  return (
    <VStack backgroundColor={'#1B202D'}>
      <Box
        backgroundColor={'#292F3F'}
        borderTopRadius={'40'}
        overflow={'hidden'}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          data={UserChatList}
          renderItem={({ item }) => {
            return (
              <Link to="ChatScreen">
                <Box marginTop={'4'} marginLeft={'4'}>
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
                          fontSize={'16'}
                        >
                          {item.name}
                        </Text>
                        <Text color={'#B3B9C9'} fontSize={'12'}>
                          {item.lastChat}
                        </Text>
                      </Box>
                      <Text
                        marginRight={'4'}
                        color={'#B3B9C979'}
                        fontSize={'12'}
                      >
                        {item.latest_timestamp}
                      </Text>
                    </HStack>
                  </HStack>
                </Box>
              </Link>
            );
          }}
        />
      </Box>
    </VStack>
  );
}

export default ChatList;
