import { useTypingEffect } from "../hooks/use-typing-effect";

interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
}

const TypingEffect = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 2000,
}: TypingEffectProps) => {
  const { text, cursor } = useTypingEffect({
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetweenTexts,
  });

  return (
    <>
      {text}
      <span className="typing-cursor" style={{ opacity: cursor ? 1 : 0 }}></span>
    </>
  );
};

export default TypingEffect;
