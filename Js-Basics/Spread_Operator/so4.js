const createStateManager = () => {
  let state = {
    user: {
      id: 1001,
      name: "Subham Kundu",
      email: "subham001@hotmail.com",
      profile: {
        active: true,
        bio: "software Engineer",
      },
    },
    posts: [
      {
        id: 101,
        title: "First day at work",
        likes: 308,
      },
      {
        id: 289,
        title: "Became team lead!",
        likes: 1900,
      },
    ],
    settings: {
      theme: "dark",
      notification: false,
    },
  };
  return {
    getState: function () {
      return state;
    },
    updateUserName: function (newName) {
      state = {
        ...state,
        user: {
          ...state.user,
          name: newName,
        },
      };
      console.log("Updated the user name to:", newName);
    },
    updateUserProfile: function (updates) {
      state = {
        ...state,
        user: {
          ...state.user,
          profile: {
            ...state.user.profile,
            ...updates,
          },
        },
      };
    },
    addPost: function (newPost) {
      state = {
        ...state,
        posts: [...state.posts, newPost],
      };
    },
    updatePost: function (postId, updates) {
      state = {
        ...state,
        posts: state.posts.map((post) =>
          post.id === postId ? { ...post, ...updates } : post,
        ),
      };
    },
    removePost: function (postId) {
      state = {
        ...state,
        posts: state.posts.filter((post) => post.id !== postId),
      };
    },
    updateSettings: function (newSettings) {
      state = {
        ...state,
        settings: {
          ...state.settings,
          ...newSettings,
        },
      };
    },
  };
};

let manager = createStateManager();
let initial = manager.getState();
console.log("Inital user name is ", initial.user.name);
console.log("Inital post count is ", initial.posts.length);

manager.updateUserName("Viraj");
let state1 = manager.getState();
console.log("after username update:", state1.user.name);

manager.updateUserProfile({ bio: "DevOps", active: false });
let state2 = manager.getState();
console.log("Updated the bio of the user:", state2.user.profile.bio);

manager.addPost({
  id: 47,
  title: "Replaced the previous manager",
  likes: 4062,
});
let state3 = manager.getState();
console.log("Posts after added :", state3.posts.length);

manager.updatePost(1, { likes: 200 });
let state4 = manager.getState();
console.log("Likes got updated:", state4.posts[0].likes);

manager.removePost(2);
let state5 = manager.getState();
console.log("Posts removed :", state5.posts.length);

manager.updateSettings({ theme: "grey", notification: true });
let state6 = manager.getState();
console.log("Updated theme:", state6.settings.theme);
console.log("Updated notification:", state6.settings.notification);
