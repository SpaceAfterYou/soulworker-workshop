import { BaseDirectory, writeTextFile } from "@tauri-apps/api/fs";

import type { LocalPluginEntries, LocalPluginEntry, RawPluginEntries, RawPluginEntry } from "../types";

export async function toJson(values: LocalPluginEntries) {
  const format = ({ id, version, files }: LocalPluginEntry): RawPluginEntry => ({ id, version: version.format(), files });
  const formatAll = (): RawPluginEntries => [...values.values()].map(format);

  await writeTextFile("plugins.json", JSON.stringify(formatAll()), { dir: BaseDirectory.AppLocalData });
}
