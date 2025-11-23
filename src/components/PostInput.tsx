import { memo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

import { useAddNewPostMutation } from "@/store/rtk/postsSlice";

function PostInput() {
  const [newPost, setNewPost] = useState("");

  const [addNewPost, { isLoading: isAddingNewPostLoading }] =
    useAddNewPostMutation();

  const handleAddPost = async () => {
    if (!newPost.trim()) return;

    try {
      // await dispatch(addPost({ title: newPost, userId: "user2" })).unwrap();
      await addNewPost({ title: newPost, userId: "user2" }).unwrap();
      setNewPost("");
    } catch (error) {
      alert("Failed to add post: " + error);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div className="flex gap-2 mb-6 w-full max-w-md">
      <Input
        placeholder="Write a new post..."
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
      />
      <Button onClick={handleAddPost} disabled={isAddingNewPostLoading}>
        Add{" "}
        {isAddingNewPostLoading && <Loader2 className="animate-spin h-2 w-2" />}
      </Button>
    </div>
  );
}

export default memo(PostInput);
