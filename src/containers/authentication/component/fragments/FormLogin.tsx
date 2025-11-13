import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input/index";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function FormLogin({title}: {title: string}) {
  return (
    <div>
      <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        <form className="mt-8 space-y-6" action="#">
          <div>
            <Label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <Label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <Input
                id="remember"
                aria-describedby="remember"
                name="remember"
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
            <div className="ms-3 text-sm">
              <Label
                htmlFor="remember"
                className="font-medium text-gray-500 dark:text-gray-400"
              >
                Remember this device
              </Label>
            </div>
            <Link
              href="/forgot-password"
              className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </Link>
          </div>
          <Button
            type="submit"
            className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </Button>
        </form>
      </div>
    </div>
  );
}
