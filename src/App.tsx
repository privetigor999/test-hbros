import { useForm } from "react-hook-form";
import { Button } from "./components/Button/Button";
import { Form } from "./components/Form/Form";
import { Input } from "./components/Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./schema/formSchema";
import { Checkbox } from "./components/Checkbox/Checkbox";
import { Toggle } from "./components/Toggle/Toggle";
import { Radio } from "./components/Radio/Radio";

import "./App.scss";

export default function App() {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(formSchema),
  });

  const onSubmit = () => {
    const values = getValues();
    console.log(JSON.stringify(values));
  };

  const onError = () => {
    console.log("Error");
  };
  return (
    <div className="App">
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Input
          {...register("username")}
          id="username"
          label="Username"
          placeholder="Enter username"
          type="text"
          helpertext={errors?.username?.message}
          error={!!errors.username}
        />
        <Input
          {...register("password")}
          id="password"
          label="Password"
          placeholder="Enter password"
          type="password"
          helpertext={
            errors?.password?.message ||
            "Your password is between 4 and 12 characters"
          }
          error={!!errors.password}
        />
        <Input
          {...register("text")}
          id="text"
          label="Input Text Label"
          placeholder="Input Text Label"
          type="text"
          helpertext={errors?.text?.message}
          error={!!errors.text}
        />
        <Checkbox {...register("isRemember")} />
        <Toggle {...register("isToggle")} />
        <Radio />
        <div className="App__buttons">
          <Button>Cancel</Button>
          <Button type="submit">Next</Button>
        </div>
      </Form>
    </div>
  );
}
