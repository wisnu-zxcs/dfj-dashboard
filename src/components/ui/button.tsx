import { cn } from "../../utils/styles";
import type { LucideIcon } from "lucide-react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from "react";

type ButtonBaseProps = {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    icon?: LucideIcon;
    iconPosition?: "left" | "right";
    isLoading?: boolean;
    fullWidth?: boolean;
};

type ButtonAsButton = ButtonBaseProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        as?: "button";
    };

type ButtonAsLink = ButtonBaseProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        as: "a";
    };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button: FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "md",
    icon: Icon,
    iconPosition = "left",
    isLoading = false,
    fullWidth = false,
    className,
    as: Component = "button",
    ...props
}) => {
    const baseStyles = "font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2";

    const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-300",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100",
        outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 disabled:border-gray-300 disabled:text-gray-300",
        ghost: "text-blue-600 hover:bg-blue-50 disabled:text-gray-300",
    };

    const sizeStyles = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    const classes = cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        className
    );

    const content = isLoading ? (
        <>
            <span className="animate-spin">⏳</span>
            Loading...
        </>
    ) : (
        <>
            {Icon && iconPosition === "left" && <Icon size={16} />}
            {children}
            {Icon && iconPosition === "right" && <Icon size={16} />}
        </>
    );

    if (Component === "a") {
        return (
            <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
                {content}
            </a>
        );
    }

    return (
        <button
            className={classes}
            disabled={isLoading || (props as ButtonHTMLAttributes<HTMLButtonElement>).disabled}
            {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {content}
        </button>
    );
};