import {
  VStack,
  HStack,
  Text,
  Box,
  Input,
  PresenceTransition,
} from 'native-base';
import NAMES from '../chatData.json';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';

function CustomHeader({ searchFunction }) {
  const [toggleSearchBar, toggleSearchBarFunction] = useState(true);
  function searchHandler(name) {
    searchFunction(
      NAMES.profile.friends.filter(
        (item) =>
          item.name.toLowerCase().startsWith(name.toLowerCase()) ||
          item.name.toLowerCase().includes(name.toLowerCase()),
      ),
    );
  }
  return (
    <VStack backgroundColor={'#1B202D'}>
      <Box paddingTop={'5'}>
        <VStack paddingX={'19'}>
          {toggleSearchBar ? (
            <Box height={'12'}>
              <HStack justifyContent={'space-between'}>
                <Text fontSize={'20'} color={'white'} fontWeight={'bold'}>
                  Messages
                </Text>

                <Ionicons
                  name="ios-search"
                  size={30}
                  color="white"
                  onPress={() => toggleSearchBarFunction(!toggleSearchBar)}
                />
              </HStack>
            </Box>
          ) : (
            <PresenceTransition
              visible={!toggleSearchBar}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 500,
                },
              }}
            >
              <Box height={'12'}>
                <HStack justifyContent={'space-between'}>
                  <Input
                    color={'white'}
                    onChangeText={(text) => {
                      searchHandler(text);
                    }}
                    placeholder="Search"
                    flex={'1'}
                    marginRight={'3'}
                    borderRadius={'16'}
                  />
                  <Ionicons
                    name="close-circle"
                    size={30}
                    color="white"
                    onPress={() => toggleSearchBarFunction(!toggleSearchBar)}
                  />
                </HStack>
              </Box>
            </PresenceTransition>
          )}
          <Text
            marginTop={'3'}
            fontSize={'14'}
            color={'#FFFFFF58'}
            fontWeight={'thin'}
            letterSpacing={'2xl'}
          >
            FRIENDS
          </Text>
        </VStack>
      </Box>
    </VStack>
  );
}

export default CustomHeader;
