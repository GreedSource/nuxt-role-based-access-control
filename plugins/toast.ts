import { useToast } from "vue-toast-notification";
export default defineNuxtPlugin(() => {
  const toast = useToast({
    position: "top-right",
  });
  return {
    provide: {
      toast,
    },
  };
});
