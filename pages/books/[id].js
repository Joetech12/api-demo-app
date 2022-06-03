import { useRouter } from 'next/router'
import { fetchBookID } from '../../data/utils';
import { books } from "../../data/utils";



const BookDetails = () => {

    const { query } = useRouter();
    const bookId = query.id;
    const book = fetchBookID(bookId);

    if (!book) { 
        return <p>Loading...</p>
    }


  return (
    <div style={{
            width: 300,
            background: 'whitesmoke',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

        }}>
            <h1>{book.name}</h1>
            <h3>{book.description}</h3>
            
        </div>
  )
}

export default BookDetails