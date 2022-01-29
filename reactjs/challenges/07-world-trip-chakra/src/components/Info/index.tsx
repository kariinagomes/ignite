import { Box, Text } from '@chakra-ui/react';

interface InfoProps {
  number: number;
  label: string;
}

export function Info({ number, label }: InfoProps) {
  return (
    <Box textAlign={['start', 'center']} fontWeight="600">
      <Text color='yellow.900' fontWeight='600' fontSize={['2xl', '5xl']}>
        {number}
      </Text>
      <Text fontSize={['md', '2xl']}>{label}</Text>
    </Box>
  );
}
