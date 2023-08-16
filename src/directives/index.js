import { useIntersectionObserver } from "@vueuse/core";
export const lazyLoad = {
  install(app) {
    app.directive("imglazy", {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            el.src = binding.value;
            // 加載完後停止監聽
            stop();
          }
        });
      },
    });
  },
};
