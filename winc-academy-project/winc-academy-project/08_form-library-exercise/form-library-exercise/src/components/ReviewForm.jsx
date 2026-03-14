import {
  Button,
  Input,
  Field,
  Textarea,
  VStack,
  Dialog,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function ReviewForm({ movie, cancel, finish }) {
  // TODO: Implement review form using React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await fetch("http://localhost:3000/ratings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        movieId: movie.id,
        rating: Number(data.rating),
        comment: data.comment,
      }),
    });
    finish();
  }
  return (
    <Dialog.Root open={movie} onOpenChange={cancel}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>Review: {movie?.name}</Dialog.Header>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Dialog.Body>
              <Field.Root invalid={errors.rating} mt={2}>
                <Field.Label>Rating (1-5)</Field.Label>
                <Input
                  type="number"
                  min={1}
                  max={5}
                  step={1}
                  {...register("rating", {
                    required: "Please enter a rating",
                    min: { value: 1, message: "Minimum rating is 1" },
                    max: { value: 5, message: "Maximum rating is 5" },
                  })}
                />
                <Field.ErrorText>{errors.rating?.message}</Field.ErrorText>
              </Field.Root>

              <Field.Root invalid={errors.rating} mt={4}>
                <Field.Label>comment</Field.Label>
                <Textarea
                  {...register("comment", {
                    required: "Please enter a comment",
                  })}
                />
                <Field.ErrorText>{errors.comment?.message}</Field.ErrorText>
              </Field.Root>
            </Dialog.Body>

            <Dialog.Footer>
              <VStack w="full" spacing={3}>
                <Button onClick={cancel} variant="outline" w="full">
                  Back
                </Button>

                <Button
                  type="submit"
                  colorScheme="blue"
                  isLoading={isSubmitting}
                  w="full"
                >
                  Submit Review
                </Button>
              </VStack>
            </Dialog.Footer>
          </form>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}
