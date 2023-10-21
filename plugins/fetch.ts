import { ofetch } from "ofetch";
import { useAuthStore } from "@/store/auth";
import { useToast } from "vue-toast-notification";

export default defineNuxtPlugin((_nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const $toast = useToast({
    position: "top-right",
  });
  const { $reset } = useAuthStore();
  globalThis.$fetch = ofetch.create({
    onResponseError({ response }) {
      const refreshToken = useCookie("Refresh");
      if (response.status === 401) {
        $toast.info(
          "Your session has expired. We're refreshing it for you. Please wait a moment."
        );
        if (refreshToken.value) {
          $fetch("/auth/refresh", {
            method: "POST",
            baseURL: runtimeConfig.public.baseUrl,
          })
            .then(() =>
              setTimeout(
                () => $toast.success("Session refreshed successfully"),
                500
              )
            )
            .catch(() => {
              $toast.error(
                "Oops! Something went wrong while refreshing your session. Please log in again"
              );
              $reset();
            });
        } else {
          $toast.error(
            "Oops! Something went wrong while refreshing your session. Please log in again"
          );
          $reset();
          navigateTo("/account/login");
        }
      }
    },
  });
});
