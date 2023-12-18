/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fLai1irU9ec
 */
import Header from "@/components/component/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// 引入abcweb.js
export default function Component() {
  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-3/4 p-4">
          <div className="flex flex-col mb-4">
            <Link
              className="px-2 py-1 text-sm font-medium rounded border border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600"
              href="/"
            >
              Home Page
            </Link>
            <label className="mb-1" htmlFor="scoreFile">
              score file:
            </label>
            <input
              className="border p-2"
              id="scoreFile"
              type="text"
              // value="演奏文件 2022.musicxml"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-1" htmlFor="mediaFile">
              media file:
            </label>
            <input
              className="border p-2"
              id="mediaFile"
              type="text"
              // value="试听文件 2022.ogg"
            />
          </div>
          <div className="flex items-center mb-4">
            <input className="mr-2" id="useDropbox" type="checkbox" />
            <label className="mr-4" htmlFor="useDropbox">
              use dropbox
            </label>
            <input className="mr-2" id="useYoutube" type="checkbox" />
            <label htmlFor="useYoutube">use youtube</label>
          </div>
          <div className="flex items-center justify-between border-b pb-2 mb-4">
            <Button className="flex items-center space-x-2">
              <PlayIcon className="w-6 h-6" />
              <span>0:00 / 2:13</span>
            </Button>
            <MoreVerticalIcon className="w-6 h-6" />
          </div>
          <div className="overflow-auto">
            <img
              alt="Music Score"
              className="w-full"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "800/400",
                objectFit: "cover",
              }}
              width="800"
            />
          </div>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <div className="sticky top-0">
            <div className="text-lg font-semibold mb-4">Menu</div>
            <div className="flex flex-col space-y-3">
              <label className="flex items-center">
                <input className="mr-2" type="checkbox" />
                speed ctrl
              </label>
              <label className="flex items-center">
                <input className="mr-2" type="checkbox" />
                note cursor
              </label>
              <label className="flex items-center">
                <input className="mr-2" type="checkbox" />
                help
              </label>
              {/* <label className="flex items-center">
                <input className="mr-2" type="checkbox" />
                full screen
              </label>
              <label className="flex items-center">
                <input className="mr-2" type="checkbox" />
                enable sync
              </label> */}
              {/* <label className="flex items-center">
                <input className="mr-2" type="checkbox" />
                loop mode
              </label>
              <label className="flex items-center">
                <input checked className="mr-2" readOnly type="checkbox" />
                file buttons
              </label>
              <label className="flex items-center">
                <input className="mr-2" type="checkbox" />
                no cursor
              </label> */}
              {/* <label className="flex items-center">
                <input className="mr-2" type="checkbox" />
                center player
              </label>
              <label className="flex items-center">
                <input className="mr-2" type="checkbox" />
                center score
              </label>
              <label className="flex items-center">
                <input className="mr-2" type="checkbox" />
                hide player
              </label>
              <label className="flex items-center">
                <input className="mr-2" type="checkbox" />
                autoscale
              </label>
              <label className="flex items-center">
                <input className="mr-2" type="checkbox" />
                skip repeats
              </label>
              <label className="flex items-center">
                <input className="mr-2" type="checkbox" />
                count in
              </label>
              <label className="flex items-center">
                <input className="mr-2" type="checkbox" />
                metronome
              </label>
              <label className="flex items-center">
                <input className="mr-2" type="checkbox" />
                dotted line
              </label> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreVerticalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}

function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}
