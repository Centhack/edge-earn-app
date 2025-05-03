
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserRound } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const ProfileAvatar = () => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(
    localStorage.getItem("earnedge_avatar")
  );
  
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setAvatarUrl(result);
        localStorage.setItem("earnedge_avatar", result);
        toast.success("Profile photo updated successfully!");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Avatar className="h-10 w-10 border-2 border-brand-green">
            <AvatarImage src={avatarUrl || ""} />
            <AvatarFallback className="bg-brand-navy text-white">
              <UserRound className="h-6 w-6" />
            </AvatarFallback>
          </Avatar>
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-green text-[8px] text-white">
            +
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Update Profile Photo</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="h-24 w-24 border-2 border-brand-green">
            <AvatarImage src={avatarUrl || ""} />
            <AvatarFallback className="bg-brand-navy text-white">
              <UserRound className="h-12 w-12" />
            </AvatarFallback>
          </Avatar>
          
          <div className="flex w-full flex-col space-y-2">
            <label htmlFor="avatar-upload" className="w-full">
              <Button className="w-full cursor-pointer bg-brand-green text-white hover:bg-brand-lightGreen" asChild>
                <span>Choose Photo</span>
              </Button>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
            {avatarUrl && (
              <Button
                variant="outline"
                onClick={() => {
                  setAvatarUrl(null);
                  localStorage.removeItem("earnedge_avatar");
                  toast.success("Profile photo removed");
                }}
              >
                Remove Photo
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileAvatar;
