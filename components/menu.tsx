import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { ShiftingWord } from "@/components/shifting-word";

const hitMePunk = localFont({
  src: "../fonts/Hit me, punk! 01.ttf",
});

// fonts/Hit me, punk! 01.ttf
type MenuItem = {
  label: string;
  slug: string;
};

const menuItems: MenuItem[] = [
  {
    label: "Start!",
    slug: "start",
  },
  {
    label: "Experience",
    slug: "experience",
  },
  {
    label: "Projects",
    slug: "projects",
  },
  {
    label: "Skills",
    slug: "skills",
  },
  {
    label: "Connect",
    slug: "connect",
  },
] as const;

const classes = [
  "-rotate-x-45",
  "-rotate-x-15",
  "",
  "rotate-x-15",
  "rotate-x-45",
];

const paddings = ["p-4", "pr-0", "pr-4", "pr-8", "pr-2"];
const zindex = ["z-10", "z-9", "z-8", "z-7", "z-6"];

const Menu = () => {
  return (
    <div className={`${hitMePunk.className} antialiased`}>
      <div className='perspective-dramatic transform-style-3d flex justify-center items-center w-1/2'>
        <ul className='mt-48 flex flex-col gap-2 text-ltr rotate-y-22 perspective-dramatic transform-style-3d'>
          {menuItems.map((item, i) => (
            <li
              className={cn(
                "text-7xl text-end w-full list-none",
                classes[i],
                paddings[i],
                zindex[i],
                {
                  "pt-4": i == 4,
                },
              )}
              key={item.slug}
            >
              <ShiftingWord text={item.label} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
