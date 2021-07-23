import { useCallback, useEffect, useRef } from "react";

//Based on https://dev.to/vibhanshu909/click-outside-listener-for-react-components-in-10-lines-of-code-using-hooks-pp8

export const useClickOutsideListenerRef = (onClose: () => void) => {
  const ref = useRef(null);

  const escapeListener = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (!(ref.current! as any)?.contains(e.target)) {
        onClose?.();
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ref.current]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("click", clickListener);
    document.addEventListener("keyup", escapeListener);

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("click", clickListener);
      document.removeEventListener("keyup", escapeListener);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
};
