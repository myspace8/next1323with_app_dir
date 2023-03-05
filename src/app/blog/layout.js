// import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <h3>Blog</h3>
      <h5>Latest updates</h5>
      <h1>{children}</h1>
    </div>
  );
}
