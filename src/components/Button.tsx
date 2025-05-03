
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
          "px-6 py-3 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm border flex items-center justify-center",
          "hover:transform hover:scale-105 active:scale-100 shadow-lg",
          variant === 'primary'
            ? "bg-gradient-to-r from-[#0EA5E9] to-[#1EAEDB] text-white shadow-lg hover:shadow-xl border-transparent"
            : "bg-transparent border-[#403E43] text-gray-300 hover:bg-[#403E43]/30",
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
