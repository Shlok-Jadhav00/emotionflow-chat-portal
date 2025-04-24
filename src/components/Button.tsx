
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'secondary', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "px-6 py-3 rounded-lg font-medium transition-all duration-200 backdrop-blur-sm",
          "hover:transform hover:scale-105 active:scale-100",
          variant === 'primary'
            ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-xl"
            : "bg-white/20 hover:bg-white/30 border border-white/20",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
