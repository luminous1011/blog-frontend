interface IRootLinks {
  label: string;
  to: string;
  href?: string;
}

export default function () {
  const rootLinks: IRootLinks[] = [
    {
      to: "/index",
      label: "Blog",
    },
    {
      to: "/404",
      label: "Management",
    },
    {
      to: "/404",
      label: "Console",
    },
    {
      href: "https://github.com/luminous1011",
      to: "https://github.com/luminous1011",//无意义，解决router-link报错
      label: "About Me",
    },
  ];
  return { rootLinks };
}
