import { defineStore } from "pinia";

export const usePermissionStore = defineStore("permission", {
  state: () => ({
    permissions: <string[]>[], // Initialize with an empty array
  }),
  actions: {
    setPermissions(permissions: string[]) {
      this.permissions = permissions;
    },
  },
});
