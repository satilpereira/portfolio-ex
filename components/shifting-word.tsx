import { CSSProperties, useMemo } from "react";
import SoundClick from "./sound-click";

type ShiftingWordProps = {
  text: string;
};

export function ShiftingWord({ text }: ShiftingWordProps) {
  const letters = [...text];

  const transforms = useMemo(
    () =>
      letters.map((_, index) => ({
        x: seededRandom(index * 3 + 1) * 16 - 8,
        y: seededRandom(index * 3 + 2) * 16 - 8,
        rotate: seededRandom(index * 3 + 3) * 24 - 12,
      })),
    [text],
  );

  const renderLetters = (background: boolean) =>
    letters.map((letter, index) => {
      const transform = transforms[index];

      return (
        <SoundClick key={index}>
          <span
            style={
              {
                "--x": `${transform.x}px`,
                "--y": `${transform.y}px`,
                "--rotation": `${transform.rotate}deg`,

                ...(background
                  ? {
                      WebkitTextStroke: "12px white",
                      paintOrder: "stroke fill",
                    }
                  : {}),
              } as CSSProperties
            }
            className={`
            inline-block
            origin-center
            transition-transform
            duration-200
            ease-out
            group-hover:translate-x-(--x)
            group-hover:translate-y-(--y)
            group-hover:rotate-(--rotation)
            crt-text
            ${background ? "text-white" : index == 0 ? "text-red-500" : "text-black"}
          `}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        </SoundClick>
      );
    });

  return (
    <span className='group inline-grid cursor-pointer whitespace-pre'>
      {/* All highlights are painted first */}
      <span
        aria-hidden='true'
        className='pointer-events-none col-start-1 row-start-1 inline-flex'
      >
        {renderLetters(true)}
      </span>

      {/* All actual letters are painted above every highlight */}
      <span className='relative col-start-1 row-start-1 inline-flex'>
        {renderLetters(false)}
      </span>
    </span>
  );
}

/**
 * Returns a deterministic random number in [0, 1)
 */
export function seededRandom(seed: number): number {
  const x = Math.sin(seed * 12.9898) * 43758.5453123;
  return x - Math.floor(x);
}
