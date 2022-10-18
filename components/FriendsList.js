import { Box, Text, Image, FlatList } from 'native-base';
import React from 'react';

function FriendsList({ UserFriendList }) {
  return (
    <Box backgroundColor={'#1B202D'}>
      <FlatList
        marginY={'4'}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={UserFriendList}
        renderItem={({ item }) => {
          return (
            <Box key={item.id}>
              <Image
                marginRight={'3'}
                source={{
                  uri: item.picture,
                }}
                alt="friends-header"
                height="100"
                rounded="full"
                width="100"
              />
              <Text
                marginTop={'2'}
                justifyContent={'center'}
                textAlign={'center'}
                color={'white'}
                fontWeight={'thin'}
                fontFamily={'body'}
                fontStyle={'italic'}
              >
                {item.name}
              </Text>
            </Box>
          );
        }}
      />
    </Box>
  );
}

export default FriendsList;
