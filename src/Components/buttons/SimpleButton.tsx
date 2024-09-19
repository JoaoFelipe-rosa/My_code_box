interface SimpleButtonProps {
  buttonText: string;
  clickFunction: () => void;
  className?: string;
}

export default function SimpleButton({
  buttonText,
  className,
  clickFunction
}: SimpleButtonProps) {
  return (
    <>
      <button className={className} onClick={clickFunction}>
        {buttonText}
      </button>
    </>
  );
}
