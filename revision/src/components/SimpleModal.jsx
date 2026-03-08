import {
  Container,
  Heading,
  Dialog,
  Button,
  Textarea,
  Field,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

function SimpleModal({ open, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = async (data) => {
  //   await fetch("http://localhost:3000/ratings", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       rating: Number(data.rating),
  //       comment: data.comment,
  //     }),
  //   });
  // };
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Dialog.Header>
              <Dialog.Title>This is a dialog</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body>
              <Field.Root invalid={errors.rating}>
                <Field.Label>Rating(0-5)</Field.Label>
                <Input
                  type="number"
                  min={1}
                  max={5}
                  step={1}
                  {...register("rating", {
                    required: "please enter the rating",
                    min: { value: 1, message: "minimum value is 1" },
                    max: { value: 5, message: "maximum value is 5" },
                  })}
                />
                <Field.ErrorText>{errors.rating?.message}</Field.ErrorText>
              </Field.Root>
              <Field.Root invalid={errors.comment}>
                <Field.Label>comment</Field.Label>
                <Textarea
                  placeholder="enter a comment"
                  {...register("comment", {
                    required: "please enter  a comment",
                  })}
                />
                <Field.ErrorText>{errors.comment?.message}</Field.ErrorText>
              </Field.Root>
            </Dialog.Body>

            <Dialog.Footer>
              <Button onClick={onClose} variant="outline">
                Close
              </Button>
              <Button type="submit">Add Review</Button>
            </Dialog.Footer>
          </form>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}

export default SimpleModal;
