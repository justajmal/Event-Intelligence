function E({ x }) {
  return (
    <>
      <rect x={x} y="67" width="32" height="155" />
      <rect x={x} y="67" width="152" height="26" />
      <rect x={x} y="132" width="130" height="25" />
      <rect x={x} y="195" width="152" height="27" />
    </>
  );
}

export default function Logo({ className = "" }) {
  return (
    <svg viewBox="0 0 833 288" fill="currentColor" role="img" aria-label="Event Intelligence Engine" className={className}>
      <rect width="112" height="128" />
      <rect y="140" width="112" height="148" />
      <E x={331} />
      <rect x="564" y="67" width="32" height="155" />
      <E x={681} />
    </svg>
  );
}
