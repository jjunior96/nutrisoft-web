import { MdNotificationsNone as NotificationIcon } from 'react-icons/md';

import { Flex, Wrap, WrapItem, Icon, Avatar, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex
      width="calc(100% - 200px)"
      height="60px"
      boxShadow="md"
      position="fixed"
      top="0"
      marginLeft="200px"
      alignItems="center"
      justifyContent="space-between"
      paddingX="24px"
      backgroundColor="white"
    >
      <Flex>{''}</Flex>

      <Wrap spacing="16px" align="center">
        <WrapItem backgroundColor="gray.50" padding="6px" borderRadius="50%">
          <Icon as={NotificationIcon} width="24px" height="24px" />
        </WrapItem>

        <WrapItem
          align="center"
          backgroundColor="gray.50"
          padding="4px 6px"
          borderRadius="6px"
        >
          <Avatar
            width="40px"
            height="40px"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
          <Text marginLeft="8px" alignSelf="center">
            Dan Abrahmov
          </Text>
        </WrapItem>
      </Wrap>
    </Flex>
  );
};

export default Header;
