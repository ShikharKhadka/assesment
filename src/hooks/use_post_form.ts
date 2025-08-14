import { useForm, type FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const usePostForm = <T extends FieldValues>({
  schema,
}: {
  schema: any;
}) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    trigger,
    unregister,
    setValue,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(schema),
  });
  return {
    register,
    watch,
    handleSubmit,
    errors,
    control,
    unregister,
    trigger,
    setValue,
  };
};
