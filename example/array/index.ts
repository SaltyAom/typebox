import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "./original-compiler";

const T = Type.Object({
  email: Type.String({
    format: "email",
  }),
});

const schema = TypeCompiler.Compile(T);

console.log(
  schema.Check({
    email: "a@gmail.com",
  })
);
