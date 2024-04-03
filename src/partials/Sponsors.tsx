import { Section } from "astro-boilerplate-components";

import betterStackLogo from "../../public/assets/images/better-stack-white.png";
import clerkLogo from "../../public/assets/images/clerk.png";
import crowdinLogo from "../../public/assets/images/crowdin-white.png";
import nextlessLogo from "../../public/assets/images/nextlessjs.png";
import sentryLogo from "../../public/assets/images/sentry-white.png";
import tursoLogo from "../../public/assets/images/turso.png";
const sponsorsList = [
  {
    href: "https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo",
    img: { src: sentryLogo.src, alt: "Sentry" },
  },
  {
    href: "https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate",
    img: { src: betterStackLogo.src, alt: "Better Stack" },
  },
  {
    href: "https://nextlessjs.com",
    img: {
      src: nextlessLogo.src,
      alt: "React SaaS Boilerplate Next.js",
    },
  },
  {
    href: "https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate",
    img: {
      src: clerkLogo.src,
      alt: "Clerk – Authentication & User Management for Next.js",
    },
  },
  {
    href: "https://turso.tech/?utm_source=nextjsstarterbp",
    img: {
      src: tursoLogo.src,
      alt: "SQLite Developer Experience",
    },
  },
  {
    href: "https://l.crowdin.com/next-js",
    img: {
      src: crowdinLogo.src,
      alt: "Crowdin",
    },
  },
];

const Sponsors = () => {
  const rowNum = Math.ceil(sponsorsList.length / 3);
  return (
    <Section title="Sponsors">
      <table className="mx-auto border-collapse">
        <tbody>
          {new Array(rowNum).fill(1).map((_, i) => {
            const start = i * 3;
            const end = Math.min(i * 3 + 3, sponsorsList.length);
            const arr = sponsorsList.slice(start, end);
            return (
              <tr className="h-56">
                {arr?.map((val) => {
                  const { href, img } = val;
                  return (
                    <td className="border-2 border-gray-300 p-3" key={href}>
                      <a href={href} target="_blank">
                        <img width={260} height={224} {...img} />
                      </a>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Section>
  );
};
export { Sponsors };
