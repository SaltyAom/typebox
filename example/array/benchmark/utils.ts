import { bench, run, barplot, summary, compact } from "mitata";

import { TypeCompiler as OriginalCompiler } from "../original-compiler";
import { TypeCompiler as NewCompiler } from "../new-compiler";

import type { TAnySchema } from "@sinclair/typebox";

export const benchmark = <T extends TAnySchema>(
  model: T,
  value: T["static"]
) => {
  const original = OriginalCompiler.Compile(model);
  const newCompiler = NewCompiler.Compile(model);

  compact(() => {
    barplot(() => {
      summary(() => {
        bench("Original", () => {
          return original.Check(value);
        });

        bench("New", () => {
          return newCompiler.Check(value);
        });
      });
    });
  });

  run();
};
