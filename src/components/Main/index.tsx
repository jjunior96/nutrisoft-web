import { Flex } from '@chakra-ui/react';

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <Flex
      width="calc(100vw - 200px)"
      height="calc(100vh - 60px)"
      alignItems="center"
      marginTop="60px"
      marginLeft="200px"
    >
      <Flex
        width="100%"
        height="100%"
        backgroundColor="gray.50"
        paddingX="16px"
        paddingY="16px"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default Main;
