import {
  Box,
  VStack,
  HStack,
  Text,
  Input,
  NativeBaseProvider,
  Image,
  FlatList,
} from 'native-base';
import React, { useRef } from 'react';
import NAMES from '../chatData.json';
import ChatBox from '../components/ChatBox';
import { useEffect, useState } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';
import moment from 'moment';

export default function ChatScreen({ route }) {
  const details = route.params;
  const chatData = NAMES.friends.filter((item) => item.id === details.id)[0]
    .chatlog;
  const refList = useRef();
  const [message, setMessage] = useState({});
  const [userChatList, setUserChatList] = useState(chatData);
  return (
    <NativeBaseProvider>
      <Box height={'100%'} backgroundColor={'#292F3F'}>
        <VStack
          paddingTop={'8'}
          display={'flex'}
          height={'100%'}
          backgroundColor={'#292F3F'}
        >
          <HStack alignItems={'center'} margin={'5'}>
            <Image
              source={{ uri: details.picture }}
              alt={'HeaderImage'}
              height={'50'}
              width={'50'}
              rounded={'full'}
            />
            <Text
              color={'white'}
              fontSize={'xl'}
              fontWeight={'bold'}
              marginX={'5'}
            >
              {details.name}
            </Text>
          </HStack>
          <FlatList
            ref={refList}
            onContentSizeChange={() => refList?.current?.scrollToEnd()}
            height={'full'}
            data={userChatList}
            keyExtractor={(item) => item.message_id}
            renderItem={({ item }) => {
              return <ChatBox item={item} align={item.side} />;
            }}
          />
          <HStack
            justifyContent={'space-between'}
            alignItems={'center'}
            marginX={'3'}
            marginY={'4'}
          >
            <Input
              color={'white'}
              flex={'1'}
              value={message}
              onChangeText={(text) => {
                let OMessage = {
                  text: text,
                  timestamp: moment(Date.now()).format('hh:mm:A'),
                  side: 'right',
                  message_id: Date.now(),
                };
                setMessage(OMessage);
              }}
              placeholder="Message"
              borderRadius={'16'}
              marginX={'3'}
              cursorColor={'white'}
            />
            <Ionicons
              name="send"
              size={30}
              color="white"
              onPress={() => {
                setUserChatList((previous) => [...userChatList, message]);
                setMessage('');
              }}
            />
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
