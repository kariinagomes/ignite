import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Karina Gomes</Text>
          <Text color='gray.300'>kariinagomes_@hotmail.com</Text>
        </Box>
      )}
      <Avatar
        size='md'
        name='Karina Gomes'
        src='https://github.com/kariinagomes.png'
      />
    </Flex>
  );
}
