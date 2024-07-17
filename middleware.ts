// import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

// export default withAuth(async function middleware(req: any) {
//   console.log("look at me", req.kindeAuth);
// });

// export const config = {
//   matcher: ["/user/profile"],
// };

import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
export default withAuth(
  async function middleware(req: any) {
    console.log("look at me", req.kindeAuth);
  },
  {
    isReturnToCurrentPage: true,
  }
);

export const config = {
  matcher: ["/user/profile"],
};
