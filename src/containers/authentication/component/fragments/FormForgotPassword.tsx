import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input/index";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function FormForgotPassword({ title }: { title: string }) {
  return (
    <div>
      <div className="w-full lg:max-w-xl p-6  sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
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
          <Button
            type="submit"
            className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send to your email
          </Button>
        </form>
        <Link
          href="/"
          className="w-full justify-center text-blue-600 dark:text-blue-500 font-medium text-xs inline-flex underline"
        >
          Back to login
        </Link>
      </div>
    </div>
  );
}
