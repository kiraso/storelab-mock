import { useRouter } from "next/router";
import { FaUserCircle } from "react-icons/fa";
import { BiCircle } from "react-icons/bi";

const mainMock = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <div className="relative h-full ml-[15%]">
      <div className="flex h-screen w-full flex-col gap-3 px-8 pt-10">
        <div className="px-5 mt-[2%]">
          {/* itemlist */}
          <div className="mb-8 text-md text-zinc-600">
            {"vStore  > Organization"}
          </div>
          {/* Organization */}

          <button className="bg-zinc-700 text-white rounded-md p-3">
            {" "}
            New Organization
          </button>

          {/* Organization A */}
          <div>
            <div className="mt-[5%] flex flex-row">
              <h1 className="text-[36px] px-5">Organization A</h1>
              <button className="bg-zinc-700 text-white rounded-md p-3 hover:bg-gray-500">
                {" "}
                New Team
              </button>
            </div>
            <span className="px-5 text-zinc-500">Organization description</span>
            {/* card */}
            <div className="mt-8">
              <div className="grid grid-cols-4 gap-4">
                {/* SubCard AA */}
                <div className="w-auto h-[150px] container rounded-md border-2 border-gray-400 bg-gray-100 p-5">
                  <div className="flex justify-between">
                    <div className="flex flex-row">
                      <FaUserCircle size={30} color="gray" />
                      <h1 className="text-gray-600 px-2">Slack</h1>
                    </div>
                    <div className="flex flex-row gap-3">
                      <button className="flex flex-row bg-gray-500 rounded-lg text-white px-3 hover:bg-gray-300 hover:text-gray-700">
                        <span>
                          <BiCircle
                            size={20}
                            className="flex justify-center align-middle mt-[2px] px-[2%] mr-2"
                          />
                        </span>
                        Lab
                      </button>
                      <button className="flex flex-row bg-gray-500 rounded-lg text-white px-3 hover:bg-gray-300 hover:text-gray-700">
                        <span>
                          <BiCircle
                            size={20}
                            className="flex justify-center align-middle mt-[2px] px-[2%] mr-2"
                          />
                        </span>
                        Storage
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between mt-[40px] mb-5">
                    <h1 className="text-gray-600 px-2 text-lg font-bold">
                      Team AA
                    </h1>

                    <div>
                      <button className="flex flex-row bg-orange-500 rounded-lg text-white px-3 py-2 text-sm hover:bg-orange-300 hover:text-zinc-600">
                        Admin pending
                      </button>
                    </div>
                  </div>
                </div>
                {/* SubCard AB */}
                <div className="w-auto h-[150px] container rounded-md border-2 border-gray-400 bg-gray-100 p-5">
                  <div className="flex justify-between">
                    <div className="flex flex-row">
                      <FaUserCircle size={30} color="gray" />
                      <h1 className="text-gray-600 px-2">Slack</h1>
                    </div>
                    <div className="flex flex-row gap-3">
                      <button className="flex flex-row bg-gray-500 rounded-lg text-white px-3 hover:bg-gray-300 hover:text-gray-700">
                        <span>
                          <BiCircle
                            size={20}
                            className="flex justify-center align-middle mt-[2px] px-[2%] mr-2"
                          />
                        </span>
                        Lab
                      </button>
                      <button className="flex flex-row bg-gray-500 rounded-lg text-white px-3 hover:bg-gray-300 hover:text-gray-700">
                        <span>
                          <BiCircle
                            size={20}
                            className="flex justify-center align-middle mt-[2px] px-[2%] mr-2"
                          />
                        </span>
                        Storage
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between mt-[40px] mb-5">
                    <h1 className="text-gray-600 px-2 text-lg font-bold">
                      Team AB
                    </h1>
                  </div>
                </div>
                {/* SubCard AC*/}
                <div className="w-auto h-[150px] container rounded-md border-2 border-gray-400 bg-gray-100 p-5">
                  <div className="flex justify-between">
                    <div className="flex flex-row">
                      <FaUserCircle size={30} color="gray" />
                      <h1 className="text-gray-600 px-2">Slack</h1>
                    </div>
                    <div className="flex flex-row gap-3">
                      <button className="flex flex-row bg-gray-500 rounded-lg text-white px-3 hover:bg-gray-300 hover:text-gray-700">
                        <span>
                          <BiCircle
                            size={20}
                            className="flex justify-center align-middle mt-[2px] px-[2%] mr-2"
                          />
                        </span>
                        Lab
                      </button>
                      <button className="flex flex-row bg-gray-500 rounded-lg text-white px-3 hover:bg-gray-300 hover:text-gray-700">
                        <span>
                          <BiCircle
                            size={20}
                            className="flex justify-center align-middle mt-[2px] px-[2%] mr-2"
                          />
                        </span>
                        Storage
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between mt-[40px] mb-5">
                    <h1 className="text-gray-600 px-2 text-lg font-bold">
                      Team AC
                    </h1>
                  </div>
                </div>
                {/* SubCard AD*/}
                <div className="w-auto h-[150px] container rounded-md border-2 border-gray-400 bg-gray-100 p-5">
                  <div className="flex justify-between">
                    <div className="flex flex-row">
                      <FaUserCircle size={30} color="gray" />
                      <h1 className="text-gray-600 px-2">Slack</h1>
                    </div>
                    <div className="flex flex-row gap-3">
                      <button className="flex flex-row bg-gray-500 rounded-lg text-white px-3 hover:bg-gray-300 hover:text-gray-700">
                        <span>
                          <BiCircle
                            size={20}
                            className="flex justify-center align-middle mt-[2px] px-[2%] mr-2"
                          />
                        </span>
                        Lab
                      </button>
                      <button className="flex flex-row bg-gray-500 rounded-lg text-white px-3 hover:bg-gray-300 hover:text-gray-700">
                        <span>
                          <BiCircle
                            size={20}
                            className="flex justify-center align-middle mt-[2px] px-[2%] mr-2"
                          />
                        </span>
                        Storage
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between mt-[40px] mb-5">
                    <h1 className="text-gray-600 px-2 text-lg font-bold">
                      Team AD
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Organization B */}
          <div>
            <div className="mt-[5%] flex flex-row">
              <h1 className="text-[36px] px-5">Organization B </h1>
              <button className="bg-zinc-700 text-white rounded-md p-3 hover:bg-gray-500 ">
                {" "}
                New Team
              </button>
            </div>
            <span className="px-5 text-zinc-500">Organization description</span>
            {/* card */}
            <div className="mt-8">
              <div className="grid grid-cols-4 gap-4">
                {/* SubCard BA */}
                <div className="w-auto h-[150px] container rounded-md border-2 border-gray-400 bg-gray-100 p-5">
                  <div className="flex justify-between">
                    <div className="flex flex-row">
                      <FaUserCircle size={30} color="gray" />
                      <h1 className="text-gray-600 px-2">Slack</h1>
                    </div>
                    <div className="flex flex-row gap-3">
                      <button className="flex flex-row bg-gray-500 rounded-lg text-white px-3 hover:bg-gray-300 hover:text-gray-700">
                        <span>
                          <BiCircle
                            size={20}
                            className="flex justify-center align-middle mt-[2px] px-[2%] mr-2"
                          />
                        </span>
                        Lab
                      </button>
                      <button className="flex flex-row bg-gray-500 rounded-lg text-white px-3 hover:bg-gray-300 hover:text-gray-700">
                        <span>
                          <BiCircle
                            size={20}
                            className="flex justify-center align-middle mt-[2px] px-[2%] mr-2"
                          />
                        </span>
                        Storage
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between mt-[40px] mb-5">
                    <h1 className="text-gray-600 px-2 text-lg font-bold">
                      Team BA
                    </h1>
                  </div>
                </div>
                {/* SubCard BB*/}
                <div className="w-auto h-[150px] container rounded-md border-2 border-gray-400 bg-gray-100 p-5">
                  <div className="flex justify-between">
                    <div className="flex flex-row">
                      <FaUserCircle size={30} color="gray" />
                      <h1 className="text-gray-600 px-2">Slack</h1>
                    </div>
                    <div className="flex flex-row gap-3">
                      <button className="flex flex-row bg-gray-500 rounded-lg text-white px-3 hover:bg-gray-300 hover:text-gray-700">
                        <span>
                          <BiCircle
                            size={20}
                            className="flex justify-center align-middle mt-[2px] px-[2%] mr-2"
                          />
                        </span>
                        Lab
                      </button>
                      <button className="flex flex-row bg-gray-500 rounded-lg text-white px-3 hover:bg-gray-300 hover:text-gray-700">
                        <span>
                          <BiCircle
                            size={20}
                            className="flex justify-center align-middle mt-[2px] px-[2%] mr-2"
                          />
                        </span>
                        Storage
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between mt-[40px] mb-5">
                    <h1 className="text-gray-600 px-2 text-lg font-bold">
                      Team BB
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mainMock;
