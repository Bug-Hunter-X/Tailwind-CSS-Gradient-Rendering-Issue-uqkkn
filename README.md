# Tailwind CSS Gradient Rendering Bug

This repository demonstrates a common issue encountered when using Tailwind CSS gradients: the gradient may not render correctly if the specified color classes are undefined or misspelled in your configuration.

## Bug Description
The provided code uses a gradient from blue to purple.  However, if the color classes (`to-purple-500` in this case) aren't defined in your `tailwind.config.js` file (or have typos), the gradient will not render as expected.

## Solution
Ensure all Tailwind CSS classes used in your component are correctly defined in your configuration file.  Verify for any typos or missing classes.