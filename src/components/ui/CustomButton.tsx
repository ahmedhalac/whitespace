import { ArrowRightIcon } from "@heroicons/react/24/solid";

type Props = {
  text: string;
  bgColor: string;
  textColor: string;
  hasArrow: boolean;
};

export default function CustomButton({
  text,
  bgColor,
  textColor,
  hasArrow,
}: Props) {
  return (
    <button
      className={`px-9 py-4 rounded-lg flex gap-2 items-center cursor-pointer ${bgColor} ${textColor}`}
    >
      {text}
      {hasArrow && (
        <ArrowRightIcon className="w-5 h-5 text-white"></ArrowRightIcon>
      )}
    </button>
  );
}
