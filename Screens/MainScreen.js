import { NativeBaseProvider, VStack, Box } from 'native-base';
import CustomHeader from '../components/Header';
import FriendsList from '../components/FriendsList';
import ChatList from '../components/ChatList';
import React, { useState } from 'react';

import NAMES from '../chatData.json';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MainScreen() {
  const [filteredList, setChatList] = useState(NAMES.profile.friends);

  return (
    <NativeBaseProvider>
      <SafeAreaView backgroundColor={'#292F3F90'}>
        <VStack display={'flex'} height={'100%'} backgroundColor={'#292F3F'}>
          <CustomHeader searchFunction={setChatList} />
          <FriendsList UserFriendList={filteredList} />
          <Box flex={'1'}>
            <ChatList UserChatList={filteredList} />
          </Box>
        </VStack>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
