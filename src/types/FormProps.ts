export interface FormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => any,
  text: string,
  setText: (value: string) => any
}

