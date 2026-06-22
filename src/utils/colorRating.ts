export default function colorRating(rating: number) {
    if(rating <= 4.2) {
        return '#C82020'
    } else if (4.2 <= rating && rating <= 6.3) {
        return '#777777'
    } else if (6.3 <= rating  && rating <= 7.5) {
        return '#308E21' 
    } else {
        return '#A59400'
    }
}