import { Heading } from '@chakra-ui/react';

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <Heading color="gray.800" fontSize="2xl">
      {children}
    </Heading>
  );
};

export default Title;
