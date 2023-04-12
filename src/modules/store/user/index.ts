export const useUserStore = defineStore("user", () => {
  const id = ref(0);
  const isOnline = computed(() => id.value != 0);

  return { isOnline, id };
});
