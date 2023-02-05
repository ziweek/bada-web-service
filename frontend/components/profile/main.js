import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState, useMemo } from "react";
import { Dropdown, grayDark } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function ProfileMain() {
  const { data: session, status } = useSession();
  const resAuthority = ["Leader", "Staff", "Member"];
  const [selected, setSelected] = useState(new Set([resAuthority[0]]));
  const router = useRouter();

  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  useEffect(() => {
    if (status === "authenticated") {
      //   router.push("/");
    } else {
      return;
    }
    return;
  }, [session, status]);

  return (
    <>
      <section>
        <div className="flex sticky w-full py-12 z-10 bg-white opacity-90">
          <h1 className="text-4xl font-bold">프로필 생성하기</h1>
        </div>
        <form method="POST" action="/main">
          {/*  */}
          <div className="py-8">
            <h1 className="text-xl font-bold">소셜계정 정보</h1>
          </div>
          <div className="grid md:grid-cols-1 md:gap-6">
            <div className="relative z-0 w-full my-6 group">
              <input
                disabled
                type="email"
                name="social_email"
                id="social_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-gray-200 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                // placeholder=" "
                defaultValue={session ? session.user.email : "example"}
                required
              />
              <label
                htmlFor="social_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                소셜계정 이메일
              </label>
            </div>
            <div className="relative z-0 w-full my-6 group">
              <input
                disabled
                type="text"
                name="social_name"
                id="social_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-gray-200 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                defaultValue={session ? session.user.name : "example"}
                required
              />
              <label
                htmlFor="social_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                소셜계정 이름
              </label>
            </div>
          </div>
          {/*  */}
          <div className="py-8">
            <h1 className="text-xl font-bold">프로필 정보</h1>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full my-6 group">
              <input
                type="text"
                name="name_korean"
                id="name_korean"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                maxLength={10}
              />
              <label
                htmlFor="name_korean"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                한글 이름 *
              </label>
            </div>
            <div className="relative z-0 w-full my-6 group">
              <input
                type="text"
                name="name_english"
                id="name_english"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                maxLength={20}
              />
              <label
                htmlFor="name_english"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                영어 이름
              </label>
            </div>
            <div className="flex flex-row justify-center items-center">
              <div className="relative z-0 w-full my-6 group">
                <input
                  disabled
                  type="text"
                  name="user_authority"
                  id="user_authority"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-gray-200 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  value={selectedValue}
                  placeholder=" "
                  required
                  maxLength={20}
                />
                <label
                  htmlFor="user_authority"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                >
                  직책 *
                </label>
              </div>
              <div className="ml-4">
                <Dropdown placement="bottom-right">
                  <Dropdown.Button flat>직책 선택</Dropdown.Button>
                  <Dropdown.Menu
                    aria-label="Single selection actions"
                    color="primary"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selected}
                    onSelectionChange={setSelected}
                  >
                    {resAuthority.map((e, i) => (
                      <Dropdown.Item key={e}>{e}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="relative z-0 w-full my-6 group">
              <input
                type="text"
                name="user_bio"
                id="user_bio"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                maxLength={20}
              />
              <label
                htmlFor="user_bio"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                자기 소개
              </label>
            </div>
          </div>
          {/*  */}
          <div className="py-8">
            <h1 className="text-xl font-bold">커리어 정보</h1>
          </div>
          <div className="grid md:grid-cols-1 md:gap-6">
            <div className="relative z-0 w-full my-6 group">
              <input
                type="text"
                name="carrer_1"
                id="carrer_1"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                maxLength={20}
              />
              <label
                htmlFor="carrer_1"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                경력 (1)
              </label>
            </div>
            <div className="relative z-0 w-full my-6 group">
              <input
                type="text"
                name="carrer_2"
                id="carrer_2"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                maxLength={20}
              />
              <label
                htmlFor="carrer_2"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                경력 (2)
              </label>
            </div>
            <div className="relative z-0 w-full my-6 group">
              <input
                type="text"
                name="carrer_3"
                id="carrer_3"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                maxLength={20}
              />
              <label
                htmlFor="carrer_3"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                경력 (3)
              </label>
            </div>
          </div>

          <div className="py-8">
            <h1 className="text-xl font-bold">링크 정보</h1>
          </div>
          <div className="grid md:grid-cols-1 md:gap-6">
            <div className="relative z-0 w-full my-6 group">
              <input
                type="text"
                name="carrer_1"
                id="carrer_1"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="carrer_1"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                LinkedIn URL
              </label>
            </div>
            <div className="relative z-0 w-full my-6 group">
              <input
                type="text"
                name="carrer_2"
                id="carrer_2"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="carrer_2"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                GitHub URL
              </label>
            </div>
            <div className="relative z-0 w-full my-6 group">
              <input
                type="text"
                name="carrer_3"
                id="carrer_3"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="carrer_3"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                Instagram URL
              </label>
            </div>
          </div>
          {/*  */}
          <div className="py-8">
            <fieldset>
              <legend className="sr-only">Checkbox variants</legend>
              <div className="flex items-center mb-4">
                <input
                  required
                  id="checkbox-1"
                  type="checkbox"
                  defaultValue=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  checked
                />
                <label
                  htmlFor="checkbox-1"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  (필수){" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    개인정보보호 약관
                  </a>
                  에 동의합니다.
                </label>
              </div>

              <legend className="sr-only">Checkbox variants</legend>
              <div className="flex items-center mb-4">
                <input
                  required
                  id="checkbox-2"
                  type="checkbox"
                  defaultValue=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="checkbox-2"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  (필수) 수정사항은 관리자의 승인 이후에 반영됩니다.
                </label>
              </div>

              <div className="flex mb-4">
                <div className="flex items-center h-5">
                  <input
                    id="helper-checkbox"
                    aria-describedby="helper-checkbox-text"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                </div>
                <div className="ml-2 text-sm">
                  <label
                    htmlFor="helper-checkbox"
                    className="font-medium text-gray-900"
                  >
                    (선택) 서비스와 관련 이메일 수신에 동의합니다.
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <button
            // onClick={() => router.push("/main")}
            type="submit"
            className="mb-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            프로필 수정하기
          </button>
        </form>
      </section>
    </>
  );
}
