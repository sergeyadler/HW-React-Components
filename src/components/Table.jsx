
import './Table.css';
function Table(){
        return (
            <div id="table-div">
            <table>
                <thead>
                <tr>
                    <th>Book</th>
                    <th>Author</th>
                    <th>Сitation</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Harry Potter and the Philosopher’s Stone</td>
                    <td>J.K. Rowling</td>
                    <td>“It does not do to dwell on dreams and forget to live.”</td>
                </tr>
                <tr>
                    <td>The Lord of the Rings: The Fellowship of the Ring</td>
                    <td>J.R.R. Tolkien</td>
                    <td>Mexico</td>
                </tr>

                <tr>
                    <td>A Game of Thrones</td>
                    <td>George R.R. Martin</td>
                    <td>“When you play the game of thrones, you win or you die.”</td>
                </tr>
                <tr>
                    <td>The Hobbit</td>
                    <td>J.R.R. Tolkien</td>
                    <td>“There is nothing like looking, if you want to find something.”</td>
                </tr>
                </tbody>

            </table>
            </div>
        )

    }
export default Table;