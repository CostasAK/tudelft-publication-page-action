import { describe, expect, it } from "vitest";
import { render, screen } from "../utils/test-utils";

import { Header } from "./Header";

describe("Simple working test", () => {
  it("The title is visible", () => {
    render(<Header />);
    expect(screen.getByRole("heading", { level: 1 })).toBeDefined();
  });
});
