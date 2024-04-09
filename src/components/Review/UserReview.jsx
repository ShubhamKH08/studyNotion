// user reviews


import ReactStars from "react-rating-stars-component";
import { FaStar } from "react-icons/fa";
import "../../Style/Review/UserReview.css";

const ReviewSliderComponent = () => {
  const reviews = [
    {
      id: 1,
      user: { firstName: "Omkar", lastName: "Kasale" },
      course: { courseName: "React Basics" },
      review: "This course is fantastic! It provided a comprehensive understanding of React concepts, and I genuinely learned a lot. The explanations were clear, and the examples were practical. Highly recommend!!.",
      rating: 4.5
    },
    {
      id: 2,
      user: { firstName: "Alice", lastName: "Smith" },
      course: { courseName: "JavaScript Fundamentals" },
      review: "The course provided excellent content and explanations. I found the material to be incredibly informative. The instructor did a fantastic job explaining complex concepts in manner. Overall, it was a great learning experience!",
      rating: 5
    },
    {
      id: 3,
      user: { firstName: "Jane", lastName: "Doe" },
      course: { courseName: "HTML Basics" },
      review: "I found this course very helpful.",
      rating: 4
    },
    {
      id: 4,
      user: { firstName: "Bob", lastName: "Johnson" },
      course: { courseName: "CSS Fundamentals" },
      review: "Great course for beginners!",
      rating: 4.5
    }
  ];

  const truncateWords = 250;

  return (    
        <div className="review-card-container">
          {reviews.map((review, index) => (
            <div key={review.id} className={`review-card`}>
              <div className="review-content">
                <div className="review-header">
                  <img
                    src={`https://api.dicebear.com/5.x/initials/svg?seed=${review.user.firstName} ${review.user.lastName}`}
                    alt={`${review.user.firstName} ${review.user.lastName}`}
                    className="review-avatar"
                  />
                  <div className="review-info">
                    <h1 className="review-name">{`${review.user.firstName} ${review.user.lastName}`}</h1>
                    <h2 className="review-course">{review.course.courseName}</h2>
                  </div>
                </div>
                <p className="review-text">
                  {review.review.split(" ").length > truncateWords
                    ? `${review.review.split(" ").slice(0, truncateWords).join(" ")} ...`
                    : review.review}
                </p>
                <div className="review-rating">
                  <h3 className="rating-value">{review.rating.toFixed(1)}</h3>
                  <ReactStars
                    count={5}
                    value={review.rating}
                    size={20}
                    edit={false}
                    activeColor="#ffd700"
                    emptyIcon={<FaStar />}
                    fullIcon={<FaStar />}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
    
  );
};

export default ReviewSliderComponent;

