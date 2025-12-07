import * as React from "react"

import { cn } from "@/lib/utils"

interface InputProps extends Omit<React.ComponentProps<"input">, "prefix"> {
  prefix?: React.ReactNode
  suffix?: React.ReactNode
}

function Input({ className, type, prefix, suffix, ...props }: InputProps) {
  return (
    <div
      className={cn(
        "flex h-9 w-full items-center rounded-md  bg-transparent px-[18px] py-[30px]  text-base shadow-xs transition-[color,box-shadow]",
        "focus-within:border-ring focus-within:ring-purple-400/20 focus-within:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ",
        className
      )}
    >
      {prefix && <span className="mr-2 flex items-center text-muted-foreground">{prefix}</span>}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "w-full min-w-0 bg-transparent outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
          "selection:bg-primary selection:text-primary-foreground "
        )}
        {...props}
      />
      {suffix && <span className="ml-2 flex items-center text-muted-foreground">{suffix}</span>}
    </div>
  )
}

export { Input }
