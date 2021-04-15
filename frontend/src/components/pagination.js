import React from 'react';
import { searchTerm } from '../shared/helper';

class Pagination extends React.Component {
    state = {
        page: this.props.page,
    };
    setPage = (increment) => {
        this.setState(
            {
                page: this.state.page + increment,
            },
            () => {
                this.props.updatePage(this.state.page);
                searchTerm(this.props, this.state.page);
                scroll(0, 0);
            }
        );
    };
    componentDidUpdate(prevProps) {
        if (prevProps.page != this.props.page) {
            this.setState({
                page: this.props.page,
            });
        }
    }
    render() {
        let page = this.state.page;
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
