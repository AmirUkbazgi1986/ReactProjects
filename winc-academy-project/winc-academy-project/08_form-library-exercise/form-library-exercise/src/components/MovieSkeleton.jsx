import { Box, Skeleton, SkeletonText, Stack, VStack } from "@chakra-ui/react";

function MovieSkeleton() {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      shadow="md"
      mx="auto"
      maxW="250px"
    >
      <Skeleton h="320px" borderRadius="md" mb={3} />
      <Stack>
        <Stack minH="180px">
          <SkeletonText noOfLines={3} />
        </Stack>
        <hr />

        <VStack spaceY={2}>
          <SkeletonText noOfLines={2} />
          <Skeleton w="100px" h="40px" />
        </VStack>
      </Stack>
    </Box>
  );
}

export default MovieSkeleton;
