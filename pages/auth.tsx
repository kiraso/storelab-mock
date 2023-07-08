import Input from "@/components/input";
import axios from "axios";
import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Auth = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [teamName, setTeamName] = useState("");
  const [password, setPassword] = useState("");
  const [domain, setDomain] = useState(false);
  const [variant, setVariant] = useState("signIn");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "signIn" ? "register" : "signIn"
    );
    setErrorMessage("");
  }, []);
  const login = useCallback(async () => {
    try {
      const user = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      if (user && user.error) setErrorMessage(user.error);
      else router.push("/mainMock");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);
  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        password,
      });
      router.push(
        {
          pathname: "/authPendding",
          query: { email: email },
        },
        "/authPendding"
      );
    } catch (error) {
      console.log(error);
    }
  }, [email, password, login, router]);

  return (
    <div className="relative h-full ">
      <div className="flex h-screen w-full justify-center items-center">
        <div className="bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-lg rounded-md w-full">
          <div className="flex flex-col gap-4">
            <img src="images/logo.svg" alt="Logo" className="h-12" />
            <h1 className="text-center font-semibold text-[22px]">
              {variant === "signIn" && <>Sign in to your account</>}
              {variant === "register" && !domain && <>Got your team name?</>}
              {variant === "register" && domain && <>Register new account?</>}
            </h1>

            {variant === "register" && !domain ? (
              <Input
                id="name"
                type="text"
                label="team name"
                value={teamName}
                onChange={(e: any) => setTeamName(e.target.value)}
              />
            ) : variant === "register" && domain ? (
              <>
                <Input
                  id="email"
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                />
                <Input
                  type="password"
                  id="password"
                  label="Password"
                  value={password}
                  onChange={(e: any) => setPassword(e.target.value)}
                />
              </>
            ) : (
              variant === "signIn" && (
                <>
                  <Input
                    id="email"
                    type="email"
                    label="Email address"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                  />
                  <Input
                    type="password"
                    id="password"
                    label="Password"
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)}
                  />
                </>
              )
            )}
          </div>
          {errorMessage && (
            <span className="text-rose-500">*{errorMessage}</span>
          )}
          {variant === "signIn" && (
            <div className="mt-8 flex justify-between">
              <div>
                <input type="checkbox" id="example_checkbox" />
                <span className="px-4 text-gray-600">Remember me</span>
              </div>
              <a className="text-[#07698F] hover:underline" href="">
                Forget your password?
              </a>
            </div>
          )}

          {!domain && variant === "register" ? (
            <button
              onClick={() => setDomain(true)}
              className="bg-[#07698F] py-3 text-white rounded-md w-full mt-8 hover:bg-[#3b5d6b] transition"
            >
              Continue register
            </button>
          ) : (
            <button
              onClick={variant === "signIn" ? login : register}
              className="bg-[#07698F] py-3 text-white rounded-md w-full mt-8 hover:bg-[#3b5d6b] transition"
            >
              {variant === "signIn" ? "Sign In" : "Sign up"}
            </button>
          )}

          <div className="mt-3 flex justify-between">
            <span className="px-4 text-gray-600">Already have an account?</span>

            <span
              onClick={toggleVariant}
              className="text-[#07698F] hover:underline cursor-pointer"
            >
              {variant === "signIn" ? "Create an account" : "signIn"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
