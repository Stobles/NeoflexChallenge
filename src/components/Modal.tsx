import { cn } from "@/utils/cn";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  isVisible: boolean;
  toggleVisibility: () => void;
  children: ReactNode;
  className?: string;
};

export const Modal = ({
  isVisible,
  toggleVisibility,
  children,
  className,
}: Readonly<ModalProps>): JSX.Element | null => {
  useLockBodyScroll();

  const modal: JSX.Element = (
    <>
      <div
        className="fixed flex items-center justify-center w-full h-full top-0 left-0 bg-black/20"
        onClick={toggleVisibility}
      ></div>
      <div
        className={cn(
          "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-background-white rounded-md min-w-[400px] shadow-popover p-2",
          className
        )}
        aria-modal
        aria-label="Modal Details"
        role="dialog"
      >
        {children}
      </div>
    </>
  );

  return isVisible ? createPortal(modal, document.body) : null;
};
