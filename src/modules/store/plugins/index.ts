import { SemVer } from "semver";

import { toJson } from "./internal/to-json";
import { fromJson } from "./internal/from-json";
import { useIpc } from "@/modules/ipc";
import { useSettingsStore } from "../settings";

import type { PluginInfoEntity } from "@/api/gql";
import type { LocalPluginEntries, ReadonlyLocalPluginEntries } from "./types";

export const usePluginsStore = defineStore("plugins", () => {
  const ipc = useIpc();
  const settings = useSettingsStore();

  const values = reactive<LocalPluginEntries>(new Map());

  async function init() {
    const response = await fromJson();

    for (const { id, version, files } of response) {
      values.set(id, { id: id, version: new SemVer(version), files });
    }
  }

  async function install({ id, version, url }: { id: PluginInfoEntity["id"]; version: SemVer; url: URL }) {
    const response = await ipc.plugins.install({ url, dir: settings.game.dir });
    if (!response.status) return;

    values.set(id, { id, version, files: response.files });
    await toJson(values);
  }

  return { values: values as ReadonlyLocalPluginEntries, init, install };
});
