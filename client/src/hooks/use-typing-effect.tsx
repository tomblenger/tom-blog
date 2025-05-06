import { useState, useEffect, useCallback } from "react";

interface UseTypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
}

interface UseTypingEffectReturn {
  text: string;
  cursor: boolean;
  isDone: boolean;
}

export function useTypingEffect({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 2000,
}: UseTypingEffectProps): UseTypingEffectReturn {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Toggle cursor visibility for blinking effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  const handleTyping = useCallback(() => {
    const currentWord = texts[currentIndex];
    const shouldDelete = isDeleting;
    const delay = shouldDelete ? deletingSpeed : typingSpeed;

    if (shouldDelete) {
      setCurrentText((prev) => prev.substring(0, prev.length - 1));
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      setCurrentText((prev) => currentWord.substring(0, prev.length + 1));
      if (currentText === currentWord) {
        setIsDone(true);
        setTimeout(() => {
          setIsDone(false);
          setIsDeleting(true);
        }, delayBetweenTexts);
      }
    }
  }, [
    currentIndex,
    currentText,
    isDeleting,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetweenTexts,
  ]);

  useEffect(() => {
    if (isDone) return;

    const intervalId = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(intervalId);
  }, [currentText, isDeleting, handleTyping, isDone, deletingSpeed, typingSpeed]);

  return {
    text: currentText,
    cursor: cursorVisible,
    isDone,
  };
}
