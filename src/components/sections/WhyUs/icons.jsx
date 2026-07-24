function iconProps(props) {
  return {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props,
  };
}

export function BeanIcon(props) {
  return (
    <svg {...iconProps(props)}>
      <path d="M12 3c4.5 0 8 3.8 8 8.5S16.5 21 12 21 4 17.2 4 11.5 7.5 3 12 3Z" />
      <path d="M8.5 18C10 14 10 9 14.5 6" />
    </svg>
  );
}

export function LeafIcon(props) {
  return (
    <svg {...iconProps(props)}>
      <path d="M20 4C10 4 4 10 4 18c8 0 14-6 14-14Z" />
      <path d="M9 19c2-4 5-7 9-9" />
    </svg>
  );
}

export function CupIcon(props) {
  return (
    <svg {...iconProps(props)}>
      <path d="M5 8h11v6a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V8Z" />
      <path d="M16 9h1.5a3 3 0 0 1 0 6H16" />
      <path d="M8 4c0-1 1-1 1-2M12 4c0-1 1-1 1-2" />
    </svg>
  );
}

export function HeartIcon(props) {
  return (
    <svg {...iconProps(props)}>
      <path d="M12 20s-7-4.4-9.5-9C.8 7.4 3 4 6.5 4c2 0 3.4 1.1 4 2.2C11.1 5.1 12.5 4 14.5 4 18 4 20.2 7.4 18.5 11 16 15.6 12 20 12 20Z" />
    </svg>
  );
}
