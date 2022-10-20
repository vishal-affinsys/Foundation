import { NativeBaseProvider, VStack, Box } from 'native-base';
import CustomHeader from '../components/Header';
import FriendsList from '../components/FriendsList';
import ChatList from '../components/ChatList';
import React, { useState } from 'react';

import NAMES from '../chatData.json';
import { StatusBar } from 'expo-status-bar';

export default function MainScreen() {
  const [filteredList, setChatList] = useState(NAMES.profile.friends);

  return (
    <NativeBaseProvider>
      <StatusBar style="light" />
      <VStack
        paddingTop={'8'}
        display={'flex'}
        height={'100%'}
        backgroundColor={'#292F3F'}
      >
        <CustomHeader searchFunction={setChatList} />
        <FriendsList UserFriendList={filteredList} />
        <Box flex={'1'}>
          <ChatList UserChatList={filteredList} />
        </Box>
      </VStack>
    </NativeBaseProvider>
  );
}
