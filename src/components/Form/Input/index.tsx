import {
  Input as ChackraInput,
  InputProps as ChackraInputProps,
  FormControl,
  FormLabel
} from '@chakra-ui/react';

interface InputProps extends ChackraInputProps {
  name: string;
  label?: string;
}

const Input = ({ name, label, ...rest }: InputProps) => {
  return (
    // FormControl => Container do input e label
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <ChackraInput
        name={name}
        id={name}
        backgroundColor="white"
        variant="filled"
        size="lg"
        _hover={{
          bgColor: 'white'
        }}
        _focus={{
          backgroundColor: 'white',
          borderColor: 'blue.300'
        }}
        {...rest}
      />
    </FormControl>
  );
};
export default Input;
