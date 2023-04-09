import { invoke } from "@tauri-apps/api";

import type { BackendResponse } from "../types";
import type { BackendInstallResponse } from "./types";

export async function install(params: { url: URL; dir: string }): Promise<BackendResponse<BackendInstallResponse>> {
  return await invoke("on_install_plugin", params);
}
