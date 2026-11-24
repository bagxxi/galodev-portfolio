import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import cn from "clsx"

type SliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
  /** Accessible name announced for the slider thumb */
  label?: string
}

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, label, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex touch-none select-none items-center group py-2",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-gray-800">
      <SliderPrimitive.Range className="absolute h-full bg-white group-hover:bg-green-400" />
    </SliderPrimitive.Track>

    {/* Kept in the layout (opacity instead of display:none) so it stays keyboard-focusable */}
    <SliderPrimitive.Thumb
      aria-label={label}
      className="block h-3 w-3 bg-white rounded-full opacity-0 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan transition-opacity disabled:pointer-events-none disabled:opacity-50"
    />
  </SliderPrimitive.Root>
))

Slider.displayName = SliderPrimitive.Root.displayName
