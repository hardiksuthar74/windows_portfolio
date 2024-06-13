import { Outlet } from "react-router-dom";
import Windows from "@/assets/windows.svg";
import File from "@/assets/fileExplorer.png";
import Chrome from "@/assets/chrome.svg";
import Github from "@/assets/github.svg";
import Linkedin from "@/assets/linkedin.svg";
import Store from "@/assets/store.svg";
import VLC from "@/assets/vlc.svg";
import Vscode from "@/assets/vscode.svg";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ReactNode, useState } from "react";
import { Minus, Square, X } from "lucide-react";
import { cn } from "@/lib/utils";
import FileManager from "@/assets/file.svg";

const Desktop = () => {
  const [openVsCode, setOpenVsCode] = useState(false);

  const navigateToLink = (link: string) => {
    return window.open(link);
  };

  return (
    <div id="screen" className="bg-black min-h-screen text-white">
      <div className="pt-4 px-1">
        <div className="flex justify-center items-start flex-col gap-y-2">
          <Button className="bg-transparent flex flex-col justify-center items-center hover:bg-[#323232] p-2 w-[80px] h-full">
            <img className="w-8" src={File} />
            <p className="text-[12px]">File Explorer</p>
          </Button>
          <Button className="bg-transparent flex flex-col justify-center items-center hover:bg-[#323232] p-2 w-[80px] h-full">
            <img className="w-8" src={Chrome} />
            <p className="text-[12px]">Chrome</p>
          </Button>
          <Button
            onClick={() => navigateToLink("https://github.com/hardiksuthar74/")}
            className="bg-transparent flex flex-col justify-center items-center hover:bg-[#323232] p-2 w-[80px] h-full"
          >
            <img className="w-8" src={Github} />
            <p className="text-[12px]">Github</p>
          </Button>
          <Button
            onClick={() =>
              navigateToLink(
                "https://www.linkedin.com/in/hardik-suthar-59a0a81ba/"
              )
            }
            className="bg-transparent flex flex-col justify-center items-center hover:bg-[#323232] p-2 w-[80px] h-full"
          >
            <img className="w-8" src={Linkedin} />
            <p className="text-[12px]">Linkedin</p>
          </Button>
          <Button className="bg-transparent flex flex-col justify-center items-center hover:bg-[#323232] p-2 w-[80px] h-full">
            <img className="w-8" src={Store} />
            <p className="text-[12px]">Store</p>
          </Button>
          <Button
            onClick={() => setOpenVsCode(true)}
            className="bg-transparent flex flex-col justify-center items-center hover:bg-[#323232] p-2 w-[80px] h-full"
          >
            <img className="w-8" src={Vscode} />
            <p className="text-[12px]">
              Visual studio <br /> code
            </p>
          </Button>
          <Button className="bg-transparent flex flex-col justify-center items-center hover:bg-[#323232] p-2 w-[80px] h-full">
            <img className="w-8" src={VLC} />
            <p className="text-[12px]">VLC</p>
          </Button>
          <Button
            onClick={() =>
              navigateToLink("https://hardiksuthar74-portfolio.netlify.app")
            }
            className="bg-transparent flex flex-col justify-center items-center hover:bg-[#323232] p-2 w-[80px] h-full"
          >
            <img className="w-8" src={FileManager} />
            <p className="text-[12px]">Portfolio</p>
          </Button>
        </div>
      </div>
      <Outlet />
      <DesktopDialog onOpen={() => setOpenVsCode(false)} open={openVsCode}>
        <iframe
          src={"https://github1s.com/hardiksuthar74/animit_django"}
          title={"Animit"}
          width={"100%"}
          height={"100%"}
        />
      </DesktopDialog>
      <Tabbar />
    </div>
  );
};

const Tabbar = () => {
  return (
    <div className="bg-[#232323]/80 text-white h-12 fixed bottom-0 w-full border-t-[1px] border-white/20">
      <div className="w-full flex justify-start items-center px-2 h-full gap-x-1">
        <Button className="bg-transparent flex justify-center items-center hover:bg-[#323232] p-2">
          <img className="w-8" src={Windows} />
        </Button>
        <Button className="bg-transparent flex justify-center items-center hover:bg-[#323232] p-2">
          <img className="w-8" src={File} />
        </Button>
        <Button className="bg-transparent flex justify-center items-center hover:bg-[#323232] p-2">
          <img className="w-8" src={Chrome} />
        </Button>
        <Button className="bg-transparent flex justify-center items-center hover:bg-[#323232] p-2">
          <img className="w-8" src={Store} />
        </Button>
        <Button className="bg-transparent flex justify-center items-center hover:bg-[#323232] p-2">
          <img className="w-8" src={Github} />
        </Button>
        <Button className="bg-transparent flex justify-center items-center hover:bg-[#323232] p-2">
          <img className="w-8" src={Linkedin} />
        </Button>
      </div>
    </div>
  );
};

export const DesktopDialog = ({
  children,
  open,
  onOpen,
}: {
  children: ReactNode;
  open: boolean;
  onOpen: () => void;
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <Dialog open={open}>
      <DialogContent
        className={cn(
          "w-[1300px] h-[650px] p-0 border-0 pt-9 max-w-full bg-[#212121] text-white",
          isFullScreen ? "w-full h-full" : "w-[1300px] h-[650px]"
        )}
      >
        <div className="absolute right-2 top-4">
          <div className="flex w-full gap-x-6 justify-center items-center">
            <Button className="bg-transparent h-0 p-0">
              <Minus className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
            <Button
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="bg-transparent h-0 p-0"
            >
              <Square className="h-3 w-3" />
              <span className="sr-only">Close</span>
            </Button>
            <Button onClick={onOpen} className="bg-transparent h-0 p-0">
              <X className="h-4 w-4 " />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default Desktop;
