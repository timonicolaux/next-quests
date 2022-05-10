import Link from "next/link";
import { Layout } from "../components/layout";
import { useEffect } from "react";
import "../components/layout.module.css";

export default function IndexPage() {
  useEffect(() => {
    console.log("index page did mount");
  });
  return (
    <Layout>
      <header>
        <title pageTitle="My Webpage"></title>
        <ul className="navigation">
          <li>
            <Link href="/about">
              <a>About us</a>
            </Link>
          </li>
          <li>
            <Link href="/terms-of-use">
              <a>Terms of use</a>
            </Link>
          </li>
        </ul>
      </header>
      <div className="welcome">
        <h1>Welcome !</h1>
      </div>
      <footer></footer>
    </Layout>
  );
}
