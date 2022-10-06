const Home = () => {
  return (
    <div>
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div className="animate">START YOUR NEXT ADVENTURE</div>

              <p className="text-base text-gray-700 md:text-lg">
                Find flights, discover places to see, things to do and more! Let
                us and our community help you plan your next trip.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <a
                href="#account"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium rounded shadow-md md:w-auto md:mr-4 md:mb-0 text-white bg-cyan-700"
              >
                Let's Go
              </a>
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src="https://images.pexels.com/photos/7054237/pexels-photo-7054237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>

      <div
        id="account"
        className="relative flex flex-col py-8 lg:pt-0 lg:flex-col lg:pb-0 bg-neutral-100"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-10">
            <div className="bg-gray-900 p-6 rounded-md">
              <div>
                <p className="text-center text-xl text-white font-bold">
                  Create an account
                </p>
                <form>
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-white"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-white">
                      Username
                    </label>
                    <input
                      type="username"
                      id="username"
                      className="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-white">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <center>
                    <button
                      type="submit"
                      className="text-black bg-white hover:bg-gray-800 text-md rounded py-1 px-5 my-5"
                    >
                      Sign up
                    </button>
                  </center>
                </form>
              </div>
            </div>
            <div className="p-6 rounded border-2 border-gray-400 border-dashed bg-white">
              <div>
                <p className="text-center text-emerald-700 text-xl font-bold">
                  Already have an account with us?
                </p>

                <form>
                  <div>
                    <label className="my-4 block mb-2 text-sm font-medium text-gray-900">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="my-3 bg-gray-200 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                  </div>

                  <div>
                    <label className="my-4 block mb-2 text-sm font-medium text-gray-900">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="my-3 bg-gray-200 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                  </div>

                  <center>
                    <button
                      type="submit"
                      className="text-white bg-cyan-700 hover:bg-gray-800 text-md rounded py-1 px-10 my-5"
                    >
                      Log In
                    </button>
                  </center>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
