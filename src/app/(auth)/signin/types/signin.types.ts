import { z } from "zod";
import { signinScheme } from "./signin.schema";

export type Signin = z.infer<typeof signinScheme>;
