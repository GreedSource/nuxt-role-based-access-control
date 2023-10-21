import { UserProps } from "~/interfaces/user.interface";
import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();
  const runtimeConfig = useRuntimeConfig();

  //   if (from.meta.permission === "user.profile")
  //     throw createError({
  //       statusCode: 401,
  //       statusMessage:
  //         "You do not have access to this resource. Contact with the administrator",
  //     });

  const token = useCookie("Authorization");

  if (!auth.isAuthenticated) {
    if (!token.value) return navigateTo("/account/login");

    $fetch<UserProps>("/me", {
      baseURL: runtimeConfig.public.baseUrl,
    })
      .then((response) => {
        auth.setAuthenticated(response);
        navigateTo("/user/dashboard", { replace: true });
      })
      .catch((error) => {
        navigateTo("/account/login", { replace: true });
      });
  }
});
