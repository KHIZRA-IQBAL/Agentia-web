import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center gap-4 mb-[100px]">
      <h1 className="text-3xl font-bold hover:text-gray-400 pr-[40px]">AI Agentia.</h1>
      <div className="space-x-4 flex gap-12 ">
        <Link href="/"><p className="hover:text-pink-500">Home</p></Link>
        <Link href="/about"><p className="hover:text-pink-500">About</p></Link>
        <Link href="/services"><p className="hover:text-pink-500">Services</p></Link>
        <Link href="/agents"><p className="hover:text-pink-500">Agents</p></Link>
        <Link href="/contact"><p className="hover:text-pink-500">Contact</p></Link>
      </div>
    </nav>
  );
}