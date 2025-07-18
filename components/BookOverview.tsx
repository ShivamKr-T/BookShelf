import React from "react";
import Image from "next/image";
import BookCover from "@/components/BookCover";
import { Button } from "./ui/button";
// import BorrowBook from "@/components/BorrowBook";
// import { db } from "@/database/drizzle";
// import { users } from "@/database/schema";
// import { eq } from "drizzle-orm";

interface Props extends Book {
  userId: string;
}
const BookOverview = async ({
  title,
  author,
  genre,
  rating,
  total_copies,
  available_copies,
  description,
  color,
  cover,
  id,
  userId,
}: Props) => {
//   const [user] = await db
//     .select()
//     .from(users)
//     .where(eq(users.id, userId))
//     .limit(1);

//   const borrowingEligibility = {
//     isEligible: availableCopies > 0 && user?.status === "APPROVED",
//     message:
//       availableCopies <= 0
//         ? "Book is not available"
//         : "You are not eligible to borrow this book",
//   };

  return (
    <section className="book-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>

        <div className="book-info">
          <p>
            By <span className="font-semibold text-light-200">{author}</span>
          </p>

          <p>
            Category{" "}
            <span className="font-semibold text-light-200">{genre}</span>
          </p>

          <div className="flex flex-row gap-1">
            <Image src="/icons/star.svg" alt="star" width={22} height={22} />
            <p>{rating}</p>
          </div>
        </div>

        <div className="book-copies">
          <p>
            Total Books <span>{total_copies}</span>
          </p>

          <p>
            Available Books <span>{available_copies}</span>
          </p>
        </div>

        <p className="book-description">{description}</p>

        {/* {user && (
          <BorrowBook
            bookId={id}
            userId={userId}
            borrowingEligibility={borrowingEligibility}
          />
        )} */}
        <Button className="book-overview_btn">
            <Image src="/icons/book.svg" alt="book" width={20} height={20}/>
            <p className="font-bebas-neue text-xl">Borrow</p>
        </Button>
      </div>

      <div className="relative flex flex-1 justify-center">
        <div className="relative">
          <BookCover
            variant="wide"
            className="z-10"
            coverColor={color}
            coverImage={cover}
          />

          <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <BookCover
              variant="wide"
              coverColor={color}
              coverImage={cover}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookOverview;
