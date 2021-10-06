import { Flex, Image, Text } from '@chakra-ui/react';

const Logo = () => {
  return (
    <Flex width="100%" alignItems="center" marginTop="8px">
      <Image src="/img/bg.png" width="40px" height="40px" marginRight="8px" />
      <Text color="blue.300" fontSize="medium" fontWeight="bold">
        Nutrisoft
      </Text>
    </Flex>
  );
};

export default Logo;
