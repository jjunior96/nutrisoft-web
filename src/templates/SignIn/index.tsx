import { Flex, Stack, Text } from '@chakra-ui/react';

import Button from 'components/Button';
import Input from 'components/Form/Input';

const SignIn = () => {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth="420px"
        backgroundColor="gray.50"
        padding="8" // 8 * 4 = 32px
        borderRadius="8px"
        flexDirection="column"
        boxShadow="2xl"
      >
        <Text
          fontSize="2xl"
          fontWeight="bold"
          marginX="auto"
          color="gray.900"
          marginBottom="3"
        >
          Login
        </Text>

        {/* Stack => Container para dar espaçamento entre os inputs */}
        <Stack spacing="2">
          <Input name="email" label="Email" type="email" />

          <Input name="password" label="Senha" type="password" />
        </Stack>

        <Button type="submit" marginTop="7">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignIn;
