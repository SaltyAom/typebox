import { Type as t } from "@sinclair/typebox";
import { benchmark } from "./utils";

benchmark(
  t.Object({
    ids: t.Array(t.Number()),
    names: t.Array(t.String()),
    games: t.Array(
      t.Object({
        name: t.String(),
        tags: t.Array(t.String()),
      })
    ),
  }),
  {
    ids: [1, 2, 3],
    names: ["SaltyAom", "Eika", "Kuro", "MightyMew"],
    games: [
      {
        name: "MiSide",
        tags: ["Psychological Horror", "Cute", "Dating Sim"],
      },
      {
        name: "Strinova",
        tags: ["Free to Play", "Anime", "Third-Person Shooter"],
      },
      {
        name: "Tom Clancy's Rainbow Six Siege",
        tags: ["FPS", "Multiplayer", "Tactical"],
      },
      {
        name: "Silent Hill",
        tags: ["Survival Horror", "Action", "Adventure"],
      },
      {
        name: "Silent Hill 2",
        tags: ["Survival Horror", "Action", "Adventure"],
      },
      {
        name: "Metal Gear Solid",
        tags: ["Action", "Adventure"],
      },
      {
        name: "Undertale",
        tags: ["Action", "Adventure"],
      },
    ],
  }
);
