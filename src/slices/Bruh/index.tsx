import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Bruh`.
 */
export type BruhProps = SliceComponentProps<Content.BruhSlice>;

/**
 * Component for "Bruh" Slices.
 */
const Bruh = ({ slice }: BruhProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for bruh (variation: {slice.variation}) Slices
    </section>
  );
};

export default Bruh;
