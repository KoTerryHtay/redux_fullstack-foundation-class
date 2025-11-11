import { apiSlice } from "./apiSlice";
import type { Post } from "../postsSlice";

export const apiSliceWithPosts = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
      // providesTags: ["Post"],
      providesTags: (result = []) => [
        "Post",
        ...result.map(({ id }) => ({ type: "Post", id } as const)),
      ],
    }),
    getPost: builder.query<Post, string>({
      query: (id) => `/posts/${id}`, // default cache time : 60 seconds
      providesTags: (result, error, arg) => [{ type: "Post", id: arg }],
    }),
    addNewPost: builder.mutation<Post, Omit<Post, "id">>({
      query: (newPost) => ({
        url: "/posts",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["Post"],
    }),
    editPost: builder.mutation<Post, Partial<Post>>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: "PATCH",
        body: post,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg.id }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddNewPostMutation,
  useEditPostMutation,
} = apiSliceWithPosts;
