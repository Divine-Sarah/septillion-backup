// app/signup/page.tsx
import AuthLayout from "@/components/auth/authLayout";
import Link from "next/link";

export default function SignupPage() {
  return (
    <AuthLayout
      title="Get started with Septillion"
      subtitle="Septillion makes it easy to explore opportunities, grow your assets, and discover how investing can truly fit your lifestyle."
    >
      <div className="space-y-8">
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-white/10 border border-white/20 rounded-2xl px-12 py-5 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 transition-all"
        />
        <button className="w-full bg-[#4B1FD1] hover:to-blue-500 text-white font-semibold text-lg rounded-full py-5 transition-all shadow-lg">
          Get Started
        </button>
        <p className="text-center text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-400 hover:text-purple-300 font-medium">
            Log in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}