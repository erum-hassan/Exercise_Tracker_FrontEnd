// 'use client';



// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";


// export const config = {
//   matcher: ["/exercise"],
// };

// export function middleware(req) {
//   // console.log('Authorization', req.headers.get('Authorization'))
//   const token = req.headers.get('Authorization')?.value
//   let url = req.nextUrl.clone();
//   if(token === undefined){
//     url.pathname = 'http://localhost:3000';
//     return NextResponse.redirect(new URL('/login', url))
//   }
//   // return NextResponse.redirect(new URL(url))
//   // NextResponse.redirect(new URL(url));
//   // return NextResponse.next();
//   return NextResponse.redirect(new URL('/login', req.url));
// }
// // return NextResponse.redirect(new URL('/login', req.url));