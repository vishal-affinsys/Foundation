import { Box, VStack, FlatList } from 'native-base';
import React from 'react';
import ChatListItem from './ChatListItem';

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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <ChatListItem item={item} />;
          }}
        />
      </Box>
    </VStack>
  );
}

export default ChatList;
