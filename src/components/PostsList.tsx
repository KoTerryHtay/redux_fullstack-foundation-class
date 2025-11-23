import PostItem from "./PostItem";
import {
  // useGetPostsQuery
  // selectAllPosts,
  // selectPostsByUserId,
  selectPostsIds,
} from "@/store/rtk/postsSlice";
import PostInput from "./PostInput";
import { useAppSelector } from "@/hooks/useRedux";

export default function PostsList() {
  // const [loading, setLoading] = useState(false);

  // const dispatch = useAppDispatch();

  // const { status, error } = useAppSelector((state) => state.posts);
  // const posts = useAppSelector(selectAllPosts);
  // const userPosts = posts.filter((post) => post.userId === "user2");
  // const posts = useAppSelector((state) => selectPostsByUser(state, "user2"));

  // const posts = useAppSelector((state) => selectPostsByUserId(state, "user2"));
  const postsIds = useAppSelector((state) => selectPostsIds(state, "user2"));

  // if you call get api on home,you don't need this
  // const {
  //   data: posts = [],
  //   isLoading,
  //   // isFetching,
  //   isSuccess,
  //   isError,
  //   error,
  //   // refetch,
  // } = useGetPostsQuery();

  // if you use rtk, no need to use this
  // const postIds = useAppSelector(selectPostIds);
  // const status = useAppSelector(selectPostsStatus);
  // const error = useAppSelector(selectPostsError);
  // console.log("postIds >>>", postIds);

  // if you use rtk, no need to use traditional redux
  // useEffect(() => {
  //   if (status === "idle") {
  //     dispatch(fetchPosts());
  //   }
  // }, [dispatch, status]);

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Post Manager</h1>

      <PostInput />

      {/* {isLoading && (
        <div className="flex items-center gap-2 text-blue-600 mb-4">
          <Loader2 className="animate-spin h-5 w-5" />
          <span>Loading posts ...</span>
        </div>
      )} */}

      {/* {isError && (
        <div className="text-red-500">Error : {error.toString()}</div>
      )} */}

      <div className="grid gap-4 w-full max-w-md">
        {/* {isSuccess &&
          posts.map((post) => <PostItem key={post.id} post={post} />)} */}

        {/* {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))} */}

        {postsIds.map((postId) => (
          <PostItem key={postId} postId={postId} />
        ))}
      </div>
    </>
  );
}
