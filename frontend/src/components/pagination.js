import React from 'react';
import { searchTerm } from '../shared/helper';

class Pagination extends React.Component {
    setPage = (increment) => {
        let newPage = this.props.search.page + increment;
        searchTerm(this.props, newPage);
        scroll(0, 0);
    };
    render() {
        let page = this.props.search.page;
        let pages = this.props.pages;
        return (
            <li className="pagination">
                <Button
                    text="Prev"
                    disabled={page == 1}
                    onClick={() => this.setPage(-1)}
                />
                <p>
                    {page} of {pages}
                </p>
                <Button
                    text="Next"
                    disabled={page + 1 > pages}
                    onClick={() => this.setPage(1)}
                />
            </li>
        );
    }
}

export default Pagination;

const Button = (props) => {
    return props.disabled ? (
        <button disabled>{props.text}</button>
    ) : (
        <button onClick={props.onClick}>{props.text}</button>
    );
};
