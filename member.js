function skillsMembers() {
  return {
    name: "members",
    description: "Members",
    permissions: ["MANAGE_ROLES"],
    options: [
      {
        type: 1,
        name: "add",
        description: "Add a member to the team",
        options: [
          {
            type: 6,
            name: "user",
            description: "The user to add",
            required: true,
          },
          {
            type: 3,
            name: "role",
            description: "The role to assign to the user",
            required: true,
          },
        ],
      },
      {
        type: 1,
        name: "remove",
        description: "Remove a member from the team",
        options: [
          {
            type: 6,
            name: "user",
            description: "The user to remove",
            required: true,
          },
          {