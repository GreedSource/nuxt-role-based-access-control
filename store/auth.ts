import { defineStore } from "pinia";
import { UserProps } from "~/interfaces/user.interface";
export const useAuthStore = defineStore(
  "auth",
  () => {
    const isAuthenticated = ref<UserProps | undefined>();
    function setAuthenticated(auth?: UserProps) {
      isAuthenticated.value = auth;
    }

    //   reset state
    function $reset() {
      isAuthenticated.value = undefined;
    }

    return { isAuthenticated, setAuthenticated, $reset };
  },
  {
    persist: {
      storage: persistedState.cookiesWithOptions({
        sameSite: "strict",
      }),
    },
  }
);
