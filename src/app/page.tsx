'use client';

import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';

export default function TermsOfService() {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="2xl" mb={6}>
          Terms of Service
        </Heading>
        <Text>
          Welcome to Jestor. These Terms of Service govern your use of our platform.
        </Text>
      </VStack>
    </Container>
  );
}