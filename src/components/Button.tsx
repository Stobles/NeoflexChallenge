import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../utils/cn";
import { LoaderCircle } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center  justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-background-black font-semibold text-primary-foreground hover:bg-background-black/70",
        orange:
          "bg-background-orange font-semibold text-primary-foreground hover:bg-background-orange-second",
        link: "text-primary font-semibold",
        ghost: "bg-accent/50 text-primary hover:bg-accent",
      },
      size: {
        default: "w-fit h-10 px-2",
        full: "w-full h-10 py-3 px-2",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, isLoading, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {isLoading ? <LoaderCircle className="h-4 w-4" /> : children}
      </button>
    );
  }
);
