import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  //not a good idea just for mock purposes
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/") router.push("/mainMock");
  }, [router]);

  return <></>;
}
