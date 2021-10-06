import {
  Button as ChrakraButton,
  ButtonProps as ChackraButtonProps
} from '@chakra-ui/react';

interface ButtonProps extends ChackraButtonProps {
  children: React.ReactNode;
}

const Button = ({ children, type, ...rest }: ButtonProps) => {
  return (
    <ChrakraButton type={type} colorScheme="blue" size="lg" {...rest}>
      {children}
    </ChrakraButton>
  );
};

export default Button;
