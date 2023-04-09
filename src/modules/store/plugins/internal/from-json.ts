import { BaseDirectory, exists, readTextFile } from "@tauri-apps/api/fs";

import type { RawPluginEntries } from "../types";

export async function fromJson(): Promise<RawPluginEntries> {
  if (await exists("plugins.json", { dir: BaseDirectory.AppLocalData })) {
    return JSON.parse(await readTextFile("plugins.json", { dir: BaseDirectory.AppLocalData }));
  }

  return [];
}
