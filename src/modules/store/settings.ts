import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", () => {
  const game = reactive({
    dir: "C:\\Program Files (x86)\\Steam\\steamapps\\common\\Soulworker_KR",
  });

  return { game };
});
